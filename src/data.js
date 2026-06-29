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
    tags: ["Unity", "Vision OS", "Vision Pro", "VR Training", "TestFlight", "Team Lead"],
    role: "Unity Client Lead",
    koRole: "Unity 클라이언트 개발 리드",
    timeline: "Aug 2025 - Mar 2026",
    koTimeline: "2025.08 ~ 2026.03",
    team: "3 Client Programmers, 3 Planning/Design Members",
    koTeam: "클라이언트 프로그래머 3명, 기획/디자인 3명",
    category: "Vision OS VR Training",
    koCategory: "Vision OS VR 훈련 시스템",
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
      "Working in the Medical Technology Innovation Team on Unity-based AR/VR applications. Developed Android and Windows clients for a medical AR system, integrated socket communication, introduced UniRx and MVP architecture, built custom build automation, and improved runtime performance and heat behavior.",
    koDescription:
      "의료기술혁신팀에서 Unity 기반 AR/VR 앱을 개발하고 있습니다. 의료 AR 시스템의 Android 및 Windows 클라이언트 개발, Socket 통신 연동, UniRx와 MVP 아키텍처 도입, 커스텀 빌드 자동화, 성능 및 발열 개선을 담당했습니다.",
    apps: [["Medical AR System", "#workexperience"]],
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
      "Built Unity-based AR/VR apps in the XR Team. Worked on AR Glass demos, WebGL minigames, HARS infrastructure, Metaverse Expo content, and Addressables-based asset management.",
    koDescription:
      "XR Team / Unity Part에서 Unity 기반 AR/VR 앱 개발을 담당했습니다. AR Glass 콘텐츠, WebGL 미니게임, HARS 인프라, Metaverse Expo 콘텐츠, Addressables 기반 에셋 관리 등 다양한 프로젝트를 수행했습니다.",
    apps: [
      ["2024 Metaverse Expo", "#featuredproject"],
      ["Market Validation", "#featuredproject"],
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
