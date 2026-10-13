Sagarvision Manager uses ADB for device connections, APK installation and removal, app launch and stop, battery queries, and screen capture. External commands sit behind `IAdbService` and `IProcessRunner` instead of being placed directly in WPF ViewModels.

## Process execution

`ProcessRunner` drains stdout and stderr concurrently while awaiting process exit. This avoids a full pipe preventing the process from finishing. It links the caller's cancellation token with an operation-specific timeout and cleans up the ADB client process when time runs out.

Screen capture reads a binary stream separately from text commands. Each operation checks the exit result and surfaces device errors to the UI.

## Multi-device actions

APK installation and AR Glass app launch start asynchronous commands for the selected devices and collect results with `Task.WhenAll`. Success and failure are aggregated per device so one failed target is not reported as a complete success. Command state also disables duplicate actions while an operation is in progress.

This is a **development and operations tool** for the navigation system's devices and apps; it is not the surgical guidance client itself.
