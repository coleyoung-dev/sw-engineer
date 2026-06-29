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
