SagarVision AR System의 그래픽스 작업은 수술 보조 화면에서 뼈 모델, 프로브, 절단 평면, landmark 취득 상태가 한눈에 읽히도록 만드는 데 초점을 두었습니다. 단순히 보기 좋은 효과를 얹는 것이 아니라, 실시간 트래킹 데이터가 들어올 때 Unity 클라이언트가 표면 좌표를 빠르게 계산하고 그 결과를 HLSL 셰이더로 전달하는 구조를 만들었습니다.

## BVH 전체 로직 플로우

![BVH 기반 실시간 최단 거리 투영 플로우 차트](images_videos/sagarvision-graphics-bvh-flow.svg)

BVH는 Bone Mesh가 로드된 직후 한 번 구축합니다. `ModelPositionerBase`에서 Femur와 Tibia의 MeshFilter를 읽어 정점 배열과 삼각형 인덱스를 bone index별로 캐싱하고, 각 삼각형 묶음의 AABB를 계산합니다. 이후 가장 긴 축을 기준으로 삼각형 중심을 정렬해 좌우 노드로 나누고, 리프 노드에는 삼각형 4개 이하만 남깁니다.

런타임에서는 프로브 좌표가 들어올 때마다 전체 삼각형을 모두 순회하지 않습니다. 현재 bone index의 BVH 루트에서 시작해 query point와 각 AABB 사이의 제곱 거리를 계산하고, 이미 찾은 최단 거리보다 먼 노드는 바로 가지치기합니다. 가까운 자식 노드를 먼저 방문하므로 bestSqDist가 빠르게 작아지고, 뒤쪽 branch의 검사량도 줄어듭니다.

리프 노드에서는 `ClosestPointOnTriangle` 로직으로 삼각형 위의 실제 최근접점을 계산합니다. 점이 삼각형 내부로 투영되면 그 점을 쓰고, 삼각형 밖으로 나가면 가장 가까운 edge 또는 vertex로 clamp합니다. BVH가 아직 없거나 유효한 결과를 찾지 못한 경우에는 brute-force 순회 또는 Collider.ClosestPoint 폴백을 사용했습니다.

## 실시간 최단 거리 투영

@[실시간 투영 보조 데모](images_videos/videos/sagarvision-realtime-projection.mp4 "BVH query로 계산한 표면 최근접점이 프로브 움직임에 맞춰 실시간으로 갱신되는 테스트 장면입니다.")

프로브 위치는 UDP 트래킹 또는 AR marker 좌표로 들어옵니다. AR 모드에서는 world position으로 들어올 수 있으므로, 먼저 현재 뼈 MeshRenderer의 transform을 기준으로 local position으로 변환합니다. 그 다음 `GetProjectionTrueClosestOnMesh`가 BVH query를 수행해 표면 위의 bestLocalPoint를 찾습니다.

이 방식의 핵심은 투영점을 삼각형 평면에만 올려놓고 끝내지 않는 것입니다. 수술 보조 화면에서는 프로브가 표면 밖이나 edge 근처에 있을 때도 시각 피드백이 안정적으로 붙어 있어야 하므로, 삼각형 내부 판정과 edge/vertex clamp를 함께 사용했습니다. 그래서 프로브가 빠르게 움직여도 light spot이 모델 밖으로 튀는 현상을 줄일 수 있었습니다.

실시간 투영 결과는 이후 두 가지 경로로 사용됩니다.

- 프로브 오브젝트의 위치를 표면 좌표로 갱신해 사용자가 보고 있는 포인터를 뼈 표면에 붙입니다.
- 하이라이팅과 surface sampling 셰이더에 local 좌표 배열을 전달해 취득 영역, 진행 상태, 현재 hover 지점을 바로 표시합니다.

## Resection Luma Keying과 Outline

@[Resection luma keying 및 outline 데모](images_videos/videos/sagarvision-outline-lightspot.mp4 "절단 평면, 외곽선, 검은 배경 제거가 합쳐져 AR HUD에서 절단 보조 정보를 분리해서 보여주는 장면입니다.")

Resection 화면은 별도의 cutting camera가 모델과 절단 평면을 RenderTexture로 렌더링하고, 해당 텍스처를 UI에 합성하는 구조입니다. RenderTexture는 검은 배경을 포함하기 쉬운데, UI 위에 그대로 올리면 AR 화면에서 정보가 묻힙니다. 이를 해결하기 위해 `BlackAlphaRemover` 셰이더에서 luma keying을 적용했습니다.

Luma keying은 픽셀의 RGB를 Rec.709 계수로 휘도값으로 변환한 뒤, threshold와 softness를 기준으로 alpha를 부드럽게 낮춥니다. 어두운 배경은 투명해지고, 절단 평면이나 라인처럼 밝은 정보만 남습니다. 단순 chroma key보다 수술 보조 UI에 맞았던 이유는 배경색을 특정 색으로 고정하지 않아도 되고, 검은 RenderTexture 배경을 안정적으로 제거할 수 있었기 때문입니다.

절단 평면은 서버에서 받은 current/target cutting plane의 position과 normal로 생성합니다. `ResectionController`는 평면 prefab을 필요한 개수만큼 만들고, tab에 따라 Femur distal, Tibial cutting, AP cutting 시점의 카메라와 plane scale, rotation을 다르게 잡습니다. current plane과 target plane은 서로 다른 layer에 배치해 카메라와 material 구성을 분리했습니다.

Outline은 절단 보조 상태를 더 선명하게 보이도록 별도 material로 교체하는 방식입니다. `OutlineAndLinearMask`와 `OutlineAndCurveMask` 계열 셰이더는 normal과 view direction의 dot product로 rim 값을 만들고, view space 위치 기반 clipping을 곱해 필요한 방향의 외곽선만 남깁니다. Femur와 Tibia는 형태와 절단 축이 달라서 `_IsUseXAxis`, `_IsReverse`, `_ClipingOffset`, `_CurveStrength` 같은 파라미터로 마스크 방향과 곡률을 조절했습니다.

## 투영 위치 기반 실시간 하이라이팅

@[투영된 위치 기반 실시간 하이라이팅](images_videos/videos/sagarvision-realtime-highlighting.mp4 "프로브로 취득한 표면 좌표가 모델 로컬 좌표계 안에서 누적되고, 셰이더가 해당 지점 주변을 실시간으로 하이라이팅합니다.")

하이라이팅은 모델의 local coordinate를 기준으로 동작합니다. 프로브 입력을 표면 최근접점으로 투영한 뒤, `Surface`나 `SectionController`에서 `_CenterPoses` 배열에 좌표를 쌓고 material에 전달합니다. 셰이더는 fragment마다 현재 픽셀의 world position을 object local position으로 되돌린 뒤, 각 center와의 거리를 계산합니다.

거리가 `_Radius` 범위 안에 들어오면 base color를 highlight color로 lerp합니다. Image-based landmark에서는 최대 5개 landmark의 target, hover, complete 상태를 색과 강도로 구분했고, Imageless surface sampling에서는 최대 500개까지 좌표를 받아 표면 취득 흔적을 누적 표시했습니다.

이 구조의 장점은 CPU가 매 프레임 mesh vertex color를 다시 쓰지 않아도 된다는 점입니다. CPU는 투영 좌표 배열과 count만 갱신하고, 실제 시각적 블렌딩은 GPU fragment 단계에서 처리합니다. 덕분에 프로브가 움직이는 동안에도 highlight 위치가 모델 로컬 좌표계에 안정적으로 붙고, 모델 transform이 바뀌어도 같은 local point 기준으로 표시가 유지됩니다.

## 구현 포인트

- BVH는 모델 로드 시점에 생성해 런타임 투영 비용을 줄였습니다.
- `ClosestPointOnTriangle`에서 삼각형 내부, edge, vertex 케이스를 모두 처리해 표면 밖으로 튀는 projection을 방지했습니다.
- Resection RenderTexture는 luma keying으로 검은 배경을 제거해 AR HUD 위에 자연스럽게 합성했습니다.
- Outline은 rim lighting과 위치 기반 clipping을 결합해 절단 보조 정보가 모델 형태에 묻히지 않게 했습니다.
- Highlighting은 투영된 local 좌표 배열을 material에 넘기고 HLSL에서 반경 기반 마스크를 계산하는 방식으로 구성했습니다.
