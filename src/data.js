export const navItems = [
  { id: "featuredproject", label: "Projects", koLabel: "프로젝트" },
  { id: "sideprojects", label: "Side Projects", koLabel: "사이드 프로젝트" },
  { id: "techstacksection", label: "Tech Stack", koLabel: "기술 스택" },
  { id: "workexperience", label: "Work Experience", koLabel: "경력" },
  { id: "contact", label: "Contact", koLabel: "연락처" },
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
      subtitle: "Unity Client Programmer",
      description:
        "Unity client programmer building AR/VR, mobile, and WebGL experiences with a focus on native integration, scalable asset systems, and practical performance optimization.",
      platforms: "Experienced across",
      contact: "Contact by Email",
      projects: "View Projects",
      scroll: "Scroll down to see projects",
      initials: "HCY",
      profileKicker: "Unity Client",
      profileTags: ["AR/VR", "Mobile", "WebGL"],
    },
    sections: {
      featuredProjects: "Projects",
      sideProjects: "Side Projects",
      techStack: "Tech Stack",
      workExperiences: "Work Experience",
    },
    projectDetail: {
      back: "Back to Projects",
      open: "Open Case Study",
      metaTitle: "Project Details",
      role: "Role",
      timeline: "Timeline",
      team: "Team",
      category: "Target Platform",
      relatedPage: "Related Page",
      overview: "Overview",
      focus: "Goals & Constraints",
      process: "Process",
      outcomes: "Outcomes",
      detailContentTitle: "Case Study Details",
      openDetailContent: "Open Detail",
      backToProject: "Back to Project",
      reflection: "Reflection",
      reflectionCopy:
        "This project strengthened my ability to turn product goals into stable Unity client features while balancing platform constraints, native integration, and practical runtime performance.",
    },
    footer: {
      headline: "Ready to build stable AR/VR and mobile experiences together?",
      contact: "Contact by Email",
      contactHref: "mailto:ighong11@gmail.com",
    },
  },
  ko: {
    header: {
      logo: "홍찬영",
    },
    hero: {
      name: "홍찬영",
      subtitle: "Unity Client Programmer",
      description:
        "Unity 기반 AR/VR 및 모바일 앱을 개발하며, 네이티브 연동, 프로파일링 기반 성능 최적화에 강점을 가진 클라이언트 개발자입니다.",
      platforms: "주요 경험 플랫폼",
      contact: "이메일로 연락하기",
      projects: "프로젝트 보기",
      scroll: "아래로 스크롤해 프로젝트를 확인하세요",
      initials: "HCY",
      profileKicker: "Unity Client",
      profileTags: ["AR/VR", "Mobile"],
    },
    sections: {
      featuredProjects: "프로젝트",
      sideProjects: "사이드 프로젝트",
      techStack: "기술 스택",
      workExperiences: "경력",
    },
    projectDetail: {
      back: "프로젝트 목록으로",
      open: "상세 보기",
      metaTitle: "프로젝트 정보",
      role: "역할",
      timeline: "기간",
      team: "팀",
      category: "타겟 플랫폼",
      relatedPage: "관련 페이지",
      overview: "개요",
      focus: "목표 및 제약",
      process: "진행 과정",
      outcomes: "성과",
      detailContentTitle: "상세 사례",
      openDetailContent: "상세 보기",
      backToProject: "프로젝트로 돌아가기",
      reflection: "회고",
      reflectionCopy:
        "이 프로젝트를 통해 제품 목표를 안정적인 Unity 클라이언트 기능으로 구현하고, 플랫폼 제약과 네이티브 연동, 런타임 성능 사이의 균형을 맞추는 경험을 쌓았습니다.",
    },
    footer: {
      headline: "안정적인 AR/VR 및 모바일 경험을 함께 만들어가겠습니다.",
      contact: "이메일로 연락하기",
      contactHref: "mailto:ighong11@gmail.com",
    },
  },
};

export const platformIcons = [
  { icon: "bi-phone", label: "Android", koLabel: "Android" },
  { icon: "bi-phone", label: "iOS", koLabel: "iOS" },
  { icon: "bi-badge-vr", label: "Android XR", koLabel: "Android XR" },
  { icon: "bi-badge-vr", label: "Vision OS", koLabel: "Vision OS" },
  { icon: "bi-badge-vr", label: "Horizon OS", koLabel: "Horizon OS" },
  { icon: "bi-window", label: "Windows", koLabel: "Windows" },
  { icon: "bi-globe2", label: "WebGL", koLabel: "WebGL" },
];

export const contactLinks = [
  { href: "mailto:ighong11@gmail.com", icon: "bi-envelope", label: "Email" },
];

export const projects = [
  {
    title: "SagarVision AR System",
    koTitle: "SagarVision AR System",
    location: "Skyve · Medical Technology Innovation Team · 2025.04 - Present",
    koLocation: "스카이브 의료기술혁신팀 · 2025.04 ~ 진행 중",
    description:
      "Developed Unity Android and Windows clients for an artificial joint surgery assistance system, improving real-time communication, architecture, build flow, and runtime performance.",
    koDescription:
      "인공 관절 수술 보조 시스템의 Unity Android, Windows 클라이언트를 개발하며 통신, 구조, 빌드 흐름, 런타임 성능을 개선했습니다.",
    icon: "bi-activity",
    image: "images_videos/sagarvision.png",
    imageAlt: "SagarVision AR System thumbnail",
    koImageAlt: "SagarVision AR System 썸네일",
    tags: ["Unity", "C#", "Android", "Windows", "TCP/IP", "UDP", "UniRx", "MVP", "HLSL", "IMGUI"],
    role: "Unity Client Programmer",
    koRole: "Unity 클라이언트 개발자",
    timeline: "2025.04 - Present",
    koTimeline: "2025.04 ~ 진행 중",
    team: "Skyve Medical Technology Innovation Team",
    koTeam: "스카이브 의료기술혁신팀",
    category: "Android (XREAL) / Windows",
    koCategory: "Android (XREAL) / Windows",
    relatedPage: {
      label: "Sagarvision",
      href: "https://www.mkhealth.co.kr/news/articleView.html?idxno=75963",
    },
    focus: [
      "Build stable Android and Windows clients for a medical-assistance workflow.",
      "Connect device communication and real-time AR updates.",
      "Improve maintainability through clearer client architecture.",
    ],
    koFocus: [
      "의료 보조 워크플로우용 Android, Windows 클라이언트를 안정적으로 개발했습니다.",
      "장비 통신과 실시간 AR 갱신 흐름을 Unity 클라이언트에 연결했습니다.",
      "클라이언트 구조를 정리해 유지보수성을 높였습니다.",
    ],
    process: [
      "Created build tooling to reduce repeated setup work.",
      "Implemented AR visual feedback with performance in mind.",
      "Profiled and optimized runtime behavior on target devices.",
    ],
    koProcess: [
      "반복되는 빌드 설정을 줄이기 위한 커스텀 도구를 만들었습니다.",
      "성능을 고려해 AR 시각 피드백을 구현했습니다.",
      "타깃 디바이스에서 프로파일링과 최적화를 반복했습니다.",
    ],
    outcomes: [
      "Improved client performance from roughly 15 FPS to stable 60 FPS.",
      "Reduced runtime heat through profiling-driven optimization.",
      "Prepared a cleaner foundation for ongoing feature work.",
      {
        text: "Supported SagarVision AR technology at the AAOS 2026 exhibition.",
        href: "https://economist.co.kr/article/view/ecn202603090048",
      },
      {
        text: "Contributed to SagarVision's Best Award recognition from the Korean Orthopaedic Association.",
        href: "https://www.rapportian.com/news/articleView.html?idxno=234946",
      },
    ],
    koOutcomes: [
      "기존 클라이언트를 평균 15프레임 수준에서 안정적인 60프레임 동작으로 개선했습니다.",
      "프로파일링 기반 최적화로 런타임 발열을 줄였습니다.",
      "향후 기능 확장을 위한 클라이언트 기반을 정리했습니다.",
      {
        text: "2026 미국정형외과학회(AAOS) 전시에서 SagarVision AR 기술 지원을 진행했습니다.",
        href: "https://economist.co.kr/article/view/ecn202603090048",
      },
      {
        text: "대한정형외과학회 최우수상 수상 성과에 기여했습니다.",
        href: "https://www.rapportian.com/news/articleView.html?idxno=234946",
      },
    ],
    detailContents: [
      {
        slug: "graphics",
        title: "Graphics",
        koTitle: "그래픽스",
        summary: "Unity HLSL visual effects and performance-aware rendering work.",
        koSummary: "Unity HLSL 기반 시각 효과와 성능을 고려한 렌더링 작업",
        markdownPath: "./content/project-details/sagarvision/graphics.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/graphics.ko.md",
      },
      {
        slug: "mvp-architecture",
        title: "UniRx-Based MVP Architecture",
        koTitle: "UniRx 기반 MVP 아키텍처",
        summary: "Reactive MVP structure for separating Unity UI, workflow state, and network-driven data.",
        koSummary: "Unity UI, 워크플로우 상태, 네트워크 기반 데이터를 분리한 Reactive MVP 구조",
        markdownPath: "./content/project-details/sagarvision/mvp-architecture.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/mvp-architecture.ko.md",
      },
      {
        slug: "network-protocol-automation-tcp",
        title: "Network Protocol Automation and TCP Communication",
        koTitle: "네트워크 프로토콜 자동화 및 TCP 통신",
        summary: "TCP/IP communication and protocol handling for device integration.",
        koSummary: "장비 연동을 위한 TCP/IP 통신과 프로토콜 처리",
        markdownPath: "./content/project-details/sagarvision/network-protocol-automation-tcp.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/network-protocol-automation-tcp.ko.md",
      },
      {
        slug: "real-time-tracking-udp",
        title: "Real-Time Tracking and UDP Communication",
        koTitle: "실시간 트래킹 및 UDP 통신",
        summary: "UDP-based real-time tracking data flow for AR client updates.",
        koSummary: "AR 클라이언트 갱신을 위한 UDP 기반 실시간 트래킹 데이터 흐름",
        markdownPath: "./content/project-details/sagarvision/real-time-tracking-udp.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/real-time-tracking-udp.ko.md",
      },
      {
        slug: "continuous-deployment",
        title: "CI/CD System Configuration",
        koTitle: "CI/CD System 구성",
        summary: "Automated quality gates and repeatable client delivery for Unity.",
        koSummary: "Unity 품질 검증과 반복 가능한 클라이언트 전달을 위한 CI/CD 흐름",
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
    title: "Seoul AR Navigation PoC",
    koTitle: "서울시 디지털 재단 실증 사업 AR 내비게이션",
    location: "HyperCloud · XR Team · 2023.08 - 2023.10",
    koLocation: "하이퍼클라우드 XR Team · 2023.08 ~ 2023.10",
    description:
      "Developed GPS/VPS-based AR navigation prototypes around Cheonggyecheon, embedding Unity in Flutter and connecting route data to AR guidance.",
    koDescription:
      "청계천 일대의 GPS/VPS 기반 AR 내비게이션 프로토타입을 개발하고, Flutter 내 Unity 임베딩과 경로 기반 AR 안내를 구현했습니다.",
    icon: "bi-signpost-split",
    image: "images_videos/seoul.png",
    imageAlt: "Seoul AR Navigation PoC thumbnail",
    koImageAlt: "서울시 AR 내비게이션 PoC 썸네일",
    tags: ["Unity", "AR Navigation", "GPS", "VPS", "VLAM", "Flutter", "Unity Embedded", "REST API"],
    role: "Unity AR Navigation Engineer",
    koRole: "Unity AR 내비게이션 엔지니어",
    timeline: "2023.08 - 2023.10",
    koTimeline: "2023.08 ~ 2023.10",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Mobile (Android) / Flutter Embedded Unity",
    koCategory: "Mobile (Android) / Flutter Embedded Unity",
    relatedPage: {
      label: "서울시 디지털 재단 실증 사업 AR 내비게이션",
      href: "https://zdnet.co.kr/view/?no=20240105133427",
    },
    focus: [
      "Prototype outdoor AR navigation around Cheonggyecheon.",
      "Embed Unity inside a Flutter app.",
      "Generate AR guidance from location and route data.",
    ],
    koFocus: [
      "청계천 일대 야외 AR 내비게이션을 프로토타입으로 개발했습니다.",
      "Flutter 앱 안에 Unity를 임베드했습니다.",
      "위치와 경로 데이터를 기반으로 AR 안내를 생성했습니다.",
    ],
    process: [
      "Built the Flutter-to-Unity communication flow.",
      "Integrated partner VPS modules.",
      "Connected route data to AR guidance visuals.",
    ],
    koProcess: [
      "Flutter와 Unity 간 통신 흐름을 구성했습니다.",
      "협력사 VPS 모듈을 연동했습니다.",
      "경로 데이터를 AR 안내 시각화로 연결했습니다.",
    ],
    outcomes: [
      "Produced GPS and VPS AR navigation prototypes for a public-sector PoC.",
      "Validated Unity Embedded communication in a Flutter-based mobile app.",
      "Gained experience with partner SDK integration in location-based AR.",
    ],
    koOutcomes: [
      "공공 실증 사업을 위한 GPS 및 VPS AR 내비게이션 프로토타입을 제작했습니다.",
      "Flutter 기반 모바일 앱에서 Unity Embedded 통신 구조를 검증했습니다.",
      "위치 기반 AR에서 협력사 SDK를 연동하는 경험을 쌓았습니다.",
    ],
    detailContents: [
      {
        slug: "ar-navigation-logic",
        title: "AR Navigation Logic Flow",
        koTitle: "AR 내비게이션 로직 플로우",
        summary: "GPS/VPS localization, REST route data, and Unity Embedded guidance flow.",
        koSummary: "GPS/VPS 위치 보정, REST 경로 데이터, Unity Embedded 안내 흐름",
        markdownPath: "./content/project-details/seoul/ar-navigation-logic.en.md",
        koMarkdownPath: "./content/project-details/seoul/ar-navigation-logic.ko.md",
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

export const sideProjects = [
  {
    title: "Vision Lingo",
    koTitle: "Vision Lingo",
    location: "KAKAO IMPACT TECH FOR IMPACT · Team Side Project · Aug 2025 - Mar 2026",
    koLocation: "KAKAO IMPACT TECH FOR IMPACT · 팀 사이드 프로젝트 · 2025.08 ~ 2026.03",
    description:
      "Led Unity client development for a Vision OS VR training system for cochlear implant patients as part of KAKAO IMPACT's TECH FOR IMPACT project.",
    koDescription:
      "KAKAO IMPACT에서 주관하는 TECH FOR IMPACT 프로젝트에 참여해 인공 와우 수술 환자들을 위한 Vision OS 기반 VR 훈련 시스템 개발을 리드했습니다.",
    icon: "bi-badge-vr",
    image: "images_videos/side_kakaoImpact.png",
    imageAlt: "Vision Lingo KAKAO IMPACT thumbnail",
    koImageAlt: "Vision Lingo KAKAO IMPACT 썸네일",
    tags: ["Unity", "Vision OS", "Vision Pro", "VR Training", "TestFlight", "Team Lead"],
    role: "Unity Client Lead",
    koRole: "Unity 클라이언트 개발 리드",
    timeline: "Aug 2025 - Mar 2026",
    koTimeline: "2025.08 ~ 2026.03",
    team: "3 Client Programmers, 3 Planning/Design Members",
    koTeam: "클라이언트 프로그래머 3명, 기획/디자인 3명",
    category: "Vision OS / Apple Vision Pro",
    koCategory: "Vision OS / Apple Vision Pro",
    relatedPage: {
      label: "VISION LINGO",
      href: "https://www.notion.so/unitycoleyoung/Apple-Vision-Pro-Onsori-Sphere-30e5bf6278f0804a89ccec7406106ae0?source=copy_link",
    },
    focus: [
      "Build a VR training system for cochlear implant patients on Vision OS.",
      "Validate Vision Pro constraints and interaction feasibility.",
      "Coordinate client development across a six-person TECH FOR IMPACT team.",
    ],
    koFocus: [
      "인공 와우 수술 환자를 위한 Vision OS 기반 VR 훈련 시스템을 개발했습니다.",
      "Vision Pro 기술 제약과 인터랙션 구현 가능성을 검증했습니다.",
      "TECH FOR IMPACT 참여 팀 안에서 6인 팀의 클라이언트 개발을 조율했습니다.",
    ],
    process: [
      "Led Unity client development and split implementation responsibilities with two other client programmers.",
      "Validated Vision Pro runtime behavior and delivery flow.",
      "Worked with planning and design members to align training content with the interaction flow.",
    ],
    koProcess: [
      "Unity 클라이언트 개발을 리드하며 2명의 클라이언트 프로그래머와 구현 범위를 나눴습니다.",
      "Vision Pro 런타임 동작을 검증하고 TestFlight 배포를 준비했습니다.",
      "기획/디자인 팀과 협업해 훈련 콘텐츠와 인터랙션 흐름을 맞췄습니다.",
    ],
    outcomes: [
      "Established the core development direction for the Vision OS VR training system.",
      "Completed technical validation for Vision Pro delivery.",
      "Created a side-project case study focused on accessibility and rehabilitation training.",
      {
        text: "Submitted a Vision Lingo research paper to HCI Korea 2026.",
        href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745902",
      },
    ],
    koOutcomes: [
      "Vision OS 기반 VR 훈련 시스템의 핵심 개발 방향을 정리했습니다.",
      "Vision Pro 기술 검증과 TestFlight 기반 배포 흐름을 확인했습니다.",
      "접근성과 재활 훈련을 중심으로 한 사이드 프로젝트 경험을 만들었습니다.",
      {
        text: "Vision Lingo 연구 논문을 HCI Korea 2026에 투고했습니다.",
        href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745902",
      },
    ],
  },
];

export const techStacks = [
  {
    icon: "bi-code-slash",
    title: "Programming Languages",
    koTitle: "프로그래밍 언어",
    skills: ["C# (Main)", "C++", "Python"],
  },
  {
    icon: "bi-unity",
    title: "Unity",
    koTitle: "Unity",
    skills: ["URP", "Shader Graph", "OpenXR"],
  },
  {
    icon: "bi-phone",
    title: "Platforms",
    koTitle: "플랫폼",
    skills: ["Android", "iOS", "Android XR", "Vision OS", "Horizon OS", "Windows", "WebGL"],
  },
  {
    icon: "bi-kanban",
    title: "AI Skills",
    koTitle: "AI 활용",
    skills: ["Agent Orchestration", "Local LLM based CI/CD", "Testing"],
  },
  {
    icon: "bi-diagram-2",
    title: "Network",
    koTitle: "네트워크",
    skills: ["TCP/IP", "UDP", "REST API"],
  },
  {
    icon: "bi-kanban",
    title: "Collaboration",
    koTitle: "협업",
    skills: ["Git", "SVN", "Jira", "Notion", "Slack"],
  },
];

export const experiences = [
  {
    date: "Apr 2025 - Present",
    koDate: "2025.04 ~ 재직 중",
    title: "Unity XR Engineer",
    koTitle: "Unity XR Engineer",
    company: "Skyve",
    companyUrl: "http://www.skyve.co.kr/",
    description:
      "Working in the Medical Technology Innovation Team on Unity-based AR/VR applications. Developed Android and Windows clients for SagarVision AR System, integrated socket communication, introduced UniRx and MVP architecture, built custom build automation, and improved runtime performance and heat behavior.",
    koDescription:
      "의료기술혁신팀에서 Unity 기반 AR/VR 앱을 개발하고 있습니다. SagarVision AR System의 Android 및 Windows 클라이언트 개발, Socket 통신 연동, UniRx와 MVP 아키텍처 도입, 커스텀 빌드 자동화, 성능 및 발열 개선을 담당했습니다.",
    apps: [["SagarVision AR System", "#featuredproject"]],
    skills: ["Unity", "C#", "AR", "Android", "Windows", "TCP/IP", "UDP", "UniRx", "MVP", "HLSL"],
  },
  {
    date: "Mar 2022 - Jun 2024",
    koDate: "2022.03 ~ 2024.06",
    title: "Unity XR Engineer",
    koTitle: "Unity XR Engineer",
    company: "HyperCloud",
    companyUrl: "https://www.hyper-cloud.kr/",
    description:
      "Built Unity-based AR/VR and AR solution modules in the XR Team. Worked on HARS / HYPER Solution, Hyundai Duty Free AR content, Seoul AR navigation, and Gyeongjuro ON AR store scanning.",
    koDescription:
      "XR Team / Unity Part에서 Unity 기반 AR/VR 및 AR 솔루션 모듈 개발을 담당했습니다. HARS / HYPER Solution, 현대백화점 면세점 AR 콘텐츠, 서울시 AR 내비게이션, 경주로 ON AR 상점 스캔 프로젝트를 수행했습니다.",
    apps: [
      ["HARS / HYPER Solution", "#featuredproject"],
      ["Hyundai Duty Free AR", "#featuredproject"],
      ["Seoul AR Navigation", "#featuredproject"],
      ["Gyeongjuro ON", "#featuredproject"],
    ],
    skills: ["Unity", "C#", "ARFoundation", "TFLite", "Flutter", "REST API", "Addressables", "Android", "iOS", "CMS"],
  },
];
