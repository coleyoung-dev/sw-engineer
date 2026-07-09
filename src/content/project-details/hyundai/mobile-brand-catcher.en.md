@[Mobile signboard recognition demo](images_videos/hyundai/mobile/brand-catcher.mp4 "A mobile demo where the brand catcher reads a signboard from the camera feed and connects the result to AR feedback.")

Mobile signboard recognition was used in the Hyundai Duty Free AR Adventure Pass brand catcher content. When a user pointed the camera at a store signboard, the Unity client classified the brand and connected the result to AR feedback, mission progress, and UI state.

## Simple Flow

- Prepared the camera frame region used for recognition and converted it to the model input size and format.
- Selected the brand candidate with the highest confidence from the TFLite classification result.
- Treated the result as a success only when the confidence passed the threshold, reducing false positives from motion blur, lighting changes, and similar signage.
- Matched the detected brand ID with mission data, then updated AR objects and UI state.

## Detailed Logic

![Mobile signboard recognition logic](images_videos/hyundai/mobile/brand-catcher-logic.png)

The logic was split into camera input, preprocessing, TFLite inference, result stabilization, and content update stages. Running inference too aggressively on mobile can lead to heat and frame drops, so the Unity client controlled recognition timing and execution state to keep the rendering loop and inference loop from blocking each other.

During preprocessing, the camera texture was resized to the model input size and aligned with the expected RGB channel order and normalization rules. The tensor was then passed to the TFLite interpreter, which returned scores for each brand class. The client compared the highest score against a threshold, and instead of immediately committing a weak result, waited for repeated detections of the same brand within a short window before firing a success event.

After successful recognition, the result was connected to the brand catcher mission state. The client checked whether the brand had already been collected, whether it was part of the active mission, and whether reward feedback should play, then updated AR content, sound, and UI in order. Because Unity was embedded in a native mobile app, camera permissions, pause/resume behavior, and app state transitions were also included in QA.

## Implementation Notes

- TFLite inference timing was separated from rendering so recognition would not block the Unity frame loop.
- Confidence thresholds and repeated detection were combined to stabilize recognition results.
- Brand IDs were matched with mission data so AR feedback, UI, and reward state used the same source of truth.
- Mobile edge cases such as camera permissions, pause/resume, and Unity Embedded state transitions were tested together.
