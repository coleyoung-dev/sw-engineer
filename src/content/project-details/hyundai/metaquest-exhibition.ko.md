![Meta Quest 전시 시각효과 세로 화면](images_videos/hyundai/metaquest/shader-effect-vertical.png)

Meta Quest 전시 콘텐츠는 사용자가 부스에서 Quest 3를 착용하고 현대백화점 면세점의 AR 어드벤처 패스 경험을 몰입형 공간에서 체험할 수 있도록 구성한 XR 콘텐츠입니다. 저는 OVR Toolkit 기반 상호작용과 함께, 전시 환경에서 시선이 빠르게 닿는 오브젝트의 강조와 이벤트 연출을 Shader Graph 중심으로 구현했습니다.

## Shader Graph 기반 효과 구성

![Meta Quest 전시 시각효과 가로 화면](images_videos/hyundai/metaquest/shader-effect-wide.png)

전시 부스에서는 사용자가 짧은 시간 안에 목표 오브젝트를 이해하고 반응해야 하므로, 시각효과는 단순한 장식보다 안내성과 피드백을 우선했습니다. Shader Graph에서는 rim light, fresnel, dissolve, alpha blend, texture panning 계열 노드를 조합해 오브젝트 외곽 강조, 획득 가능 상태, 이벤트 발동 상태를 구분했습니다.

Quest 3 타깃에서는 과한 투명 오브젝트와 복잡한 후처리가 성능에 부담을 줄 수 있습니다. 그래서 효과 대부분을 material 단위에서 처리하고, 필요한 파라미터만 C#에서 갱신하는 방식으로 구성했습니다. 예를 들어 상호작용 가능 상태에서는 fresnel intensity와 outline color를 높이고, 획득 또는 이벤트 성공 시에는 dissolve threshold와 emission 값을 시간에 따라 변경해 반응을 보여주었습니다.

## 런타임 제어

Shader Graph의 노출 파라미터는 Unity 쪽 상태 머신과 연결했습니다. 사용자가 컨트롤러로 대상에 접근하거나 gaze/trigger 이벤트가 발생하면 C# 스크립트가 material property를 갱신하고, 효과는 GPU 쪽에서 보간되어 표시됩니다. 이 구조 덕분에 기획 수정으로 색상, 속도, 임계값이 바뀌어도 그래프와 inspector 파라미터 조정만으로 빠르게 대응할 수 있었습니다.

전시 콘텐츠 특성상 한 번의 체험 세션이 짧고 반복 운영이 많았기 때문에, 연출은 명확하고 복구 가능해야 했습니다. 이벤트가 끝나면 material 상태를 초기값으로 되돌리고, 다음 체험자가 바로 같은 흐름을 볼 수 있도록 reset 처리도 함께 구성했습니다.

## 구현 포인트

- Shader Graph로 fresnel, emission, dissolve, texture panning을 조합해 Quest 전시용 강조 효과를 만들었습니다.
- 후처리 의존도를 낮추고 material 파라미터 중심으로 구현해 Quest 3 런타임 비용을 관리했습니다.
- C# 상태 머신에서 shader property를 제어해 상호작용 가능, 진행 중, 성공 상태를 시각적으로 구분했습니다.
- 전시 부스 반복 운영을 고려해 효과 초기화와 QA 체크리스트를 함께 정리했습니다.
