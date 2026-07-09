![Meta Quest exhibition vertical visual](images_videos/hyundai/metaquest/shader-effect-vertical.png)

The Meta Quest exhibition content let booth visitors experience the Hyundai Duty Free AR Adventure Pass in an immersive Quest 3 environment. Alongside OVR Toolkit-based interaction work, I built Shader Graph-driven visual effects for object emphasis, event feedback, and clear guidance inside a short exhibition session.

## Shader Graph Effects

![Meta Quest exhibition wide visual](images_videos/hyundai/metaquest/shader-effect-wide.png)

In a booth environment, users need to understand the target object quickly, so the effects focused on guidance and feedback rather than decoration alone. The Shader Graph setup combined rim light, fresnel, dissolve, alpha blending, and texture panning nodes to distinguish interactable, collectible, and event-active states.

Quest 3 performance can be affected by heavy transparency and expensive post-processing. To keep the runtime practical, most effects were handled at the material level, with only the required parameters updated from C#. For example, interactable objects increased fresnel intensity and outline color, while collection or success events animated dissolve threshold and emission values over time.

## Runtime Control

Exposed Shader Graph parameters were connected to the Unity-side state machine. When the user approached a target or triggered a gaze/controller event, C# scripts updated material properties and the GPU handled the visual interpolation. This made it easier to respond to planning changes: color, speed, and thresholds could be tuned through the graph and inspector parameters without rewriting the interaction flow.

Because the exhibition content was operated repeatedly in short sessions, the visual effects also needed to reset cleanly. After each event finished, material state returned to its initial values so the next visitor could experience the same flow without manual intervention.

## Implementation Notes

- Combined fresnel, emission, dissolve, and texture panning in Shader Graph for Quest exhibition effects.
- Reduced post-processing dependence and used material parameters to manage Quest 3 runtime cost.
- Controlled shader properties from a C# state machine to separate interactable, active, and success states.
- Added reset behavior and QA checklist items for repeated booth operation.
