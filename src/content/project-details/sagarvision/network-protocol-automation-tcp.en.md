SagarVision's Unity client exchanges TCP messages with the backend server throughout the surgical workflow. I built a protocol automation flow so command names and payload offsets could stay aligned with the shared protocol table without scattering raw numbers through the client.

- Generated client-to-server commands as named `CommandSet` values.
- Generated server-to-client payload definitions as named offset helpers.
- Routed validated TCP packets into the client workflow layer.

## Client to Server

### Protocol Data

![Client to Server command spreadsheet](images_videos/sagarvision/tcp/client-to-server/ClientToServerData.png)

Client commands were managed in a shared spreadsheet so planning, landmark, AR state, and device actions had one source of truth.

### IMGUI Data Import

![CommandSet generator editor window](images_videos/sagarvision/tcp/client-to-server/getdata.png)

The Unity editor tool imported the command table and regenerated the client-side command definitions.

### Generated Command Enum

![Generated CommandSet enum](images_videos/sagarvision/tcp/client-to-server/result.png)

The generated enum let runtime code send meaningful command names instead of hard-coded numeric values.

### Runtime Usage

![CommandSet usage in NetworkManager](images_videos/sagarvision/tcp/client-to-server/using.png)

Screen logic could request server actions through named commands while the network layer handled packet sending.

## Server to Client

### Protocol Data

![Server to Client offset spreadsheet](images_videos/sagarvision/tcp/server-to-client/ServerToClientData.png)

Server payload fields were managed as a shared offset table for values used across planning, validation, gap, and resection screens.

### IMGUI Offset Import

![ServerOffset generator editor window](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor.png)

The offset generator turned the shared table into Unity-side definitions that could be refreshed when the protocol changed.

### Generated Offset Map

![Generated server offsets](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result.png)

Named offsets made received data easier to read and reduced manual byte-position handling.

### Parsing Logic

![ServerOffset parsing helpers](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_parsing.png)

Parsing helpers converted received buffers into typed values and helped catch mismatched usage earlier.

### Parsed Data Conversion And Usage

![Parsed server offset usage](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_using.png)

Parsed values were passed into the Model/Presenter layer so UI and workflow screens could react to server state.

## TCP Runtime Flow

The runtime flow focused on stable packet validation, clear routing by packet type, and keeping protocol changes concentrated around generated files. This made the medical AR client easier to maintain as server communication evolved.
