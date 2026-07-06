실시간 트래킹 및 UDP 통신은 외부 C++ 백엔드 서버에서 계산한 수술 도구, 마커, AR Glass의 위치/회전 정보를 Unity 클라이언트에 빠르게 반영하기 위해 구현한 영역입니다. 신뢰성이 필요한 초기 데이터, 모델 데이터, 명령 처리는 TCP로 유지하고, 매 프레임에 가깝게 갱신되는 pose 데이터는 UDP로 분리해 네트워크 지연이 AR 화면 반응성을 막지 않도록 설계했습니다.

![실시간 트래킹 및 UDP 통신 데이터 플로우](/images_videos/sagarvision-realtime-tracking-udp-flow.svg)

## 통신 구조 설계

프로젝트는 통신 목적에 따라 채널을 분리했습니다. TCP는 서버 탐색, 초기 설정, 수술 단계 명령, STL/implant/model payload처럼 순서와 무결성이 중요한 데이터에 사용했습니다. 반면 UDP는 tracker marker와 probe transform처럼 최신 값이 더 중요한 데이터를 담당하게 했습니다. 이 구조 덕분에 대용량 모델 수신이나 명령 응답 흐름이 실시간 pose 갱신을 직접 막지 않도록 분리할 수 있었습니다.

초기 연결 과정에서는 UDP도 TCP 초기화 흐름과 연결됩니다. Unity 클라이언트는 서버를 broadcast로 탐색한 뒤 TCP main channel, image channel, log channel을 연결하고, UDP manager를 생성합니다. 이후 init packet에 UDP packet version, AR mode 여부, 클라이언트가 실제로 할당받은 UDP port를 포함해 서버로 전달합니다. 서버가 초기 데이터를 내려주면 클라이언트는 서버가 전달한 TCP/UDP protocol version을 반영하고 UDP listener thread를 시작합니다.

## UDP 수신 파이프라인

UDP 수신은 Unity main thread를 점유하지 않도록 별도 background listener thread에서 처리했습니다. listener는 socket에서 byte 배열을 수신하고, `ProcessReceivedData`에서 header, data type, checksum을 먼저 확인합니다. 패킷 header는 20 byte 기준으로 파싱하고, data type 값은 `UDP_Mode` enum으로 변환해 Installation, Landmark, ImagelessLandmark, ARSystem, ARSystem_Gap, Resection 흐름 중 하나로 분기합니다.

각 payload parser는 모드별 최소 payload 크기를 먼저 검증합니다. 예를 들어 Landmark 계열은 femur/tibia probe position을 담는 48 byte 이상을 요구하고, ARSystem은 6개 marker의 active state, position, quaternion rotation을 담는 구조로 처리합니다. Gap 모드는 FE/VV angle, medial/lateral gap, gap line endpoints, marker pose를 함께 파싱하고, Resection 모드는 target/current plane과 normal 배열을 파싱합니다.

## Unity 런타임 반영

UDP listener thread에서 바로 Unity object를 수정하지 않고, 파싱이 끝난 결과는 `UnityMainThreadDispatcher`를 통해 main thread callback으로 넘겼습니다. Unity의 Transform, GameObject 활성화, UI 갱신은 main thread에서만 안전하게 처리해야 하기 때문에, 네트워크 수신과 렌더링 반영 사이에 dispatcher 경계를 둔 것이 핵심입니다.

Landmark 모드에서는 femur/tibia 중 현재 단계가 요구하는 index를 선택하고, 서버 좌표계와 Unity 좌표계를 맞추기 위해 x축을 반전한 뒤 probe callback으로 전달합니다. `ProbeController`는 전달받은 위치를 현재 landmark mode에 맞게 처리합니다. Imagebased/PSI 흐름에서는 서버에서 받은 probe 위치를 변형 모델 또는 실제 AR 좌표계 기준으로 투영하고, 필요하면 mesh의 가장 가까운 표면점으로 보정해 probe visual을 이동시킵니다. AR mode에서는 world position 기준으로, PC 개발 모드에서는 model local position 기준으로 반영되도록 분기했습니다.

ARSystem 모드에서는 marker별 active state, position, rotation을 `Matrix4x4.TRS`로 변환해 femur, tibia, probe, glass marker matrix에 반영합니다. rotation 값이 모두 0인 invalid quaternion은 버려서 잘못된 pose가 장면을 흔들지 않도록 방어했습니다. Glass marker가 감지되지 않는 경우에는 HUD 상태를 갱신해 사용자가 AR tracking 상태를 인지할 수 있게 연결했습니다.

## 워크플로우별 UDP mode 전환

UDP는 항상 같은 의미로 동작하지 않습니다. 현재 수술 탭과 landmark 단계에 따라 같은 UDP stream도 서로 다른 의미로 해석되어야 하므로, workflow controller에서 명시적으로 UDP mode를 전환했습니다. 설치 단계는 `Installation`, 일반 landmark 검증은 `Landmark`, imageless 검증은 `ImagelessLandmark`, AR 기반 표시 단계는 `ARSystem`, gap 확인은 `ARSystem_Gap`, 절삭면 확인은 `Resection`으로 나누었습니다.

Imagebased와 PSI 흐름에서는 femur 단계와 tibia 단계 진입 시 `SetUDPProbeAct`로 현재 probe index를 바꾸고, 해당 단계에서만 probe object를 활성화했습니다. Imageless 흐름에서는 표면 수집/검증 단계에 들어갈 때 `ImagelessLandmark` mode를 사용하고, 단계에서 빠져나오면 `None`으로 돌려 불필요한 갱신을 멈췄습니다. 이 방식으로 네트워크 수신은 계속 유지하되, 현재 UI와 수술 단계가 필요로 하는 데이터만 화면에 반영했습니다.

## 안정성 처리

실시간 통신은 끊김과 잘못된 packet을 전제로 다뤘습니다. UDP manager는 checksum이 맞지 않는 packet을 폐기하고, payload 길이가 부족하면 mode 이름과 함께 로그를 남깁니다. socket port 충돌이 발생하면 고정 client port 대신 OS가 할당한 임의 port로 fallback하고, 실제 할당 port를 TCP init packet에 실어 서버와 맞춥니다.

수신 thread에서 예외가 발생하면 self-join으로 막히지 않도록 thread 상태와 cancellation token을 정리하고, stop callback은 main thread dispatcher를 통해 호출했습니다. `NetworkManager`는 UDP mode가 활성화된 상태에서 receive exception이 발생하고 재시작 가능한 상태가 되면 UDP listener를 다시 시작하도록 감시합니다. 또한 앱 종료나 비활성화 시 UDP, image TCP, main TCP, log TCP를 모두 닫아 socket resource가 남지 않도록 했습니다.

## 구현 성과

이 구현을 통해 Unity 클라이언트는 서버에서 계산된 실시간 tracker pose를 AR/PC 화면에 안정적으로 반영할 수 있게 되었습니다. TCP 기반 초기화와 UDP 기반 실시간 갱신을 분리하면서, 수술 단계별 UI, probe visual, AR marker matrix, gap/절삭면 시각화가 같은 네트워크 계층 위에서 동작하도록 통합했습니다. 특히 listener thread, checksum/payload 검증, main thread dispatch, workflow별 UDP mode 전환을 함께 구성해 의료 AR 환경에서 필요한 반응성과 안정성을 동시에 확보했습니다.
