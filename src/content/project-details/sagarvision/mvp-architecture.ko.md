SagarVision의 UniRx 기반 MVP 아키텍처는 수술 workflow UI, 서버 기반 상태, AR/PC 화면 제어를 더 명확한 계층으로 분리한 구조입니다. Planning, Landmark, Gap, Resection 화면이 확장되어도 Unity 클라이언트를 유지보수하기 쉽게 만드는 것이 목표였습니다.

![UniRx 기반 MVP 아키텍처 데이터 흐름](images_videos/sagarvision-unirx-mvp-flow.svg)

## 도입 배경

SagarVision은 사용자 입력, 서버 결과, 트래킹 상태, HUD 표시 상태가 동시에 바뀌는 앱입니다. 이 책임들이 큰 MonoBehaviour 안에 모이면 기능 변경이 어려워져, UI 레이어를 MVP 중심으로 정리했습니다.

## 계층별 책임

`View`는 Unity 오브젝트 참조와 사용자 입력을 담당했습니다. `Model`은 해석된 서버 상태를 보관했습니다. `Presenter`는 두 계층을 연결하고, 구독/명령 전송/화면 반응을 조립했습니다.

## UniRx 바인딩 방식

UniRx를 사용해 서버 갱신과 사용자 입력이 같은 반응형 흐름으로 처리되도록 했습니다. 이를 통해 반복 UI 갱신을 줄이고 화면 상태 변화를 더 읽기 쉽게 만들었습니다.

## 화면별 적용

공통 workflow 동작은 base presenter/view/model로 모으고, 화면별 특수 로직은 각 기능 영역에 남겼습니다. Landmark, Gap, Planning, Resection에서 반복되는 흐름이 여러 클래스에 흩어지지 않도록 정리했습니다.

## 네트워크와 UI 사이의 경계

네트워크 세부 정보는 View 밖에 두었습니다. View는 의미가 정리된 상태와 입력만 다루고, 파싱과 command mapping은 Model과 Presenter에 가깝게 유지했습니다.

## 구현 성과

- UI 책임을 `View`, `Model`, `Presenter`로 분리했습니다.
- 서버 상태, 사용자 입력, 화면 갱신을 UniRx로 연결했습니다.
- 관련 화면의 공통 workflow 동작을 재사용했습니다.
- 프로토콜 처리와 Unity component 제어의 결합을 줄였습니다.
- 이후 workflow 확장을 위한 클라이언트 기반을 마련했습니다.
