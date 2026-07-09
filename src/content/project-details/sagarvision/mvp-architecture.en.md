The UniRx-based MVP architecture in SagarVision AR System separates surgical workflow UI, server-driven calculation results, and AR/PC-specific display control into clearer layers. Based on the `Assets/Script/RunTime/UI` area of the Unity project, each major screen is organized into `View`, `Model`, and `Presenter` classes, while UniRx `ReactiveProperty`, `ReactiveCollection`, and `IObservable` act as the connection points between them.

![UniRx-based MVP architecture data flow](images_videos/sagarvision-unirx-mvp-flow.svg)

## Why It Was Needed

SagarVision is not a static menu-driven app. It continuously reflects surgical workflow state from TCP planning, landmark, gap, and resection packets, UDP tracker pose updates, user button input, and AR HUD visibility. If those responsibilities stay inside one MonoBehaviour, packet parsing, command sending, screen switching, and GameObject activation rules become tightly coupled very quickly.

The UI layer was therefore moved toward MVP. `View` keeps references to Unity scene objects and exposes user input as observables. `Model` parses server byte buffers and stores state as reactive values. `Presenter` subscribes to both sides, sends commands, and decides how the screen should change.

## Layer Responsibilities

`Model` is the data layer closest to the server protocol. The shared `Model` base owns broadcast state and event lists as `ReactiveCollection<int>` and converts command bits from the server buffer into UI state. Planning, Landmark, Gap, and Resection models expose only the values their screens need, such as HKA angle, femur/tibia planning values, validation counts, gap values, or cutting box values.

`View` is the Unity UI binding layer. For example, `LandmarkBaseView` exposes back, undo, reset, and flip buttons as `IObservable<Unit>`, while also owning methods for orientation text, validation UI, and component activation. This layer does not need to know server packet offsets or workflow branching rules.

`Presenter` composes the behavior. It subscribes to button observables, sends `NetworkManager` commands, listens to reactive model values, and updates text, tabs, HUD boxes, or GameObject active states. Shared presenters such as `LandmarkBasePresenter<TView, TModel>` and `GapBasePresenter<TView, TModel>` hold common binding and workflow hooks, while Imagebased, Imageless, PSI, Gap, PostOpResult, and Resection presenters add their specific rules.

## UniRx Binding Flow

Most screen updates begin when a `ReactiveProperty` changes. The receive path passes byte buffers into methods such as `SetPlanningData`, `SetLandMarkData`, or `SetResection`; the model parses the relevant offsets and assigns reactive values; the presenter subscription then updates UI text, tab state, validation boxes, or HUD elements.

User input follows the same pattern. `MyButtonProcess_CY.SelectObservable` is exposed by the View as meaningful actions such as `Act_backToPage`, `Act_undo`, `Act_reset`, and `Act_flipMode`. The Presenter subscribes to those actions, updates local state, and calls `SetBroadCastStateCmd`, `SetBroadCastEventCmd`, or `SendCommand` when the server needs to be notified. For tab interactions where local input and server echo can overlap, short `Observable.Timer` pauses help prevent flickering state reversions.

Frequently updated UI state uses `DistinctUntilChanged`. Landmark screens keep back button, model viewer, and validation UI visibility as reactive properties, then call `SetActiveIfChanged` only when the value actually changes. This keeps the UI flow easier to reason about and reduces repeated GameObject activation writes.

## Screen-Level Application

The Landmark area benefits most from the split. Imagebased, Imageless, and PSI have different workflows, but they share back navigation, flip behavior, model viewer visibility, validation UI, and section progression. Those shared pieces live in `LandmarkBasePresenter`, `LandmarkBaseView`, and `LandmarkBaseModel`; each concrete presenter only handles its own state config and section progression.

Planning uses reactive values for surgical planning numbers and tab state. The Presenter maps medial/lateral display positions based on orientation, translates tab input into broadcast bits, and uses `ReactiveCollection.ObserveReplace` to detect image index changes that should request new image packets.

Gap and PostOpResult share lateral gap, medial gap, flexion angle, and HKA angle display logic, so `GapBasePresenter` handles the common subscriptions and range state. Undo/reset behavior and captured ML display remain screen-specific hooks.

Resection combines cutting/validation tabs, HUD reset controls, and cutting box values across PC UI and AR HUD. The Presenter subscribes to model collections and tab index changes, then synchronizes the normal UI, head-lock HUD, and 3D resection controller displays.

## Network and UI Boundary

The key rule was that Views should not know network payload details. Byte offsets, broadcast bits, and command IDs stay in the Model or Presenter; Views receive already-interpreted values and expose user intent. When the server protocol changes, the main work is concentrated around parsing and command mapping, while Unity prefab/component bindings remain more stable.

The structure also separates real-time pose visualization from workflow UI. UDP tracker pose updates are handled by the tracking/controller pipeline, while numerical UI and surgical workflow screens are updated through the MVP layer. This keeps high-frequency tracking data from pulling UI state management into the same class.

## Results

- Split screen logic into `View`, `Model`, and `Presenter` so packet parsing and Unity component control do not live in the same class.
- Connected server receive events, user input, and UI rendering through UniRx `ReactiveProperty`, `ReactiveCollection`, and `IObservable`.
- Reused common workflow logic through `LandmarkBasePresenter` and `GapBasePresenter`.
- Reduced unnecessary UI writes and input/server echo conflicts with `DistinctUntilChanged`, `CompositeDisposable`, and short `Observable.Timer` pauses.
- Created a maintainable UI architecture that can continue expanding across planning, landmark, gap, and resection workflows.
