export const navItems = [
  { id: "featuredproject", label: "Projects", koLabel: "프로젝트" },
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
      category: "Category",
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
        "Unity 기반 AR/VR 및 모바일 앱을 개발하며, 네이티브 연동, 에셋 관리 시스템, WebGL 포팅, 프로파일링 기반 성능 최적화에 강점을 가진 클라이언트 개발자입니다.",
      platforms: "주요 경험 플랫폼",
      contact: "이메일로 연락하기",
      projects: "프로젝트 보기",
      scroll: "아래로 스크롤해 프로젝트를 확인하세요",
      initials: "HCY",
      profileKicker: "Unity Client",
      profileTags: ["AR/VR", "Mobile", "WebGL"],
    },
    sections: {
      featuredProjects: "프로젝트",
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
      category: "분야",
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
  { icon: "bi-phone", label: "Android / iOS", koLabel: "Android / iOS" },
  { icon: "bi-badge-vr", label: "AR / VR", koLabel: "AR / VR" },
  { icon: "bi-window", label: "Windows", koLabel: "Windows" },
  { icon: "bi-globe2", label: "WebGL", koLabel: "WebGL" },
  { icon: "bi-cpu", label: "Native Integration", koLabel: "네이티브 연동" },
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
    tags: ["Unity", "C#", "Android", "Windows", "TCP/IP", "UDP", "UniRx", "MVP", "HLSL", "IMGUI"],
    role: "Unity Client Programmer",
    koRole: "Unity 클라이언트 개발자",
    timeline: "2025.04 - Present",
    koTimeline: "2025.04 ~ 진행 중",
    team: "Klevion Medical Technology Innovation Team",
    koTeam: "클레비온 의료기술혁신팀",
    category: "Medical AR System",
    koCategory: "의료 AR 시스템",
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
  },
  {
    title: "2024 Metaverse Expo AR Glass Content",
    koTitle: "2024 Metaverse Expo AR Glass 콘텐츠",
    location: "HyperCloud · XR Team · 2024.04 - 2024.06",
    koLocation: "하이퍼클라우드 XR Team · 2024.04 ~ 2024.06",
    description:
      "Participated in planning and developing unreleased AR Glass content. Proposed an idea during planning that was selected for the final experience, helping the company secure strong exhibition responses and reference material for future AR Glass work.",
    koDescription:
      "미출시 AR Glass 콘텐츠의 기획과 개발에 참여했습니다. 기획 단계에서 아이디어를 제안했고 최종 콘텐츠 방향에 채택되어 2024 Metaverse Expo에서 긍정적인 반응을 얻었습니다. 다양한 기업 및 지자체 상담으로 이어지는 AR Glass 콘텐츠 레퍼런스 확보에 기여했습니다.",
    icon: "bi-eyeglasses",
    tags: ["Unity", "AR Glass", "XR", "Planning", "Prototype"],
    role: "AR & VR Client Engineer",
    koRole: "AR & VR 클라이언트 엔지니어",
    timeline: "2024.04 - 2024.06",
    koTimeline: "2024.04 ~ 2024.06",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "AR Glass Prototype",
    koCategory: "AR Glass 프로토타입",
    focus: [
      "Prototype unreleased AR Glass content that could communicate the device experience in an exhibition booth.",
      "Participate in planning, interaction design, and Unity implementation under a short expo timeline.",
      "Keep the experience simple enough for first-time visitors while still showing future product potential.",
    ],
    koFocus: [
      "전시 부스에서 AR Glass 경험을 명확히 전달할 수 있는 미출시 콘텐츠를 프로토타입으로 제작했습니다.",
      "짧은 엑스포 일정 안에서 기획, 인터랙션 설계, Unity 구현에 함께 참여했습니다.",
      "초기 방문자도 쉽게 체험하면서 향후 제품 가능성을 보여줄 수 있도록 범위를 조절했습니다.",
    ],
    process: [
      "Proposed an interaction idea during planning that was selected for the final content direction.",
      "Iterated on Unity prototypes around spatial readability and booth operation constraints.",
      "Prepared the experience so non-technical visitors could understand the AR Glass use case quickly.",
    ],
    koProcess: [
      "기획 단계에서 제안한 인터랙션 아이디어가 최종 콘텐츠 방향에 채택되었습니다.",
      "공간 인지성과 부스 운영 제약을 고려해 Unity 프로토타입을 반복 개선했습니다.",
      "비개발 방문자도 AR Glass 활용 사례를 빠르게 이해할 수 있도록 체험 흐름을 정리했습니다.",
    ],
    outcomes: [
      "Helped the company receive positive responses at the 2024 Metaverse Expo.",
      "Contributed reference material for later AR Glass business discussions.",
      "Gained practical experience aligning prototype scope with exhibition needs.",
    ],
    koOutcomes: [
      "2024 Metaverse Expo에서 긍정적인 관람 반응을 얻는 데 기여했습니다.",
      "이후 AR Glass 관련 기업 및 지자체 상담에 활용할 레퍼런스 확보에 기여했습니다.",
      "전시 목적에 맞춰 프로토타입 범위를 조율하는 실무 경험을 쌓았습니다.",
    ],
  },
  {
    title: "Market Validation WebGL Minigame",
    koTitle: "Market Validation WebGL Minigame",
    location: "HyperCloud · XR Team · 2024.02 - 2024.04",
    koLocation: "하이퍼클라우드 XR Team · 2024.02 ~ 2024.04",
    description:
      "Implemented core game logic, ported Unity content to WebGL, developed a reusable WebGL CMS module, connected Unity and React through jslib, integrated REST APIs, and optimized graphics and physics to maintain 60 FPS in the browser.",
    koDescription:
      "전체 게임 로직 개발과 WebGL 포팅을 담당했습니다. Unity WebGL CMS Module을 개발하고 Unity와 React 간 통신을 위한 jslib 코드를 작성했으며, Rest API를 연동했습니다. WebGL 환경에서 원활히 실행되도록 그래픽스와 물리 최적화를 지속해 60프레임 고정 플레이가 가능하도록 개발했습니다.",
    icon: "bi-controller",
    tags: ["Unity", "WebGL", "React Bridge", "jslib", "REST API", "Optimization", "Physics"],
    role: "Unity WebGL Client Engineer",
    koRole: "Unity WebGL 클라이언트 엔지니어",
    timeline: "2024.02 - 2024.04",
    koTimeline: "2024.02 ~ 2024.04",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Browser Game / Market Validation",
    koCategory: "브라우저 게임 / 시장 검증",
    focus: [
      "Port Unity content to WebGL while preserving the core play feel in a browser.",
      "Bridge React and Unity with jslib so the web service and game client could exchange data.",
      "Maintain a 60 FPS target despite browser graphics and physics constraints.",
    ],
    koFocus: [
      "Unity 콘텐츠를 WebGL로 포팅하면서 브라우저에서도 핵심 플레이 감각을 유지하는 것을 목표로 했습니다.",
      "React와 Unity가 데이터를 주고받을 수 있도록 jslib 기반 브릿지를 구성했습니다.",
      "브라우저의 그래픽스와 물리 제약 속에서도 60프레임 목표를 유지해야 했습니다.",
    ],
    process: [
      "Implemented the core game loop and reusable WebGL CMS module.",
      "Integrated REST APIs and structured Unity-to-React communication events.",
      "Optimized rendering, physics cost, and asset usage for browser runtime stability.",
    ],
    koProcess: [
      "핵심 게임 루프와 재사용 가능한 WebGL CMS 모듈을 구현했습니다.",
      "REST API를 연동하고 Unity와 React 간 통신 이벤트 구조를 정리했습니다.",
      "브라우저 런타임 안정성을 위해 렌더링, 물리 비용, 에셋 사용량을 최적화했습니다.",
    ],
    outcomes: [
      "Delivered a playable WebGL minigame for market validation.",
      "Built a communication module that could be reused in later Unity WebGL work.",
      "Achieved stable 60 FPS gameplay in the browser environment.",
    ],
    koOutcomes: [
      "시장 검증을 위한 플레이 가능한 WebGL 미니게임을 구현했습니다.",
      "이후 Unity WebGL 작업에 재사용할 수 있는 통신 모듈을 만들었습니다.",
      "브라우저 환경에서 안정적인 60프레임 플레이를 달성했습니다.",
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
    tags: ["Unity", "ARFoundation", "TFLite", "Meta Quest 3", "OVR Toolkit", "Snapdragon Spaces", "Android Plugin", "QA"],
    role: "AR & VR Client Engineer",
    koRole: "AR & VR 클라이언트 엔지니어",
    timeline: "2023.10 - 2024.02",
    koTimeline: "2023.10 ~ 2024.02",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Retail AR / XR Experience",
    koCategory: "리테일 AR / XR 체험",
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
    tags: ["Unity", "AR Navigation", "GPS", "VPS", "VLAM", "Flutter", "Unity Embedded", "REST API"],
    role: "Unity AR Navigation Engineer",
    koRole: "Unity AR 내비게이션 엔지니어",
    timeline: "2023.08 - 2023.10",
    koTimeline: "2023.08 ~ 2023.10",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "AR Navigation PoC",
    koCategory: "AR 내비게이션 PoC",
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
    title: "HARS Infrastructure",
    koTitle: "HARS Infrastructure",
    location: "HyperCloud · XR Team · 2023.02 - 2023.06",
    koLocation: "하이퍼클라우드 XR Team · 2023.02 ~ 2023.06",
    description:
      "Designed and developed infrastructure for HyperCloud's HARS solution. Defined and tested Unity-to-mobile-native interfaces, upgraded AR Portal content, and rebuilt image recognition from ARFoundation Image Tracking to a TensorFlow model using a TFLite library.",
    koDescription:
      "회사 자체 솔루션 HARS의 Infrastructure 설계와 개발을 담당했습니다. Unity Embedded 상황에서 Mobile Native와 Unity 사이의 이벤트 및 통신 인터페이스를 정의, 테스트, 개발했습니다. 기존 AR Portal 콘텐츠를 고도화하고, ARFoundation Image Tracking 기반 이미지 인식 로직을 TFLite library를 활용한 TensorFlow 모델 기반 로직으로 재개발했습니다.",
    icon: "bi-diagram-3",
    tags: ["Unity", "Mobile Native", "Unity Embedded", "AR Portal", "TFLite", "TensorFlow", "ARFoundation"],
    role: "Unity Infrastructure Engineer",
    koRole: "Unity 인프라스트럭처 엔지니어",
    timeline: "2023.02 - 2023.06",
    koTimeline: "2023.02 ~ 2023.06",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "AR Solution Infrastructure",
    koCategory: "AR 솔루션 인프라",
    focus: [
      "Design Unity-side infrastructure for HyperCloud's HARS solution.",
      "Define event and communication interfaces between Unity and mobile native layers.",
      "Upgrade existing AR Portal and image-recognition logic for broader solution use.",
    ],
    koFocus: [
      "회사 자체 솔루션 HARS의 Unity 측 인프라 구조를 설계했습니다.",
      "Unity와 모바일 네이티브 레이어 사이의 이벤트 및 통신 인터페이스를 정의했습니다.",
      "기존 AR Portal과 이미지 인식 로직을 솔루션 용도에 맞게 고도화했습니다.",
    ],
    process: [
      "Tested and implemented mobile-native communication interfaces for Unity Embedded scenarios.",
      "Reworked AR Portal content so it could fit into HARS as a reusable feature.",
      "Rebuilt image recognition from ARFoundation Image Tracking to a TensorFlow model through TFLite.",
    ],
    koProcess: [
      "Unity Embedded 상황에서 모바일 네이티브 통신 인터페이스를 테스트하고 구현했습니다.",
      "AR Portal 콘텐츠를 HARS 안에서 재사용 가능한 기능으로 고도화했습니다.",
      "ARFoundation Image Tracking 기반 로직을 TFLite를 활용한 TensorFlow 모델 기반 로직으로 재개발했습니다.",
    ],
    outcomes: [
      "Established reusable Unity-native integration patterns for HARS.",
      "Improved recognition logic flexibility beyond image tracking.",
      "Created a stronger foundation for later AR content and productization work.",
    ],
    koOutcomes: [
      "HARS에서 재사용할 수 있는 Unity-네이티브 연동 패턴을 정리했습니다.",
      "이미지 트래킹을 넘어 더 유연한 인식 로직으로 확장했습니다.",
      "후속 AR 콘텐츠와 제품화 작업의 기반을 강화했습니다.",
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
    tags: ["Unity", "AR", "GPS", "Compass", "Flutter", "Android", "iOS", "REST API"],
    role: "Unity AR Client Engineer",
    koRole: "Unity AR 클라이언트 엔지니어",
    timeline: "2023.01 - 2023.02",
    koTimeline: "2023.01 ~ 2023.02",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Mobile AR Store Discovery",
    koCategory: "모바일 AR 상점 탐색",
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
    tags: ["Unity", "ARFoundation", "Dynamic NavMesh", "ARPlane", "Sound Design", "Logic Pro"],
    role: "Unity AR Game Developer",
    koRole: "Unity AR 게임 개발자",
    timeline: "2022.08 - 2022.12",
    koTimeline: "2022.08 ~ 2022.12",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "AR Shooting Game",
    koCategory: "AR 슈팅 게임",
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
  {
    title: "2022 Metaverse Expo AR Portal",
    koTitle: "2022 Metaverse Expo AR Portal",
    location: "HyperCloud · XR Team · 2022.05 - 2022.06",
    koLocation: "하이퍼클라우드 XR Team · 2022.05 ~ 2022.06",
    description:
      "Created an exhibition app using ARFoundation Image Tracking and Stencil Buffer-based AR Portal content. The positive response at the expo helped the content become part of the company's HARS solution.",
    koDescription:
      "2022 Metaverse Expo 체험 앱을 개발했습니다. ARFoundation Framework의 AR Image Tracking으로 이미지 인식 로직을 구현하고, Stencil Buffer를 활용해 AR Portal 콘텐츠를 개발했습니다. 전시에서 긍정적인 반응을 얻었고, 해당 콘텐츠가 HARS 솔루션에 통합되어 고도화되는 계기가 되었습니다.",
    icon: "bi-door-open",
    tags: ["Unity", "ARFoundation", "Image Tracking", "Stencil Buffer", "AR Portal"],
    role: "Unity AR Content Developer",
    koRole: "Unity AR 콘텐츠 개발자",
    timeline: "2022.05 - 2022.06",
    koTimeline: "2022.05 ~ 2022.06",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Exhibition AR Portal",
    koCategory: "전시 AR Portal",
    focus: [
      "Create an exhibition AR app that visitors could understand immediately.",
      "Use image tracking as an accessible trigger for the portal experience.",
      "Build a visually clear AR Portal effect with stencil-buffer techniques.",
    ],
    koFocus: [
      "관람객이 즉시 이해할 수 있는 전시용 AR 체험 앱을 개발했습니다.",
      "이미지 트래킹을 AR Portal 체험의 진입 트리거로 활용했습니다.",
      "Stencil Buffer를 활용해 시각적으로 명확한 AR Portal 효과를 구현했습니다.",
    ],
    process: [
      "Implemented ARFoundation Image Tracking for marker-based recognition.",
      "Built the AR Portal rendering effect using the stencil buffer.",
      "Refined the experience for exhibition usage and later solution integration.",
    ],
    koProcess: [
      "마커 기반 인식을 위해 ARFoundation Image Tracking을 구현했습니다.",
      "Stencil Buffer를 활용해 AR Portal 렌더링 효과를 제작했습니다.",
      "전시 사용성과 이후 솔루션 통합을 고려해 체험을 다듬었습니다.",
    ],
    outcomes: [
      "Delivered an expo experience that received positive visitor response.",
      "The content became a starting point for HARS solution integration.",
      "Built early production experience in ARFoundation and stencil-based rendering.",
    ],
    koOutcomes: [
      "긍정적인 관람 반응을 얻은 엑스포 체험 콘텐츠를 구현했습니다.",
      "해당 콘텐츠가 HARS 솔루션에 통합되는 출발점이 되었습니다.",
      "ARFoundation과 스텐실 기반 렌더링을 활용한 초기 실무 경험을 쌓았습니다.",
    ],
  },
  {
    title: "Gangnam Smart Trail Addressables",
    koTitle: "강남구 스마트 둘레길 Addressables 적용",
    location: "HyperCloud · XR Team · 2022.04 - 2022.06",
    koLocation: "하이퍼클라우드 XR Team · 2022.04 ~ 2022.06",
    description:
      "Migrated local asset-loading logic to Unity Addressables and used Addressable Catalog updates to reflect asset changes in real time, reducing app build size and improving maintenance.",
    koDescription:
      "강남구 스마트 둘레길 프로젝트에 Unity Addressable System을 적용해 에셋 관리 구조를 최적화했습니다. 기존 Local Asset Load 로직을 Addressable 기반으로 변경하고, Addressable Catalog 기능으로 에셋 업데이트 사항이 실시간 반영되도록 구현했습니다. App Build 용량을 최소화하고 유지보수성을 높였습니다.",
    icon: "bi-box-seam",
    tags: ["Unity", "Addressables", "Asset Management", "Catalog Update", "Optimization"],
    role: "Unity Client Developer",
    koRole: "Unity 클라이언트 개발자",
    timeline: "2022.04 - 2022.06",
    koTimeline: "2022.04 ~ 2022.06",
    team: "HyperCloud XR Team",
    koTeam: "하이퍼클라우드 XR Team",
    category: "Asset Management Optimization",
    koCategory: "에셋 관리 최적화",
    focus: [
      "Move local asset loading to a scalable Addressables-based structure.",
      "Support real-time asset updates through Addressable Catalog workflows.",
      "Reduce app build size and make maintenance easier for changing content.",
    ],
    koFocus: [
      "로컬 에셋 로딩 구조를 확장 가능한 Addressables 기반 구조로 전환했습니다.",
      "Addressable Catalog 워크플로우로 에셋 변경 사항을 실시간 반영할 수 있게 했습니다.",
      "앱 빌드 용량을 줄이고 변화하는 콘텐츠 유지보수성을 높이는 것이 목표였습니다.",
    ],
    process: [
      "Replaced local asset-load paths with Addressables references and catalog usage.",
      "Tested content-update flows so changed assets could be reflected without rebuilding the app.",
      "Reviewed asset grouping and loading behavior for runtime and build-size impact.",
    ],
    koProcess: [
      "로컬 에셋 로드 경로를 Addressables 참조와 Catalog 사용 구조로 변경했습니다.",
      "앱 재빌드 없이 변경된 에셋이 반영되는 콘텐츠 업데이트 흐름을 테스트했습니다.",
      "런타임과 빌드 용량에 미치는 영향을 고려해 에셋 그룹과 로딩 동작을 점검했습니다.",
    ],
    outcomes: [
      "Reduced build-size pressure by moving assets out of the fixed local bundle path.",
      "Improved maintenance through catalog-driven asset updates.",
      "Built practical Addressables experience that informed later Unity asset workflows.",
    ],
    koOutcomes: [
      "고정 로컬 번들 경로에서 에셋을 분리해 빌드 용량 부담을 줄였습니다.",
      "Catalog 기반 에셋 업데이트로 유지보수성을 높였습니다.",
      "이후 Unity 에셋 워크플로우에 활용할 수 있는 Addressables 실무 경험을 쌓았습니다.",
    ],
  },
];

export const techStacks = [
  {
    icon: "bi-code-slash",
    title: "Programming Languages",
    koTitle: "프로그래밍 언어",
    skills: ["C# (Main)", "C", "C++ (Sub)"],
  },
  {
    icon: "bi-unity",
    title: "Game Engine",
    koTitle: "게임 엔진",
    skills: ["Unity", "URP", "Shader Graph", "HLSL", "ARFoundation", "OVR Toolkit", "Snapdragon Spaces"],
  },
  {
    icon: "bi-phone",
    title: "Platforms and Build",
    koTitle: "플랫폼 및 빌드",
    skills: ["Android", "iOS", "Windows", "WebGL", "Android Studio", "Xcode", "Unity Embedded"],
  },
  {
    icon: "bi-diagram-2",
    title: "Architecture and Integration",
    koTitle: "아키텍처 및 연동",
    skills: ["UniRx", "MVP", "Addressables", "REST API", "TCP/IP", "UDP", "Mobile Native Bridge", "ARR Plugin"],
    koSkills: ["UniRx", "MVP", "Addressables", "Rest API", "TCP/IP", "UDP", "모바일 네이티브 연동", "ARR Plugin"],
  },
  {
    icon: "bi-speedometer2",
    title: "Optimization and Tooling",
    koTitle: "최적화 및 도구",
    skills: ["Profiling", "Graphics Optimization", "Physics Optimization", "Custom Build Tool", "Git", "SVN"],
    koSkills: ["프로파일링", "그래픽스 최적화", "물리 최적화", "커스텀 빌드 툴", "Git", "SVN"],
  },
  {
    icon: "bi-kanban",
    title: "Collaboration",
    koTitle: "협업",
    skills: ["Gitflow", "Jira", "Notion", "Slack"],
  },
];

export const experiences = [
  {
    date: "Apr 2025 - Present",
    koDate: "2025.04 ~ 재직 중",
    title: "Unity Client Programmer",
    koTitle: "Unity 클라이언트 개발자",
    company: "Klevion",
    companyUrl: "#workexperience",
    description:
      "Working in the Medical Technology Innovation Team on Unity-based AR/VR applications. Developed Android and Windows clients for SagarVision AR System, integrated socket communication, introduced UniRx and MVP architecture, built custom build automation, and improved runtime performance and heat behavior.",
    koDescription:
      "의료기술혁신팀에서 Unity 기반 AR/VR 앱을 개발하고 있습니다. SagarVision AR System의 Android 및 Windows 클라이언트 개발, Socket 통신 연동, UniRx와 MVP 아키텍처 도입, 커스텀 빌드 자동화, 성능 및 발열 개선을 담당했습니다.",
    apps: [["SagarVision AR System", "#featuredproject"]],
    skills: ["Unity", "C#", "AR/VR", "Android", "Windows", "TCP/IP", "UDP", "UniRx", "MVP", "HLSL"],
  },
  {
    date: "Mar 2022 - Jun 2024",
    koDate: "2022.03 ~ 2024.06",
    title: "AR & VR Client Engineer",
    koTitle: "AR & VR 클라이언트 엔지니어",
    company: "HyperCloud",
    companyUrl: "#workexperience",
    description:
      "Built Unity-based AR/VR apps in the XR Team. Worked on AR Glass demos, WebGL minigames, Hyundai Duty Free AR content, Seoul AR navigation, HARS infrastructure, Gyeongjuro ON, Happyreal, Metaverse Expo content, and Addressables-based asset management.",
    koDescription:
      "XR Team / Unity Part에서 Unity 기반 AR/VR 앱 개발을 담당했습니다. AR Glass 콘텐츠, WebGL 미니게임, 현대백화점 면세점 AR 콘텐츠, 서울시 AR 내비게이션, HARS 인프라, 경주로 ON, Happyreal, Metaverse Expo 콘텐츠, Addressables 기반 에셋 관리 등 다양한 프로젝트를 수행했습니다.",
    apps: [
      ["2024 Metaverse Expo", "#featuredproject"],
      ["Market Validation", "#featuredproject"],
      ["Hyundai Duty Free AR", "#featuredproject"],
      ["HARS", "#featuredproject"],
    ],
    skills: ["Unity", "C#", "ARFoundation", "WebGL", "TFLite", "Flutter", "REST API", "Addressables", "Android", "iOS"],
  },
  {
    date: "Aug 2021 - Feb 2022",
    koDate: "2021.08 ~ 2022.02",
    title: "VR/AR Software Development Training",
    koTitle: "가상증강현실 응용 SW 개발자 양성 과정",
    company: "Kyungil Game Academy",
    companyUrl: "#workexperience",
    description:
      "Completed a VR/AR application software development program before entering professional Unity client development.",
    koDescription:
      "경일게임아카데미에서 가상증강현실 응용 SW 개발자 양성 과정을 이수하며 Unity 클라이언트 개발의 기반을 다졌습니다.",
    apps: [["Training Program", "#workexperience"]],
    skills: ["Unity", "C#", "AR/VR", "Client Development"],
  },
];
