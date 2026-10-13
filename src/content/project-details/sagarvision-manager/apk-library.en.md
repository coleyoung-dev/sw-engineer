This feature discovers APKs in the build folder and displays their app name, version, and package. Folder traversal and `aapt` inspection run without blocking device selection or other WPF interactions.

## Scan flow

- Recursively enumerate APKs and read each file's size and modification time.
- Reuse the existing UI entry or local cache for unchanged files.
- Inspect only new or changed files with `aapt`.
- Publish the completed list to the UI collection in one update.

## Asynchronous control

A new scan cancels the previous `CancellationTokenSource`. File traversal runs through `Task.Run`, while `Progress<T>` reports inspection progress to the UI. `Task.WhenAll` processes pending files, with a `SemaphoreSlim` limiting concurrent `aapt` runs to four.

Builds and file copies can trigger bursts of `FileSystemWatcher` events, so rescans are debounced by 1.5 seconds. If an APK cannot yet be read, its filename remains visible and the failed result is not cached, allowing a later retry.

## Implementation details

- Reused unchanged entries to preserve the current selection.
- Validated cache entries against file size and modification time.
- Applied the finished list through `RangeObservableCollection` to reduce collection notifications.
