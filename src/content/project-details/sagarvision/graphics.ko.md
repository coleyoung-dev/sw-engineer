SagarVision AR System의 그래픽스 작업은 수술 보조 정보를 AR 화면에서 명확하게 읽히도록 만드는 데 초점을 두었습니다. 트래킹 데이터, 모델 표면 투영, RenderTexture 합성, HLSL 피드백을 하나의 안정적인 시각화 흐름으로 연결했습니다.

## BVH 전체 로직 플로우

![BVH 기반 실시간 최단 거리 투영 플로우 차트](images_videos/sagarvision-graphics-bvh-flow.svg)

뼈 모델 로드 이후 표면 탐색 구조를 준비해, 프로브 위치를 모델 표면 위로 빠르게 투영할 수 있게 했습니다. 이를 통해 실시간으로 가장 가까운 표면점을 찾는 비용을 줄였습니다.

## 실시간 최단 거리 투영

@[실시간 투영 보조 데모](images_videos/videos/sagarvision-realtime-projection.mp4 "BVH query로 계산한 표면 최근접점이 프로브 움직임에 맞춰 실시간으로 갱신되는 테스트 장면입니다.")

외부에서 들어오는 트래킹 위치를 모델 기준 피드백 지점으로 변환했습니다.

## Resection Luma Keying과 Outline

@[Resection luma keying 및 outline 데모](images_videos/videos/sagarvision-outline-lightspot.mp4 "절단 평면, 외곽선, 검은 배경 제거가 합쳐져 AR HUD에서 절단 보조 정보를 분리해서 보여주는 장면입니다.")

Resection 안내에서는 절단 평면 정보를 AR HUD에 합성하고, luma keying으로 불필요한 배경을 제거했습니다. Outline 효과를 더해 수술 보조 정보가 모델 형태에 묻히지 않도록 했습니다.

## 투영 위치 기반 실시간 하이라이팅

@[투영된 위치 기반 실시간 하이라이팅](images_videos/videos/sagarvision-realtime-highlighting.mp4 "프로브로 취득한 표면 좌표가 모델 로컬 좌표계 안에서 누적되고, 셰이더가 해당 지점 주변을 실시간으로 하이라이팅합니다.")

투영된 표면 좌표를 local space에 누적하고 HLSL material로 전달했습니다. 실제 하이라이트 렌더링은 GPU에서 처리해, 프로브가 움직이는 동안에도 시각 피드백이 빠르게 유지되도록 했습니다.

## 구현 포인트

- 실시간 AR 피드백을 위한 표면 투영 비용을 줄였습니다.
- 합성과 outline으로 AR HUD 가독성을 높였습니다.
