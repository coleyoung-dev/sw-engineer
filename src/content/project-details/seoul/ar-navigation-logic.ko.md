![서울시 AR 내비게이션 구동 장면](images_videos/seoul/ar-navigation-runtime.png)

서울시 AR 내비게이션 PoC는 Flutter 앱 안에 Unity AR 뷰를 임베드하고 GPS/VPS 위치 보정을 활용해 청계천 일대 보행 경로를 안내한 프로토타입입니다. 저는 앱 메시지 수신부터 경로 기반 AR 안내까지 Unity 측 흐름을 담당했습니다.

## 초기화와 경로 생성

![AR 내비게이션 API 연동 로직](images_videos/seoul/ar-navigation-logic-api.png)

Flutter에서 콘텐츠, 경로 옵션, 목적지 정보를 Unity로 전달하면, Unity는 VPS 위치 보정 이후 경로 데이터를 요청했습니다. 이후 경로 노드를 AR 화살표, 라인, 안내 지점으로 변환했습니다.

## 안내 루프와 종료 처리

![AR 내비게이션 안내 루프 로직](images_videos/seoul/ar-navigation-logic-guidance.png)

안내 루프는 사용자 위치와 다음 경로 노드를 비교하며 Flutter 지도 UI와 Unity AR 화면의 진행 상태를 맞췄습니다. 화면 종료와 scene reset 흐름도 함께 정리해 Unity Embedded 전환을 안정화했습니다.

## 구현 포인트

- Flutter와 Unity 사이의 메시지 경계를 정의했습니다.
- 위치 보정 이후 경로 데이터를 요청했습니다.
- 경로 노드를 AR 안내 시각화로 변환했습니다.
- AR 진행 상태와 네이티브 지도 UI를 동기화했습니다.
- 화면 전환을 위한 정리 흐름을 추가했습니다.
