The UniRx-based MVP architecture separated SagarVision's workflow UI, server-driven state, and AR/PC display behavior into clearer layers. The goal was to make the Unity client easier to extend as planning, landmark, gap, and resection screens evolved.

![UniRx-based MVP architecture data flow](images_videos/sagarvision-unirx-mvp-flow.svg)

## Why It Was Needed

SagarVision receives user input, server results, tracker state, and HUD visibility changes at the same time. Keeping those responsibilities in large MonoBehaviours made feature changes harder to manage, so the UI layer was reorganized around MVP.

## Layer Responsibilities

`View` kept Unity object references and exposed user intent. `Model` held interpreted server state. `Presenter` connected both sides, handled subscriptions, sent commands, and decided how each screen should react.

## UniRx Binding Flow

UniRx made server updates and user actions flow through the same reactive pattern. This helped reduce repeated UI writes and made screen state changes easier to follow.

## Screen-Level Application

Shared workflow behavior was moved into common presenter/view/model bases, while screen-specific logic stayed in each feature area. This kept repeated landmark, gap, planning, and resection behavior from spreading across unrelated classes.

## Network and UI Boundary

Network details stayed outside the View layer. Views received meaningful state and emitted meaningful actions, while parsing and command mapping stayed closer to Model and Presenter code.

## Results

- Split UI responsibilities into `View`, `Model`, and `Presenter`.
- Connected server state, user input, and rendering updates with UniRx.
- Reused common workflow behavior across related screens.
- Reduced coupling between protocol handling and Unity component control.
- Prepared the client for continued workflow expansion.
