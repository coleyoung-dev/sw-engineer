The server computes IR camera marker positions in its world coordinate system and sends tracking data to the Unity client over UDP. The client converts received positions into Unity coordinates and displays them in real time. Receiving and parsing run on a separate thread, while a dispatcher applies UI updates on Unity's main thread.

- Separated real-time pose updates from reliable TCP workflow data.
- Reflected tracking state in Unity without blocking rendering.
- Kept the AR client responsive during continuous operation.
