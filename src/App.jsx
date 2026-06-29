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

function getAllProjectItems() {
  return [...projects, ...sideProjects];
}

function getCurrentHashRoute() {
  if (typeof window === "undefined") return "";
  return window.location.hash.replace(/^#/, "");
}

function getProjectFromRoute(route) {
  const normalizedRoute = route.replace(/^\//, "");
  let slug = "";

  if (normalizedRoute.startsWith("projects/")) {
    slug = normalizedRoute.replace(/^projects\//, "");
  } else if (normalizedRoute.startsWith("project-")) {
    slug = normalizedRoute.replace(/^project-/, "");
  }

  return getAllProjectItems().find((project) => getProjectSlug(project) === slug) ?? null;
}

function isSideProject(project) {
  return sideProjects.some((item) => getProjectSlug(item) === getProjectSlug(project));
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
                    <a href={text.footer.contactHref}>
                      <button className="call-to-action btn" type="button">
                        {text.hero.contact}
                      </button>
                    </a>
                    <a href="#featuredproject">
                      <button className="call-to-action btn" type="button">
                        {text.hero.projects}
                      </button>
                    </a>
                  </div>
                </div>
                <div className="hero-profile-card" aria-label={text.hero.name}>
                  <div className="profile-initials">{text.hero.initials}</div>
                  <div className="profile-kicker">{text.hero.profileKicker}</div>
                  <div className="profile-tags">
                    {text.hero.profileTags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="scroll-down">
                {text.hero.scroll}
                <i className="bi bi-mouse" />
              </p>
            </div>
          </div>
          <img className="headset" src={assetPath("images_videos/vrgoogles.png")} alt="" style={{ opacity: headsetOpacity }} />
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
    window.location.hash = selectedProject && isSideProject(selectedProject) ? "#sideprojects" : "#featuredproject";
  };

  const headerProgress = selectedProject ? 1 : heroProgress;
  const headerActiveSection = selectedProject ? "" : activeSection;

  return (
    <>
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      <Header progress={headerProgress} activeSection={headerActiveSection} language={language} text={text} />
      <main className={selectedProject ? "project-page" : ""}>
        {selectedProject ? (
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
