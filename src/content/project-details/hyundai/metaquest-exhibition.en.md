![Meta Quest exhibition vertical visual](images_videos/hyundai/metaquest/shader-effect-vertical.png)

The Meta Quest exhibition content let booth visitors experience Hyundai Duty Free AR Adventure Pass in Quest 3. I built visual feedback that made objects, events, and guidance easy to read during short exhibition sessions.

## Shader Graph Effects

![Meta Quest exhibition wide visual](images_videos/hyundai/metaquest/shader-effect-wide.png)

The effects focused on clear guidance rather than decoration. Shader Graph was used to distinguish interactable, active, and success states while keeping the Quest 3 runtime cost practical.

## Runtime Control

Shader parameters were connected to Unity-side interaction state, so colors, timing, and feedback could be tuned without changing the core flow. Effects also reset cleanly for repeated booth operation.

## Implementation Notes

- Built Quest 3 visual feedback with Shader Graph.
- Used material-level effects to manage runtime cost.
- Connected shader state to interaction progress.
- Prepared reset behavior for repeated exhibition sessions.
