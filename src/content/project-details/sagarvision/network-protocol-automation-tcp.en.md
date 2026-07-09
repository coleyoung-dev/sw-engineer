SagarVision's Unity client continuously exchanges TCP messages with the backend server for surgical workflow changes, landmark acquisition, planning adjustments, gap/resection screens, and AR state. To avoid scattering raw command numbers and byte offsets across the codebase, I built a protocol automation flow that generates C# code from Google Spreadsheet protocol tables.

- Client to Server commands are generated as a `CommandSet` enum.
- Server to Client payload offsets are generated as `Offsets` and `ServerOffset` helpers.
- At runtime, `NetworkManager` reads the TCP header first, validates payload size and checksum, then routes packets to the relevant Model/Presenter layer.

## Client to Server

### Protocol Data

![Client to Server command spreadsheet](images_videos/sagarvision/tcp/client-to-server/ClientToServerData.png)

Client commands are managed in the spreadsheet's `C->S(Command)` tab. Each row contains a command name, numeric value, category, English description, and Korean description. Actions such as tab switching, landmark acquisition, implant-size changes, foot-pedal input, and AR test requests are mapped to agreed command ids.

### IMGUI Data Import

![CommandSet generator editor window](images_videos/sagarvision/tcp/client-to-server/getdata.png)

The `CommandSet Generator` is a Unity IMGUI editor tool. It receives the spreadsheet URL, name column, value column, start row, and output path, then reads the required table data and regenerates `Assets/Script/RunTime/System/Network/NetworkProtocol.cs`.

### Generated Command Enum

![Generated CommandSet enum](images_videos/sagarvision/tcp/client-to-server/result.png)

The generated output is a `public enum CommandSet`. Spreadsheet descriptions are preserved as comments, while command names and numeric values are mapped directly, such as `FOOT_PEDAL = 50`, `REQ_FEMUR_MAT = 70`, and `TAB_PLANNING = 103`.

### Runtime Usage

![CommandSet usage in NetworkManager](images_videos/sagarvision/tcp/client-to-server/using.png)

Runtime code sends commands with calls such as `NetworkManager.Instance.SendCommand((int)CommandSet.FOOT_PEDAL)`. `SendCommand` uses a queue and duplicate-prevention set, while `SendPacket` writes the command bytes after the TCP header and sends the packet through `NetworkStream.Write`.

## Server to Client

### Protocol Data

![Server to Client offset spreadsheet](images_videos/sagarvision/tcp/server-to-client/ServerToClientData.png)

Server payload fields are managed as an offset table in the `S->C(Data)` tab. Each row defines id, index, category, data type, length, and description for values such as validation count, patient information, current tab mode, foot-pedal state, implant size, and gap values.

### IMGUI Offset Import

![ServerOffset generator editor window](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor.png)

The `ServerOffset Generator` reads the spreadsheet columns for id, offset, category, type, length, and description, then generates `ServerOffsets.generated.cs`. When the protocol table changes, Unity can update its generated offset definitions without manually editing parsing code.

### Generated Offset Map

![Generated server offsets](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result.png)

The generated output is a static `Offsets` class. Category-specific nested classes expose values such as `Offsets.Landmark.HIP_ERROR = new(528, FieldType.Float, 4)`, with comments copied from the protocol table.

### Parsing Logic

![ServerOffset parsing helpers](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_parsing.png)

`ServerOffset` stores `Idx`, `Type`, and `Length`, then computes the real byte position as `NetworkManager.HEADER_SIZE + Idx`. Helpers such as `AsFloat`, `AsInt`, `AsUnsignedShort`, `AsByte`, `AsBool`, `AsChar`, `AsString`, and `AsBytes` parse a received buffer while `Guard` logs mismatched type usage.

### Parsed Data Conversion And Usage

![Parsed server offset usage](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_using.png)

Call sites read data through named offsets, for example `Offsets.Landmark.HIP_ERROR.AsFloat(readBuffer)`. This replaces raw expressions like `BitConverter.ToSingle(readBuffer, NetworkManager.HEADER_SIZE + 528)` with a named, generated protocol accessor.

## TCP Runtime Flow

`NetworkManager` connects the main TCP socket, image socket, and log socket after server discovery. The initial packet sends UDP packet version, AR mode, and the assigned UDP port. During receive, the client reads the 24-byte header, checks TCP packet version, header type, payload size, and checksum, then resizes the buffer if needed. Completed packets are routed by `HeaderType.Initial`, `HeaderType.Data`, `HeaderType.PlanningCpak`, `HeaderType.STLMesh`, and related types into Observable streams such as `OnReceive`, `OnReceiveFemurMatrix`, `OnReceiveTibiaMatrix`, and `OnReceiveModelData`.

The main result was keeping protocol changes concentrated around the spreadsheet and generated files instead of spreading raw numbers throughout Unity UI and workflow code. This made TCP command sending, payload parsing, and screen updates easier to maintain as the medical AR protocol evolved.
