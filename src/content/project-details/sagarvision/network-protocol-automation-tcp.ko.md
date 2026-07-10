SagarVision의 Unity 클라이언트는 수술 workflow 전반에서 백엔드 서버와 TCP 메시지를 주고받습니다. 저는 command 이름과 payload offset이 공유 프로토콜 표와 맞춰지도록 자동화 흐름을 만들고, 숫자 값이 클라이언트 코드 곳곳에 흩어지지 않게 정리했습니다.

- Client to Server command를 이름 있는 `CommandSet` 값으로 생성했습니다.
- Server to Client payload 정의를 이름 있는 offset helper로 생성했습니다.
- 검증된 TCP packet을 클라이언트 workflow 계층으로 전달했습니다.

## Client to Server

### Protocol Data

![Client to Server command spreadsheet](images_videos/sagarvision/tcp/client-to-server/ClientToServerData.png)

Planning, Landmark, AR 상태, 장비 동작 command를 공유 spreadsheet에서 관리해 단일 기준을 만들었습니다.

### IMGUI Data Import

![CommandSet generator editor window](images_videos/sagarvision/tcp/client-to-server/getdata.png)

Unity Editor 도구에서 command 표를 불러와 클라이언트 command 정의를 다시 생성하도록 했습니다.

### Generated Command Enum

![Generated CommandSet enum](images_videos/sagarvision/tcp/client-to-server/result.png)

생성된 enum을 통해 런타임 코드가 숫자 대신 의미 있는 command 이름을 사용하게 했습니다.

### Runtime Usage

![CommandSet usage in NetworkManager](images_videos/sagarvision/tcp/client-to-server/using.png)

화면 로직은 이름 있는 command로 서버 동작을 요청하고, packet 전송은 네트워크 계층에서 처리했습니다.

## Server to Client

### Protocol Data

![Server to Client offset spreadsheet](images_videos/sagarvision/tcp/server-to-client/ServerToClientData.png)

서버 payload field는 Planning, Validation, Gap, Resection 화면에서 쓰는 값들을 공유 offset table로 관리했습니다.

### IMGUI Offset Import

![ServerOffset generator editor window](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor.png)

Offset generator는 공유 표를 Unity 정의로 변환해, 프로토콜 변경 시 생성 파일을 갱신할 수 있게 했습니다.

### Generated Offset Map

![Generated server offsets](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result.png)

이름 있는 offset을 사용해 수신 데이터를 읽기 쉽게 만들고 수동 byte 위치 계산을 줄였습니다.

### Parsing Logic

![ServerOffset parsing helpers](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_parsing.png)

Parsing helper는 수신 buffer를 타입 값으로 변환하고, 잘못된 사용을 더 빨리 발견할 수 있게 했습니다.

### Parsed Data Conversion And Usage

![Parsed server offset usage](images_videos/sagarvision/tcp/server-to-client/ServerToClientData_GetDataFromEditor_result_using.png)

변환된 값은 Model/Presenter 계층으로 전달되어 UI와 workflow 화면이 서버 상태에 반응하도록 했습니다.

## TCP Runtime Flow

런타임 흐름은 packet 검증, packet type별 라우팅, 생성 파일 중심의 프로토콜 변경 대응에 초점을 두었습니다. 이를 통해 서버 통신이 바뀌어도 의료 AR 클라이언트를 더 안정적으로 유지할 수 있게 했습니다.
