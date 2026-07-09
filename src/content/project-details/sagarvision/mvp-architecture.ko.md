SagarVision AR System의 UniRx 기반 MVP 아키텍처는 수술 단계별 Unity UI, 서버에서 들어오는 계산 결과, AR/PC 모드별 화면 제어가 한 클래스에 섞이지 않도록 정리한 구조입니다. 기존 Unity 프로젝트의 `Assets/Script/RunTime/UI` 영역을 기준으로, 화면마다 `View`, `Model`, `Presenter`를 나누고 UniRx의 `ReactiveProperty`, `ReactiveCollection`, `IObservable`을 연결 지점으로 사용했습니다.

![UniRx 기반 MVP 아키텍처 데이터 흐름](images_videos/sagarvision-unirx-mvp-flow.svg)

## 도입 배경

SagarVision 클라이언트는 단순한 메뉴 UI가 아니라 수술 workflow의 상태를 계속 반영해야 하는 앱입니다. TCP로 들어오는 planning, landmark, gap, resection 데이터와 UDP 기반 tracker pose, 사용자의 버튼 입력, AR HUD 표시 상태가 동시에 움직입니다. 이런 흐름을 MonoBehaviour 한 곳에서 직접 처리하면 화면 변경, 네트워크 패킷 파싱, 서버 command 전송, GameObject 활성화 조건이 빠르게 엉키기 쉬웠습니다.

그래서 UI 레이어를 MVP로 분리했습니다. `View`는 Unity scene에 배치된 버튼, 텍스트, 이미지, HUD 오브젝트 참조를 보관하고 사용자 입력을 observable로 노출합니다. `Model`은 서버 byte buffer에서 읽은 값과 broadcast state를 `ReactiveProperty` 또는 `ReactiveCollection`으로 보관합니다. `Presenter`는 View와 Model을 연결하면서 구독, command 전송, 화면 상태 전환을 담당합니다.

## 계층별 책임

`Model`은 서버와 가장 가까운 데이터 계층입니다. 공통 `Model` 베이스는 broadcast state와 event list를 `ReactiveCollection<int>`로 들고 있고, 서버 buffer에서 command bit를 읽어 UI 상태로 변환합니다. Planning, Landmark, Gap, Resection 모델은 각 화면에서 필요한 수치만 `ReactiveProperty<float>` 또는 `ReactiveProperty<int>`로 공개합니다. 예를 들어 planning model은 HKA angle, femur/tibia 절삭 수치, image index를 반응형 값으로 갖고, landmark model은 hip center count, validation count, femur/tibia validation error를 갱신합니다.

`View`는 Unity UI 바인딩 계층입니다. `LandmarkBaseView`는 back, undo, reset, flip 버튼을 `IObservable<Unit>`으로 제공하고, orientation text나 validation UI처럼 실제 Unity component를 조작하는 메서드를 갖습니다. 이 계층은 서버 패킷 구조나 workflow 분기 조건을 알지 않도록 두었습니다.

`Presenter`는 화면의 행동을 조립합니다. 버튼 observable을 구독해 `NetworkManager` command를 보내고, Model의 reactive 값을 구독해 텍스트, 탭, HUD, GameObject active state를 갱신합니다. `LandmarkBasePresenter<TView, TModel>`과 `GapBasePresenter<TView, TModel>`은 공통 구독과 상태 전환 훅을 제공하고, Imagebased, Imageless, PSI, Gap, PostOpResult 같은 화면은 필요한 부분만 override하거나 구체 로직을 추가합니다.

## UniRx 바인딩 방식

데이터 갱신은 대부분 `ReactiveProperty`의 값 변경에서 시작됩니다. 서버 수신부가 presenter의 `SetPlanningData`, `SetLandMarkData`, `SetResection` 같은 메서드로 byte buffer를 넘기면, model이 필요한 offset을 파싱해 reactive 값에 넣습니다. presenter는 이 값을 구독하고 있다가 UI text, tab state, validation box, HUD box를 갱신합니다.

사용자 입력도 같은 방식으로 다뤘습니다. `MyButtonProcess_CY`의 `SelectObservable`은 View에서 `Act_backToPage`, `Act_undo`, `Act_reset`, `Act_flipMode`처럼 의미 있는 이름으로 노출됩니다. Presenter는 이를 구독해 local state를 먼저 반영하고, 필요한 경우 `NetworkManager.Instance.SetBroadCastStateCmd`, `SetBroadCastEventCmd`, `SendCommand`를 호출합니다. Planning tab이나 Resection tab처럼 서버 echo와 사용자 입력이 짧은 시간에 겹칠 수 있는 부분은 `pauseReceive`와 짧은 `Observable.Timer`를 사용해 UI가 튀지 않도록 막았습니다.

반복 갱신이 많은 UI는 `DistinctUntilChanged`를 사용했습니다. Landmark 화면에서는 back button, model viewer, validation UI 활성 상태를 reactive property로 두고, 값이 실제로 바뀔 때만 `SetActiveIfChanged`를 호출합니다. 이 방식은 매번 GameObject active 상태를 다시 쓰지 않게 해 UI 흐름을 단순하게 만들고, 디버깅 로그도 상태 변화 단위로 읽을 수 있게 해줍니다.

## 화면별 적용

Landmark 영역은 MVP 분리 효과가 가장 컸습니다. Imagebased, Imageless, PSI는 서로 다른 workflow를 갖지만 back, flip, model viewer, validation UI, section index 진행 같은 공통점이 많았습니다. 이를 `LandmarkBasePresenter`, `LandmarkBaseView`, `LandmarkBaseModel`로 모으고, 화면별 state config와 section progress만 각 presenter에서 다루도록 나눴습니다.

Planning 화면은 서버에서 내려온 절삭 계획 수치와 tab state를 reactive 값으로 관리합니다. Presenter는 orientation에 따라 medial/lateral 표시 위치를 바꿔 구독하고, tab 버튼 입력을 broadcast bit로 변환해 서버에 보냅니다. 이미지 index 변경은 `ReactiveCollection`의 `ObserveReplace`로 감지해 image packet 요청 queue에 넣었습니다.

Gap과 PostOpResult는 lateral gap, medial gap, flexion angle, HKA angle 표시 로직이 겹치기 때문에 `GapBasePresenter`를 두었습니다. 공통 presenter는 값 표시와 range state를 처리하고, 실제 undo/reset 경로와 captured ML 표시 방식은 각 화면의 hook으로 분리했습니다.

Resection 화면은 cutting/validation tab, HUD 위치 재설정, 절삭 box 값 갱신처럼 AR HUD와 PC UI가 함께 움직입니다. Presenter는 Model의 box value collection과 tab index를 구독해 일반 UI, head-lock HUD, 3D resection controller의 표시 값을 동시에 맞춥니다.

## 네트워크와 UI 사이의 경계

MVP 구조에서 중요한 기준은 network payload를 View가 직접 알지 않게 하는 것이었습니다. byte offset, broadcast bit, command id는 Model 또는 Presenter에 머물고, View는 이미 의미가 정리된 값과 입력 이벤트만 다룹니다. 덕분에 서버 protocol이 바뀌면 Model 파싱 또는 command mapping을 중심으로 수정하고, UI prefab이나 component 참조는 비교적 안정적으로 유지할 수 있습니다.

또한 TCP/UDP 통신 계층에서 들어온 값이 Unity main thread의 UI 갱신으로 이어질 때, Presenter가 최종 반영 지점 역할을 합니다. 실시간 pose는 별도 UDP 파이프라인에서 controller와 visual에 반영하고, 수치 UI와 workflow UI는 MVP 레이어에서 구독 기반으로 반영해 책임을 분리했습니다.

## 구현 성과

- 화면별 UI 로직을 `View`, `Model`, `Presenter`로 분리해 서버 데이터 파싱과 Unity component 제어가 한 클래스에 섞이는 문제를 줄였습니다.
- UniRx의 `ReactiveProperty`, `ReactiveCollection`, `IObservable`을 사용해 서버 수신, 사용자 입력, 화면 반영을 같은 이벤트 흐름으로 연결했습니다.
- `LandmarkBasePresenter`와 `GapBasePresenter`로 반복되는 구독, 상태 전환, 표시 로직을 공통화했습니다.
- `DistinctUntilChanged`, `CompositeDisposable`, `Observable.Timer`를 활용해 불필요한 UI 갱신과 입력/서버 echo 충돌을 줄였습니다.
- 의료 AR workflow에서 planning, landmark, gap, resection 화면을 계속 확장할 수 있는 유지보수 가능한 UI 구조를 만들었습니다.
