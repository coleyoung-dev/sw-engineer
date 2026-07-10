@[Mobile signboard recognition demo](images_videos/hyundai/mobile/brand-catcher.mp4 "A mobile demo where the brand catcher reads a signboard from the camera feed and connects the result to AR feedback.")

Mobile signboard recognition powered the Hyundai Duty Free brand catcher content. The Unity client connected camera-based recognition to AR feedback, mission progress, and UI state.

## Simple Flow

- Prepared camera input for recognition.
- Selected the most reliable brand result.
- Reduced false positives with confidence and repeated-detection checks.
- Reflected successful recognition in AR content and UI.

## Detailed Logic

![Mobile signboard recognition logic](images_videos/hyundai/mobile/brand-catcher-logic.png)

The logic was organized around camera input, TFLite inference, result stabilization, and content updates. Recognition timing was separated from rendering so the mobile AR experience could stay responsive.

After recognition, the detected brand was matched with mission data and used to update AR objects, sound, rewards, and UI. Camera permission, pause/resume, and Unity Embedded state changes were also checked for mobile operation.

## Implementation Notes

- Kept recognition from blocking the Unity frame loop.
- Stabilized results before triggering mission progress.
- Used mission data as the shared source for AR feedback and UI.
- Checked common mobile app state transitions.
