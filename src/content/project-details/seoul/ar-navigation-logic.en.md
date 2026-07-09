![Seoul AR navigation runtime scene](images_videos/seoul/ar-navigation-runtime.png)

The Seoul AR Navigation PoC embedded a Unity AR view inside a Flutter app and used GPS plus SKT VLAM VPS localization to guide pedestrians around Cheonggyecheon. The Unity client handled the Flutter-to-Unity message boundary, route requests after VPS localization, runtime route-node generation from API responses, and distance-based progression from the current user position to the next node.

## Initialization and Route Generation

![AR navigation API integration logic](images_videos/seoul/ar-navigation-logic-api.png)

On entry, Flutter creates and activates the Unity instance, then sends the ARNavigation content type, route option, and destination data to Unity. The option is used as a server route condition, such as shortest path or safer path, while the content type selects the Unity scene flow and visual group for Navigation or Tour mode.

After VPS localization succeeds, Unity requests route data from the REST API with the current coordinate, destination coordinate, route option, and geometry type. The GeoJSON response contains the latitude, longitude, direction, and guidance information for each route node. Unity parses that response into an ordered node list, converts the coordinates into Unity world space, and dynamically creates AR arrows and route-line visuals from the node data.

## Guidance Loop and Exit Handling

![AR navigation guidance loop logic](images_videos/seoul/ar-navigation-logic-guidance.png)

Once the route is generated, the guidance loop runs against the current VPS localization state and player position. When VPS localization is already stable, the client avoids repeatedly overwriting the player position and instead compares the player position against the next node position. When the player gets within the threshold distance, the node is treated as reached, and Unity sends the direction and node index back to Flutter so the bottom map UI and AR guidance remain synchronized.

When the user reaches the final node, Unity sends the final guidance state and handles the Dispose message to clean up the ARNavigation scene. The same Dispose path is used when Flutter exits the AR screen or moves to another scene, resetting the Unity scene and disabling the instance. This kept native screen transitions, the Unity Embedded lifecycle, and AR object cleanup aligned.

## Implementation Notes

- Separated Flutter-to-Unity messages by meaning: content selection, route options, and disposal.
- Requested the route API only after VPS localization succeeded, aligning the route start point with the real walking position.
- Parsed GeoJSON node data to dynamically create AR arrows, route lines, and the next guidance target at runtime.
- Updated the node index through distance checks between the player and next node, keeping the Flutter map UI and Unity AR view on the same progress state.
- Used an explicit Dispose and scene reset flow to reduce screen-transition edge cases in the Unity Embedded environment.
