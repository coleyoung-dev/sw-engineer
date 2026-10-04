export const navItems = [
  { id: "featuredproject", label: "Projects", koLabel: "프로젝트" },
  { id: "workexperience", label: "Experience", koLabel: "경력" },
  { id: "engineering", label: "Side Projects", koLabel: "사이드 프로젝트" },
  { id: "techstacksection", label: "Tech Stack", koLabel: "기술 스택" },
];

export const languages = [
  { code: "en", label: "EN", ariaLabel: "Switch to English" },
  { code: "ko", label: "KR", ariaLabel: "한국어로 전환" },
];

export const uiText = {
  en: {
    header: {
      logo: "CHANYOUNG HONG",
    },
    hero: {
      name: "CHANYOUNG HONG",
      subtitle: "Software Engineer",
      headline: "Software that bridges healthcare and technology",
      description:
        "I develop surgical navigation clients that connect device communication, real-time visualization, and dependable delivery.",
      platforms: "Medical Software · Spatial Computing · Computer Vision",
      contact: "Contact by Email",
      projects: "View Projects",
      scroll: "Scroll down to see projects",
      initials: "HCY",
      profileKicker: "Software Engineer",
      profileTags: ["C#", "Unity", "Medical Device SW", "Socket", "Computer Vision"],
      photoAlt: "Explaining an AR headset demonstration at an exhibition",
    },
    sections: {
      featuredProjects: "Selected Projects",
      sideProjects: "Additional Projects",
      engineering: "Side Projects",
      techStack: "Tech Stack",
      workExperiences: "Work Experience",
    },
    projectDetail: {
      back: "Back to Projects",
      open: "Open Case Study",
      metaTitle: "Project Details",
      role: "My Role",
      timeline: "Timeline",
      team: "Team",
      category: "Target Platform",
      relatedPage: "Related Page",
      overview: "Overview",
      description: "Details",
      architecture: "System Architecture",
      focus: "My Responsibilities & Technical Challenges",
      process: "Engineering Decisions",
      outcomes: "Result / Impact",
      detailContentTitle: "Case Study Details",
      openDetailContent: "Open Detail",
      coreCaseStudies: "Core engineering contributions",
      coreCaseStudiesCopy: "The work most relevant to reliable medical-device client software is summarized here first.",
      additionalCaseStudies: "Additional technical details",
      viewFullCaseStudy: "View full case study",
      backToProject: "Back to Project",
      reflection: "Reflection",
      reflectionCopy:
        "This work reflects a real-time engineering practice: connecting device data, client architecture, visualization, and delivery constraints into reliable application behavior.",
    },
  },
  ko: {
    header: {
      logo: "홍찬영",
    },
    hero: {
      name: "홍찬영",
      subtitle: "소프트웨어 엔지니어",
      headline: "의료 현장과 기술을 연결하는 소프트웨어",
      description:
        "수술 내비게이션 클라이언트에서 장비 통신, 실시간 시각화, 안정적인 배포까지 구현합니다.",
      platforms: "의료 소프트웨어 · Spatial Computing · Computer Vision",
      contact: "이메일로 연락하기",
      projects: "프로젝트 보기",
      scroll: "아래로 스크롤해 프로젝트를 확인하세요",
      initials: "HCY",
      profileKicker: "Software Engineer",
      profileTags: ["C#", "Unity", "의료기기 SW", "Socket", "Computer Vision"],
      photoAlt: "전시 현장에서 AR 헤드셋 시연을 설명하는 모습",
    },
    sections: {
      featuredProjects: "주요 프로젝트",
      sideProjects: "추가 프로젝트",
      engineering: "사이드 프로젝트",
      techStack: "기술 스택",
      workExperiences: "경력",
    },
    projectDetail: {
      back: "프로젝트 목록으로",
      open: "상세 보기",
      metaTitle: "프로젝트 정보",
      role: "담당 역할",
      timeline: "기간",
      team: "팀",
      category: "타겟 플랫폼",
      relatedPage: "관련 페이지",
      overview: "개요",
      description: "상세 설명",
      architecture: "시스템 아키텍처",
      focus: "담당 업무 및 기술 과제",
      process: "엔지니어링 의사결정",
      outcomes: "결과 및 영향",
      detailContentTitle: "상세 사례",
      openDetailContent: "상세 보기",
      coreCaseStudies: "핵심 구현 사례",
      coreCaseStudiesCopy: "의료기기 클라이언트의 안정성과 유지보수성에 직접 연결되는 작업을 먼저 정리했습니다.",
      additionalCaseStudies: "추가 기술 사례",
      viewFullCaseStudy: "전체 사례 보기",
      backToProject: "프로젝트로 돌아가기",
      reflection: "회고",
      reflectionCopy:
        "이 프로젝트를 통해 제품 목표를 안정적인 Unity 클라이언트 기능으로 구현하고, 플랫폼 제약과 네이티브 연동, 런타임 성능 사이의 균형을 맞추는 경험을 쌓았습니다.",
    },
  },
};

export const platformIcons = [
  { icon: "bi-phone", label: "Android", koLabel: "Android" },
  { icon: "bi-window", label: "Windows", koLabel: "Windows" },
];

const legacyProjects = [
  {
    title: "Sagarvision",
    koTitle: "Sagarvision",
    slug: "sagarvision-ar-system",
    location: "Skyve Medical Technology Innovation Team / 2025.04 - Present",
    koLocation: "스카이브 의료기술혁신팀 / 2025.04 ~ 진행 중",
    showLocationInOverview: false,
    caseStudiesTitle: "Technical Implementation Cases",
    koCaseStudiesTitle: "기술 구현 사례",
    outcomesTitle: "Achievements and Results",
    koOutcomesTitle: "성과 및 결과",
    description:
      "Developing the full range of client screens, including 2D UI and 3D visualization, for an AR glasses and Windows surgical navigation system supporting total knee replacement.",
    koDescription:
      "무릎 인공관절 치환술을 지원하는 수술 내비게이션 시스템에서 AR 글래스와 Windows용 클라이언트의 2D UI와 3D 시각화를 포함한 화면 전반을 개발합니다.",
    detailDescription:
      "I implement 2D UI for each surgical stage, AR glasses-specific interactions, and 3D visualization. I reflect surgical state and tracking data received over TCP and UDP sockets on screen in real time. I also build a reactive MVP structure and automated verification workflow, and manage the traceability of development documents and verification results in support of IEC 62304.",
    koDetailDescription:
      "수술 단계별 2D UI, AR 글래스 전용 상호작용, 3D 시각화를 구현합니다. TCP·UDP 소켓 통신으로 수신한 수술 상태와 트래킹 데이터를 화면에 실시간으로 반영합니다. 반응형 MVP 구조와 자동 검증 흐름을 구성하고, IEC 62304 대응에 필요한 개발 문서와 검증 결과의 추적성을 관리합니다.",
    icon: "bi-activity",
    image: "images_videos/sagarvision.png",
    imageAlt: "Sagarvision thumbnail",
    koImageAlt: "Sagarvision 썸네일",
    tags: ["Unity", "C#", "Socket Network", "Android", "Windows", "MVP", "Reactive Programming", "CI/CD", "Testing Automation", "Agentic Workflow Engineering"],
    statuses: [
      {
        type: "Approved",
        text: "NIFDS regulatory approval",
        koText: "식품의약품안전평가원(NIFDS) 인허가 승인",
      },
    ],
    detailMeta: [
      { label: "Timeline", koLabel: "기간", value: "2025.04 - Present", koValue: "2025.04 ~ 진행 중" },
      {
        label: "Responsibilities",
        koLabel: "담당 업무",
        value: "Android-based AR glasses and Windows client development",
        koValue: "Android 기반 AR 글래스 및 Windows 클라이언트 개발",
      },
      {
        label: "Team Composition",
        koLabel: "구성 인원",
        listItems: [
          { label: "1 client developer", koLabel: "클라이언트 개발자 1명(본인)" },
          { label: "1 server developer", koLabel: "서버 개발자 1명" },
          { label: "1 PM", koLabel: "PM 1명" },
          { label: "Regulatory approval team", koLabel: "인허가 팀" },
          { label: "Surgical instruments team", koLabel: "수술 기구물 팀" },
        ],
      },
      {
        label: "Connected Devices",
        koLabel: "연동 장비",
        items: [
          { label: "IR Camera" },
          { label: "Windows Laptop" },
          { label: "Metalense", href: "https://www.pncsolution.co.kr/metalense/" },
        ],
      },
    ],
    focus: [],
    koFocus: [],
    process: [],
    architecture: [],
    koArchitecture: [],
    koProcess: [],
    outcomes: [
      "Improved app performance and the internal software development workflow.",
      {
        text: "Supported SagarVision AR technology at the AAOS 2026 exhibition.",
        href: "https://economist.co.kr/article/view/ecn202603090048",
      },
      "NIFDS regulatory approval, including preparation of IEC 62304 development documentation.",
    ],
    koOutcomes: [
      "앱 성능과 사내 소프트웨어 개발 워크플로를 개선했습니다.",
      {
        text: "2026 미국정형외과학회(AAOS) 전시에서 SagarVision AR 기술 지원을 진행했습니다.",
        href: "https://economist.co.kr/article/view/ecn202603090048",
      },
      "식품의약품안전평가원(NIFDS) 인허가 승인 과정에서 IEC 62304 개발 문서를 작성했습니다.",
    ],
    reflection: false,
    detailContents: [
      {
        slug: "graphics",
        title: "AR Rendering and Graphics",
        koTitle: "AR 렌더링 및 그래픽스",
        summary: "BVH surface projection, RenderTexture compositing, and HLSL visual feedback.",
        koSummary: "BVH 표면 투영, RenderTexture 합성, HLSL 시각 피드백",
        markdownPath: "./content/project-details/sagarvision/graphics.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/graphics.ko.md",
        inline: true,
        inlineOrder: 4,
        highlights: [
          "Projected probe positions onto bone surfaces with a BVH-based closest-point search.",
          "Composited resection guidance in the AR HUD with luma keying and outlines.",
          "Highlighted projected points in real time with HLSL materials.",
        ],
        koHighlights: [
          "BVH 기반 최근접점 탐색으로 프로브 위치를 뼈 표면에 투영했습니다.",
          "Luma keying과 outline으로 절단 보조 정보를 AR HUD에 합성했습니다.",
          "HLSL material로 투영 지점을 실시간 하이라이팅했습니다.",
        ],
      },
      {
        slug: "mvp-architecture",
        title: "Reactive Programming-Based MVP Architecture",
        koTitle: "Reactive Programming 기반 MVP 아키텍처",
        summary: "Reactive MVP structure for separating Unity UI, workflow state, and network-driven data.",
        koSummary: "Unity UI, 워크플로우 상태, 네트워크 기반 데이터를 분리한 Reactive MVP 구조",
        markdownPath: "./content/project-details/sagarvision/mvp-architecture.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/mvp-architecture.ko.md",
        inline: true,
        inlineOrder: 3,
        highlights: [
          "Separated TCP and UDP data in the Model, UI in the View, and data binding and business logic in the Presenter.",
          "Handled server state updates and user input reactively.",
        ],
        koHighlights: [
          "Model(TCP·UDP 데이터), View(UI), Presenter(데이터 바인딩과 비즈니스 로직)로 역할을 분리했습니다.",
          "서버 상태 갱신과 사용자 입력을 반응형으로 처리했습니다.",
        ],
      },
      {
        slug: "network-protocol-automation-tcp",
        title: "Network Protocol Automation and TCP Communication",
        koTitle: "네트워크 프로토콜 자동화 및 TCP 통신",
        summary: "TCP/IP communication and SSOT-based protocol code generation to keep server state consistent across Windows client and AR glasses screens.",
        koSummary: "서버 상태를 Windows 클라이언트와 AR 글래스 화면에 일관되게 반영하기 위한 TCP/IP 통신과 SSOT 기반 프로토콜 코드 생성 자동화",
        markdownPath: "./content/project-details/sagarvision/network-protocol-automation-tcp.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/network-protocol-automation-tcp.ko.md",
        inline: true,
        inlineOrder: 1,
        highlights: [
          "Scaffolded protocol code from a single source of truth (SSOT).",
        ],
        koHighlights: [
          "SSOT 기반으로 네트워크 프로토콜 코드를 스캐폴딩했습니다.",
        ],
      },
      {
        slug: "real-time-tracking-udp",
        title: "Real-Time Tracking and UDP Communication",
        koTitle: "실시간 트래킹 및 UDP 통신",
        summary: "UDP tracking data flow for visualizing marker positions in real time.",
        koSummary: "마커 위치를 실시간으로 시각화하기 위한 UDP 트래킹 데이터 흐름",
        markdownPath: "./content/project-details/sagarvision/real-time-tracking-udp.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/real-time-tracking-udp.ko.md",
        inline: true,
        inlineOrder: 2,
        highlights: [
          "Converted IR camera marker positions into the server world coordinate system for computation.",
          "Converted received positions into Unity coordinates and displayed them in real time.",
          "Separated parsing from business logic across threads and dispatched UI updates to Unity's main thread.",
        ],
        koHighlights: [
          "IR 카메라 데이터로 계산한 마커 위치를 서버의 월드 좌표계로 변환해 계산했습니다.",
          "수신한 위치를 Unity 좌표계로 변환해 클라이언트에 실시간으로 표시했습니다.",
          "멀티스레드로 데이터 파싱과 비즈니스 로직을 분리하고, Dispatcher를 통해 UI 갱신을 메인 스레드에서 처리했습니다.",
        ],
      },
      {
        slug: "continuous-deployment",
        title: "CI/CD System Configuration",
        koTitle: "CI/CD System 구성",
        summary: "Automated quality verification in support of IEC 62304 and repeatable client delivery.",
        koSummary: "IEC 62304 대응을 위한 자동 품질 검증 시스템과 반복 가능한 클라이언트 배포 흐름",
        markdownPath: "./content/project-details/sagarvision/continuous-deployment.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/continuous-deployment.ko.md",
      },
    ],
  },
  {
    title: "Hyundai Duty Free AR Adventure Pass",
    koTitle: "현대백화점 면세점 AR 어드벤처 패스",
    location: "HyperCloud · XR Team · 2023.10 - 2024.02",
    koLocation: "하이퍼클라우드 XR Team · 2023.10 ~ 2024.02",
    description:
      "Built AR app content and XR device experiences for Hyundai Duty Free, covering recognition, Quest 3 content, AR Glass content, and booth QA support.",
    koDescription:
      "현대백화점 면세점의 AR 앱 콘텐츠와 XR 기기 체험을 개발하며 인식 기능, Quest 3, AR Glass, 부스 QA를 함께 지원했습니다.",
    icon: "bi-bag-check",
    image: "images_videos/hyundai.png",
    imageAlt: "Hyundai Duty Free AR Adventure Pass thumbnail",
    koImageAlt: "현대백화점 면세점 AR 어드벤처 패스 썸네일",
    tags: ["Unity", "ARFoundation", "TFLite", "Meta Quest 3", "OVR Toolkit", "Snapdragon Spaces", "Android Plugin", "QA"],
    role: "AR & VR Client Engineer",
    koRole: "AR & VR 클라이언트 엔지니어",
    timeline: "2023.10 - 2024.02",
    koTimeline: "2023.10 ~ 2024.02",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Mobile (Android / iOS), Meta Quest 3, Android AR Glass",
    koCategory: "Mobile (Android / iOS), Meta Quest 3, Android AR Glass",
    relatedPage: {
      label: "현대백화점 면세점 AR 어드벤처 패스",
      href: "https://www.hyper-cloud.kr/ko/blog/Hyundai-Popup-Stamprally",
    },
    focus: [
      "Build AR and XR experiences for a retail brand campaign.",
      "Connect recognition, Quest 3, and AR Glass features in Unity.",
      "Prepare the content for QA and booth operation.",
    ],
    koFocus: [
      "리테일 브랜드 캠페인을 위한 AR/XR 콘텐츠를 개발했습니다.",
      "인식 기능, Quest 3, AR Glass 경험을 Unity에서 연결했습니다.",
      "QA와 체험 부스 운영까지 고려해 제작했습니다.",
    ],
    process: [
      "Built the recognition flow for brand catcher interactions.",
      "Developed Quest 3 and AR Glass content.",
      "Connected native features and prepared QA material.",
    ],
    koProcess: [
      "브랜드 캐처 인터랙션을 위한 인식 흐름을 구현했습니다.",
      "Quest 3와 AR Glass 콘텐츠를 개발했습니다.",
      "네이티브 기능 연동과 QA 자료 정리를 함께 진행했습니다.",
    ],
    outcomes: [
      "Delivered multiple AR/XR touchpoints for the Hyundai Duty Free experience.",
      "Reduced handoff friction by preparing QA and booth operation material.",
      "Expanded practical experience across mobile AR, VR, and AR Glass devices.",
    ],
    koOutcomes: [
      "현대백화점 면세점 경험을 위한 여러 AR/XR 접점을 구현했습니다.",
      "QA와 부스 운영 자료를 준비해 운영 단계의 커뮤니케이션 비용을 줄였습니다.",
      "모바일 AR, VR, AR Glass 전반의 실무 경험을 확장했습니다.",
    ],
    detailContents: [
      {
        slug: "mobile-brand-catcher",
        title: "Mobile Signboard Recognition",
        koTitle: "Mobile 간판 인식",
        summary: "TFLite-based brand catcher recognition flow for mobile AR.",
        koSummary: "모바일 AR 브랜드 캐처를 위한 TFLite 기반 간판 인식 흐름",
        markdownPath: "./content/project-details/hyundai/mobile-brand-catcher.en.md",
        koMarkdownPath: "./content/project-details/hyundai/mobile-brand-catcher.ko.md",
      },
      {
        slug: "metaquest-exhibition",
        title: "Meta Quest Exhibition Visual Effects",
        koTitle: "Meta Quest 전시 시각효과",
        summary: "Shader Graph-driven visual effects for the Quest 3 exhibition content.",
        koSummary: "Quest 3 전시 콘텐츠를 위한 Shader Graph 기반 시각효과 개발",
        markdownPath: "./content/project-details/hyundai/metaquest-exhibition.en.md",
        koMarkdownPath: "./content/project-details/hyundai/metaquest-exhibition.ko.md",
      },
    ],
  },
  {
    title: "Seoul Digital Foundation AR Navigation",
    koTitle: "서울시 디지털 재단 실증 사업 AR Navigation",
    slug: "seoul-ar-navigation-poc",
    location: "HyperCloud XR Team / 2023.08 - 2023.10",
    koLocation: "하이퍼클라우드 XR팀 / 2023.08 ~ 2023.10",
    showLocationInOverview: false,
    caseStudiesTitle: "Technical Implementation Cases",
    koCaseStudiesTitle: "기술 구현 사례",
    caseStudiesCopy: "The AR navigation logic flow shows how GPS/VPS localization, route data, and Unity Embedded guidance work together.",
    koCaseStudiesCopy: "GPS/VPS 위치 추정, 경로 데이터, Unity Embedded 안내가 연결되는 AR 내비게이션 로직 흐름을 정리했습니다.",
    outcomesTitle: "Achievements and Results",
    koOutcomesTitle: "성과 및 결과",
    description:
      "Developed a GPS/VPS-based AR Navigation prototype around Cheonggyecheon and embedded a Unity Android app in a Flutter app. Built AR guidance content that runs based on the estimated location.",
    koDescription:
      "청계천 일대의 GPS/VPS 기반 AR Navigation 프로토타입을 개발하고, Flutter 기반의 앱에 Unity Android App을 임베딩했습니다. 추정된 위치 기반으로 AR 안내 컨텐츠가 실행될 수 있도록 개발 했습니다.",
    icon: "bi-signpost-split",
    image: "images_videos/seoul.png",
    imageAlt: "Seoul Digital Foundation AR Navigation thumbnail",
    koImageAlt: "서울시 디지털 재단 실증 사업 AR Navigation 썸네일",
    tags: ["Unity", "C#", "GPS Sensor", "Computer Vision", "Flutter", "Android Native", "RESTFUL API"],
    statuses: [
      {
        type: "Completed",
        text: "PoC validation",
        koText: "POC 검증",
      },
    ],
    detailMeta: [
      { label: "Timeline", koLabel: "기간", value: "2023.08 - 2023.10", koValue: "2023.08 ~ 2023.10" },
      {
        label: "Responsibilities",
        koLabel: "담당 업무",
        value: "AR client development using GPS sensors and a VPS system",
        koValue: "GPS 센서 및 VPS 시스템을 활용한 AR Client 개발",
      },
      {
        label: "Team Composition",
        koLabel: "구성 인원",
        listItems: [
          { label: "2 client developers (including me)", koLabel: "클라이언트 개발자(본인 포함 2명)" },
          { label: "2 Flutter developers (LBS Tech)", koLabel: "Flutter 개발자(2명)(LBS Tech)" },
          { label: "1 computer vision developer (SK Telecom)", koLabel: "Computer Vision 개발자(1명)(SK Telecom)" },
        ],
      },
    ],
    focus: [],
    koFocus: [],
    process: [],
    koProcess: [],
    outcomes: [
      "Turned the Flutter-based Unity Embedded communication structure into a reusable internal library.",
      {
        text: "Successfully demonstrated the service in the public-sector pilot.",
        href: "https://zdnet.co.kr/view/?no=20240105133427",
      },
    ],
    koOutcomes: [
      "Flutter 기반 Unity Embedded 통신 구조를 재사용 가능하게 만들어, 사내 라이브러리화",
      {
        text: "실증 사업 시연 성공",
        href: "https://zdnet.co.kr/view/?no=20240105133427",
      },
    ],
    reflection: false,
    detailContents: [
      {
        slug: "ar-navigation-logic",
        title: "AR Navigation Logic Flow",
        koTitle: "AR 내비게이션 로직 플로우",
        summary: "GPS/VPS localization, REST route data, and Unity Embedded guidance flow.",
        koSummary: "GPS/VPS 위치 보정, REST 경로 데이터, Unity Embedded 안내 흐름",
        markdownPath: "./content/project-details/seoul/ar-navigation-logic.en.md",
        koMarkdownPath: "./content/project-details/seoul/ar-navigation-logic.ko.md",
        inline: true,
        inlineOrder: 1,
      },
    ],
  },
  {
    title: "Gyeongjuro ON AR Store Scan",
    koTitle: "경주로 ON AR 상점 스캔",
    location: "HyperCloud · XR Team · 2023.01 - 2023.02",
    koLocation: "하이퍼클라우드 XR Team · 2023.01 ~ 2023.02",
    description:
      "Developed AR store-scanning content in a Flutter app, connecting GPS, compass, store data, and Android/iOS native communication.",
    koDescription:
      "경주로 ON 앱의 AR 상점 스캔 콘텐츠를 개발하며 GPS, Compass, 상점 데이터, Android/iOS 네이티브 통신을 연결했습니다.",
    icon: "bi-shop",
    image: "images_videos/gyungju.png",
    imageAlt: "Gyeongjuro ON AR Store Scan thumbnail",
    koImageAlt: "경주로 ON AR 상점 스캔 썸네일",
    tags: ["Unity", "AR", "GPS", "Compass", "Flutter", "Android", "iOS", "REST API"],
    role: "Unity AR Client Engineer",
    koRole: "Unity AR 클라이언트 엔지니어",
    timeline: "2023.01 - 2023.02",
    koTimeline: "2023.01 ~ 2023.02",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Mobile (Android / iOS) / Flutter Embedded Unity",
    koCategory: "Mobile (Android / iOS) / Flutter Embedded Unity",
    relatedPage: {
      label: "경주로 ON AR 상점 스캔",
      href: "https://www.gyeongju.go.kr/tour/page.do?mnu_uid=4085",
    },
    focus: [
      "Visualize nearby stores in AR using GPS and compass sensor data.",
      "Embed Unity AR content into a Flutter app for Android and iOS.",
      "Connect store data to mobile AR markers.",
    ],
    koFocus: [
      "GPS와 Compass 센서 데이터를 활용해 주변 상점을 AR로 시각화했습니다.",
      "Android 및 iOS Flutter 앱 안에 Unity AR 콘텐츠를 임베드했습니다.",
      "상점 데이터를 모바일 AR 마커와 연결했습니다.",
    ],
    process: [
      "Designed Unity-to-native communication interfaces for Android and iOS.",
      "Mapped user direction and nearby store positions.",
      "Connected API data to AR marker and store UI updates.",
    ],
    koProcess: [
      "Android와 iOS 네이티브 통신 인터페이스를 설계했습니다.",
      "사용자 방향과 주변 상점 위치를 매핑했습니다.",
      "API 데이터를 AR 마커와 상점 UI 갱신에 연결했습니다.",
    ],
    outcomes: [
      "Delivered an embedded AR store-scanning feature for the Gyeongjuro ON app.",
      "Validated sensor-driven AR visualization in a real mobile app context.",
      "Built reusable experience around Flutter and Unity communication.",
    ],
    koOutcomes: [
      "경주로 ON 앱에 임베드되는 AR 상점 스캔 기능을 구현했습니다.",
      "실제 모바일 앱 맥락에서 센서 기반 AR 시각화를 검증했습니다.",
      "Flutter와 Unity 통신에 대한 재사용 가능한 경험을 축적했습니다.",
    ],
  },
  {
    title: "HARS / HYPER Solution",
    koTitle: "HARS / HYPER Solution",
    location: "HyperCloud · XR Team · 2023.02 - 2023.06",
    koLocation: "하이퍼클라우드 XR Team · 2023.02 ~ 2023.06",
    description:
      "Developed reusable Unity client modules for HARS, including AR Store Scan, AR Time Sale, AR Portal, native integration, and recognition-driven content.",
    koDescription:
      "HARS의 재사용 가능한 Unity 클라이언트 모듈을 개발하며 AR 상점스캔, 타임세일, 포탈, 네이티브 연동, 인식 기반 콘텐츠를 다뤘습니다.",
    icon: "bi-boxes",
    image: "images_videos/hars-store-scan.png",
    imageAlt: "HARS AR Store Scan solution thumbnail",
    koImageAlt: "HARS AR 상점스캔 솔루션 썸네일",
    tags: ["Unity", "ARFoundation", "HARS", "CMS", "Image Tracking", "Stencil Buffer", "REST API", "Native Integration"],
    role: "Unity AR Solution Developer",
    koRole: "Unity AR 솔루션 개발자",
    timeline: "2023.02 - 2023.06",
    koTimeline: "2023.02 ~ 2023.06",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Mobile (Android / iOS) / Unity Embedded",
    koCategory: "Mobile (Android / iOS) / Unity Embedded",
    relatedPage: {
      label: "HARS / HYPER SOLUTION",
      href: "https://m.blog.naver.com/hyper_cloud/223115741683",
    },
    focus: [
      "Develop reusable Unity client modules for an AR marketing CMS solution.",
      "Support Store Scan, Time Sale, Portal, and event-linked AR content.",
      "Stabilize Unity Embedded behavior in mobile apps.",
    ],
    koFocus: [
      "AR 마케팅 CMS 솔루션에서 재사용할 수 있는 Unity 클라이언트 모듈을 개발했습니다.",
      "AR 상점스캔, 타임세일, 포탈 등 여러 콘텐츠 타입을 지원했습니다.",
      "모바일 앱 안에서 Unity Embedded 동작을 안정화했습니다.",
    ],
    process: [
      "Defined Unity-to-native communication for Android and iOS.",
      "Improved AR Portal rendering and recognition flows.",
      "Reworked recognition logic for reusable AR content.",
    ],
    koProcess: [
      "Android와 iOS 네이티브 통신 인터페이스를 정의했습니다.",
      "AR Portal 렌더링과 인식 흐름을 개선했습니다.",
      "재사용 가능한 AR 콘텐츠를 위해 인식 로직을 정리했습니다.",
    ],
    outcomes: [
      "Converted several AR marketing content patterns into reusable solution modules.",
      "Built practical knowledge around TFLite and Unity integration as an internal technical asset.",
      "Created externally documented product stories that can be referenced from the portfolio.",
    ],
    koOutcomes: [
      "여러 AR 마케팅 콘텐츠 패턴을 재사용 가능한 솔루션 모듈로 정리했습니다.",
      "TFLite와 Unity 결합 로직에 대한 실무 경험을 회사 내부 기술 자산으로 확보했습니다.",
      "공식 블로그로 확인 가능한 제품 문서화 사례를 포트폴리오에 연결할 수 있게 했습니다.",
    ],
    detailContents: [
      {
        slug: "ar-store-scan",
        title: "AR Store Scan",
        koTitle: "AR 상점스캔",
        summary: "Location and recognition-driven AR store discovery content.",
        koSummary: "위치와 인식 기반 AR 상점 탐색 콘텐츠",
        markdownPath: "./content/project-details/hars/ar-store-scan.en.md",
        koMarkdownPath: "./content/project-details/hars/ar-store-scan.ko.md",
      },
      {
        slug: "ar-time-sale",
        title: "AR Time Sale",
        koTitle: "AR 타임세일",
        summary: "Coupon and reward-oriented AR marketing interaction.",
        koSummary: "쿠폰과 리워드 중심의 AR 마케팅 인터랙션",
        markdownPath: "./content/project-details/hars/ar-time-sale.en.md",
        koMarkdownPath: "./content/project-details/hars/ar-time-sale.ko.md",
      },
      {
        slug: "ar-portal",
        title: "AR Portal",
        koTitle: "AR 포탈",
        summary: "Marker or tap-created portal content connected to virtual spaces.",
        koSummary: "마커 또는 탭으로 생성되는 가상 공간 연결형 포탈 콘텐츠",
        markdownPath: "./content/project-details/hars/ar-portal.en.md",
        koMarkdownPath: "./content/project-details/hars/ar-portal.ko.md",
      },
    ],
  },
];

const visionLingoProject = {
    title: "Vision Lingo",
    koTitle: "Vision Lingo",
    location: "KAKAO IMPACT TECH FOR IMPACT · Team Side Project · Aug 2025 - Mar 2026",
    koLocation: "KAKAO IMPACT TECH FOR IMPACT · 팀 사이드 프로젝트 · 2025.08 ~ 2026.03",
    description: "Developed an Apple Vision Pro-based auditory rehabilitation solution for cochlear implant users.",
    koDescription: "Apple Vision Pro 기반 인공와우 청각 재활 솔루션 개발",
    overview: "An Apple Vision Pro-based XR app for training cochlear implant users to identify the direction of sounds. It combines spatial audio and visual feedback to create a three-dimensional listening environment.",
    koOverview: "인공와우 사용자의 소리 방향 탐지 훈련을 위한 Apple Vision Pro 기반 XR 앱입니다. 공간음향과 시각적 피드백을 결합해 3차원 청취 환경을 구현했습니다.",
    showLocationInOverview: false,
    detailDescription: [
      "Conventional training based on 2D screens or front-facing speakers struggles to reproduce sounds coming from different directions in daily life. Onsori Sphere uses Vision Pro spatial audio to play a sound from one of the spheres around the user, who then locates its direction and selects the sphere. Six stages vary the number and placement of spheres, while visual and audio cues provide feedback on each selection.",
      "As development team lead, I built the Unity-based XR app and verified its features on the device. After user testing showed that gaze tracking and pinch gestures were difficult, I changed selection to a dwell interaction based on the direction of the user's head.",
    ],
    koDetailDescription: [
      "기존의 2D 화면이나 전면 스피커 중심 훈련은 일상에서 마주하는 다양한 방향의 소리를 재현하기 어렵습니다. 온소리 Sphere는 Vision Pro의 공간음향을 활용해 사용자 주변 구체 중 한 곳에서 소리를 재생하고, 사용자가 방향을 찾아 선택하는 훈련을 제공합니다. 구체의 수와 배치 범위를 달리한 6개 스테이지로 난이도를 구성하고, 선택 결과는 시각 효과와 소리로 알려줍니다.",
      "저는 개발팀 리드로서 Unity 기반 XR 앱 개발과 실기기 기술 검증을 맡았습니다. 사용자 테스트에서 시선 추적과 핀치 조작이 어렵다는 의견을 확인한 뒤, 머리 방향을 기준으로 대상을 일정 시간 바라보면 선택되는 방식으로 개선했습니다.",
    ],
    icon: "bi-badge-vr",
    image: "images_videos/side_kakaoImpact.png",
    imageAlt: "Vision Lingo KAKAO IMPACT thumbnail",
    koImageAlt: "Vision Lingo KAKAO IMPACT 썸네일",
    tags: ["Team Management", "Unity", "Apple Vision Pro", "HCI", "Paper Publication"],
    statuses: [
      {
        type: "Approved",
        text: "HCI KOREA 2026 paper publication",
        koText: "HCI KOREA 2026 논문 게재",
      },
    ],
    role: "Development Team Lead / Unity XR Application Engineer",
    koRole: "개발팀 리드 / Unity 기반 XR 애플리케이션 개발",
    timeline: "Aug 2025 - Mar 2026",
    koTimeline: "2025.08 ~ 2026.03",
    team: "3 Client Programmers, 3 Planning/Design Members",
    koTeam: "클라이언트 프로그래머 3명, 기획/디자인 3명",
    category: "Vision OS / Apple Vision Pro",
    koCategory: "Vision OS / Apple Vision Pro",
    detailMeta: [
      { label: "Timeline", koLabel: "기간", value: "2025.08 ~ 2026.03", koValue: "2025.08 ~ 2026.03" },
      {
        label: "Responsibilities",
        koLabel: "담당 업무",
        listItems: [
          { label: "Development team lead and Unity-based XR app development", koLabel: "개발팀 리드 및 Unity 기반 XR 앱 개발" },
          { label: "Wrote the development section of the HCI conference paper", koLabel: "HCI 학회 논문 작성(개발 부분)" },
        ],
      },
      {
        label: "Team Composition",
        koLabel: "구성 인원",
        listItems: [
          { label: "3 client programmers (including me)", koLabel: "클라이언트 프로그래머(본인 포함 3명)" },
          { label: "3 planning/design members", koLabel: "기획/디자인(3명)" },
        ],
      },
      {
        label: "Development Log",
        koLabel: "개발 로그",
        value: {
          label: "Apple Vision Pro Onsori Sphere",
          href: "https://app.notion.com/p/unitycoleyoung/Apple-Vision-Pro-Onsori-Sphere-30e5bf6278f0804a89ccec7406106ae0?source=copy_link",
        },
      },
    ],
    relatedPage: {
      label: "HCI Korea 2026 paper",
      href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745902",
    },
    focusTitle: "Technical Implementation Cases",
    koFocusTitle: "기술 구현 사례",
    focus: [
      "Implemented spatial audio training in Unity's Metal API mode.",
      "Separated development and device scenes so the team could verify logic without a Vision Pro device.",
      "After identifying usability issues with pinch gestures, changed selection to a head-direction-based dwell interaction.",
    ],
    koFocus: [
      "Unity의 Metal API 모드에서 공간음향 훈련을 구현했습니다.",
      "개발용 씬과 실기기용 씬을 분리해 Vision Pro 기기 없이도 로직을 검증할 수 있도록 했습니다.",
      "핀치 조작의 사용성 문제를 확인하고 머리 방향 기반의 일정 시간 응시 선택 방식(dwell)으로 변경했습니다.",
    ],
    process: [],
    koProcess: [],
    outcomesTitle: "Achievements and Results",
    koOutcomesTitle: "성과 및 결과",
    reflection: false,
    outcomes: [
      {
        text: "Published a paper in HCI Korea 2026.",
        children: [
          {
            text: "\u201cOnsori Sphere: Design and User Experience Evaluation of a Vision Pro-Based Spatial Audio and Sensory-Integrated XR Auditory Rehabilitation System,\u201d PROCEEDINGS OF HCI KOREA 2026, pp. 930-935, 2026.",
            href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745902",
          },
        ],
      },
    ],
    koOutcomes: [
      {
        text: "HCI Korea 2026 논문 게재",
        children: [
          {
            text: "「온소리 Sphere: Vision Pro 기반 공간청각·감각통합 XR 청능재활 시스템의 설계 및 사용자경험 평가,」 PROCEEDINGS OF HCI KOREA 2026 학술대회 발표 논문집, pp. 930-935, 2026.",
            href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745902",
          },
        ],
      },
    ],
};

export const techStacks = [
  {
    icon: "bi-code-slash",
    title: "Languages",
    koTitle: "Languages",
    skills: ["C#", "C++", "Python"],
  },
  {
    icon: "bi-unity",
    title: "Engine & Framework",
    koTitle: "Engine & Framework",
    skills: ["Unity", ".NET", "WPF"],
  },
  {
    icon: "bi-pc-display",
    title: "Platform",
    koTitle: "Platform",
    skills: ["Android", "Windows"],
  },
  {
    icon: "bi-badge-vr",
    title: "Spatial / XR",
    koTitle: "Spatial / XR",
    skills: ["ARFoundation", "XREAL", "Vision Pro", "visionOS", "Meta Quest", "Android XR"],
  },
  {
    icon: "bi-camera-video",
    title: "Computer Vision",
    koTitle: "Computer Vision",
    skills: ["OpenCV", "ArUco", "TFLite", "ZED", "Tracking"],
  },
  {
    icon: "bi-diagram-2",
    title: "Network",
    koTitle: "Network",
    skills: ["TCP/IP", "UDP", "Restful API"],
  },
  {
    icon: "bi-cpu",
    title: "AI Proficiency",
    koTitle: "AI Proficiency",
    skills: ["Agentic Workflow Engineering", "Local LLM Integration(Ollama)"],
  },
  {
    icon: "bi-kanban",
    title: "Engineering & DevOps",
    koTitle: "Engineering & DevOps",
    skills: ["Git", "PowerShell Scripting", "PostgreSQL", "CI/CD", "GitHub Actions", "SBOM(CycloneDX)"],
  },
];

export const experiences = [
  {
    date: "Apr 2025 - Present",
    koDate: "2025.04 ~ 재직 중",
    title: "Software Engineer / Medical Device",
    koTitle: "소프트웨어 엔지니어 / 의료 기기",
    company: "Skyve",
    companyUrl: "http://www.skyve.co.kr/",
    description:
      "I develop Sagarvision software that supports knee replacement surgery in the Medical Technology Innovation Team. My work centers on Unity/C# applications for Android and Windows, including real-time data processing over socket connections, tracking, and 2D/3D visualization.",
    koDescription:
      "의료기술혁신팀에서 인공 무릎 관절 치환 수술을 지원하는 Sagarvision 소프트웨어를 개발하고 있습니다. Unity/C# 기반 Android/Windows 애플리케이션 개발을 중심으로, Socket 통신을 활용한 실시간 데이터 처리, 트래킹 및 시각화(2D/3D) 기능을 담당하고 있습니다.",
    apps: [
      ["Sagarvision", "#featuredproject"],
      ["QR Based Pose Tracking", "#/projects/qr-based-pose-tracking-system"],
    ],
  },
  {
    date: "Mar 2022 - Jun 2024",
    koDate: "2022.03 ~ 2024.06",
    title: "Software Engineer / XR",
    koTitle: "소프트웨어 엔지니어 / XR",
    company: "HyperCloud",
    companyUrl: "https://www.hyper-cloud.kr/",
    description:
      "Developed Unity/C#-based AR/XR applications and solutions. Worked across XR projects ranging from mobile AR with ARFoundation to GPS/VPS-based localization, WebGL, content delivery, and runtime resource management.",
    koDescription:
      "Unity/C# 기반의 AR/XR 애플리케이션 및 솔루션을 개발했습니다. ARFoundation을 활용한 모바일 AR부터 GPS/VPS 기반 위치 인식, WebGL, 콘텐츠 배포 및 런타임 리소스 관리까지 다양한 환경의 XR 프로젝트를 수행했습니다.",
    apps: [
      ["서울시 디지털 재단 실증 사업 AR Navigation", "#/projects/seoul-ar-navigation-poc"],
    ],
  },
];

const jetsonVisionProject = {
  title: "QR Based Pose Tracking",
  koTitle: "QR Based Pose Tracking",
  slug: "qr-based-pose-tracking-system",
  location: "Skyve Medical Technology Innovation Team / 2026.08 - 2026.10",
  koLocation: "스카이브 의료기술혁신팀 / 2026.08 ~ 2026.10",
  showLocationInOverview: false,
  description:
    "This project optimizes ArUco marker position and pose data using NVIDIA Jetson Orin Nano and a ZED X stereo camera. It detects matching markers in stereo images, uses the camera calibration parameters to calculate their 3D position and rotation, and sends the results to clients over UDP.",
  koDescription:
    "NVIDIA Jetson Orin Nano와 ZED X 스테레오 카메라를 이용해 ArUco 마커의 위치와 Pose 데이터를 최적화하는 프로젝트입니다. 스테레오 영상에서 동일한 마커를 검출하고, 스테레오 카메라의 보정 정보를 이용해 3D 위치와 회전값을 계산했습니다. 계산 결과는 클라이언트가 사용할 수 있도록 UDP로 전달했습니다.",
  icon: "bi-camera-video",
  image: "images_videos/jetson-opencv-tracking.png",
  imageAlt: "QR Based Pose Tracking thumbnail",
  koImageAlt: "QR Based Pose Tracking 썸네일",
  tags: ["NVIDIA Jetson", "ZED", "Python", "OpenCV", "Kalman Filter", "Socket Network"],
  statuses: [
    {
      type: "Completed",
      text: "PoC validation",
      koText: "POC 검증",
    },
  ],
  detailMeta: [
    { label: "Timeline", koLabel: "기간", value: "2026.08 - 2026.10", koValue: "2026.08 ~ 2026.10" },
    {
      label: "Responsibilities",
      koLabel: "담당 업무",
      value: "Engineering an OpenCV marker-recognition-based pose tracking system",
      koValue: "OpenCV 마커 인식 기반 포즈 트래킹 시스템 구축 엔지니어링",
    },
    {
      label: "Team Composition",
      koLabel: "구성 인원",
      listItems: [
        { label: "Python developer (me)", koLabel: "Python 개발자(본인)" },
        { label: "Technical advisor", koLabel: "기술 고문" },
      ],
    },
    {
      label: "Connected Devices",
      koLabel: "연동 장비",
      items: [
        { label: "NVIDIA Jetson Orin Nano" },
        { label: "Stereolabs ZED X Camera" },
      ],
    },
  ],
  focusTitle: "Technical Implementation Cases",
  koFocusTitle: "기술 구현 사례",
  focusImage: "images_videos/jetson-aruco-pose-demo.png",
  focusImageAlt: "ArUco marker position and pose tracking demo",
  koFocusImageAlt: "ArUco 마커 위치 및 자세 추적 실행 화면",
  focus: [
    "Matched specific ArUco markers by ID across stereo camera images and refined their corner coordinates to subpixel precision for 3D calculations.",
    "Built projection matrices from camera intrinsics and the stereo transform, then triangulated the marker center and four corners.",
    "Separated marker recognition, coordinate calculations, calibration, and data transmission into modules.",
    "Implemented broadcast-based server discovery for clients and sent marker state, position, and rotation axes over UDP.",
  ],
  koFocus: [
    "카메라 스테레오 영상에서 검출된 특정 ArUco 마커를 ID로 대응시키고, 코너 좌표를 서브픽셀 단위로 보정해 3D 계산의 입력값을 구성했습니다.",
    "카메라 내부 파라미터와 스테레오 변환값으로 투영 행렬을 만들고, 마커 중심과 네 꼭짓점에 삼각측량을 적용했습니다.",
    "마커 인식, 좌표 계산, 캘리브레이션, 데이터 전송을 모듈로 분리했습니다.",
    "클라이언트의 IP 탐색을 위한 브로드캐스팅 기능과, 마커 상태/위치/회전축을 UDP로 전달했습니다.",
  ],
  process: [],
  koProcess: [],
  reflection: false,
  outcomes: ["Built a pipeline that identifies markers in stereo images, calculates their 3D position and pose, and sends the results to external clients. Gained hands-on experience with computer vision, camera calibration parameters, coordinate transformations, and real-time data integration."],
  koOutcomes: ["스테레오 영상에서 마커를 식별하고 3D 위치·자세를 계산한 뒤 외부 클라이언트에 전달하는 처리 흐름을 구축했습니다. 이 과정에서 Computer Vision, 카메라 보정 파라미터 활용, 좌표계 변환 및 실시간 데이터 연동에 대한 실무 경험을 쌓았습니다."],
};

export const projects = [legacyProjects[0], jetsonVisionProject, legacyProjects[2]];

export const engineeringProjects = [visionLingoProject];
