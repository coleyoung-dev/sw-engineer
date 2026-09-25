SagarVision AR System의 CI/CD 구성은 코드 검증부터 Unity 클라이언트 빌드·배포까지 반복 가능한 절차로 만든 자동화 흐름입니다.

## CI(Continuous Integration)

![SagarVision CI Gate Flow](images_videos/sagarvision/cicd/ci_gate_flow.png)

Draft PR에 코드가 push되면 GitHub Actions가 최신 커밋을 기준으로 CI Gate를 실행합니다.

### 필수 품질 게이트

- Roslyn 컴파일과 Unity 안티패턴, C# 안정성·성능·보안, 코드 컨벤션을 정적 분석했습니다.
- Unity EditMode 유닛 테스트 후 실제 C++ 서버와 연동한 PlayMode 통합 테스트를 실행했습니다.
- 단계별 실패 시 이후 작업을 중단해 검증되지 않은 코드의 병합을 차단했습니다.

![GitHub Actions CI Pipeline](images_videos/sagarvision/cicd/github_actions_pipeline.png)

### 자동화 결과

필수 게이트를 통과하면 Draft PR을 리뷰 가능 상태로 전환합니다. 동시에 CycloneDX SBOM과 RTM 기반 테스트 결과 문서를 생성하고, 최종 CI 산출물로 통합해 추적성을 확보했습니다.

## CD(Continuous Delivery)

### 개요

![SagarVision CI/CD Flow](images_videos/sagarvision/cicd/CD_Flow.svg)

배포 흐름은 Unity Editor 안의 커스텀 빌드 도구에서 시작됩니다. 빌드 대상, 버전, 클라이언트 타입, 장비 설정을 기준으로 산출물과 로그를 함께 정리해 전달 누락을 줄였습니다.

### Windows

![Windows Build Tool](images_videos/sagarvision/cicd/windows_build.png)

Windows 빌드는 전용 프리셋과 빌드 설정을 사용해 실행했습니다. 파일명, 버전, 로그 기준을 일정하게 맞춰 같은 클라이언트를 반복 전달할 때 혼선을 줄였습니다.

![Local LLM History Draft](images_videos/sagarvision/cicd/localLLM_0.png)

빌드 이후에는 Local LLM을 활용해 변경 이력 초안을 빠르게 만들 수 있도록 했습니다. 반복되는 릴리즈 노트 작성 부담을 줄이고, 검토해야 할 내용을 빠르게 정리하는 목적입니다.

![Local LLM History Review](images_videos/sagarvision/cicd/localLLM_result.png)

자동 생성된 내용은 담당자가 검토한 뒤 최종 기록으로 남기도록 했습니다. 배포 문서는 실제 전달 책임과 연결되므로, 자동화와 사람의 확인 단계를 분리했습니다.

![PowerShell Automation](images_videos/sagarvision/cicd/powershell.png)

PowerShell 자동화는 빌드 이후 산출물 정리와 전달 준비를 담당했습니다. 실행 파일, 로그, 히스토리 파일을 일정한 구조로 모아 수동 작업에서 생기는 누락을 줄였습니다.

### Android

![Android Build Tool](images_videos/sagarvision/cicd/mobile_build.png)

Android 빌드는 프리셋과 장비 모드에 따라 설정을 바꾸고 APK 산출물을 만들도록 구성했습니다. AR Glass 대상과 클라이언트 타입이 파일명과 설정에 반영되도록 해 전달 대상을 명확히 했습니다.

디바이스 빌드 자동화의 목표는 반복되는 설정 실수를 줄이는 것이었습니다. 빌드 담당자는 필요한 프리셋을 선택하고, 산출물과 로그를 기준으로 설치 및 테스트를 진행할 수 있습니다.
