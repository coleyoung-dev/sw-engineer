SagarVision's Unity client exchanges TCP messages with the backend server throughout the surgical workflow. I used the shared protocol specification as a single source of truth (SSOT) to scaffold command and payload-offset code. I also changed TCP state updates from polling to a push-on-state flow to improve responsiveness.

The tables and code snippets below use illustrative dummy data, not actual protocol values or production code.

- Generated client-to-server commands as named `CommandSet` values.
- Generated server-to-client payload definitions as named offset helpers.
- Routed validated TCP packets into the client workflow layer.

## Client to Server

### Protocol Data

| Name | Value | Section | Interaction | Description |
| --- | --- | --- | --- | --- |
| DUMMY_SESSION_START | 10 | System | Start session | Opens a sample workflow session |
| DUMMY_PLAN_UPDATE | 20 | Planning | Submit plan | Sends a sample plan revision |
| DUMMY_VIEW_RESET | 30 | AR View | Reset view | Returns the sample AR view to its default state |

The sample command rows cover session start, plan update, and AR view reset. Each row supplies a name and value for the generated client command enum.

### IMGUI Data Import

```csharp
if (GUILayout.Button("Import Command Data"))
{
    GenerateCommandSet(new[]
    {
        ("DUMMY_SESSION_START", 10),
        ("DUMMY_PLAN_UPDATE", 20),
        ("DUMMY_VIEW_RESET", 30)
    });
}
```

The Unity editor tool imports all three command rows and regenerates the client-side definitions together.

### Generated Command Enum

```csharp
public enum CommandSet
{
    DUMMY_SESSION_START = 10,
    DUMMY_PLAN_UPDATE = 20,
    DUMMY_VIEW_RESET = 30
}
```

All three generated names let runtime code use the matching command instead of a hard-coded numeric value.

### Runtime Usage

```csharp
void StartSession() =>
    networkManager.SendCommand(CommandSet.DUMMY_SESSION_START);

void SubmitPlan() =>
    networkManager.SendCommand(CommandSet.DUMMY_PLAN_UPDATE);

void ResetView() =>
    networkManager.SendCommand(CommandSet.DUMMY_VIEW_RESET);
```

Each screen action selects its corresponding command; the network layer handles packet sending.

## Server to Client

### Protocol Data

| Name | Offset | Type | Length (Byte) | Section | Description |
| --- | --- | --- | --- | --- | --- |
| DUMMY_SESSION_STATE | 10 | Int | 4 | System | Sample session state code |
| DUMMY_PLAN_REVISION | 14 | Int | 4 | Planning | Revision number of the sample plan |
| DUMMY_TRACKING_SCORE | 18 | Int | 4 | Tracking | Sample tracking quality score |

The sample response contains a session state, plan revision, and tracking score. Each `Int` field is 4 bytes; the offsets 10, 14, and 18 are relative to the payload, excluding the packet header.

### IMGUI Offset Import

```csharp
if (GUILayout.Button("Generate", GUILayout.Height(30)))
{
    Generate();
}
```

The Unity editor generator reads the three sample rows from the shared table and creates typed `ServerOffset` definitions.

### Generated Offset Map

```csharp
public static class Offsets
{
    public static class System
    {
        public static readonly ServerOffset DUMMY_SESSION_STATE =
            new(10, FieldType.Int, 4);
    }

    public static class Planning
    {
        public static readonly ServerOffset DUMMY_PLAN_REVISION =
            new(14, FieldType.Int, 4);
    }

    public static class Tracking
    {
        public static readonly ServerOffset DUMMY_TRACKING_SCORE =
            new(18, FieldType.Int, 4);
    }
}
```

As in the project's generated file, each field is a `ServerOffset` with a payload offset, `FieldType`, and byte length, grouped by section.

### Parsing Logic

```csharp
private int Abs => NetworkManager.HEADER_SIZE + Idx;

public int AsInt(byte[] buffer)
{
    if (!Guard(FieldType.Int) || !GuardBuffer(buffer))
        return 0;

    return BitConverter.ToInt32(buffer, Abs);
}
```

This excerpt follows the real `ServerOffset.cs`: `AsInt()` checks the declared field type and received buffer bounds, then adds the packet header size before reading. `GuardBuffer()` also checks the payload length recorded in the header.

### Parsed Data Conversion And Usage

```csharp
model.SessionState.Value =
    Offsets.System.DUMMY_SESSION_STATE.AsInt(readBuffer);
model.PlanRevision.Value =
    Offsets.Planning.DUMMY_PLAN_REVISION.AsInt(readBuffer);
model.TrackingScore.Value =
    Offsets.Tracking.DUMMY_TRACKING_SCORE.AsInt(readBuffer);
```

The Model/Presenter layer reads the three dummy fields through their generated `ServerOffset` entries, as the project's runtime models do for real fields.

## TCP Runtime Flow

The runtime flow focused on stable packet validation, clear routing by packet type, and keeping protocol changes concentrated around generated files. This made the medical AR client easier to maintain as server communication evolved.
