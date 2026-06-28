export const navItems = [
  { id: "main", icon: "bi-house", key: "home" },
  { id: "about", icon: "bi-person", key: "about" },
  { id: "portfolio", icon: "bi-images", key: "portfolio" },
  { id: "resume", icon: "bi-file-earmark-text", key: "resume" },
  { id: "skills", icon: "bi-braces", key: "skills" },
  { id: "recommendations", icon: "bi-chat-right-heart", key: "rec" },
  { id: "contact", icon: "bi-envelope", key: "contact" },
];

export const portfolioItems = [
  {
    id: "snake",
    category: "others",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-0.webp",
    ratio: "1195 / 717",
    highlight: true,
    titleKey: "snake",
  },
  {
    id: "gfx1",
    category: "graphics",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-1.webp",
    ratio: "1189 / 889",
    highlight: true,
    titleKey: "gfx1",
  },
  {
    id: "blog",
    category: "graphics",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-2.webp",
    ratio: "1011 / 720",
    highlight: true,
    titleKey: "blog",
  },
  {
    id: "raccoon",
    category: "engine",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-3.webp",
    ratio: "849 / 480",
    titleKey: "raccoon",
  },
  {
    id: "tetris",
    category: "others",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-4.webp",
    ratio: "697 / 585",
    titleKey: "tetris",
  },
  {
    id: "gfx2",
    category: "graphics",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-5.webp",
    ratio: "1374 / 795",
    titleKey: "gfx2",
  },
  {
    id: "deferred",
    category: "graphics",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-6.webp",
    ratio: "2559 / 1348",
    titleKey: "deferred",
  },
  {
    id: "pinata",
    category: "engine",
    image: "/assets/img/masonry-portfolio/masonry-portfolio-10.webp",
    ratio: "1803 / 1009",
    titleKey: "pinata",
  },
];

export const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      resume: "Resume",
      skills: "Skills",
      rec: "Rec",
      contact: "Contact",
    },
    hero: {
      name: "Jinwoo Choi",
      title: "Graphics Engineer & Game Developer",
    },
    about: {
      title: "About",
      role: "Graphics Engineer & Game Developer",
      subtitle: "It works on my machine!",
      githubLabel: "Github:",
      regionLabel: "Region:",
      region: "South Korea",
      degreeLabel: "Degree:",
      degree: "Bachelor of Science in Computer Science in Real-Time Interactive Simulation",
      emailLabel: "Email:",
      desc:
        "I am a graphics engineer and a game developer with a background in real-time rendering and GPU performance optimization. My experience spans from optimizing graphics for VR devices to implementing advanced rendering techniques such as Deferred Shading, Adaptive Resolution, and Poisson PCF filtering. My expertise lies in optimizing real-time graphics performance, debugging rendering issues, and developing custom shaders to achieve high-quality visual effects. I enjoy writing shaders to push rendering quality and efficiency, experimenting with new techniques to create immersive and visually striking experiences. I am always excited about pushing the boundaries of real-time graphics and exploring innovative rendering techniques.",
    },
    recommendations: {
      title: "Recommendations",
      subtitle: "These recommendations are excerpted from LinkedIn Recommendations",
      items: [
        {
          name: "Rudy Castan",
          role: "Lecturer in Digipen-KMU program",
          text:
            "I highly recommend Jinwoo Choi as an exceptional professional. As his former instructor at DigiPen Institute of Technology, I was impressed by his earnestness, perseverance, and ability to excel in challenging assignments. Jinwoo's role as a TA showcased his leadership skills and expertise in computer graphics courses, where he provided invaluable assistance to his peers. As a Software Developer and Graphics Programmer, Jinwoo's technical proficiency and problem-solving abilities are exceptional. I wholeheartedly recommend him for any opportunity as he continues to excel in his field.",
        },
        {
          name: "Jina Hyun",
          role: "Software Engineer - Worked on the same project in college",
          text:
            "Jinwoo and I worked together three times for different projects. He is pleasure to work with and a good teammate! He was always ready to help when I cannot solve the problem. His explanation was easy to understand. What he did in our last team project was PBR, which made our project looks awesome.",
        },
        {
          name: "Seth Pendergrass",
          role: "Software Engineer - Worked on the same team in Bytedance(PICO)",
          text:
            "It's been a pleasure working with Jinwoo at PICO. Jinwoo did a great job of optimizing our Unity rendering pipeline, and has been involved in a number of important Unity-related efforts. He is very easy to work with, bringing a positive attitude to the workplace. I'd definitely recommend Jinwoo and hope to work with him again.",
        },
        {
          name: "John Lee",
          role: "Software Engineer - Worked on the same team in Bytedance(PICO)",
          text:
            "Highly adaptable, fast learner, Jinwoo has the technical chops to be a generalist, as well as the mental fortitude to grind through all the bugs and crashes that come with beta software. Though I imagine he’ll be happiest working as a graphics specialist, he’s fully capable of filling other gaps in your team’s strengths.",
        },
        {
          name: "Anda Li",
          role: "Software Engineer in Tiktok",
          text:
            "Jinwoo was intern in my team this Summer. He finished a deferred shading pipeline in our AR engine, which supports PBR lighting, shadow, transparency, TAA and many other things. Jinwoo is super hardworking and can finish tasks very quickly with high quality. And Jinwoo is always happy to help other interns and new members in the team. I can feel his great passion for this job.",
        },
        {
          name: "Pushpak Karnick",
          role: "Program Director in Digipen Institute of Technology",
          text:
            "Jinwoo was one of the top students in my computer graphics courses. He also served as a Teaching Assistant (TA) later. He is a very diligent student who is extremely passionate about real-time rendering. He consistently went above and beyond what was expected from the coursework to provide his own take on the design on his graphics engine. As a TA, he was always respectful towards the students, and served as a valuable mentor to many. I would highly recommend him as a valuable team member to your organization.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      filters: {
        all: "All",
        graphics: "Computer Graphics",
        engine: "Unity/Unreal",
        others: "Others",
      },
      items: {
        snake: ["Snake Engine", "Custom 2D Game Engine"],
        gfx1: ["PBR, IBL Simulator", "Custom Engine, OpenGL, PBR, IBL"],
        blog: ["Unity: URP optimization/bug fix", "Universal Rendering Pipeline, Blog post, XR"],
        raccoon: ["Unity: Dodge-Blue racoon", "Mobile game, Hyper Casual, Unity"],
        tetris: ["Multi-Board Tetris", "Game, C"],
        gfx2: ["Lighting, Reflaction, OBJ Loader...etc", "Custom Engine, OpenGL, OBJ Loader, Fundamentals"],
        deferred: ["Guest Lecture - Deferred Shading", "Lecture, ppt, Deferred Shading"],
        pinata: ["UE4: Pinata Panic", "Unreal Engine 4, 3D, VFX"],
      },
      detail: {
        title: "Unity: URP optimization/bug fix",
        intro:
          "During my time at ByteDance (PICO), I customized the Universal Rendering Pipeline (URP) to enhance performance and provide better options for PICO VR devices. This involved optimizing post-processing effects, improving soft shadows, and debugging rendering issues.",
        sections: [
          {
            title: "Optimizing Bloom for Performance",
            body:
              "Bloom effects rely on Gaussian blur, which can be computationally expensive depending on the number of taps used. URP traditionally employs a 9-tap Gaussian blur for horizontal blurring, which is well-suited for PC rendering but suboptimal for VR performance. To improve performance while maintaining visual fidelity, I introduced an option to reduce the number of taps from 9 to 5, which significantly reduced computational overhead. I also expanded the settings UI to allow developers to adjust the number of taps dynamically, offering a tradeoff between performance and quality. The default iteration count was optimized from 6 to 2, achieving a balance between visual clarity and frame rates.",
          },
          {
            title: "Enhancing Soft Shadows with PCF Sampling",
            body:
              "URP provides three levels of soft shadows: Low, Medium, and High. While these options offer flexibility, they lacked an intermediate solution that balances performance and shadow quality, especially for VR applications. To address this, I implemented a Percentage Closer Filtering (PCF) shadow technique, which provides superior quality compared to the Medium setting while maintaining good performance. Through extensive testing with Poisson disk sampling, I evaluated 4 to 6 sample points and fine-tuned the implementation to use 5 and 6 samples for optimal results. The Poisson disk samples were generated using a custom Python script, ensuring evenly distributed shadow samples for smoother and more realistic soft shadows.",
          },
          {
            title: "Fixing the Distortion Rendering Issue",
            body:
              "A significant challenge in VR rendering is maintaining accurate eye textures to prevent visual distortions. While debugging the distortion issue with RenderDoc, I discovered that the renderer was incorrectly using the same eye texture for both eyes. This was caused by a shared eye matrix, which prevented proper stereoscopic rendering. Upon further investigation, I found that the Multiview keyword was not being applied correctly in certain cases. To resolve this, I implemented a script that automatically applies the Multiview keyword if the built-in Multiview setting is enabled, ensuring correct rendering across all VR devices.",
          },
        ],
        more: "For more details, please refer to the blog post.",
        infoTitle: "Project information",
        info: [
          ["CATEGORY", "Unity, VR, URP, Optimization"],
          ["ROLE", "Core Developer"],
          ["PROJECT DATE", "May 2023 - Jan 2024"],
          ["BLOG POST URL", "https://developer.picoxr.com/news/urp-fork"],
        ],
        button: "URP Fork Repository",
      },
    },
    resume: {
      title: "Resume",
      education: "Education",
      extra: "Additional Experience",
      professional: "Professional Experience",
      left: [
        {
          title: "Bachelor of Science in Computer Science in Real-Time Interactive Simulation",
          period: "2017.03 - 2023.04",
          place: "Digipen Institute of Technology, Redmond, WA",
        },
        {
          heading: "Additional Experience",
          title: "Military service",
          period: "2019.08 - 2021.02",
          place: "Paju, ko",
        },
      ],
      right: [
        {
          title: "Lecturer in Digipen Academy in Busan",
          period: "2025.02 -",
          place: "Digipen Academy, Busan, South Korea",
          bullets: [],
        },
        {
          title: "XR Engine and Runtime Software Engineer",
          period: "2023.05 - 2024.10",
          place: "ByteDance, Mountain View, CA",
          blog: "https://developer.picoxr.com/news/urp-fork",
          bullets: [
            "Optimized 15-30% of GPU usage on Unity's Universal Render Pipeline (URP) bloom for the VR device",
            "Corrected depth perception distortion in Unity's built-in pipeline Multiview feature",
            "Optimized 8-10% of GPU usage on the VR device by implementing Poisson Percentage Closer Filtering(PCF)",
            "Collaborated with Runtime team to integrate Adaptive Resolution, Super Resolution, and Sharpening features into Unity XR SDK",
            "Improved GPU usage by 10% and reduced GPU memory consumption by 10% to 50% across general Unity-built VR applications",
            "Investigated performance issues specific to Pico products related to the Unity engine and submitted solutions to Unity",
            "Benchmark and analyze Unity UI and Particles for the internal project",
            "Built multiple demo and test app with Unity Polyspatial for visionOS",
            "Designed and Implemented a Unity particle parser to extract and replicate particle system data across different platforms",
            "Debugged and Resolved compatibility issues between URP and Adaptive Resolution, extending the maximum achievable resolution",
            "Developed and implemented a comprehensive Unity project for analyzing user input across multiple devices using the XR Interaction Toolkit",
          ],
        },
        {
          title: "AR Effect Software Engineer Intern",
          period: "2022.05 - 2022.08",
          place: "Tiktok, Mountain View, CA",
          bullets: [
            "Implemented Deferred Shading for the Uber Shader(6000+ lines) to improve the performance limitations of TikTok stickers",
            "Integrating Physics Based Rendering, Environment Mapping, UV, Normal Texture, Fresnel to the Deferred Shading",
            "Implemented Temporal Anti-Aliasing, and integrated Deferred shading with Forward Shading",
          ],
        },
        {
          title: "Undergraduate Teaching Assistant",
          period: "2021.09 - 2021.12",
          place: "Digipen Institute of Technology, Redmond, WA",
          bullets: [
            "Delivered a lecture on graphics technology, creating and presenting a detailed PowerPoint presentation to support learning and understanding of key concepts",
          ],
          link: "View presentation file",
        },
      ],
    },
    skills: {
      title: "Skills",
      items: ["Computer graphics", "OpenGL", "Vulkan", "RenderDoc", "C/C++", "Unity/Unreal", "XR"],
    },
    contact: {
      title: "Contact",
      email: "imjinwoo98@gmail.com",
    },
    footer: {
      copy1: "Copyright",
      copy2: "All Rights Reserved",
      designedBy: "Designed by",
      distributedBy: "Distribuited by",
    },
  },
  ko: {
    nav: {
      home: "홈",
      about: "소개",
      portfolio: "포트폴리오",
      resume: "이력서",
      skills: "기술",
      rec: "추천사",
      contact: "연락처",
    },
    hero: {
      name: "최 진우",
      title: "그래픽스 엔지니어 & 게임 개발자",
    },
    about: {
      title: "소개",
      role: "그래픽스 엔지니어 & 게임 개발자",
      subtitle: "제 컴퓨터에서는 잘 돌아가는데요?",
      githubLabel: "GitHub:",
      regionLabel: "지역:",
      region: "대한민국",
      degreeLabel: "학위:",
      degree: "컴퓨터공학 학사",
      emailLabel: "이메일:",
      desc:
        "저는 실시간 렌더링과 GPU 성능 최적화에 전문성을 갖춘 그래픽스 엔지니어이자 게임 개발자입니다. VR 디바이스 그래픽스 최적화부터 Deferred Shading, Adaptive Resolution, Poisson PCF와 같은 고급 렌더링 기법 구현까지 폭넓은 경험을 쌓았습니다. 특히 실시간 그래픽스 성능 향상, 렌더링 문제 해결, 고품질 비주얼 효과를 위한 셰이더 개발에 강점을 가지고 있습니다. 렌더링 품질과 효율을 끌어올리는 셰이더 작성, 새로운 기술 실험을 즐기며, 몰입감 있고 인상적인 비주얼 경험을 만드는 데 열정을 쏟고 있습니다.",
    },
    recommendations: {
      title: "추천사",
      subtitle: "LinkedIn 추천사에서 발췌",
      items: [
        {
          name: "Rudy Castan",
          role: "디지펜 공과대학 교수",
          text:
            "저는 Jinwoo Choi를 뛰어난 전문가로서 강력히 추천합니다. DigiPen Institute of Technology에서 Jinwoo를 가르쳤을 때, 그의 성실함, 끈기, 그리고 도전적인 과제에서도 뛰어난 성과를 내는 능력에 깊은 인상을 받았습니다. TA로 활동하면서는 리더십과 컴퓨터 그래픽스 과목에 대한 전문성을 보여주었고, 동료들에게 큰 도움을 주었습니다. 소프트웨어 개발자이자 그래픽스 프로그래머로서 Jinwoo의 기술적 능력과 문제 해결 능력은 탁월합니다. 그는 앞으로도 계속 뛰어난 성과를 낼 인재이기에, 어떤 기회에서도 자신 있게 추천할 수 있습니다.",
        },
        {
          name: "Jina Hyun",
          role: "소프트웨어 엔지니어 - 대학 프로젝트 동료",
          text:
            "저는 Jinwoo와 세 번의 다른 프로젝트에서 함께 일했습니다. 그는 함께 일하기 즐겁고 훌륭한 팀원입니다! 제가 문제를 해결하지 못할 때 항상 기꺼이 도와주었고, 그의 설명은 이해하기 쉬웠습니다. 우리의 마지막 팀 프로젝트에서 Jinwoo가 담당했던 PBR 덕분에 프로젝트의 완성도가 크게 향상되었습니다.",
        },
        {
          name: "Seth Pendergrass",
          role: "소프트웨어 엔지니어 - ByteDance(PICO) 동료",
          text:
            "PICO에서 Jinwoo와 함께 일할 수 있어 즐거웠습니다. Jinwoo는 우리의 Unity 렌더링 파이프라인을 최적화하는 데 큰 성과를 냈으며, 여러 중요한 Unity 관련 프로젝트에도 참여했습니다. 그는 긍정적인 태도로 함께 일하기 쉬운 동료입니다. 저는 Jinwoo를 강력히 추천하며, 다시 함께 일할 수 있기를 바랍니다.",
        },
        {
          name: "John Lee",
          role: "소프트웨어 엔지니어 - ByteDance(PICO) 동료",
          text:
            "높은 적응력과 빠른 학습 능력을 가진 Jinwoo는 제너럴리스트로서의 기술적 역량뿐만 아니라 베타 소프트웨어에서 발생하는 수많은 버그와 크래시를 끈기 있게 해결할 수 있는 정신력도 갖추고 있습니다. 개인적으로는 그래픽스 전문가로 일할 때 가장 행복할 것이라 생각하지만, 팀 내 다른 공백을 메울 수 있는 충분한 역량 또한 가지고 있습니다.",
        },
        {
          name: "Anda Li",
          role: "소프트웨어 엔지니어 - TikTok",
          text:
            "올해 여름 Jinwoo는 제 팀에서 인턴으로 일했습니다. 그는 우리 AR 엔진에서 PBR 라이팅, 그림자, 투명도, TAA 등 다양한 기능을 지원하는 지연 셰이딩 파이프라인을 완성했습니다. Jinwoo는 매우 성실하고 업무를 빠르게, 그리고 높은 품질로 마무리합니다. 또한 다른 인턴이나 팀의 새로운 구성원을 기꺼이 도와주며, 이 일에 대한 그의 큰 열정을 느낄 수 있었습니다.",
        },
        {
          name: "Pushpak Karnick",
          role: "디지펜 공과대학 학과장",
          text:
            "Jinwoo는 제가 맡았던 컴퓨터 그래픽스 수업에서 최고의 학생 중 한 명이었습니다. 이후에는 조교(TA)로 활동하기도 했습니다. 그는 매우 근면하고 실시간 렌더링에 큰 열정을 가진 학생으로, 과제 요구 사항을 뛰어넘어 자신의 그래픽스 엔진 디자인을 발전시키곤 했습니다. TA로서도 학생들을 존중하며, 많은 이들에게 귀중한 멘토 역할을 했습니다. 저는 Jinwoo를 귀하의 조직에 매우 가치 있는 팀원으로 강력히 추천합니다.",
        },
      ],
    },
    portfolio: {
      title: "포트폴리오",
      filters: {
        all: "전체",
        graphics: "컴퓨터 그래픽스",
        engine: "Unity/Unreal",
        others: "기타",
      },
      items: {
        snake: ["Snake Engine", "커스텀 2D 게임 엔진"],
        gfx1: ["PBR, IBL 시뮬레이터", "커스텀 엔진, OpenGL, PBR, IBL"],
        blog: ["유니티: URP package 최적화 / 버그수정", "Universal Rendering Pipeline, Blog Post, XR"],
        raccoon: ["유니티: Dodge-Blue Racoon", "모바일 게임, 하이퍼 캐쥬얼, Unity"],
        tetris: ["다중 보드 테트리스", "C 언어 기반 게임"],
        gfx2: ["빛 계산, 반사 구현, OBJ Loader...", "커스텀 엔진, OpenGL, OBJ File Loader, 렌더링 기초"],
        deferred: ["초청 강연: Deferred Shading", "강의 자료 (PPT), Deferred Shading"],
        pinata: ["언리얼 엔진4: Pinata Panic", "Unreal Engine 4, 3D, VFX"],
      },
      detail: {
        title: "Unity: URP 최적화 및 버그 수정",
        intro:
          "ByteDance(PICO) 재직 당시, PICO VR 디바이스에 맞게 Universal Rendering Pipeline(URP)을 커스터마이즈해 성능을 높이고 더 유연한 옵션을 제공했습니다. 이 과정에서 Post processing 최적화, Soft shadow 품질 개선, 렌더링 이슈 디버깅을 수행했습니다.",
        sections: [
          {
            title: "Bloom 성능 최적화",
            body:
              "URP에서 Bloom은 Gaussian blur를 사용하며, 사용하는 tap 수에 따라 연산 비용이 크게 달라집니다. URP는 일반적으로 Gaussian blur에서 horizontal blurring에 9-tap을 사용합니다. 이는 PC에는 적합하지만, VR에서는 비효율적일 수 있습니다. 성능과 품질을 모두 고려해 tap 수를 9 → 5로 줄일 수 있는 옵션을 추가하고, 개발자가 tap 수를 동적으로 조절할 수 있도록 설정 UI도 확장했습니다. 또한 기본 iteration 횟수를 6 → 2로 최적화해 시각적 선명도와 frame rate의 균형을 맞췄습니다.",
          },
          {
            title: "PCF 샘플링 기반 Soft shadow 개선",
            body:
              "URP의 soft shadow는 Low/Medium/High로 제공되지만, VR에 적합한 중간 해법이 부족했습니다. 이를 보완하기 위해 Percentage Closer Filtering(PCF)을 적용해 Medium 대비 더 나은 그림자 품질과 안정적인 성능을 동시에 달성했습니다. Poisson disk sampling으로 4~6 샘플을 실험했고, 최종적으로 5·6 샘플 구성을 채택했습니다. 샘플은 자체 Python 스크립트로 생성해 균일한 분포를 보장, 더 부드럽고 자연스러운 Soft shadow를 구현했습니다.",
          },
          {
            title: "왜곡 렌더링 이슈 수정",
            body:
              "VR에서는 좌·우안(eye) 텍스처가 정확히 분리되어야 왜곡이 발생하지 않습니다. RenderDoc으로 문제를 추적한 결과, 좌·우안 행렬(camera matrix)이 분리되지 않아 좌우안에 동일 텍스처가 사용되어 입체 렌더링이 깨지는 것을 발견했습니다. 추가 조사에서 특정 상황에서 Multiview 키워드가 제대로 적용되지 않는 점을 확인했고, 내장 Multiview 설정이 활성화되어 있으면 키워드를 자동 적용하는 스크립트를 도입해 모든 VR 디바이스에서 올바르게 렌더링되도록 수정했습니다.",
          },
        ],
        more: "자세한 내용은 블로그 글을 참고하세요.",
        infoTitle: "프로젝트 정보",
        info: [
          ["카테고리", "Unity, VR, URP, 최적화"],
          ["역할", "핵심 개발자"],
          ["프로젝트 기간", "2023년 5월 ~ 2024년 1월"],
          ["블로그 URL", "https://developer.picoxr.com/news/urp-fork"],
        ],
        button: "URP Fork 저장소",
      },
    },
    resume: {
      title: "이력서",
      education: "학력",
      extra: "기타 경험",
      professional: "경력",
      left: [
        {
          title: "컴퓨터공학 학사",
          period: "2017.03 - 2023.04",
          place: "Digipen Institute of Technology (Redmond, WA)",
        },
        {
          heading: "기타 경험",
          title: "군 복무",
          period: "2019.08 - 2021.02",
          place: "병장 만기전역 (파주, 대한민국)",
        },
      ],
      right: [
        {
          title: "강사, 디지펜 아카데미 부산",
          period: "2025.02 -",
          place: "디지펜 아카데미 (부산, 대한민국)",
          bullets: [],
        },
        {
          title: "XR 엔진 & 런타임 소프트웨어 엔지니어",
          period: "2023.05 - 2024.10",
          place: "ByteDance(PICO) (Mountain View, CA)",
          blog: "https://developer.picoxr.com/news/urp-fork",
          bullets: [
            "VR 디바이스용 URP Bloom에서 GPU 사용량 15~30% 절감",
            "Unity 내장 파이프라인 Multiview 깊이 왜곡 보정",
            "Poisson PCF 구현으로 GPU 사용량 8~10% 개선",
            "Adaptive/Super Resolution 및 Sharpening 기능 Unity XR SDK 통합",
            "일반적인 Unity VR 앱에서 GPU 사용량 10% 개선, 메모리 사용량 10%~50% 절감",
            "Pico 제품/Unity 엔진 특화 성능 이슈 분석 및 Unity에 해결책 제안",
            "Unity UI/Particles 성능 벤치마크 및 분석",
            "visionOS용 Unity Polyspatial 데모/테스트 앱 제작",
            "플랫폼 간 파티클 데이터 추출·복제를 위한 Unity 파서 구현",
            "URP-AR 해상도 호환성 이슈 해결 및 최대 해상도 확장",
            "XR Interaction Toolkit을 통해 사용자 입력을 분석하기 위한 프로젝트 개발",
          ],
        },
        {
          title: "AR 이펙트 소프트웨어 엔지니어 인턴",
          period: "2022.05 - 2022.08",
          place: "ByteDance(TikTok) (Mountain View, CA)",
          bullets: [
            "TikTok 스티커의 성능 한계를 개선하기 위해 6000줄 이상의 우버 셰이더(Uber Shader)에 지연 셰이딩(Deferred Shading)을 구현",
            "지연 셰이딩에 물리 기반 렌더링(PBR), 환경 매핑, UV, 노멀 텍스처, 프레넬(Fresnel) 효과를 통합",
            "셰이더에 TAA(Temporal Anti-Aliasing)를 구현하고, 지연 셰이딩을 포워드 셰이딩과 통합",
          ],
        },
        {
          title: "학부 조교",
          period: "2021.09 - 2021.12",
          place: "Digipen Institute of Technology (Redmond, WA)",
          bullets: ["그래픽스 기술 강의 자료 제작 및 발표"],
          link: "발표 자료 보기",
        },
      ],
    },
    skills: {
      title: "기술",
      items: ["컴퓨터 그래픽스", "OpenGL", "Vulkan", "RenderDoc", "C/C++", "Unity/Unreal", "XR"],
    },
    contact: {
      title: "연락처",
      email: "imjinwoo98@gmail.com",
    },
    footer: {
      copy1: "Copyright",
      copy2: "All Rights Reserved",
      designedBy: "Designed by",
      distributedBy: "Distributed by",
    },
  },
};
