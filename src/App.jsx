import React, { useEffect, useMemo, useState } from "react";
import {
  engineeringProjects,
  experiences,
  languages,
  navItems,
  projects,
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
    href: "https://github.com/coleyoung-dev",
    icon: "bi-github",
    label: "GitHub",
  },
];

function getInitialLanguage() {
  if (typeof window === "undefined") return "ko";
  const savedLanguage = window.localStorage.getItem("lang");
  return languages.some((language) => language.code === savedLanguage) ? savedLanguage : "ko";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    return window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
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
  return project.slug ?? slugify(project.title);
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
  return [...projects, ...engineeringProjects];
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

function getProjectSectionId(project) {
  if (engineeringProjects.some((item) => getProjectSlug(item) === getProjectSlug(project))) return "engineering";
  return "featuredproject";
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
  let codeLines = [];
  let codeLanguage = "";
  let inCodeBlock = false;
  let tableRows = [];

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

  const flushTable = () => {
    if (tableRows.length === 0) return;
    blocks.push({ type: "table", headers: tableRows[0], rows: tableRows.slice(1) });
    tableRows = [];
  };

  const parseTableRow = (line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushParagraph();
      flushList();
      flushTable();
      if (inCodeBlock) {
        blocks.push({ type: "code", language: codeLanguage, text: codeLines.join("\n") });
        codeLines = [];
        codeLanguage = "";
      } else {
        codeLanguage = trimmed.slice(3).trim();
      }
      inCodeBlock = !inCodeBlock;
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const cells = parseTableRow(trimmed);
      if (cells.every((cell) => /^:?-{3,}:?$/.test(cell))) return;
      flushParagraph();
      flushList();
      tableRows.push(cells);
      return;
    }

    flushTable();

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

    const videoMatch = trimmed.match(/^@\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);
    if (videoMatch) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "video",
        label: videoMatch[1],
        src: videoMatch[2],
        caption: videoMatch[3] ?? "",
      });
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
  flushTable();
  if (inCodeBlock) blocks.push({ type: "code", language: codeLanguage, text: codeLines.join("\n") });
  return blocks;
}

function renderInlineText(text) {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    return part;
  });
}

function renderCodeText(text, language) {
  if (language !== "csharp") return text;

  const pattern = /(\/\/[^\n]*|"(?:\\.|[^"\\])*"|\b\d+\b|\b[A-Za-z_][A-Za-z_0-9]*\b|[=+<>])/g;
  const parts = [];
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const token = match[0];
    const start = match.index;
    const end = start + token.length;
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));

    let kind = "";
    if (token.startsWith("//")) kind = "comment";
    else if (token.startsWith('"')) kind = "string";
    else if (/^\d/.test(token)) kind = "number";
    else if (/^(public|private|static|class|enum|void|if|return|throw|new|var)$/.test(token)) kind = "keyword";
    else if (text.slice(end).trimStart().startsWith("(")) kind = "method";
    else if (/^(int|byte|sizeof|typeof)$/.test(token) || (/^[A-Z][a-z]/.test(token) && !text.slice(0, start).trimEnd().endsWith("."))) kind = "type";
    else if (/^[=+<>]$/.test(token)) kind = "operator";

    parts.push(kind ? <span className={`code-token-${kind}`} key={start}>{token}</span> : token);
    lastIndex = end;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
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
            <li key={item}>{renderInlineText(item)}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "table") {
      return (
        <div className="detail-content-table-wrap" key={key}>
          <table className="detail-content-table">
            <thead><tr>{block.headers.map((header, cellIndex) => <th scope="col" key={cellIndex}>{renderInlineText(header)}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>{block.headers.map((_, cellIndex) => <td key={cellIndex}>{renderInlineText(row[cellIndex] ?? "")}</td>)}</tr>
            ))}</tbody>
          </table>
        </div>
      );
    }

    if (block.type === "code") {
      return <pre className="detail-content-code" key={key}><code className={block.language ? `language-${block.language}` : undefined}>{renderCodeText(block.text, block.language)}</code></pre>;
    }

    if (block.type === "image") {
      const src = block.src.startsWith("http") || block.src.startsWith("data:") ? block.src : assetPath(block.src);
      return (
        <figure className="detail-content-figure" key={key}>
          <img src={src} alt={block.alt} />
        </figure>
      );
    }

    if (block.type === "video") {
      const src = block.src.startsWith("http") || block.src.startsWith("data:") ? block.src : assetPath(block.src);
      return (
        <figure className="detail-content-video" key={key}>
          <video src={src} controls muted playsInline preload="metadata" aria-label={block.label} />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    }

    return <p key={key}>{renderInlineText(block.text)}</p>;
  });
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const onScroll = () => {
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

  return activeSection;
}

function LanguageToggle({ language, onLanguageChange }) {
  return (
    <div className="language-toggle" aria-label="Language Toggle" data-active={language}>
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

function Header({ activeSection, language, text, theme, onLanguageChange, onThemeChange }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => {
      if (window.innerWidth <= 1050) setOpen(false);
    };

    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <section className="header2">
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
        <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
        <button
          className="theme-toggle"
          type="button"
          aria-label={language === "ko" ? (theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환") : (theme === "dark" ? "Switch to light mode" : "Switch to dark mode")}
          title={language === "ko" ? (theme === "dark" ? "라이트 모드" : "다크 모드") : (theme === "dark" ? "Light mode" : "Dark mode")}
          onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        >
          <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`} aria-hidden="true" />
        </button>
      </nav>
    </section>
  );
}

function Hero({ text }) {
  return (
    <section className="hero" id="top">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">{text.hero.name} <span>· {text.hero.subtitle}</span></p>
          <h1 className="hero-title">{text.hero.headline}</h1>
          <p className="hero-description">{text.hero.description}</p>
          <div className="hero-actions">
            <a className="hero-action hero-action-primary" href="#featuredproject">{text.hero.projects}</a>
            <a className="hero-action hero-action-secondary" href="mailto:ighong11@gmail.com">{text.hero.contact}</a>
          </div>
          <div className="hero-tags">
            {text.hero.profileTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="hero-social-links">
            {heroSocialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.href}>
                <i className={`bi ${link.icon}`} aria-hidden="true" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-photo">
          <img src={assetPath("images_videos/hero-ar-demo.webp")} alt={text.hero.photoAlt} decoding="async" />
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

function ProjectStatuses({ statuses, language, className = "project-card-statuses" }) {
  if (!statuses?.length) return null;

  return (
    <div className={className}>
      {statuses.map((status, index) => (
        <div className="project-status" key={`${status.type}-${index}`}>
          <span className="project-status-badge" data-status={status.type.toLowerCase().replace(/\s+/g, "-")}>
            <span className="project-status-dot" aria-hidden="true" />
            {status.type}
          </span>
          <span className="project-status-text">{pickLocalized(status, "text", language)}</span>
        </div>
      ))}
    </div>
  );
}

function LinkedListItem({ item }) {
  if (typeof item === "string") {
    return <>{item}</>;
  }

  if (item?.href) {
    return (
      <a className="project-detail-section-link" href={item.href} target="_blank" rel="noreferrer">
        <span>{item.text}</span>
        <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
      </a>
    );
  }

  return <>{item?.text}</>;
}

function ProjectCard({ project, language, text }) {
  const title = pickLocalized(project, "title", language);
  const highlight = pickLocalized(project, "highlight", language);
  const location = pickLocalized(project, "location", language);
  const description = pickLocalized(project, "description", language);
  const imageAlt = pickLocalized(project, "imageAlt", language) ?? title;
  const imageSrc = project.image
    ? project.image.startsWith("http") || project.image.startsWith("data:")
      ? project.image
      : assetPath(project.image)
    : "";

  return (
    <a
      href={getProjectHref(project)}
      className="featured-projects-showcase project-card-button"
      aria-label={`${title} ${text.projectDetail.open}`}
    >
      <div className="image">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} />
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
        <ProjectStatuses statuses={project.statuses} language={language} />
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

function EngineeringProjects({ language, text }) {
  return (
    <ProjectSection
      id="engineering"
      title={text.sections.engineering}
      items={engineeringProjects}
      language={language}
      text={text}
      className="engineering-projects"
    />
  );
}

function ProjectCaseStudies({ project, language, text }) {
  const detailContents = getProjectDetailContents(project);
  const coreContents = detailContents
    .filter((content) => content.inline)
    .sort((left, right) => (left.inlineOrder ?? 0) - (right.inlineOrder ?? 0));
  const additionalContents = detailContents.filter((content) => !content.inline);

  if (coreContents.length === 0) return null;

  return (
    <section className="project-detail-section project-case-studies" aria-labelledby="core-case-studies-title">
      <h2 id="core-case-studies-title">
        {pickLocalized(project, "caseStudiesTitle", language) ?? text.projectDetail.coreCaseStudies}
      </h2>
      <p className="project-case-studies-copy">
        {pickLocalized(project, "caseStudiesCopy", language) ?? text.projectDetail.coreCaseStudiesCopy}
      </p>

      <div className={`core-case-study-grid${coreContents.length === 4 ? " core-case-study-grid-four" : ""}`}>
        {coreContents.map((content) => {
          const title = pickLocalized(content, "title", language);
          const summary = pickLocalized(content, "summary", language);
          const highlights = pickLocalized(content, "highlights", language) ?? [];

          return (
            <article className="core-case-study-card" key={getProjectDetailContentSlug(content)}>
              <h3>{title}</h3>
              {summary ? <p>{summary}</p> : null}
              {highlights.length > 0 ? (
                <ul>
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <a className="core-case-study-link" href={getProjectDetailContentHref(project, content)}>
                {text.projectDetail.viewFullCaseStudy}
                <i className="bi bi-arrow-right-short" aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>

      {additionalContents.length > 0 ? (
        <details className="additional-case-studies">
          <summary>
            <span>{text.projectDetail.additionalCaseStudies}</span>
            <span className="additional-case-study-count">{additionalContents.length}</span>
          </summary>
          <div className="detail-content-buttons">
            {additionalContents.map((content) => {
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
        </details>
      ) : null}
    </section>
  );
}

function ProjectDetail({ project, language, text, onBack }) {
  const detailId = getProjectDetailId(project);
  const title = pickLocalized(project, "title", language);
  const location = pickLocalized(project, "location", language);
  const description = pickLocalized(project, "description", language);
  const overview = pickLocalized(project, "overview", language) ?? description;
  const detailDescription = pickLocalized(project, "detailDescription", language);
  const role = pickLocalized(project, "role", language);
  const timeline = pickLocalized(project, "timeline", language);
  const team = pickLocalized(project, "team", language);
  const category = pickLocalized(project, "category", language);
  const relatedPage = pickLocalized(project, "relatedPage", language);
  const focus = pickLocalized(project, "focus", language) ?? [];
  const process = pickLocalized(project, "process", language) ?? [];
  const architecture = pickLocalized(project, "architecture", language) ?? [];
  const outcomes = pickLocalized(project, "outcomes", language) ?? [];
  const detailContents = getProjectDetailContents(project);
  const hasInlineCaseStudies = detailContents.some((content) => content.inline);
  const metaItems = project.detailMeta
    ? project.detailMeta.map((item) => ({
        ...item,
        label: pickLocalized(item, "label", language),
        value: pickLocalized(item, "value", language),
      }))
    : [
        { label: text.projectDetail.role, value: role },
        { label: text.projectDetail.timeline, value: timeline },
        { label: text.projectDetail.team, value: team },
        { label: text.projectDetail.category, value: category },
        relatedPage ? { label: text.projectDetail.relatedPage, value: relatedPage } : null,
      ].filter(Boolean);

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
        <ProjectStatuses statuses={project.statuses} language={language} className="project-detail-statuses" />
        <Tags tags={project.tags} className="detail-chips" itemClass="detail-badge" />

        <div className="project-detail-grid">
          <aside className="detail-card project-detail-aside">
            <h2>{text.projectDetail.metaTitle}</h2>
            <dl className="project-detail-meta">
              {metaItems.map(({ label, value, items, listItems }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    {listItems ? (
                      <ul className="project-detail-meta-list">
                        {listItems.map((item) => (
                          <li key={item.label}>{pickLocalized(item, "label", language)}</li>
                        ))}
                      </ul>
                    ) : items ? (
                      items.map((item, index) => (
                        <React.Fragment key={item.label}>
                          {index > 0 ? ", " : null}
                          {item.href ? (
                            <a className="project-detail-meta-link" href={item.href} target="_blank" rel="noreferrer">
                              <span>{item.label}</span>
                              <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                            </a>
                          ) : (
                            item.label
                          )}
                        </React.Fragment>
                      ))
                    ) : value?.href ? (
                      <a className="project-detail-meta-link" href={value.href} target="_blank" rel="noreferrer">
                        <span>{value.label}</span>
                        <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            {!hasInlineCaseStudies && detailContents.length > 0 ? (
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
              <p>{overview}</p>
              {project.showLocationInOverview !== false ? (
                <p className="project-detail-location">{location}</p>
              ) : null}
            </section>

            {detailDescription ? (
              <section className="project-detail-section">
                <h2>{text.projectDetail.description}</h2>
                {Array.isArray(detailDescription)
                  ? detailDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  : <p>{detailDescription}</p>}
              </section>
            ) : null}

            <ProjectCaseStudies project={project} language={language} text={text} />

            {architecture.length > 0 ? (
              <section className="project-detail-section">
                <h2>{text.projectDetail.architecture}</h2>
                <ul>
                  {architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {focus.length > 0 ? (
              <section className="project-detail-section">
                <h2>{pickLocalized(project, "focusTitle", language) ?? text.projectDetail.focus}</h2>
                <ul>
                  {focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.focusImage ? (
                  <figure className="project-detail-focus-image">
                    <img
                      src={assetPath(project.focusImage)}
                      alt={pickLocalized(project, "focusImageAlt", language) ?? ""}
                      loading="lazy"
                    />
                  </figure>
                ) : null}
              </section>
            ) : null}

            {process.length > 0 ? (
              <section className="project-detail-section">
                <h2>{text.projectDetail.process}</h2>
                <ul>
                  {process.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="project-detail-section">
              <h2>{pickLocalized(project, "outcomesTitle", language) ?? text.projectDetail.outcomes}</h2>
              <ul>
                {outcomes.map((item) => (
                  <li key={typeof item === "string" ? item : item.text}>
                    <LinkedListItem item={item} />
                    {item.children?.length > 0 ? (
                      <ul>
                        {item.children.map((child) => (
                          <li key={typeof child === "string" ? child : child.text}>
                            <LinkedListItem item={child} />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            {project.reflection !== false ? (
              <section className="project-detail-section">
                <h2>{text.projectDetail.reflection}</h2>
                <p>{text.projectDetail.reflectionCopy}</p>
              </section>
            ) : null}
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
                  <a href={href} key={`${label}-${href}`}>
                    {label} <i className="bi bi-box-arrow-up-right" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BottomEmailContact({ text }) {
  return (
    <section className="bottom-email-contact" id="contact">
      <a href="mailto:ighong11@gmail.com" aria-label={text.hero.contact} title={text.hero.contact}>
        <i className="bi bi-envelope" aria-hidden="true" />
      </a>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [route, setRoute] = useState(getCurrentHashRoute);
  const activeSection = useActiveSection();
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const text = uiText[language] ?? uiText.en;
  const selectedProject = useMemo(() => getProjectFromRoute(route), [route]);
  const selectedDetailContent = useMemo(() => getDetailContentFromRoute(route), [route]);

  useEffect(() => {
    document.documentElement.lang = language === "ko" ? "ko" : "en";
    window.localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [theme]);

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
    window.location.hash = `#${project ? getProjectSectionId(project) : "featuredproject"}`;
  };

  const closeProjectDetailContent = () => {
    const project = selectedDetailContent?.project;
    if (!project) return;
    window.location.hash = getProjectHref(project);
  };

  const headerActiveSection = selectedProject || selectedDetailContent ? "" : activeSection;

  return (
    <>
      <Header activeSection={headerActiveSection} language={language} text={text} theme={theme} onLanguageChange={setLanguage} onThemeChange={setTheme} />
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
          </>
        ) : selectedProject ? (
          <>
            <ProjectDetail project={selectedProject} language={language} text={text} onBack={closeProjectDetail} />
          </>
        ) : (
          <>
            <Hero text={text} />
            <FeaturedProjects language={language} text={text} />
            <WorkExperience language={language} text={text} />
            <EngineeringProjects language={language} text={text} />
            <TechStack language={language} text={text} />
          </>
        )}
      </main>
      <BottomEmailContact text={text} />
    </>
  );
}
