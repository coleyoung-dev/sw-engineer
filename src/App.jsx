import React, { useEffect, useMemo, useState } from "react";
import { contactLinks, experiences, languages, navItems, platformIcons, projects, techStacks, uiText } from "./data.js";

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

  return (
    <section className="hero" id="top">
      <div className="scene">
        <div
          className="vr-container"
          style={{
            backgroundImage: `url("${assetPath("images_videos/herosectionbackground.gif")}")`,
            transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
          }}
        >
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

function ProjectCard({ project, language }) {
  const title = pickLocalized(project, "title", language);
  const highlight = pickLocalized(project, "highlight", language);
  const location = pickLocalized(project, "location", language);
  const description = pickLocalized(project, "description", language);

  return (
    <div className="featured-projects-showcase">
      <div className="image">
        {project.image ? (
          <a href={project.link ?? "#featuredproject"}>
            <img src={project.image} alt={project.imageAlt} />
          </a>
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
        <div className="play">
          {project.storeLinks?.map((link) => (
            <a href={link.href} className="btn" key={link.href}>
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProjects({ language, text }) {
  return (
    <section className="individual-section featured-projects" id="featuredproject">
      <h1 className="featured-projects-header">{text.sections.featuredProjects}</h1>
      <div className="featured-projects-tabs" />
      <div className="featured-projects-showcases">
        {projects.map((project) => (
          <ProjectCard project={project} language={language} key={project.title} />
        ))}
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
  const { progress, activeSection } = useScrollProgress();
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const heroProgress = reducedMotion ? 1 : progress;
  const text = uiText[language] ?? uiText.en;

  useEffect(() => {
    document.documentElement.lang = language === "ko" ? "ko" : "en";
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <>
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      <Header progress={heroProgress} activeSection={activeSection} language={language} text={text} />
      <main>
        <Hero progress={heroProgress} text={text} language={language} />
        <FeaturedProjects language={language} text={text} />
        <TechStack language={language} text={text} />
        <WorkExperience language={language} text={text} />
        <Footer text={text} />
      </main>
    </>
  );
}
