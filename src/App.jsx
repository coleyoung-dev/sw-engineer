import React, { useEffect, useMemo, useState } from "react";
import {
  contactLinks,
  experiences,
  languages,
  navItems,
  platformIcons,
  projects,
  sideProjects,
  techStacks,
  uiText,
} from "./data.js";

const detailMarkdownFiles = import.meta.glob("./content/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const heroSocialLinks = [
  {
    href: "https://www.linkedin.com/in/chanyoung-hong-51890a271",
    icon: "bi-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/coleyoung-game",
    icon: "bi-github",
    label: "GitHub",
  },
];

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const savedLanguage = window.localStorage.getItem("lang");
  return languages.some((language) => language.code === savedLanguage) ? savedLanguage : "en";
}

function pickLocalized(item, key, language) {
  if (language === "en") return item[key];
  const localizedKey = `${language}${key.charAt(0).toUpperCase()}${key.slice(1)}`;
  return item[localizedKey] ?? item[key];
}

function assetPath(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getProjectSlug(project) {
  return slugify(project.title);
}

function getProjectDetailId(project) {
  return `project-${getProjectSlug(project)}`;
}

function getProjectHref(project) {
  return `#/projects/${getProjectSlug(project)}`;
}

function getProjectDetailContentSlug(content) {
  return slugify(content.slug ?? content.title);
}

function getProjectDetailContentHref(project, content) {
  return `#/projects/${getProjectSlug(project)}/details/${getProjectDetailContentSlug(content)}`;
}

function getAllProjectItems() {
  return [...projects, ...sideProjects];
}

function getCurrentHashRoute() {
  if (typeof window === "undefined") return "";
  return window.location.hash.replace(/^#/, "");
}

function getRouteParts(route) {
  return route.replace(/^\//, "").split("/").filter(Boolean);
}

function getProjectFromRoute(route) {
  const routeParts = getRouteParts(route);
  let slug = "";

  if (routeParts[0] === "projects") {
    slug = routeParts[1] ?? "";
  } else if (routeParts[0]?.startsWith("project-")) {
    slug = routeParts[0].replace(/^project-/, "");
  }

  return getAllProjectItems().find((project) => getProjectSlug(project) === slug) ?? null;
}

function hasDetailContent(content) {
  const hasMarkdown = Boolean(content.markdownPath || content.koMarkdownPath);
  const hasBody = Boolean(content.body || content.koBody);
  const hasBullets =
    (Array.isArray(content.bullets) && content.bullets.length > 0) ||
    (Array.isArray(content.koBullets) && content.koBullets.length > 0);

  return hasMarkdown || hasBody || hasBullets;
}

function getProjectDetailContents(project) {
  return Array.isArray(project.detailContents) ? project.detailContents.filter(hasDetailContent) : [];
}

function getDetailContentFromRoute(route) {
  const routeParts = getRouteParts(route);
  if (routeParts[0] !== "projects" || routeParts[2] !== "details") return null;

  const project = getProjectFromRoute(route);
  const contentSlug = routeParts[3] ?? "";
  const content =
    project && getProjectDetailContents(project).find((item) => getProjectDetailContentSlug(item) === contentSlug);

  return project && content ? { project, content } : null;
}

function isSideProject(project) {
  return sideProjects.some((item) => getProjectSlug(item) === getProjectSlug(project));
}

function getDetailMarkdown(content, language) {
  const markdownPath = pickLocalized(content, "markdownPath", language);
  if (!markdownPath) return "";

  const normalizedPath = markdownPath.startsWith("./") ? markdownPath : `./${markdownPath.replace(/^\/+/, "")}`;
  return detailMarkdownFiles[normalizedPath] ?? "";
}

function parseMarkdownBlocks(markdown) {
  const blocks = [];
  const lines = markdown.split(/\r?\n/);
  let paragraphLines = [];
  let listItems = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return;
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
    paragraphLines = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push({ type: "list", items: listItems });
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const headingMatch = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: headingMatch[1].length, text: headingMatch[2] });
      return;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      flushParagraph();
      flushList();
      blocks.push({ type: "image", alt: imageMatch[1], src: imageMatch[2] });
      return;
    }

    const listMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (listMatch) {
      flushParagraph();
      listItems.push(listMatch[1]);
      return;
    }

    flushList();
    paragraphLines.push(trimmed);
  });

  flushParagraph();
  flushList();
  return blocks;
}

function MarkdownContent({ markdown }) {
  if (!markdown.trim()) return null;

  return parseMarkdownBlocks(markdown).map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === "heading") {
      const HeadingTag = `h${block.level}`;
      return <HeadingTag key={key}>{block.text}</HeadingTag>;
    }

    if (block.type === "list") {
      return (
        <ul key={key}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "image") {
      const src = block.src.startsWith("http") || block.src.startsWith("data:") ? block.src : assetPath(block.src);
      return (
        <figure className="detail-content-figure" key={key}>
          <img src={src} alt={block.alt} />
        </figure>
      );
    }

    return <p key={key}>{block.text}</p>;
  });
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const raw = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
        setProgress(raw);
      }

      const triggerPoint = window.innerHeight / 2;
      let current = "";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          current = item.id;
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        current = "contact";
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { progress, activeSection };
}

function LanguageToggle({ language, onLanguageChange }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timerId = null;
    const showDelayMs = 1200;
    const topAlwaysShowY = 520;

    const showAfterScrollStops = () => {
      if (timerId) window.clearTimeout(timerId);
      timerId = window.setTimeout(() => setHidden(false), showDelayMs);
    };

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y < topAlwaysShowY) {
        if (timerId) window.clearTimeout(timerId);
        setHidden(false);
        return;
      }

      setHidden(true);
      showAfterScrollStops();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (timerId) window.clearTimeout(timerId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`language-toggle ${hidden ? "is-hidden" : ""}`} aria-label="Language Toggle" data-active={language}>
      {languages.map((item) => (
        <button
          id={`btn-${item.code === "ko" ? "ko" : "en"}`}
          type="button"
          aria-label={item.ariaLabel}
          aria-pressed={language === item.code}
          key={item.code}
          onClick={() => onLanguageChange(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function Header({ progress, activeSection, language, text }) {
  const [open, setOpen] = useState(false);
  const headerProgress = Math.max((progress - 0.7) / 0.3, 0);

  useEffect(() => {
    const close = () => {
      if (window.innerWidth <= 960) setOpen(false);
    };

    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <section className="header2" style={{ opacity: headerProgress }}>
      <nav className="nav_header">
        <a href="#top" className="nav_logo" onClick={() => setOpen(false)}>
          {text.header.logo}
        </a>
        <button
          className={`nav_hamburger ${open ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav_hamburger_line" />
          <span className="nav_hamburger_line" />
          <span className="nav_hamburger_line" />
        </button>
        <div className={`nav_menu ${open ? "active" : ""}`}>
          <ul className="nav">
            {navItems.map((item) => (
              <li className="nav_menu_link" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {pickLocalized(item, "label", language)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

function Hero({ progress, text, language }) {
  const eased = Math.max((progress - 0.15) / 0.85, 0);
  let endScale = 0.85;
  if (typeof window !== "undefined" && window.innerWidth >= 1440) endScale = 0.5;
  else if (typeof window !== "undefined" && window.innerWidth >= 666) endScale = 0.55;

  const scale = 1 - eased * endScale;
  const translateY = eased * 30;
  const headsetOpacity = eased === 0 ? 0 : Math.min(Math.max(eased / 0.05, 0), 1);
  const heroVideoId = "vxftJHccISY";
  const heroVideoSrc = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3`;

  return (
    <section className="hero" id="top">
      <div className="scene">
        <div
          className="vr-container"
          style={{
            transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
          }}
        >
          <iframe
            className="hero-video"
            src={heroVideoSrc}
            title="Hero background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            aria-hidden="true"
            tabIndex="-1"
          />
          <div className="vr-world">
            <div className="hero-section">
              <div className="hero-content">
                <div className="left-side">
                  <div className="hero-header">{text.hero.name}</div>
                  <div className="hero-subheader">{text.hero.subtitle}</div>
                  <div className="hero-description">{text.hero.description}</div>
                  <div className="hero-platforms">
                    <div className="hero-details">{text.hero.platforms}</div>
                    <div className="hero-platform-icon">
                      {platformIcons.map((icon) => (
                        <span className="platform-chip" key={icon.label}>
                          <i className={`bi ${icon.icon}`} />
                          {pickLocalized(icon, "label", language)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="call-to-action-buttons">
                    {heroSocialLinks.map((link) => (
                      <a
                        className="hero-social-button btn"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        title={link.label}
                        key={link.href}
                      >
                        <i className={`bi ${link.icon}`} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hero-profile-card" aria-label={text.hero.name}>
                  <img
                    className="hero-profile-image"
                    src={assetPath("images_videos/hero-profile-updated.jpg")}
                    alt={text.hero.name}
                    decoding="async"
                  />
                </div>
              </div>
              <p className="scroll-down">
                {text.hero.scroll}
                <i className="bi bi-mouse" />
              </p>
            </div>
          </div>
          <div className="headset" style={{ opacity: headsetOpacity }} aria-hidden="true">
            <svg className="headset-visual" viewBox="0 0 1920 631" preserveAspectRatio="none" focusable="false">
              <defs>
                <linearGradient id="headsetLensGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f3fbff" stopOpacity="0.34" />
                  <stop offset="42%" stopColor="#a9b9c3" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#738594" stopOpacity="0.58" />
                </linearGradient>
                <radialGradient id="headsetLensGlow" cx="50%" cy="50%" r="62%">
                  <stop offset="0%" stopColor="#e9f7ff" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#7d91a0" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="headsetRimGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6ff4ff" />
                  <stop offset="42%" stopColor="#00b8ff" />
                  <stop offset="100%" stopColor="#0572d9" />
                </linearGradient>
                <filter id="headsetBlueGlow" x="-10%" y="-25%" width="120%" height="150%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feColorMatrix
                    in="blur"
                    result="glow"
                    type="matrix"
                    values="0 0 0 0 0  0 0 0 0 0.68  0 0 0 0 1  0 0 0 0.8 0"
                  />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                className="headset-lens-pane"
                d="M118 318 C135 205 224 108 370 58 C548 32 760 42 960 54 C1160 42 1372 32 1550 58 C1696 108 1785 205 1802 318 C1818 417 1754 514 1608 560 C1394 614 1168 590 960 552 C752 590 526 614 312 560 C166 514 102 417 118 318 Z"
              />
              <path
                className="headset-lens-glow"
                d="M118 318 C135 205 224 108 370 58 C548 32 760 42 960 54 C1160 42 1372 32 1550 58 C1696 108 1785 205 1802 318 C1818 417 1754 514 1608 560 C1394 614 1168 590 960 552 C752 590 526 614 312 560 C166 514 102 417 118 318 Z"
              />
              <path
                className="headset-rim headset-rim-glow"
                d="M82 318 C98 166 226 62 386 34 C612 -6 800 28 960 42 C1120 28 1308 -6 1534 34 C1694 62 1822 166 1838 318 C1854 464 1750 572 1578 604 C1352 646 1136 596 960 570 C784 596 568 646 342 604 C170 572 66 464 82 318 Z"
              />
              <path
                className="headset-rim headset-rim-core"
                d="M104 318 C120 188 232 92 392 62 C606 24 794 56 960 68 C1126 56 1314 24 1528 62 C1688 92 1800 188 1816 318 C1830 442 1738 540 1570 574 C1358 616 1136 574 960 548 C784 574 562 616 350 574 C182 540 90 442 104 318 Z"
              />
              <path
                className="headset-rim headset-rim-inner"
                d="M154 320 C170 218 256 132 402 102 C610 64 794 90 960 96 C1126 90 1310 64 1518 102 C1664 132 1750 218 1766 320 C1778 412 1706 492 1554 526 C1348 572 1130 536 960 514 C790 536 572 572 366 526 C214 492 142 412 154 320 Z"
              />
              <g className="headset-armature">
                <path d="M160 222 L224 134 L342 82 L468 58 L508 82 L398 112 L292 152 L230 226 Z" />
                <path d="M1760 222 L1696 134 L1578 82 L1452 58 L1412 82 L1522 112 L1628 152 L1690 226 Z" />
                <path d="M162 410 L246 506 L392 560 L520 574 L558 548 L412 518 L294 474 L226 398 Z" />
                <path d="M1758 410 L1674 506 L1528 560 L1400 574 L1362 548 L1508 518 L1626 474 L1694 398 Z" />
              </g>
              <g className="headset-rim-segments">
                {[
                  [282, 102, 144, 18],
                  [456, 72, 166, 16],
                  [650, 64, 160, 14],
                  [1110, 64, 160, 14],
                  [1298, 72, 166, 16],
                  [1494, 102, 144, 18],
                  [296, 514, 170, 18],
                  [510, 548, 178, 14],
                  [1232, 548, 178, 14],
                  [1454, 514, 170, 18],
                ].map(([x, y, width, height], index) => (
                  <rect key={`rim-segment-${index}`} x={x} y={y} width={width} height={height} rx="7" />
                ))}
              </g>
              <g className="headset-side-modules">
                <path d="M88 260 L152 218 L184 252 L168 382 L118 420 L78 374 Z" />
                <path d="M1832 260 L1768 218 L1736 252 L1752 382 L1802 420 L1842 374 Z" />
                {Array.from({ length: 8 }).map((_, index) => (
                  <line key={`left-vent-${index}`} x1="118" x2="152" y1={276 + index * 14} y2={268 + index * 14} />
                ))}
                {Array.from({ length: 8 }).map((_, index) => (
                  <line key={`right-vent-${index}`} x1="1802" x2="1768" y1={276 + index * 14} y2={268 + index * 14} />
                ))}
              </g>
              <g className="headset-circuit-lines">
                <path d="M420 84 H610 L642 104 H820" />
                <path d="M1500 84 H1310 L1278 104 H1100" />
                <path d="M458 556 H682 L718 536 H850" />
                <path d="M1462 556 H1238 L1202 536 H1070" />
                {Array.from({ length: 14 }).map((_, index) => (
                  <circle key={`top-node-${index}`} cx={520 + index * 62} cy={86 + (index % 2) * 10} r="3" />
                ))}
              </g>
              <path
                className="headset-lens-highlight"
                d="M244 118 C410 70 700 58 922 78 M998 78 C1220 58 1510 70 1676 118"
              />
              <g className="headset-hud headset-hud-left">
                <circle cx="300" cy="250" r="48" />
                <circle cx="300" cy="250" r="24" />
                <circle cx="300" cy="250" r="66" className="headset-hud-faint" />
                <path className="headset-hud-faint" d="M254 204 A66 66 0 0 1 354 206 M248 294 A66 66 0 0 0 356 292" />
                <path d="M300 190 V310 M240 250 H360" />
                <path d="M210 128 H366 L404 164 H470" />
                <path d="M204 392 H322 L350 420 H424" />
                <path d="M188 456 H320" />
                <path d="M166 520 H324" />
                <path d="M428 164 h72" />
                <rect x="382" y="206" width="92" height="12" rx="2" />
                <rect x="382" y="230" width="58" height="10" rx="2" />
                {Array.from({ length: 18 }).map((_, index) => (
                  <line
                    key={`left-bar-${index}`}
                    x1={148 + index * 10}
                    x2={148 + index * 10}
                    y1={520 - ((index * 17) % 58)}
                    y2="548"
                  />
                ))}
                {Array.from({ length: 18 }).map((_, index) => (
                  <circle
                    key={`left-dot-${index}`}
                    cx={168 + (index % 6) * 18}
                    cy={330 + Math.floor(index / 6) * 18}
                    r="3.5"
                  />
                ))}
              </g>
              <g className="headset-hud headset-hud-right">
                <circle cx="1620" cy="250" r="48" />
                <circle cx="1620" cy="250" r="24" />
                <circle cx="1620" cy="250" r="66" className="headset-hud-faint" />
                <path className="headset-hud-faint" d="M1574 204 A66 66 0 0 1 1674 206 M1568 294 A66 66 0 0 0 1676 292" />
                <path d="M1620 190 V310 M1560 250 H1680" />
                <path d="M1710 128 H1554 L1516 164 H1450" />
                <path d="M1716 392 H1598 L1570 420 H1496" />
                <path d="M1732 456 H1600" />
                <path d="M1754 520 H1596" />
                <path d="M1492 164 h-72" />
                <rect x="1422" y="206" width="92" height="12" rx="2" />
                <rect x="1482" y="230" width="58" height="10" rx="2" />
                <rect x="1490" y="438" width="164" height="18" rx="2" />
                <rect x="1490" y="468" width="220" height="18" rx="2" />
                {Array.from({ length: 9 }).map((_, index) => (
                  <circle key={`right-dot-${index}`} cx={1498 + index * 24} cy="514" r="3.5" />
                ))}
                {Array.from({ length: 6 }).map((_, index) => (
                  <line
                    key={`right-tick-${index}`}
                    x1={1680 + index * 10}
                    x2={1692 + index * 10}
                    y1={126}
                    y2={106}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tags({ tags, className = "tags", itemClass = "tag" }) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <div className={itemClass} key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, language, text }) {
  const title = pickLocalized(project, "title", language);
  const highlight = pickLocalized(project, "highlight", language);
  const location = pickLocalized(project, "location", language);
  const description = pickLocalized(project, "description", language);

  return (
    <a
      href={getProjectHref(project)}
      className="featured-projects-showcase project-card-button"
      aria-label={`${title} ${text.projectDetail.open}`}
    >
      <div className="image">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} />
        ) : (
          <div className="project-thumb">
            <i className={`bi ${project.icon}`} />
            <span>{title}</span>
          </div>
        )}
      </div>
      <div className="content">
        <div className="title">
          {title}
          {highlight ? <span className="gold-highlight">{highlight}</span> : null}
        </div>
        <div className="location">{location}</div>
        <div className="description">{description}</div>
        <Tags tags={project.tags} />
        <div className="card-action">
          <span>{text.projectDetail.open}</span>
          <i className="bi bi-arrow-right-short" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}

function ProjectSection({ id, title, items, language, text, className = "" }) {
  return (
    <section className={`individual-section featured-projects ${className}`.trim()} id={id}>
      <h1 className="featured-projects-header">{title}</h1>
      <div className="featured-projects-tabs" />
      <div className="featured-projects-showcases">
        {items.map((project) => (
          <ProjectCard project={project} language={language} text={text} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects({ language, text }) {
  return (
    <ProjectSection id="featuredproject" title={text.sections.featuredProjects} items={projects} language={language} text={text} />
  );
}

function SideProjects({ language, text }) {
  return (
    <ProjectSection
      id="sideprojects"
      title={text.sections.sideProjects}
      items={sideProjects}
      language={language}
      text={text}
      className="side-projects"
    />
  );
}

function ProjectDetail({ project, language, text, onBack }) {
  const detailId = getProjectDetailId(project);
  const title = pickLocalized(project, "title", language);
  const location = pickLocalized(project, "location", language);
  const description = pickLocalized(project, "description", language);
  const role = pickLocalized(project, "role", language);
  const timeline = pickLocalized(project, "timeline", language);
  const team = pickLocalized(project, "team", language);
  const category = pickLocalized(project, "category", language);
  const focus = pickLocalized(project, "focus", language) ?? [];
  const process = pickLocalized(project, "process", language) ?? [];
  const outcomes = pickLocalized(project, "outcomes", language) ?? [];
  const detailContents = getProjectDetailContents(project);
  const metaItems = [
    [text.projectDetail.role, role],
    [text.projectDetail.timeline, timeline],
    [text.projectDetail.team, team],
    [text.projectDetail.category, category],
  ];

  return (
    <section className="individual-section project-detail" id={detailId} aria-labelledby={`${detailId}-title`}>
      <div className="project-detail-container">
        <nav aria-label="Breadcrumb" className="detail-breadcrumbs">
          <button type="button" className="detail-back-button" onClick={onBack}>
            <i className="bi bi-arrow-left" aria-hidden="true" />
            {text.projectDetail.back}
          </button>
        </nav>

        <h1 className="project-detail-title" id={`${detailId}-title`}>
          {title}
        </h1>
        <p className="project-detail-subtitle">{description}</p>
        <Tags tags={project.tags} className="detail-chips" itemClass="detail-badge" />

        <div className="detail-card project-detail-hero">
          <div className="project-detail-visual">
            <i className={`bi ${project.icon}`} aria-hidden="true" />
            <span>{title}</span>
            <small>{category}</small>
          </div>
        </div>

        <div className="project-detail-grid">
          <aside className="detail-card project-detail-aside">
            <h2>{text.projectDetail.metaTitle}</h2>
            <dl className="project-detail-meta">
              {metaItems.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {detailContents.length > 0 ? (
              <div className="project-detail-content-links">
                <h3>{text.projectDetail.detailContentTitle}</h3>
                <div className="detail-content-buttons">
                  {detailContents.map((content) => {
                    const contentTitle = pickLocalized(content, "title", language);
                    const contentSummary = pickLocalized(content, "summary", language);

                    return (
                      <a
                        className="detail-content-button"
                        href={getProjectDetailContentHref(project, content)}
                        key={getProjectDetailContentSlug(content)}
                        aria-label={`${contentTitle} ${text.projectDetail.openDetailContent}`}
                      >
                        <span>{contentTitle}</span>
                        {contentSummary ? <small>{contentSummary}</small> : null}
                        <i className="bi bi-arrow-right-short" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </aside>

          <article className="project-detail-body">
            <section className="project-detail-section">
              <h2>{text.projectDetail.overview}</h2>
              <p>{description}</p>
              <p className="project-detail-location">{location}</p>
            </section>

            <section className="project-detail-section">
              <h2>{text.projectDetail.focus}</h2>
              <ul>
                {focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-detail-section">
              <h2>{text.projectDetail.process}</h2>
              <ul>
                {process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-detail-section">
              <h2>{text.projectDetail.outcomes}</h2>
              <ul>
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-detail-section">
              <h2>{text.projectDetail.reflection}</h2>
              <p>{text.projectDetail.reflectionCopy}</p>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProjectDetailContentPage({ project, content, language, text, onBackToProject }) {
  const projectTitle = pickLocalized(project, "title", language);
  const title = pickLocalized(content, "title", language);
  const summary = pickLocalized(content, "summary", language);
  const markdown = getDetailMarkdown(content, language);
  const body = pickLocalized(content, "body", language);
  const bullets = pickLocalized(content, "bullets", language) ?? [];

  return (
    <section className="individual-section project-detail detail-content-page" aria-labelledby="detail-content-title">
      <div className="project-detail-container">
        <nav aria-label="Breadcrumb" className="detail-breadcrumbs">
          <button type="button" className="detail-back-button" onClick={onBackToProject}>
            <i className="bi bi-arrow-left" aria-hidden="true" />
            {text.projectDetail.backToProject}
          </button>
        </nav>

        <p className="detail-content-kicker">{projectTitle}</p>
        <h1 className="project-detail-title" id="detail-content-title">
          {title}
        </h1>
        {summary ? <p className="project-detail-subtitle">{summary}</p> : null}

        <article className="detail-card detail-content-article">
          {markdown ? (
            <MarkdownContent markdown={markdown} />
          ) : (
            <>
              {body ? <p>{body}</p> : null}
              {bullets.length > 0 ? (
                <ul>
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </article>
      </div>
    </section>
  );
}

function TechStack({ language, text }) {
  return (
    <section className="individual-section tech-stack-section" id="techstacksection">
      <h1 className="tech-stack-header">{text.sections.techStack}</h1>
      <div className="tech-stacks">
        {techStacks.map((stack) => (
          <div className="tech-stack" key={stack.title}>
            <h2 className="tech-stack-title">
              <i className={`bi ${stack.icon}`} /> {pickLocalized(stack, "title", language)}
            </h2>
            <Tags
              tags={language === "ko" && stack.koSkills ? stack.koSkills : stack.skills}
              className="tech-stack-skills"
              itemClass="tech-stack-skill"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkExperience({ language, text }) {
  return (
    <section className="individual-section work-experiences" id="workexperience">
      <h1 className="work-experience-header">{text.sections.workExperiences}</h1>
      <div className="experiences">
        {experiences.map((experience) => (
          <div className="experience" key={experience.title}>
            <div className="left-side">
              <div className="date">{pickLocalized(experience, "date", language)}</div>
            </div>
            <div className="right-side">
              <div className="title">{pickLocalized(experience, "title", language)}</div>
              <div className="company">
                <a href={experience.companyUrl}>
                  {experience.company} <i className="bi bi-box-arrow-up-right" />
                </a>
              </div>
              <div className="description">{pickLocalized(experience, "description", language)}</div>
              <div className="apps">
                {experience.apps.map(([label, href]) => (
                  <a href={href} key={href}>
                    {label} <i className="bi bi-box-arrow-up-right" />
                  </a>
                ))}
              </div>
              <Tags tags={experience.skills} className="skills" itemClass="skill" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ text }) {
  return (
    <section className="footer2-section" id="contact">
      <div className="footer2">
        <div className="container">
          <div className="ready-to-talk">
            <h1>{text.footer.headline}</h1>
            <a href={text.footer.contactHref}>
              <button className="call-to-action btn" type="button">
                {text.footer.contact}
              </button>
            </a>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a href={link.href} aria-label={link.label} key={link.href}>
                <i className={`bi ${link.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [route, setRoute] = useState(getCurrentHashRoute);
  const { progress, activeSection } = useScrollProgress();
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const heroProgress = reducedMotion ? 1 : progress;
  const text = uiText[language] ?? uiText.en;
  const selectedProject = useMemo(() => getProjectFromRoute(route), [route]);
  const selectedDetailContent = useMemo(() => getDetailContentFromRoute(route), [route]);

  useEffect(() => {
    document.documentElement.lang = language === "ko" ? "ko" : "en";
    window.localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    const syncRouteFromHash = () => setRoute(getCurrentHashRoute());

    syncRouteFromHash();
    window.addEventListener("hashchange", syncRouteFromHash);
    window.addEventListener("popstate", syncRouteFromHash);
    return () => {
      window.removeEventListener("hashchange", syncRouteFromHash);
      window.removeEventListener("popstate", syncRouteFromHash);
    };
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (selectedProject) {
        window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
        return;
      }

      const sectionId = getCurrentHashRoute();
      if (!sectionId || sectionId.startsWith("/projects/") || sectionId.startsWith("projects/")) {
        return;
      }

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [reducedMotion, route, selectedProject]);

  const closeProjectDetail = () => {
    const project = selectedDetailContent?.project ?? selectedProject;
    window.location.hash = project && isSideProject(project) ? "#sideprojects" : "#featuredproject";
  };

  const closeProjectDetailContent = () => {
    const project = selectedDetailContent?.project;
    if (!project) return;
    window.location.hash = getProjectHref(project);
  };

  const headerProgress = selectedProject || selectedDetailContent ? 1 : heroProgress;
  const headerActiveSection = selectedProject || selectedDetailContent ? "" : activeSection;

  return (
    <>
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      <Header progress={headerProgress} activeSection={headerActiveSection} language={language} text={text} />
      <main className={selectedProject || selectedDetailContent ? "project-page" : ""}>
        {selectedDetailContent ? (
          <>
            <ProjectDetailContentPage
              project={selectedDetailContent.project}
              content={selectedDetailContent.content}
              language={language}
              text={text}
              onBackToProject={closeProjectDetailContent}
            />
            <Footer text={text} />
          </>
        ) : selectedProject ? (
          <>
            <ProjectDetail project={selectedProject} language={language} text={text} onBack={closeProjectDetail} />
            <Footer text={text} />
          </>
        ) : (
          <>
            <Hero progress={heroProgress} text={text} language={language} />
            <FeaturedProjects language={language} text={text} />
            <SideProjects language={language} text={text} />
            <TechStack language={language} text={text} />
            <WorkExperience language={language} text={text} />
            <Footer text={text} />
          </>
        )}
      </main>
    </>
  );
}
