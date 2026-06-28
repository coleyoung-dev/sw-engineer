import React, { useEffect, useMemo, useRef, useState } from "react";
import { copy, navItems, portfolioItems } from "./data.js";

const filters = ["all", "graphics", "engine", "others"];

function useColumnCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
}

function getImageHeightScore(ratio) {
  const [width, height] = ratio.split("/").map((value) => Number(value.trim()));
  return height / width;
}

function splitIntoColumns(items, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array.from({ length: columnCount }, () => 0);

  items.forEach((item) => {
    const targetColumn = heights.indexOf(Math.min(...heights));
    columns[targetColumn].push(item);
    heights[targetColumn] += getImageHeightScore(item.ratio) + 0.08;
  });

  return columns;
}

function SectionTitle({ children, subtitle }) {
  return (
    <div className="container section-title reveal" data-reveal>
      <h2>{children}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function LanguageToggle({ lang, setLang, hidden }) {
  return (
    <div className={`language-toggle ${hidden ? "is-hidden" : ""}`} data-active={lang}>
      <button id="btn-en" type="button" onClick={() => setLang("en")}>
        EN
      </button>
      <button id="btn-ko" type="button" onClick={() => setLang("ko")}>
        KR
      </button>
    </div>
  );
}

function Header({ t, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => setIsOpen(false);

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${isOpen ? "header-show" : ""}`}>
      <button
        type="button"
        className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((value) => !value)}
      />

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={activeSection === item.id ? "active" : ""} onClick={handleNav}>
                <i className={`bi ${item.icon} navicon`} />
                <span>{t.nav[item.key]}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="main" className="hero section light-background">
      <video id="background-video" autoPlay loop muted playsInline>
        <source src="/dear1.mp4" type="video/mp4" />
      </video>
      <div className="container reveal is-visible" data-reveal>
        <div className="row justify-content-center">
          <div className="col-lg-9 hero-copy">
            <h2>{t.hero.name}</h2>
            <h4>{t.hero.title}</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/imjinwoo/" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href="https://github.com/Nero-TheThrill/" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="about section">
      <SectionTitle>{t.about.title}</SectionTitle>
      <div className="container reveal" data-reveal>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/test.jpg" className="img-fluid" alt="profile" />
          </div>
          <div className="col-lg-8 content">
            <h2>{t.about.role}</h2>
            <p className="fst-italic py-3">{t.about.subtitle}</p>
            <div className="row">
              <div className="col-lg-10">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>{t.about.githubLabel}</strong>
                    <span>
                      <a href="https://github.com/Nero-TheThrill/">https://github.com/Nero-TheThrill</a>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>{t.about.regionLabel}</strong>
                    <span>{t.about.region}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>{t.about.degreeLabel}</strong>
                    <span>{t.about.degree}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>{t.about.emailLabel}</strong>
                    <span>imjinwoo98@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="py-3">{t.about.desc}</p>
        </div>
      </div>
    </section>
  );
}

function DetailSlider({ project, t }) {
  const blogSlides = [
    { type: "image", src: "/detailImage/urpshadow.png" },
    { type: "pair", src: ["/detailImage/distortionworks.gif", "/detailImage/distortionnotworking.gif"] },
    { type: "image", src: "/detailImage/urpbloom.png" },
  ];

  const slides =
    project.id === "blog" ? blogSlides : [{ type: "image", src: project.image, title: t.portfolio.items[project.titleKey][0] }];

  const [active, setActive] = useState(project.id === "blog" ? 1 : 0);

  useEffect(() => {
    setActive(project.id === "blog" ? 1 : 0);
  }, [project.id]);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const move = (direction) => {
    setActive((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <div className="portfolio-details-slider swiper">
      <div className="swiper-wrapper align-items-center">
        {slides.map((slide, index) => (
          <div className={`swiper-slide ${index === active ? "swiper-slide-active" : ""}`} key={`${slide.type}-${index}`}>
            <div className="portfolio-media">
              {slide.type === "pair" ? (
                <div className="portfolio-media1">
                  {slide.src.map((src) => (
                    <img src={src} alt="" key={src} />
                  ))}
                </div>
              ) : (
                <img src={slide.src} alt={slide.title ?? ""} />
              )}
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <>
          <button className="swiper-button-prev" type="button" aria-label="Previous slide" onClick={() => move(-1)} />
          <button className="swiper-button-next" type="button" aria-label="Next slide" onClick={() => move(1)} />
          <div className="swiper-pagination">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={`swiper-pagination-bullet ${index === active ? "swiper-pagination-bullet-active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
                key={`${slide.type}-bullet-${index}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function PortfolioDetail({ activeProject, t }) {
  const project = portfolioItems.find((item) => item.id === activeProject) ?? portfolioItems[2];
  const isBlog = project.id === "blog";
  const [title, desc] = t.portfolio.items[project.titleKey];
  const detail = t.portfolio.detail;

  return (
    <section id="portfolio-inline" className="portfolio-details section reveal" data-reveal>
      <div className="container">
        <DetailSlider project={project} t={t} />

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8">
            <div className="portfolio-description">
              <h2>{isBlog ? detail.title : title}</h2>
              <p>{isBlog ? detail.intro : desc}</p>
              {isBlog
                ? detail.sections.map((section) => (
                    <div key={section.title}>
                      <h5>{section.title}</h5>
                      <p>{section.body}</p>
                    </div>
                  ))
                : null}
              {isBlog ? <p>{detail.more}</p> : null}
            </div>
          </div>

          <div className="col-lg-3">
            <div className="portfolio-info">
              <h3>{isBlog ? detail.infoTitle : "Project information"}</h3>
              <ul>
                {(isBlog ? detail.info : [["CATEGORY", t.portfolio.filters[project.category]], ["ROLE", title]]).map(([label, value]) => (
                  <li key={label}>
                    <strong>{label}</strong>
                    {String(value).startsWith("http") ? <a href={value}>{value}</a> : <span>{value}</span>}
                  </li>
                ))}
              </ul>
              {isBlog ? (
                <a className="btn-visit align-self-start" href="https://github.com/Pico-Developer/PICO-URP-Fork">
                  {detail.button}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, t, onSelect }) {
  const [title, desc] = t.portfolio.items[item.titleKey];

  return (
    <article className={`portfolio-item ${item.highlight ? "highlight" : ""}`}>
      <button type="button" className="portfolio-card-button" onClick={() => onSelect(item.id)}>
        <span className="glow" />
        <img src={item.image} className="img-fluid" alt="" style={{ aspectRatio: item.ratio }} />
        <span className="portfolio-info">
          <h4>{title}</h4>
          <p>{desc}</p>
          <span className="details-link" aria-hidden="true">
            <i className="bi bi-link-45deg" />
          </span>
        </span>
      </button>
    </article>
  );
}

function Portfolio({ t }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProject, setActiveProject] = useState("blog");
  const columnCount = useColumnCount();

  const visibleItems = useMemo(
    () => portfolioItems.filter((item) => activeFilter === "all" || item.category === activeFilter),
    [activeFilter],
  );
  const columns = useMemo(() => splitIntoColumns(visibleItems, columnCount), [visibleItems, columnCount]);

  const selectProject = (id) => {
    setActiveProject(id);
    window.requestAnimationFrame(() => {
      document.getElementById("portfolio-inline")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="portfolio" className="portfolio section">
      <SectionTitle>{t.portfolio.title}</SectionTitle>
      <PortfolioDetail activeProject={activeProject} t={t} />

      <div className="container reveal" data-reveal>
        <ul className="portfolio-filters">
          {filters.map((filter) => (
            <li
              className={activeFilter === filter ? "filter-active" : ""}
              data-filter={filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {t.portfolio.filters[filter]}
            </li>
          ))}
        </ul>

        <div className="masonry-board" style={{ "--columns": columnCount }}>
          {columns.map((column, index) => (
            <div className="masonry-column" key={`column-${index}`}>
              {column.map((item) => (
                <PortfolioCard item={item} t={t} onSelect={selectProject} key={item.id} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeItem({ item }) {
  return (
    <div className="resume-item">
      <h4>{item.title}</h4>
      <h5>{item.period}</h5>
      <p>
        <em>{item.place}</em>
      </p>
      {item.blog ? (
        <p>
          Blog Post: <a href={item.blog}>{item.blog}</a>
        </p>
      ) : null}
      {item.bullets?.length ? (
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {item.link ? (
        <p>
          <a href="https://nero-thethrill.github.io/Portfolio/files/Deferred_Shadinglocal_lighting.pdf">{item.link}</a>
        </p>
      ) : null}
    </div>
  );
}

function Resume({ t }) {
  return (
    <section id="resume" className="resume section">
      <SectionTitle>{t.resume.title}</SectionTitle>
      <div className="container reveal" data-reveal>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{t.resume.education}</h3>
            <ResumeItem item={t.resume.left[0]} />
            <h3 className="resume-title">{t.resume.left[1].heading}</h3>
            <ResumeItem item={t.resume.left[1]} />
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">{t.resume.professional}</h3>
            {t.resume.right.map((item) => (
              <ResumeItem item={item} key={`${item.title}-${item.period}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section id="skills" className="skills section">
      <SectionTitle>{t.skills.title}</SectionTitle>
      <div className="container reveal" data-reveal>
        <div className="row skills-content skills-animation">
          {t.skills.items.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Recommendations({ t }) {
  const [active, setActive] = useState(0);
  const items = t.recommendations.items;

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % items.length), 5000);
    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <section id="recommendations" className="testimonials section">
      <SectionTitle subtitle={t.recommendations.subtitle}>{t.recommendations.title}</SectionTitle>
      <div className="container reveal" data-reveal>
        <div className="testimonial-item">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-6">
              <div className="testimonial-content">
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>{items[active].text}</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
                <h3>{items[active].name}</h3>
                <h4>{items[active].role}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination">
          {items.map((item, index) => (
            <button
              type="button"
              aria-label={`Go to recommendation ${index + 1}`}
              className={`swiper-pagination-bullet ${index === active ? "swiper-pagination-bullet-active" : ""}`}
              onClick={() => setActive(index)}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#f8fbff");
      gradient.addColorStop(1, "#eef5ff");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.34;
      const spin = frame * 0.018;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(Math.sin(spin * 0.35) * 0.18);
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = "rgba(5, 99, 187, 0.34)";
      ctx.fillStyle = "rgba(5, 99, 187, 0.055)";

      for (let ring = 0; ring < 11; ring += 1) {
        ctx.beginPath();
        const radius = scale * (0.2 + ring * 0.07);
        for (let i = 0; i <= 96; i += 1) {
          const theta = (Math.PI * 2 * i) / 96;
          const wobble = Math.sin(theta * 3 + spin + ring * 0.4) * scale * 0.025;
          const x = Math.cos(theta + spin * 0.25) * (radius + wobble);
          const y = Math.sin(theta) * (radius * 0.46 + wobble);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      ctx.beginPath();
      for (let i = 0; i < 72; i += 1) {
        const theta = (Math.PI * 2 * i) / 72 + spin;
        const radius = scale * (0.18 + (i % 9) * 0.065);
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta * 1.6) * radius * 0.35;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(69, 80, 91, 0.22)";
      ctx.stroke();
      ctx.restore();

      frame += 1;
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="glcanvas" ref={canvasRef} aria-label="Animated graphics canvas" />;
}

function Contact({ t }) {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title reveal" data-reveal>
        <h2>{t.contact.title}</h2>
        <p>
          <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
        </p>
      </div>
      <ContactCanvas />
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="social-links d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/imjinwoo/" aria-label="LinkedIn">
            <i className="bi bi-linkedin" />
          </a>
          <a href="https://github.com/Nero-TheThrill/" aria-label="GitHub">
            <i className="bi bi-github" />
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>{t.footer.copy1}</span> <strong className="px-1 sitename">Jinwoo Choi</strong>{" "}
            <span>{t.footer.copy2}</span>
          </div>
          <div className="credits">
            <span>{t.footer.designedBy}</span> <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            <span>{t.footer.distributedBy}</span> <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("main");
  const [languageHidden, setLanguageHidden] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
  }, [lang]);

  useEffect(() => {
    const revealTargets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTarget = window.scrollY + window.innerHeight * 0.35;
      const current = navItems.reduce((result, item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollTarget) return item.id;
        return result;
      }, "main");

      setActiveSection(current);
      setLanguageHidden(window.scrollY > 110);
      setShowScrollTop(window.scrollY > 100);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    const timer = window.setTimeout(updateScrollState, 300);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(() => {
      scrollToHash();
      window.setTimeout(scrollToHash, 250);
    });

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      <LanguageToggle lang={lang} setLang={setLang} hidden={languageHidden} />
      <Header t={t} activeSection={activeSection} />
      <main className="main">
        <Hero t={t} />
        <About t={t} />
        <Portfolio t={t} />
        <Resume t={t} />
        <Skills t={t} />
        <Recommendations t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <button
        type="button"
        className={`scroll-top d-flex align-items-center justify-content-center ${showScrollTop ? "active" : ""}`}
        aria-label="Scroll top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-arrow-up-short" />
      </button>
    </>
  );
}
