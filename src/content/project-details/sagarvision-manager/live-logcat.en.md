An Android device can emit many log lines in a short time. Updating a WPF collection for every received line would cause excessive UI work, so log ingestion is separated from display updates.

## Ingestion and display

`LogcatSession` starts an `adb logcat -v threadtime` process for a device and parses its output lines. Received entries go into a lock-protected pending list. A `DispatcherTimer` drains that list every 100 ms and delivers a batch to the UI.

The ViewModel filters each batch and updates a `RangeObservableCollection`. Both retained and displayed logs have entry caps so the lists do not grow without bound during a long session. While display is paused, incoming logs remain in the internal list; the filtered view is rebuilt when needed.

When the process exits or the window closes, the session releases event subscriptions and the process. This keeps background output handling separate from WPF UI updates.
