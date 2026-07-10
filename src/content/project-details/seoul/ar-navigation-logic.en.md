![Seoul AR navigation runtime scene](images_videos/seoul/ar-navigation-runtime.png)

The Seoul AR Navigation PoC embedded a Unity AR view inside a Flutter app and used GPS/VPS localization to guide pedestrians around Cheonggyecheon. I handled the Unity-side flow from app messages to route-based AR guidance.

## Initialization and Route Generation

![AR navigation API integration logic](images_videos/seoul/ar-navigation-logic-api.png)

Flutter passed the selected content, route option, and destination data into Unity. After VPS localization, Unity requested route data and converted it into AR arrows, route lines, and guidance targets.

## Guidance Loop and Exit Handling

![AR navigation guidance loop logic](images_videos/seoul/ar-navigation-logic-guidance.png)

The guidance loop compared the user's current position with the next route node and kept the Flutter map UI aligned with the Unity AR view. Exit and scene-reset handling kept Unity Embedded transitions predictable.

## Implementation Notes

- Defined the Flutter-to-Unity message boundary.
- Requested route data after localization was ready.
- Converted route nodes into AR guidance visuals.
- Synchronized AR progress with the native map UI.
- Added cleanup flow for screen transitions.
