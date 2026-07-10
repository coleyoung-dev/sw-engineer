![Meta Quest 전시 시각효과 세로 화면](images_videos/hyundai/metaquest/shader-effect-vertical.png)

Meta Quest 전시 콘텐츠는 부스 방문자가 Quest 3에서 현대백화점 면세점 AR 어드벤처 패스를 체험하도록 만든 XR 콘텐츠입니다. 짧은 체험 안에서 오브젝트, 이벤트, 안내 상태가 잘 보이도록 시각 피드백을 구현했습니다.

## Shader Graph 기반 효과 구성

![Meta Quest 전시 시각효과 가로 화면](images_videos/hyundai/metaquest/shader-effect-wide.png)

시각효과는 장식보다 안내성과 피드백에 초점을 두었습니다. Shader Graph로 상호작용 가능, 진행 중, 성공 상태를 구분하고 Quest 3 런타임 비용을 관리했습니다.

## 런타임 제어

Shader 파라미터를 Unity 상호작용 상태와 연결해 색상, 타이밍, 반응을 쉽게 조정할 수 있게 했습니다. 반복 운영을 위해 효과 초기화 흐름도 함께 구성했습니다.

## 구현 포인트

- Shader Graph로 Quest 3용 시각 피드백을 만들었습니다.
- material 중심 효과로 런타임 비용을 관리했습니다.
- 상호작용 진행 상태와 shader 상태를 연결했습니다.
- 반복 전시 운영을 위한 reset 흐름을 준비했습니다.
