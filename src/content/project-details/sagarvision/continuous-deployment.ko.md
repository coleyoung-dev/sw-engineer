SagarVision AR System의 CI/CD 구성은 Unity 클라이언트 빌드를 반복 가능한 절차로 만들기 위해 구성한 배포 지원 흐름입니다. 현재는 `Continuous Delivery` 쪽에 초점을 두고, Windows PC 클라이언트와 Android AR Glass 클라이언트의 빌드 설정, 산출물 생성, 히스토리 작성, 전달 과정을 자동화했습니다.

## CI(Continuous Integration)

현재 CI 영역은 작성 준비 중입니다. 추후 GitHub Actions 기반 Unity Test Runner 로직을 연결해, PR 또는 main branch 변경 시 EditMode/PlayMode 테스트를 자동 실행하는 구조로 확장할 예정입니다.

## CD(Continuous Delivery)

### 개요

![SagarVision CI/CD Flow](images_videos/sagarvision/cicd/CD_Flow.svg)

배포 흐름은 Unity Editor 안의 커스텀 빌드 도구에서 시작됩니다. `Config.asset`에 저장된 빌드 대상, 버전, 클라이언트 타입, 네트워크 포트, AR Glass 설정을 기준으로 Windows 또는 Android 산출물을 만들고, 빌드 로그와 히스토리 파일을 함께 정리해 전달 누락을 줄이는 방식입니다.

전체 흐름은 `빌드 설정 선택 -> Unity 빌드 실행 -> 산출물 및 로그 생성 -> Local LLM 기반 히스토리 초안 작성 -> 검수 후 히스토리 파일 생성 -> PowerShell 기반 후처리/전달 자동화` 순서로 구성했습니다.

### Windows

![Windows Build Tool](images_videos/sagarvision/cicd/windows_build.png)

Windows 빌드는 Unity Editor의 `Tools/Custom Build Tool` 메뉴에서 실행하는 IMGUI 기반 커스텀 빌드 창으로 처리했습니다. `PC_Client` 프리셋을 선택하면 Windows 모드에 필요한 TCP, UDP, Image, Log 포트와 서버 이름, 클라이언트 이름이 `Config.asset`에 반영되고, 빌드 시점에는 `StandaloneWindows64` 타깃으로 PC scene만 골라 빌드합니다.

빌드 이름과 버전은 `Config.asset`의 `BuildName`, `BuildWindowsName`, `OfficialVersion` 또는 `TestVersion` 값을 사용합니다. Windows 산출물은 `D:\Win_BuildFiles` 아래에 날짜, 버전, 빌드명을 포함한 폴더를 만든 뒤 저장되도록 구성했고, 빌드가 시작되기 전에 현재 설정을 기반으로 `[BuildInfo]`, `[ServerInfo]`, `[ClientInfo]`가 포함된 로그 파일도 함께 생성했습니다.

또한 Windows 실행 파일은 `KnotRcPatcherProfile`을 통해 회사명, 제품명, 버전, Unity 버전 같은 파일 속성을 빌드 설정과 동기화했습니다. 이를 통해 같은 클라이언트를 여러 번 전달하더라도 파일명, 버전, 내부 로그 기준이 일관되게 남도록 했습니다.

![Local LLM History Draft](images_videos/sagarvision/cicd/localLLM_0.png)

Windows 빌드 이후에는 Local LLM을 활용해 히스토리 파일 초안을 작성하는 흐름을 두었습니다. 빌드 로그와 작업 내용을 입력으로 사용해 변경 사항, 빌드 목적, 전달 시 확인해야 할 내용을 자연어로 정리하고, 사람이 매번 같은 형식의 릴리즈 노트를 수동으로 작성하는 부담을 줄이는 목적입니다.

이 단계는 자동 생성 결과를 그대로 배포물에 포함하는 것이 아니라, 빌드 담당자가 빠르게 검토할 수 있는 초안을 만드는 역할입니다. 특히 의료 AR 클라이언트처럼 버전, 포트, 장비 모드, 테스트 여부가 중요한 프로젝트에서는 빌드 산출물과 함께 남는 히스토리 문서의 일관성이 중요했습니다.

![Local LLM History Review](images_videos/sagarvision/cicd/localLLM_result.png)

Local LLM이 작성한 내용들 검수 한 뒤에 history 파일 작성을 누른다. 검수 단계에서는 실제 포함된 기능 변경, 테스트 버전 여부, 전달 대상, 주의 사항이 맞는지 확인하고, 필요한 문장을 직접 수정한 뒤 히스토리 파일을 생성합니다.

이렇게 한 번의 자동화로 끝내지 않고 사람의 최종 확인 단계를 둔 이유는 배포 문서가 실제 전달 책임과 연결되기 때문입니다. 자동 작성은 초안 생성 속도를 높이고, 최종 기록은 담당자가 승인하는 구조로 분리했습니다.

![PowerShell Automation](images_videos/sagarvision/cicd/powershell.png)

PowerShell 기반 자동화는 Windows 빌드 산출물의 후처리와 전달 준비를 담당합니다. 빌드 폴더, 실행 파일, 로그, 히스토리 파일을 기준에 맞게 정리하고, 전달용 파일 구조를 일정하게 맞추는 방식입니다.

Unity 빌드 도구가 산출물 생성과 설정 저장을 담당한다면, PowerShell 스크립트는 빌드 이후의 운영 작업을 줄이는 역할입니다. 수동으로 파일을 찾아 복사하거나 이름을 맞추는 과정을 줄여, Windows 클라이언트 전달 시 빠뜨리기 쉬운 로그와 히스토리 파일까지 같은 흐름 안에서 확인할 수 있게 했습니다.

### Android

![Android Build Tool](images_videos/sagarvision/cicd/mobile_build.png)

Android 빌드는 같은 커스텀 빌드 도구에서 `Mobile_A`, `Mobile_B` 프리셋을 선택해 처리했습니다. 선택된 프리셋에 따라 TCP, UDP, Image, Log 포트와 `ClientName`이 자동으로 바뀌고, `IsARMode`, `buildARGlass`, `IsInternalTest`, 버전 값을 기준으로 APK 이름과 패키지 설정을 구성합니다.

빌드 대상이 Android일 때는 `BuildPipeline.BuildPlayer`를 실행하기 전에 AR Glass 종류에 맞춰 XR Loader를 자동으로 교체합니다. XREAL 빌드에서는 XREAL Loader를 켜고 OpenXR Loader를 끄며, Metalens2 빌드에서는 OpenXR Loader를 켜고 XREAL Loader를 끄도록 구성했습니다. 이 과정은 장비별 XR 설정 실수를 줄이기 위한 핵심 자동화입니다.

Android 산출물 이름은 AR/NonAR 모드, 장비명, 클라이언트명, 날짜, 버전, 빌드명을 조합해 생성했습니다. 예를 들어 같은 기능 버전이라도 `Mobile_A`, `Mobile_B`, XREAL, Metalens2처럼 전달 대상이 달라질 수 있기 때문에, 파일명 단계에서 대상 장비와 클라이언트 타입이 드러나도록 했습니다.

디바이스 빌드 자동화의 목표는 Android AR Glass 클라이언트 전달 과정에서 반복되는 설정 실수를 줄이는 것이었습니다. 빌드 담당자는 프리셋과 장비 모드를 선택한 뒤 빌드를 실행하고, 결과 APK와 로그를 기준으로 디바이스 설치 및 테스트를 진행할 수 있습니다.
