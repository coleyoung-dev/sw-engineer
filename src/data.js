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
      overview: "Overview",
      focus: "Goals & Constraints",
      process: "Process",
      outcomes: "Outcomes",
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
      overview: "개요",
      focus: "목표 및 제약",
      process: "진행 과정",
      outcomes: "성과",
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
    location: "Klevion · Medical Technology Innovation Team · 2025.04 - Present",
    koLocation: "클레비온 의료기술혁신팀 · 2025.04 ~ 진행 중",
    description:
      "Developed Unity-based Android and Windows clients for an artificial joint surgery assistance system. Integrated TCP/IP and UDP socket communication, introduced UniRx with an MVP architecture, built custom IMGUI build automation, and improved the existing client from roughly 15 FPS to stable 60 FPS while reducing device heat.",
    koDescription:
      "인공 관절 수술 보조 시스템의 Unity 기반 Android, Windows 클라이언트 앱을 개발했습니다. TCP/IP 및 UDP Socket 통신을 연동하고, UniRx 기반 MVP 아키텍처를 도입했으며, IMGUI 커스텀 빌드 자동화 툴과 Unity HLSL 시각 효과를 구현했습니다. 기존 클라이언트의 발열을 줄이고 평균 15프레임 수준의 성능을 평균 60프레임 동작으로 개선했습니다.",
    icon: "bi-activity",
    image: "images_videos/sagarvision.png",
    imageAlt: "SagarVision AR System thumbnail",
    koImageAlt: "SagarVision AR System 썸네일",
    tags: ["Unity", "C#", "Android", "Windows", "TCP/IP", "UDP", "UniRx", "MVP", "HLSL", "IMGUI"],
    role: "Unity Client Programmer",
    koRole: "Unity 클라이언트 개발자",
    timeline: "2025.04 - Present",
    koTimeline: "2025.04 ~ 진행 중",
    team: "Klevion Medical Technology Innovation Team",
    koTeam: "클레비온 의료기술혁신팀",
    category: "Android (XREAL) / Windows",
    koCategory: "Android (XREAL) / Windows",
    focus: [
      "Support stable operation across Android and Windows clients used in a medical-assistance workflow.",
      "Connect real-time device communication through TCP/IP and UDP sockets.",
      "Improve maintainability by introducing UniRx and an MVP architecture into the Unity client.",
    ],
    koFocus: [
      "의료 보조 워크플로우에서 사용하는 Android 및 Windows 클라이언트의 안정적인 구동을 목표로 했습니다.",
      "TCP/IP와 UDP Socket 기반 실시간 장비 통신을 Unity 클라이언트에 연결했습니다.",
      "UniRx와 MVP 아키텍처를 도입해 클라이언트 유지보수성을 높였습니다.",
    ],
    process: [
      "Built custom IMGUI tooling to reduce repeated build setup and deployment mistakes.",
      "Implemented HLSL-based visual effects while profiling runtime cost on target devices.",
      "Repeated profiling and optimization passes to reduce heat and frame-time spikes.",
    ],
    koProcess: [
      "반복되는 빌드 설정과 배포 실수를 줄이기 위해 IMGUI 기반 커스텀 빌드 툴을 만들었습니다.",
      "타깃 디바이스의 런타임 비용을 확인하며 Unity HLSL 기반 시각 효과를 구현했습니다.",
      "프로파일링과 최적화 사이클을 반복해 발열과 프레임 타임 스파이크를 줄였습니다.",
    ],
    outcomes: [
      "Improved the existing client from roughly 15 FPS to stable 60 FPS.",
      "Reduced device heat during runtime through profiling-driven optimization.",
      "Created a clearer client architecture for ongoing feature work.",
    ],
    koOutcomes: [
      "기존 클라이언트를 평균 15프레임 수준에서 안정적인 60프레임 동작으로 개선했습니다.",
      "프로파일링 기반 최적화로 런타임 발열을 줄였습니다.",
      "향후 기능 확장을 위한 클라이언트 구조를 더 명확하게 정리했습니다.",
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
        title: "Continuous Deployment Configuration",
        koTitle: "CD(continuous deployment/deploy) 구성",
        summary: "Custom build and deployment flow for repeatable client delivery.",
        koSummary: "반복 가능한 클라이언트 전달을 위한 커스텀 빌드 및 배포 흐름",
        markdownPath: "./content/project-details/sagarvision/continuous-deployment.en.md",
        koMarkdownPath: "./content/project-details/sagarvision/continuous-deployment.ko.md",
      },
    ],
  },
  {
    title: "Market Validation WebGL Minigame",
    koTitle: "Market Validation WebGL 미니게임",
    location: "HyperCloud · XR Team · 2024.02 - 2024.04",
    koLocation: "하이퍼클라우드 XR Team · 2024.02 ~ 2024.04",
    description:
      "Developed a mobile-targeted Unity WebGL minigame for market validation. Owned the overall gameplay logic, built a shared Unity WebGL CMS module, connected Unity with React through jslib code, integrated REST APIs, and kept the WebGL build running at a stable 60 FPS through graphics and physics optimization.",
    koDescription:
      "Market Validation에 활용할 모바일 타깃 Unity WebGL 미니게임을 개발했습니다. 전체 게임 로직을 구현하고, 공통 Unity WebGL CMS Module을 개발했으며, Unity와 React 간 통신을 위한 jslib 코드 작성과 REST API 연동을 담당했습니다. WebGL 환경에서 안정적인 60프레임 동작을 목표로 그래픽스 및 물리 최적화를 진행했습니다.",
    icon: "bi-controller",
    image: "images_videos/webgl.png",
    imageAlt: "Market Validation WebGL Minigame thumbnail",
    koImageAlt: "Market Validation WebGL 미니게임 썸네일",
    tags: ["Unity", "WebGL", "Mobile", "React", "jslib", "REST API", "Profiling", "Optimization"],
    role: "Unity WebGL Client Developer",
    koRole: "Unity WebGL 클라이언트 개발자",
    timeline: "2024.02 - 2024.04",
    koTimeline: "2024.02 ~ 2024.04",
    team: "1 Client Programmer, 1 Technical Artist, 1 Planner",
    koTeam: "클라이언트 프로그래머 1명, TA 1명, 기획 1명",
    category: "WebGL (Mobile Target)",
    koCategory: "WebGL (Mobile Target)",
    focus: [
      "Build a lightweight WebGL minigame that could run smoothly on mobile browsers.",
      "Connect Unity gameplay with a React-based service surface and REST API data.",
      "Create a reusable CMS module for WebGL minigame projects.",
    ],
    koFocus: [
      "모바일 브라우저에서도 원활하게 실행되는 가벼운 WebGL 미니게임을 개발했습니다.",
      "Unity 게임 로직을 React 기반 서비스 화면 및 REST API 데이터와 연결했습니다.",
      "WebGL 미니게임 프로젝트에서 공통으로 사용할 수 있는 CMS Module을 만들었습니다.",
    ],
    process: [
      "Implemented the overall game loop, scoring flow, and player interaction logic in Unity.",
      "Wrote jslib bridge code so Unity WebGL could exchange events and data with React.",
      "Repeated profiling passes and optimized graphics and physics costs for the WebGL runtime.",
    ],
    koProcess: [
      "Unity에서 전체 게임 루프, 점수 흐름, 플레이어 인터랙션 로직을 구현했습니다.",
      "Unity WebGL과 React가 이벤트 및 데이터를 주고받을 수 있도록 jslib 브릿지 코드를 작성했습니다.",
      "WebGL 런타임 비용을 확인하며 그래픽스와 물리 처리 비용을 반복적으로 최적화했습니다.",
    ],
    outcomes: [
      "Delivered the minigame so it could play at a stable 60 FPS in the WebGL environment.",
      "Improved development convenience through the shared Unity WebGL CMS module.",
      "Strengthened practical experience with Unity WebGL service integration and browser runtime constraints.",
    ],
    koOutcomes: [
      "WebGL 환경에서 안정적인 60프레임으로 플레이할 수 있도록 개발했습니다.",
      "공통 Unity WebGL CMS Module을 통해 개발 편의성을 높였습니다.",
      "Unity WebGL 서비스 연동과 브라우저 런타임 제약에 대한 실무 경험을 쌓았습니다.",
    ],
  },
  {
    title: "Hyundai Duty Free AR Adventure Pass",
    koTitle: "현대백화점 면세점 AR 어드벤처 패스",
    location: "HyperCloud · XR Team · 2023.10 - 2024.02",
    koLocation: "하이퍼클라우드 XR Team · 2023.10 ~ 2024.02",
    description:
      "Built AR content for the Hyundai Duty Free app and XR device experiences. Developed brand catcher image recognition based on a TFLite library, created Meta Quest 3 content with OVR Toolkit, integrated Android voice-recognition plugins into Unity, and prepared QA and booth operation guides.",
    koDescription:
      "현대백화점 면세점 앱 내 AR 콘텐츠와 XR 기기 체험 콘텐츠를 개발했습니다. TFLite library 기반 브랜드 캐처 이미지 인식 로직 초안을 구현하고, OVR Toolkit으로 Meta Quest 3 XR 콘텐츠를 개발했습니다. Snapdragon Spaces SDK 기반 AR Glass 콘텐츠와 Android 음성인식 플러그인을 Unity에 결합했으며, QA 및 체험 부스 운영 가이드 작성과 교육까지 진행했습니다.",
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
    focus: [
      "Build AR app content and XR device demos for a retail brand campaign.",
      "Connect image recognition, voice recognition, Quest 3, and AR Glass implementations in Unity.",
      "Prepare the project for QA and exhibition booth operation, not only development.",
    ],
    koFocus: [
      "리테일 브랜드 캠페인을 위한 앱 내 AR 콘텐츠와 XR 기기 체험 콘텐츠를 개발했습니다.",
      "이미지 인식, 음성 인식, Quest 3, AR Glass 구현을 Unity 프로젝트 안에서 연결했습니다.",
      "개발뿐 아니라 QA와 체험 부스 운영까지 고려해야 했습니다.",
    ],
    process: [
      "Drafted TFLite-based image recognition logic for brand catcher interactions.",
      "Developed Meta Quest 3 content with OVR Toolkit and AR Glass content with Snapdragon Spaces.",
      "Integrated an Android voice-recognition plugin into Unity and documented QA/operation guides.",
    ],
    koProcess: [
      "브랜드 캐처 인터랙션을 위한 TFLite 기반 이미지 인식 로직 초안을 구현했습니다.",
      "OVR Toolkit으로 Meta Quest 3 콘텐츠를, Snapdragon Spaces로 AR Glass 콘텐츠를 개발했습니다.",
      "Android 음성인식 플러그인을 Unity에 연동하고 QA/운영 가이드를 문서화했습니다.",
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
  },
  {
    title: "Seoul AR Navigation PoC",
    koTitle: "서울시 디지털 재단 실증 사업 AR 내비게이션",
    location: "HyperCloud · XR Team · 2023.08 - 2023.10",
    koLocation: "하이퍼클라우드 XR Team · 2023.08 ~ 2023.10",
    description:
      "Developed GPS and VPS-based AR navigation prototypes around Cheonggyecheon. Built Unity Embedded communication with a Flutter app, coordinated with LBS Tech and SKT, integrated SKT VLAM VPS modules, and generated routes dynamically from REST API data.",
    koDescription:
      "GPS 기반 AR 내비게이션 프로토타입과 서울 청계천 지역 VPS 기반 AR 내비게이션을 개발했습니다. Flutter App에 Unity가 Embedded될 수 있도록 Flutter와 Unity 통신 인터페이스를 구성하고, LBS Tech 및 SKT와 협업하며 SKT VLAM VPS 모듈을 기반으로 AR 내비게이션을 구현했습니다. Rest API를 바탕으로 경로 동적 생성 로직도 개발했습니다.",
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
    focus: [
      "Prototype outdoor AR navigation using GPS and VPS around Cheonggyecheon.",
      "Embed Unity inside a Flutter app and define a reliable communication boundary.",
      "Generate routes dynamically from REST API data while coordinating with partner modules.",
    ],
    koFocus: [
      "청계천 일대에서 GPS와 VPS를 활용한 야외 AR 내비게이션을 프로토타입으로 개발했습니다.",
      "Flutter 앱 안에 Unity를 임베드하고 안정적인 통신 경계를 정의했습니다.",
      "협력사 모듈과 연동하면서 REST API 데이터 기반 동적 경로 생성을 구현해야 했습니다.",
    ],
    process: [
      "Built Unity Embedded communication between Flutter and the Unity runtime.",
      "Integrated SKT VLAM VPS modules while coordinating with LBS Tech and SKT.",
      "Implemented dynamic route generation and AR guidance logic from server data.",
    ],
    koProcess: [
      "Flutter와 Unity 런타임 사이의 Unity Embedded 통신 구조를 구성했습니다.",
      "LBS Tech 및 SKT와 협업하며 SKT VLAM VPS 모듈을 연동했습니다.",
      "서버 데이터 기반 경로 동적 생성과 AR 안내 로직을 구현했습니다.",
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
  },
  {
    title: "Gyeongjuro ON AR Store Scan",
    koTitle: "경주로 ON AR 상점 스캔",
    location: "HyperCloud · XR Team · 2023.01 - 2023.02",
    koLocation: "하이퍼클라우드 XR Team · 2023.01 ~ 2023.02",
    description:
      "Developed AR store-scanning content embedded in a Flutter app. Visualized nearby stores using compass and GPS sensor data, displayed nearest store information through REST APIs, and designed Android/iOS native communication interfaces.",
    koDescription:
      "경주로 ON 앱에 포함되는 AR 상점 스캔 콘텐츠를 개발했습니다. Compass 값과 GPS를 활용해 플레이어 근처 상점을 AR로 시각화하고, Rest API로 가장 가까운 상점 정보를 표현했습니다. Flutter 앱에 Embedded되는 형태로 개발하며 Android와 iOS Native 통신 인터페이스를 설계하고 구현했습니다.",
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
    focus: [
      "Visualize nearby stores in AR using GPS and compass sensor data.",
      "Embed Unity AR content into a Flutter app for Android and iOS.",
      "Show the nearest store information through REST API integration.",
    ],
    koFocus: [
      "GPS와 Compass 센서 데이터를 활용해 주변 상점을 AR로 시각화했습니다.",
      "Android 및 iOS Flutter 앱 안에 Unity AR 콘텐츠를 임베드했습니다.",
      "REST API 연동으로 가장 가까운 상점 정보를 표시해야 했습니다.",
    ],
    process: [
      "Designed Unity-to-native communication interfaces for Android and iOS.",
      "Mapped player direction and nearby store positions with compass and GPS values.",
      "Connected store data APIs to drive AR markers and nearest-store UI.",
    ],
    koProcess: [
      "Android와 iOS 네이티브 통신 인터페이스를 설계했습니다.",
      "Compass와 GPS 값을 활용해 플레이어 방향과 주변 상점 위치를 매핑했습니다.",
      "상점 데이터 API를 연동해 AR 마커와 가까운 상점 UI를 표시했습니다.",
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
    title: "SPC Secta9ine Happyreal",
    koTitle: "SPC 섹타나인 Happyreal",
    location: "HyperCloud · XR Team · 2022.08 - 2022.12",
    koLocation: "하이퍼클라우드 XR Team · 2022.08 ~ 2022.12",
    description:
      "Developed AR shooting game content. Implemented a dynamic NavMesh bake system, spawned entities based on detected AR plane meshes, and handled sound design through layering and mixing in Logic Pro.",
    koDescription:
      "AR Shooting Game 콘텐츠를 개발했습니다. Dynamic Navmesh Bake System을 활용해 동적 내비게이션 메시 시스템을 구현하고, 인식된 ARPlane Mesh 기준 특정 위치에서만 오브젝트가 스폰되도록 개발했습니다. Logic Pro를 활용한 Sound Layering 및 Mixing 등 사운드 디자인 업무도 진행했습니다.",
    icon: "bi-bullseye",
    image: "images_videos/secta9ine.png",
    imageAlt: "SPC Secta9ine Happyreal thumbnail",
    koImageAlt: "SPC 섹타나인 Happyreal 썸네일",
    tags: ["Unity", "ARFoundation", "Dynamic NavMesh", "ARPlane", "Sound Design", "Logic Pro"],
    role: "Unity AR Game Developer",
    koRole: "Unity AR 게임 개발자",
    timeline: "2022.08 - 2022.12",
    koTimeline: "2022.08 ~ 2022.12",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Mobile AR",
    koCategory: "Mobile AR",
    focus: [
      "Build AR shooting gameplay that reacts to detected physical planes.",
      "Use dynamic navigation data so entities could move believably in AR space.",
      "Support the game feel with layered audio and mixing work.",
    ],
    koFocus: [
      "인식된 실제 공간 평면에 반응하는 AR 슈팅 게임 플레이를 개발했습니다.",
      "AR 공간에서 오브젝트가 자연스럽게 움직일 수 있도록 동적 내비게이션 데이터를 활용했습니다.",
      "레이어드 오디오와 믹싱 작업으로 게임 감각을 보완했습니다.",
    ],
    process: [
      "Implemented a dynamic NavMesh bake system based on detected ARPlane meshes.",
      "Controlled object spawn positions so gameplay stayed tied to valid recognized surfaces.",
      "Handled sound layering and mixing in Logic Pro to support the AR experience.",
    ],
    koProcess: [
      "인식된 ARPlane Mesh 기반 Dynamic NavMesh Bake System을 구현했습니다.",
      "유효하게 인식된 표면 기준으로만 오브젝트가 스폰되도록 제어했습니다.",
      "Logic Pro를 활용해 사운드 레이어링과 믹싱 업무를 진행했습니다.",
    ],
    outcomes: [
      "Created AR shooting content with dynamic plane-aware spawning and navigation.",
      "Improved spatial consistency by constraining gameplay to detected AR surfaces.",
      "Broadened contribution beyond code into practical sound design.",
    ],
    koOutcomes: [
      "동적 평면 인식 기반 스폰과 내비게이션이 적용된 AR 슈팅 콘텐츠를 만들었습니다.",
      "인식된 AR 표면에 플레이를 제한해 공간 일관성을 높였습니다.",
      "코드 구현뿐 아니라 실무 사운드 디자인까지 기여 범위를 넓혔습니다.",
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
    focus: [
      "Build a VR training system for cochlear implant patients on Vision OS.",
      "Validate Vision Pro technical constraints and interaction feasibility.",
      "Coordinate client development across a six-person TECH FOR IMPACT team.",
    ],
    koFocus: [
      "인공 와우 수술 환자를 위한 Vision OS 기반 VR 훈련 시스템을 개발했습니다.",
      "Vision Pro 기술 제약과 인터랙션 구현 가능성을 검증했습니다.",
      "TECH FOR IMPACT 참여 팀 안에서 6인 팀의 클라이언트 개발을 조율했습니다.",
    ],
    process: [
      "Led Unity client development and split implementation responsibilities with two other client programmers.",
      "Validated Vision Pro runtime behavior and prepared TestFlight distribution.",
      "Worked with planning and design members to align training content with the interaction flow.",
    ],
    koProcess: [
      "Unity 클라이언트 개발을 리드하며 2명의 클라이언트 프로그래머와 구현 범위를 나눴습니다.",
      "Vision Pro 런타임 동작을 검증하고 TestFlight 배포를 준비했습니다.",
      "기획/디자인 팀과 협업해 훈련 콘텐츠와 인터랙션 흐름을 맞췄습니다.",
    ],
    outcomes: [
      "Established the core development direction for the Vision OS VR training system.",
      "Completed technical validation for Vision Pro and TestFlight-based delivery.",
      "Created a side-project case study focused on accessibility and rehabilitation training.",
    ],
    koOutcomes: [
      "Vision OS 기반 VR 훈련 시스템의 핵심 개발 방향을 정리했습니다.",
      "Vision Pro 기술 검증과 TestFlight 기반 배포 흐름을 확인했습니다.",
      "접근성과 재활 훈련을 중심으로 한 사이드 프로젝트 경험을 만들었습니다.",
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
      "Built Unity-based AR/VR and WebGL apps in the XR Team. Worked on Market Validation WebGL, Hyundai Duty Free AR content, Seoul AR navigation, Gyeongjuro ON AR store scanning, and SPC Secta9ine Happyreal.",
    koDescription:
      "XR Team / Unity Part에서 Unity 기반 AR/VR 및 WebGL 앱 개발을 담당했습니다. Market Validation WebGL, 현대백화점 면세점 AR 콘텐츠, 서울시 AR 내비게이션, 경주로 ON AR 상점 스캔, SPC 섹타나인 Happyreal 프로젝트를 수행했습니다.",
    apps: [
      ["Market Validation WebGL", "#featuredproject"],
      ["Hyundai Duty Free AR", "#featuredproject"],
      ["Seoul AR Navigation", "#featuredproject"],
      ["Gyeongjuro ON", "#featuredproject"],
      ["SPC Secta9ine", "#featuredproject"],
    ],
    skills: ["Unity", "C#", "ARFoundation", "WebGL", "TFLite", "Flutter", "REST API", "Addressables", "Android", "iOS"],
  },
];
