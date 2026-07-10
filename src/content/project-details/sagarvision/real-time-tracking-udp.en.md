I handled UDP communication for real-time tracking data and connected incoming device state to the Unity runtime so the AR client could update quickly during operation.

- Separated real-time pose updates from reliable TCP workflow data.
- Reflected tracking state in Unity without blocking rendering.
- Kept the AR client responsive during continuous operation.
