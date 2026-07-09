SagarVision의 Unity 클라이언트는 수술 단계 전환, Landmark 수집, Planning 값 조정, Gap/Resection 화면 제어처럼 서버와 계속 명령을 주고받아야 했습니다. 초기에 숫자 command와 byte offset을 코드 곳곳에 직접 적으면 프로토콜 문서가 바뀔 때마다 누락과 오타가 생기기 쉬웠기 때문에, Google Spreadsheet에 정리한 TCP 프로토콜 표를 기준으로 C# 코드를 생성하는 자동화 흐름을 만들었습니다.

- Client to Server는 명령 이름과 command id를 `CommandSet` enum으로 생성해 Unity 코드에서 의미 있는 이름으로 전송하게 했습니다.
- Server to Client는 offset, type, length 정보를 `Offsets`와 `ServerOffset` 구조로 생성해 수신 buffer를 타입 안전하게 읽도록 정리했습니다.
- 런타임에서는 `NetworkManager`가 TCP header를 먼저 읽고 payload 크기와 checksum을 검증한 뒤, header type과 command state에 따라 Presenter/Model 계층으로 데이터를 전달합니다.

## Client to Server

### Protocol Data

![Client to Server command spreadsheet](images_videos/sagarvision/tcp/client-to-server/ClientToServerData.png)

클라이언트가 서버로 보내는 command는 Google Spreadsheet의 `C->S(Command)` 탭에서 관리했습니다. 각 행은 command 이름, 숫자 값, 카테고리, 영문 설명, 한글 설명으로 구성되어 있고, 예를 들어 tab 전환, landmark 획득, implant size 조정, foot pedal 입력, AR 테스트 요청 같은 사용자 동작이 하나의 command id로 매핑됩니다. 이 표를 단일 원본으로 두면 기획/서버/클라이언트가 같은 command 번호를 보면서 수정할 수 있고, Unity 코드에서는 숫자 대신 이름을 사용하게 됩니다.

### IMGUI Data Import

![CommandSet generator editor window](images_videos/sagarvision/tcp/client-to-server/getdata.png)

`CommandSet Generator`는 Unity Editor의 IMGUI 기반 도구입니다. Spreadsheet URL, command 이름 컬럼, command 값 컬럼, 데이터 시작 행, output 경로를 입력하면 Google Spreadsheet에서 필요한 열만 읽어옵니다. 버튼 하나로 `Assets/Script/RunTime/System/Network/NetworkProtocol.cs`에 생성 결과를 덮어쓰도록 만들어, 프로토콜 표가 바뀔 때마다 수동으로 enum을 고치는 과정을 줄였습니다.

### Generated Command Enum

![Generated CommandSet enum](images_videos/sagarvision/tcp/client-to-server/result.png)

생성 결과는 `public enum CommandSet`입니다. 각 항목에는 spreadsheet의 설명을 주석으로 남기고, command 이름과 숫자 값을 그대로 매핑합니다. 예를 들어 `FOOT_PEDAL = 50`, `REQ_FEMUR_MAT = 70`, `TAB_PLANNING = 103`처럼 서버와 합의한 숫자는 유지하되, 클라이언트 코드에서는 command의 의도를 읽을 수 있게 했습니다. 자동 생성 영역에는 source sheet gid도 남겨 어떤 표에서 만들어졌는지 추적할 수 있습니다.

### Runtime Usage

![CommandSet usage in NetworkManager](images_videos/sagarvision/tcp/client-to-server/using.png)

런타임에서는 `NetworkManager.Instance.SendCommand((int)CommandSet.FOOT_PEDAL)`처럼 enum을 int로 변환해 전송합니다. `SendCommand`는 command queue와 중복 방지 set을 사용해 같은 command가 대기 중일 때 반복 삽입되지 않도록 처리하고, `SendPacket`에서 TCP header 뒤 payload 영역에 command 값을 little-endian byte로 기록한 뒤 `NetworkStream.Write`로 보냅니다. 화면 Presenter나 Controller는 숫자 프로토콜을 직접 알 필요 없이, 의미 있는 command 이름만 선택해 서버 요청을 보낼 수 있습니다.

## Server to Client

### Protocol Data

![Server to Client offset spreadsheet](images_videos/sagarvision/tcp/server-to-client/ServerToClientData.png)

서버가 클라이언트로 보내는 데이터는 `S->C(Data)` 탭에서 offset table로 관리했습니다. 각 행은 id, index, category, data type, length, description을 포함합니다. 예를 들어 validation count, patient id/name, 현재 tab mode, foot pedal 상태, implant size, gap angle/value 같은 값이 TCP payload의 어느 byte 위치에 어떤 타입으로 들어오는지 정의합니다.

### IMGUI Offset Import

![ServerOffset generator editor window](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor.png)

`ServerOffset Generator`는 offset table을 읽어 `ServerOffsets.generated.cs`를 만드는 Unity Editor 도구입니다. Spreadsheet URL과 함께 id, offset, category, type, length, description 컬럼명을 입력하고 header row를 지정하면, category별로 묶인 offset 정의를 생성합니다. 프로토콜 표에서 index나 length가 바뀌어도 Unity 쪽에서는 generator를 다시 실행해 생성 파일만 갱신하면 됩니다.

### Generated Offset Map

![Generated server offsets](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result.png)

생성 결과는 `Offsets` static class입니다. `Offsets.Landmark.HIP_ERROR = new(528, FieldType.Float, 4)`처럼 카테고리별 nested class 안에 `ServerOffset` 상수를 배치합니다. 주석에는 spreadsheet의 description을 같이 남겨, offset을 사용하는 코드에서 값의 의미와 byte 위치를 동시에 확인할 수 있게 했습니다. 이 구조 덕분에 `HEADER_SIZE + 528` 같은 숫자를 직접 반복하지 않고, 프로토콜 이름을 기준으로 수신 데이터를 읽을 수 있습니다.

### Parsing Logic

![ServerOffset parsing helpers](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_parsing.png)

`ServerOffset`은 `Idx`, `Type`, `Length`를 가진 readonly struct로, 실제 byte 접근 위치를 `NetworkManager.HEADER_SIZE + Idx`로 계산합니다. `AsFloat`, `AsInt`, `AsUnsignedShort`, `AsByte`, `AsBool`, `AsChar`, `AsString`, `AsBytes` 같은 타입별 helper가 있고, 내부 `Guard`가 기대 타입과 실제 정의 타입을 비교합니다. 타입이 맞지 않으면 로그를 남기고 기본값을 반환해, 잘못된 offset 사용을 빨리 발견할 수 있게 했습니다.

### Parsed Data Conversion And Usage

![Parsed server offset usage](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_using.png)

사용 지점에서는 `Offsets.Landmark.HIP_ERROR.AsFloat(readBuffer)`처럼 수신 buffer를 넘겨 의미 있는 값으로 변환합니다. 기존의 `BitConverter.ToSingle(readBuffer, NetworkManager.HEADER_SIZE + 528)` 방식보다 읽기 쉽고, offset 이동이나 type 변경이 생겼을 때 수정 지점이 생성 코드와 호출부의 이름 중심으로 좁혀집니다. 변환된 값은 Model의 reactive property나 Presenter의 화면 갱신 로직으로 전달되어 Landmark validation, Planning 수치 표시, Gap/Resection 상태 표시 등에 사용됩니다.

## TCP Runtime Flow

`NetworkManager`는 서버 탐색 후 TCP main socket, image socket, log socket을 연결하고, 초기 packet에서 UDP packet version, AR mode 여부, 할당된 UDP port를 서버로 전달합니다. 이후 수신 시에는 24 byte header를 먼저 읽어 TCP packet version, header type, payload size, checksum을 확인하고, payload 크기에 맞춰 buffer를 조정합니다. 완성된 packet은 `HeaderType.Initial`, `HeaderType.Data`, `HeaderType.PlanningCpak`, `HeaderType.STLMesh` 등으로 분기되고, 일반 데이터는 command state에 따라 `OnReceive`, `OnReceiveFemurMatrix`, `OnReceiveTibiaMatrix`, `OnReceiveModelData` 같은 Observable stream으로 전달됩니다.

이 자동화의 핵심은 프로토콜 변경을 Unity 코드 전체에 흩뿌리지 않는 것이었습니다. Spreadsheet는 서버와 클라이언트가 공유하는 명세가 되고, IMGUI generator는 그 명세를 Unity에서 바로 사용할 수 있는 enum과 offset helper로 바꿉니다. 덕분에 command 전송, byte 파싱, 화면 반영 흐름을 더 안전하게 유지하면서도, 의료 AR 클라이언트에 필요한 빠른 프로토콜 변경 대응이 가능해졌습니다.
