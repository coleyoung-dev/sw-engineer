SagarVision의 Unity 클라이언트는 수술 workflow 전반에서 백엔드 서버와 TCP 메시지를 주고받습니다. 공유 프로토콜 명세를 SSOT로 삼아 command와 payload offset 코드를 생성하는 스캐폴딩 흐름을 만들었습니다. TCP 상태 갱신은 Polling 구조에서 Push on State 방식으로 전환해 반응성을 개선했습니다.

아래 표와 코드 스니핏은 실제 프로토콜 값이나 운영 코드를 포함하지 않는 더미 예시입니다.

- Client to Server command를 이름 있는 `CommandSet` 값으로 생성했습니다.
- Server to Client payload 정의를 이름 있는 offset helper로 생성했습니다.
- 검증된 TCP packet을 클라이언트 workflow 계층으로 전달했습니다.

## Client to Server

### Protocol Data

| Name | Value | Section | Interaction | Description |
| --- | --- | --- | --- | --- |
| DUMMY_SESSION_START | 10 | System | 세션 시작 | 예시 workflow 세션을 엽니다 |
| DUMMY_PLAN_UPDATE | 20 | Planning | 계획 전송 | 예시 계획의 변경 내용을 보냅니다 |
| DUMMY_VIEW_RESET | 30 | AR View | 화면 초기화 | 예시 AR 화면을 기본 상태로 되돌립니다 |

예시 command 3개는 세션 시작, 계획 변경 전송, AR 화면 초기화를 나타냅니다. 각 행의 이름과 값을 이용해 클라이언트 command enum을 생성합니다.

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

Unity Editor 도구에서 command 3개 행을 함께 불러와 클라이언트 정의를 다시 생성합니다.

### Generated Command Enum

```csharp
public enum CommandSet
{
    DUMMY_SESSION_START = 10,
    DUMMY_PLAN_UPDATE = 20,
    DUMMY_VIEW_RESET = 30
}
```

생성된 이름 3개를 이용해 런타임 코드가 숫자 대신 해당 동작의 command를 선택합니다.

### Runtime Usage

```csharp
void StartSession() =>
    networkManager.SendCommand(CommandSet.DUMMY_SESSION_START);

void SubmitPlan() =>
    networkManager.SendCommand(CommandSet.DUMMY_PLAN_UPDATE);

void ResetView() =>
    networkManager.SendCommand(CommandSet.DUMMY_VIEW_RESET);
```

각 화면 동작은 대응하는 command를 선택하고, packet 전송은 네트워크 계층에서 처리합니다.

## Server to Client

### Protocol Data

| Name | Offset | Type | Length (Byte) | Section | Description |
| --- | --- | --- | --- | --- | --- |
| DUMMY_SESSION_STATE | 10 | Int | 4 | System | 예시 세션 상태 코드 |
| DUMMY_PLAN_REVISION | 14 | Int | 4 | Planning | 예시 계획의 변경 버전 |
| DUMMY_TRACKING_SCORE | 18 | Int | 4 | Tracking | 예시 트래킹 품질 점수 |

예시 응답은 세션 상태, 계획 버전, 트래킹 점수를 담습니다. 각 `Int` 필드는 4바이트이며 offset 10, 14, 18은 packet header를 제외한 payload 기준입니다.

### IMGUI Offset Import

```csharp
if (GUILayout.Button("Generate", GUILayout.Height(30)))
{
    Generate();
}
```

Unity Editor generator는 공유 표의 예시 3개 행을 읽어 타입이 포함된 `ServerOffset` 정의를 생성합니다.

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

실제 생성 파일처럼 각 필드는 payload offset, `FieldType`, byte 길이를 가진 `ServerOffset`으로 정의되고 section별로 묶입니다.

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

이 코드는 실제 `ServerOffset.cs`의 흐름을 따릅니다. `AsInt()`는 필드 타입과 수신 buffer 범위를 검사한 뒤 packet header 크기를 더한 위치에서 값을 읽습니다. `GuardBuffer()`는 header에 기록된 payload 길이도 확인합니다.

### Parsed Data Conversion And Usage

```csharp
model.SessionState.Value =
    Offsets.System.DUMMY_SESSION_STATE.AsInt(readBuffer);
model.PlanRevision.Value =
    Offsets.Planning.DUMMY_PLAN_REVISION.AsInt(readBuffer);
model.TrackingScore.Value =
    Offsets.Tracking.DUMMY_TRACKING_SCORE.AsInt(readBuffer);
```

실제 프로젝트의 런타임 모델처럼 생성된 `ServerOffset` 필드로 더미 값 3개를 읽어 Model/Presenter 계층에 전달합니다.

## TCP Runtime Flow

런타임 흐름은 packet 검증, packet type별 라우팅, 생성 파일 중심의 프로토콜 변경 대응에 초점을 두었습니다. 이를 통해 서버 통신이 바뀌어도 의료 AR 클라이언트를 더 안정적으로 유지할 수 있게 했습니다.
