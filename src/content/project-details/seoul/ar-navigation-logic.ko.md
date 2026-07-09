![서울시 AR 내비게이션 구동 장면](images_videos/seoul/ar-navigation-runtime.png)

서울시 디지털 재단 실증 사업 AR 내비게이션은 Flutter 앱 안에 Unity AR 뷰를 임베드하고, GPS와 SKT VLAM VPS 기반 위치 보정을 활용해 청계천 일대에서 보행 경로를 AR 화살표와 하단 지도 UI로 안내하는 프로토타입입니다. Unity 클라이언트에서는 Flutter와의 메시지 경계, VPS Localizing 이후 경로 요청, API 응답 기반 경로 노드 생성, 사용자 위치와 다음 노드 사이의 거리 판정 로직을 담당했습니다.

## 초기화와 경로 생성

![AR 내비게이션 API 연동 로직](images_videos/seoul/ar-navigation-logic-api.png)

초기 진입 시 Flutter는 Unity instance를 생성하고 ARNavigation 콘텐츠 타입, 경로 옵션, 목적지 정보를 Unity로 전달합니다. 옵션은 최단거리와 안전한 거리처럼 서버 경로 요청 조건으로 사용되고, 콘텐츠 타입은 Navigation 또는 Tour처럼 Unity 안에서 표시할 화면과 그래픽 그룹을 선택하는 기준이 됩니다.

Unity는 VPS Localizing이 성공한 뒤 현재 위치와 목적지 좌표, 경로 옵션, geometry type을 포함해 REST API에 경로를 요청합니다. 응답으로 받은 GeoJSON 데이터에는 경로를 구성하는 node의 위도, 경도, 방향, 안내 문구가 포함되어 있고, Unity는 이 데이터를 순서 있는 node 리스트로 파싱합니다. 이후 좌표계를 Unity 월드 좌표에 맞게 변환하고, 각 node를 기준으로 AR 방향 화살표와 경로 라인을 동적으로 생성했습니다.

## 안내 루프와 종료 처리

![AR 내비게이션 안내 루프 로직](images_videos/seoul/ar-navigation-logic-guidance.png)

경로가 생성된 뒤에는 VPS Localizing 상태와 플레이어 위치를 기준으로 안내 루프가 동작합니다. VPS가 안정적으로 성공한 상태에서는 불필요하게 위치를 다시 덮어쓰지 않고, 현재 플레이어 위치와 다음 node position의 거리를 계속 비교합니다. 다음 node와의 거리가 기준값보다 가까워지면 해당 node를 통과한 것으로 판단하고, Flutter에 방향 정보와 node index를 전달해 하단 지도와 안내 UI가 같은 진행 상태를 바라보도록 맞췄습니다.

사용자가 마지막 node에 도달하면 Unity는 마지막 안내 정보를 전달하고 Dispose 메시지를 처리해 ARNavigation scene을 정리합니다. Flutter에서 화면을 빠져나가거나 다른 씬으로 이동하는 경우에도 Dispose 메시지를 통해 Unity scene을 초기화하고 instance를 비활성화하도록 구성했습니다. 이 흐름 덕분에 네이티브 앱의 화면 전환, Unity Embedded 생명주기, AR 안내 오브젝트 정리가 서로 어긋나지 않게 유지할 수 있었습니다.

## 구현 포인트

- Flutter와 Unity 사이의 메시지를 콘텐츠 선택, 경로 옵션, 종료 처리처럼 의미 단위로 분리했습니다.
- VPS Localizing 성공 이후에 경로 API를 요청해 실제 보행 시작 위치와 경로 생성 기준을 맞췄습니다.
- GeoJSON node 데이터를 파싱해 AR 화살표, 경로 라인, 다음 안내 지점을 런타임에 동적으로 생성했습니다.
- 플레이어와 다음 node 사이의 거리 기준으로 node index를 갱신하고, Flutter 지도 UI와 Unity AR 안내가 같은 진행 상태를 공유하도록 했습니다.
- Dispose 메시지와 scene 초기화 흐름을 명확히 두어 Unity Embedded 환경의 화면 전환 예외를 줄였습니다.
