import { useTranslation } from "react-i18next";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
type CursorPosition = {
  x: number;
  y: number;
};
import Contact from "./Contact";
import Education from "./Education";
import LanguageSwitcher from "./LanguageSwitcher";
// A custom blinking cursor that follows the mouse
function CodeCursor() {
  const [position, setPosition] = useState<CursorPosition>({
    x: -50,
    y: -50,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <span
      className="code-cursor"
      style={{
        left: position.x,
        top: position.y,
      }}
      aria-hidden="true"
    />
  );
}

const skills = [
  { name: "ASP.NET Core", level: 90 },
  { name: "ASP.NET MVC", level: 90 },
  { name: "ASP.NET Razor Pages", level: 95 },
  { name: "C#", level: 95 },
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Angular", level: 78 },
  { name: "SEO", level: 90 },
  { name: "Django", level: 50 },
  { name: "T-SQL", level: 95 },
  { name: "SQL Server", level: 85 },
  { name: "REST APIs", level: 85 },
  { name: "Windows Forms", level: 95 },
  { name: "WPF", level: 85 },
  { name: "Linux", level: 75 },
];
type PublicProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  linkLabel: string;
  tags: string[];
};
type ProfessionalCaseStudy = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  tags: string[];
  highlights: string[];
  accessLabel: string;
  url?: string;
  linkLabel?: string;
};
const publicProjects: PublicProject[] = [
  {
    id: "notesara",
    name: "NoteSara",
    category: "Music Platform",
    description:
      "A music platform where musicians and composers can discover and download sheet music and tutorials. It also enables creators to publish and sell their own educational content.",
    url: "https://notesara.com",
    linkLabel: "Visit website",
    tags: ["Music Platform", "Creator Marketplace", "Digital Content"],
  },
  {
    id: "haminhomes",
    name: "HaminHomes",
    category: "Business Website",
    description:
      "A website for a Canadian company to showcase its work and completed projects, strengthen its online presence, and receive new inquiries from potential customers.",
    url: "https://haminhomes.com",
    linkLabel: "Visit website",
    tags: ["Business Website", "Project Showcase", "Customer Inquiries"],
  },
  {
    id: "expertcommunicationlab",
    name: "Expert Communication Lab",
    category: "Python Automation",
    description:
      "A Python Telegram bot developed using Google Colab to help users move files between Telegram and Google Drive, with functionality for downloading YouTube content.",
    url: "https://github.com/PersianNull/ExpertComminucationLab",
    linkLabel: "View on GitHub",
    tags: ["Python", "Telegram Bot", "Google Colab"],
  },
  {
  id: "visual-annotation-tool",
  name: "Visual Annotation Tool",
  category: "Computer Vision · Open Source",
  description:
    "An interactive web application for image annotation and visual analysis. Integrates YOLOv5 for object detection and supports multiple models, configurable confidence thresholds, and batch image processing.",
  url: "https://github.com/kpoorooshasb/streamlit-visual-annotation-tool",
  linkLabel: "View on GitHub",
  tags: [
    "Python",
    "Streamlit",
    "YOLOv5",
    "Computer Vision",
    "Machine Learning",
  ],
},
];
const professionalCaseStudies: ProfessionalCaseStudy[] = [
  {
    id: "anahid",
    name: "Anahid",
    category: "Desktop & Streaming Platform",
    description:
      "A platform for discovering and streaming movies and TV series, built around a WPF desktop application with JavaScript-based backend services and a Telegram bot.",
    role: "Desktop Application & Backend Development",
    tags: [
      "WPF",
      "JavaScript",
      "Cloudflare Workers",
      "REST APIs",
      "Telegram Bot",
    ],
    highlights: [
      "Developed the WPF desktop application.",
      "Implemented JavaScript APIs and backend logic deployed on Cloudflare Workers.",
      "Developed a Telegram bot using JavaScript and deployed it on Cloudflare.",
    ],
    accessLabel: "Desktop app not publicly downloadable",
  },
  {
    id: "razi-supplier-portal",
    name: "Razi Supplier Portal",
    category: "Enterprise Web Application",
    description:
      "A supplier portal developed for Razi Pharmaceutical Distribution Company to support its supplier-facing business operations.",
    role: "End-to-End Full-Stack Development",
    tags: [
      "ASP.NET Razor Pages",
      "C#",
      "Dapper",
      "Clean Architecture",
      "SQL Server",
    ],
    highlights: [
      "Handled development end to end, from visual and UI design to frontend and backend implementation.",
      "Structured the application using Clean Architecture.",
      "Implemented data access using Dapper.",
    ],
    accessLabel: "Restricted access · Company credentials required",
    url: "https://supplierportal.razico.ir/",
    linkLabel: "Open login page",
  },
  {
    id: "razi-sales-portal",
    name: "Razi Sales Portal",
    category: "Enterprise Web Application",
    description:
      "A web portal developed for Razi Pharmaceutical Distribution Company using ASP.NET MVC and Entity Framework.",
    role: "Web Application Development",
    tags: [
      "C#",
      "ASP.NET MVC",
      "Entity Framework",
      "SQL Server",
    ],
    highlights: [
      "Developed web application functionality using ASP.NET MVC.",
      "Used Entity Framework for data access.",
    ],
    accessLabel: "Restricted access · Company credentials required",
    url: "https://my.razico.ir/",
    linkLabel: "Open login page",
  },
  {
    id: "razi-desktop-apps",
    name: "Razi Internal Desktop Applications",
    category: "Internal Business Software",
    description:
      "Internal Windows desktop applications supporting business workflows across sales, accounting, and warehouse operations.",
    role: "Desktop Application Development",
    tags: [
      "C#",
      "Windows Forms",
      "SQL Server",
      "DevExpress",
      "Reporting Tools",
    ],
    highlights: [
      "Contributed to the development of internal business applications.",
      "Worked on desktop software used in operational workflows.",
    ],
    accessLabel: "Internal software · Source code not public",
  },
];
const skillProjectMap: Record<string, string[]> = {
  "ASP.NET Core": ["notesara", "haminhomes"],
  "ASP.NET MVC": ["haminhomes","notesara"],
  "ASP.NET Razor Pages": ["haminhomes","notesara"],
  "SEO": ["haminhomes","notesara"],
  "C#": ["notesara", "haminhomes"],

  Python: ["expertcommunicationlab"],
  JavaScript: ["notesara", "haminhomes"],
  TypeScript: [],

  Django: [],
  "T-SQL": ["notesara", "haminhomes","expertcommunicationlab"],
  "SQL Server": ["notesara", "haminhomes"],
  "REST APIs": ["expertcommunicationlab"],

  "Windows Forms": [],
  WPF: [],
  Linux: [],
};


type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  courses: string[];
  image?: string;
};

const certificates: Certificate[] = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics",
    issuer: "Google · Coursera",
    year: "2023",
    image: "/images/google-data-analytics-certificate.png",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/PMAVAV528R6K",
    // Add the real certificate image here when available.

    courses: [
      "Foundations: Data, Data, Everywhere",
      "Ask Questions to Make Data-Driven Decisions",
      "Prepare Data for Exploration",
      "Process Data from Dirty to Clean",
      "Analyze Data to Answer Questions",
      "Share Data Through the Art of Visualization",
      "Google Data Analytics Capstone: Complete a Case Study",
    ],
  },
  {
    id: "ielts",
    title: "IELTS",
    issuer: "IELTS",
    year: "2025",
    image: "/images/ielts-certificate.png",
    courses: [],
  },
];


function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="certifications-section" id="certificates">
      <div className="certifications-heading">
        <span className="certifications-eyebrow">
          {t("certificatesPage.eyebrow")}
        </span>

        <h2>
          {t("certificatesPage.title")}{" "}
          <span>{t("certificatesPage.titleAccent")}</span>
        </h2>

        <p>{t("certificatesPage.description")}</p>
      </div>

      <div className="certifications-grid">
        {certificates.map((certificate) => (
          <article className="certification-card" key={certificate.id}>
            {/* Floppy disk */}
            <div className="floppy-disk">
              <div className="floppy-shutter" aria-hidden="true">
                <span className="floppy-shutter-label">3.5"</span>
                <span className="floppy-shutter-slot" />
              </div>

              <div className="floppy-label">
                <div className="floppy-label-top">
                  <span>{t("certificatesPage.issuerLabel")}</span>
                  <span className="floppy-label-mark">G</span>
                </div>

                {certificate.image ? (
                  <img
                    className="floppy-certificate-image"
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                  />
                ) : (
                  <div
                    className="floppy-certificate-preview"
                    role="img"
                    aria-label={`${t(
                      "certificatesPage.professionalCertificate"
                    )}: ${certificate.title}`}
                  >
                    <span className="floppy-preview-eyebrow">
                      {t("certificatesPage.professionalCertificate")}
                    </span>

                    <div className="floppy-preview-title">
                      <span>Google</span>
                      <strong>Data Analytics</strong>
                    </div>

                    <div className="floppy-preview-rule" />

                    <div className="floppy-preview-footer">
                      <span>{t("certificatesPage.previewFooter")}</span>
                      <span className="floppy-preview-seal">DA</span>
                    </div>
                  </div>
                )}

                <div className="floppy-label-bottom">
                  <div className="floppy-earned">
                    <span>{t("certificatesPage.dateEarned")}</span>
                    <strong>{certificate.year}</strong>
                  </div>

                  <div className="floppy-verify-slot">
                    {certificate.credentialUrl ? (
                      <a
                        className="floppy-verify"
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("certificatesPage.validateCredential")} ↗
                      </a>
                    ) : (
                      <span
                        className="floppy-verify-placeholder"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="floppy-bottom-notch" aria-hidden="true">
                <span />
              </div>
            </div>

            {/* Credential details */}
            {certificate.courses.length > 0 && (
              <details className="certification-details">
                <summary>
                  <span className="certification-summary-title">
                    {t("certificatesPage.includedCourses")}
                  </span>

                  <span className="certification-course-count">
                    {certificate.courses.length}{" "}
                    {t("certificatesPage.coursesCount")}
                  </span>

                  <span
                    className="certification-chevron"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <ul className="certification-courses">
                  {certificate.courses.map((course, index) => (
                    <li key={course}>
                      <span className="course-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="course-name">{course}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}


type WorkExperience = {
  id: string;
  company: string;
  role: string;
  period: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: "razi",
    company: "Razi Distribution Company",
    role: "Full-Stack, Desktop & Database Developer",
    period: "2023 – 2026",
    employmentType: "Full-time",
    summary:
      "Developed business-critical web platforms, desktop applications, and database solutions, covering the full development lifecycle from system architecture and database design to implementation and performance optimization.",
    responsibilities: [
      "Built the My.Razico.ir sales portal using C#, ASP.NET Core, Razor Pages, Entity Framework, and SQL Server, and developed the supplier portal using Dapper and Clean Architecture.",
      "Designed relational database schemas, table structures, data models, and complex T-SQL stored procedures.",
      "Improved database performance through stored procedure and query optimization, along with targeted indexing.",
      "Developed and maintained Windows Forms and WPF applications for sales, accounting, and warehouse operations, including complex database-driven business logic.",
      "Created professional reports, analytics, and business documents using DevExpress, ActiveReports, and Stimulsoft.",
      "Managed the development lifecycle from technical design and database implementation to ongoing maintenance and optimization.",
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "Razor Pages",
      "Entity Framework",
      "Dapper",
      "Clean Architecture",
      "SQL Server",
      "T-SQL",
      "Windows Forms",
      "WPF",
      "DevExpress",
      "ActiveReports",
      "Stimulsoft",
    ],
  },
  {
    id: "ariyana",
    company: "Ariyana Pars Razhman",
    role: "Software Developer – Web & Database",
    period: "2022 – 2023",
    employmentType: "Full-time",
    summary:
      "Worked on the continuous improvement of existing web applications and database-driven software, with an emphasis on performance, maintainability, and functional enhancements.",
    responsibilities: [
      "Maintained and enhanced existing web applications.",
      "Analyzed and optimized database structures and data processing workflows.",
      "Developed new features and refactored existing software components.",
      "Improved the performance and functionality of database-driven applications.",
    ],
    technologies: [
      "Web Development",
      "SQL",
      "Database Design",
      "Query Optimization",
      "Software Maintenance",
    ],
  },
  {
    id: "freelance",
    company: "Freelance / Independent Software Developer",
    role: "Full-Stack Software Developer",
    period: "2019 – 2026",
    employmentType: "Freelance",
    summary:
      "Delivered custom software and web applications for local and international clients, independently managing projects from requirements analysis and architecture through development and deployment.",
    responsibilities: [
      "Developed custom web and software solutions tailored to client requirements.",
      "Built full-stack applications using C#, ASP.NET Core, Razor Pages, JavaScript, and SQL Server.",
      "Managed end-to-end project delivery, including requirements analysis, system architecture, backend and frontend development, database implementation, and deployment.",
      "Created database-driven solutions focused on automation and efficient data processing.",
      "Collaborated on international projects in English-speaking environments.",
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "Razor Pages",
      "JavaScript",
      "SQL Server",
      "REST APIs",
      "Database Design",
      "Deployment",
    ],
  },
];

function WorkExperience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-heading">
        <span className="section-eyebrow">
          CAREER JOURNEY
        </span>

        <h2>
          Work <span>Experience</span>
        </h2>

        <p>
          My professional journey in software engineering,
          from database architecture to full-stack and
          desktop application development.
        </p>
      </div>

      <div className="experience-list">
        {workExperiences.map((job, index) => (
          <article
            className="experience-card"
            key={job.id}
          >
            <div className="experience-timeline">
              <div className="experience-marker">
                {String(index + 1).padStart(2, "0")}
              </div>
              {index !== workExperiences.length - 1 && (
                <div className="experience-line" />
              )}
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div className="experience-company">
                  <h3>{job.company}</h3>
                  <span className="experience-type">
                    {job.employmentType}
                  </span>
                </div>

                <span className="experience-period">
                  {job.period}
                </span>
              </div>

              <h4 className="experience-role">
                {job.role}
              </h4>

              <p className="experience-summary">
                {job.summary}
              </p>

              <ul className="experience-responsibilities">
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="experience-technologies">
                {job.technologies.map((technology) => (
                  <span
                    className="experience-tech"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


function App() {
  const { t } = useTranslation();

  const codeLines = [
    { number: "01", text: "const developer = {", tone: "purple" },
    {
      number: "02",
      text: '  name: "Pooriya Poorooshasb",',
      tone: "green",
    },
    {
      number: "03",
      text: `  role: "${t("hero.role")}",`,
      tone: "green",
    },
    {
      number: "04",
      text: `  experience: "${t("hero.codeExperience")}",`,
      tone: "blue",
    },
    {
      number: "05",
      text: '  backend: ["C#", "ASP.NET Core"],',
      tone: "blue",
    },
    {
      number: "06",
      text: '  frontend: ["React", "TypeScript"],',
      tone: "blue",
    },
    {
      number: "07",
      text: `  database: ["SQL Server", "${t("hero.codeOptimization")}"],`,
      tone: "blue",
    },
    {
      number: "08",
      text: `  mindset: "${t("hero.codeMindset")}",`,
      tone: "green",
    },
    { number: "09", text: "};", tone: "purple" },
  ];

  const [activeSkill, setActiveSkill] = useState<string | null>(null);
const [displayedSkill, setDisplayedSkill] = useState<string | null>(null);

const closeExplorerTimer = useRef<number | null>(null);

const cancelExplorerClose = () => {
  if (closeExplorerTimer.current !== null) {
    window.clearTimeout(closeExplorerTimer.current);
    closeExplorerTimer.current = null;
  }
};

const openSkillExplorer = (skillName: string) => {
  cancelExplorerClose();
  setDisplayedSkill(skillName);
  setActiveSkill(skillName);
};

const scheduleExplorerClose = () => {
  cancelExplorerClose();

  closeExplorerTimer.current = window.setTimeout(() => {
    setActiveSkill(null);
    closeExplorerTimer.current = null;
  }, 220);
};
const profileLinks = [
  {
    id: "github-main",
    name: "GitHub",
    handle: "@kpoorooshasb",
    icon: "GH",
    url: "https://github.com/kpoorooshasb",
  },
  {
    id: "github-secondary",
    name: "GitHub",
    handle: "@PersianNull",
    icon: "GH",
    url: "https://github.com/PersianNull/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "pooriya-poorooshasb",
    icon: "in",
    url: "https://www.linkedin.com/in/pooriya-poorooshasb/",
  },
  {
    id: "telegram",
    name: "Telegram",
    handle: "@p_shsb",
    icon: "TG",
    url: "https://t.me/p_shsb",
  },
];
useEffect(() => {
  return () => {
    if (closeExplorerTimer.current !== null) {
      window.clearTimeout(closeExplorerTimer.current);
    }
  };
}, []);

const activeProjects = displayedSkill
  ? (skillProjectMap[displayedSkill] ?? [])
      .map((projectId) =>
        publicProjects.find((project) => project.id === projectId)
      )
      .filter(
        (project): project is PublicProject => project !== undefined
      )
  : [];
  return (
    <div className="site-shell" id="top">
      <CodeCursor />

      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pooriya home">
          <span className="brand-symbol">&lt;/&gt;</span>
          <span>
            pooriya<span className="brand-muted">.dev</span>
          </span>
        </a>

        

<nav className="navigation" aria-label="Main navigation">
  <a href="#about">{t("nav.about")}</a>
  <a href="#stack">{t("nav.skills")}</a>
  <a href="#projects">{t("nav.projects")}</a>

  <a className="nav-contact" href="#contact">
    {t("nav.contact")} <span aria-hidden="true">↗</span>
  </a>

  <LanguageSwitcher />
</nav>


      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-content">
  <div className="profile-card">
    {/* Portrait overlaps the PowerShell window */}
    <div className="profile-avatar-stage">
      <div className="avatar-orbit" aria-hidden="true" />

      <div className="avatar-frame">
        <span className="profile-initials" aria-hidden="true">
          PP
        </span>

        <img
          className="profile-avatar-image"
          src="/images/pooriya.jpg"
          alt="Portrait of Pooriya Poorooshasb"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <span
        className="avatar-status"
        title={t("hero.avatarStatus")}
aria-label={t("hero.avatarStatus")}
      />
    </div>

    {/* PowerShell-style profile card */}
    <div className="profile-terminal">
      <div className="profile-terminal-header">
        <div className="window-controls" aria-hidden="true">
          <span className="window-dot dot-red" />
          <span className="window-dot dot-yellow" />
          <span className="window-dot dot-green" />
        </div>

        <span className="profile-terminal-title">
          Windows PowerShell
        </span>

        <span className="powershell-mark">PS</span>
      </div>

      <div className="profile-terminal-body">
        <p className="powershell-command">
          <span className="ps-prefix">PS</span>{" "}
          C:\Users\Pooriya&gt;{" "}
          <span className="command-highlight">Get-Profile</span>
        </p>

        <p className="profile-output-label">
  {t("hero.status")}
</p>

        <h1 className="profile-name">
          Pooriya Poorooshasb
        </h1>

<p className="profile-role">
  {t("hero.role")}
  <span className="profile-role-caret" aria-hidden="true" />
</p>

<p className="profile-description">
  {t("hero.description")}
</p>

        <div className="profile-experience">
          <span className="experience-icon" aria-hidden="true">
            {"</>"}
          </span>

          <span className="experience-copy">
            <strong>{t("hero.experienceYears")}</strong>
<small>{t("hero.experienceCaption")}</small>
          </span>
        </div>

        
<div className="profile-stack-mini" aria-label="Main technologies">
  <span>C#</span>
  <span>ASP.NET Core</span>
  <span>SQL Server</span>
  <span>WPF</span>
  <span>Windows Form</span>
  <span>TypeScript</span>
  <span>Python</span>
  <span>Blazor</span>
</div>
<div className="profile-contact">
  <p className="profile-contact-command">
    <span className="ps-prefix">PS</span>{" "}
    {"C:\\Users\\Pooriya>"}{" "}
    <span className="command-highlight">
      Get-ContactLinks
    </span>
  </p>

  <div className="profile-contact-heading">
<span>{t("hero.contactChannels")}</span>
<span className="profile-contact-count">
  {t("hero.contactCount")}
</span>
  </div>

  <nav
    className="profile-social-links"
    aria-label={t("hero.profileLinksAria")}
  >
    {profileLinks.map((link) => (
      <a
        key={link.id}
        className="profile-social-link"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("hero.profileLinkAria", {
  name: link.name,
  handle: link.handle,
})}
      >
        <span
          className={`profile-social-icon profile-social-icon--${link.id}`}
          aria-hidden="true"
        >
          {link.icon}
        </span>

        <span className="profile-social-copy">
          <strong>{link.name}</strong>
          <small>{link.handle}</small>
        </span>

        <span className="profile-social-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    ))}
  </nav>
</div>

      </div>

      <div className="profile-terminal-footer">
        <span>
         <span className="status-dot" />
{t("hero.profileFooter")}
        </span>
        <span>UTF-8</span>
      </div>
    </div>
  </div>

  <div className="hero-actions">
    <a className="button button-primary" href="#projects">
      {t("hero.exploreButton")} <span aria-hidden="true">↗</span>
    </a>

    <a className="button button-secondary" href="#contact">
      {t("hero.getInTouchButton")}
    </a>
  </div>
</div>

          <div className="hero-visual">
            <div className="terminal-glow" />

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="window-controls" aria-hidden="true">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-yellow" />
                  <span className="window-dot dot-green" />
                </div>

                <span className="terminal-filename">developer.ts</span>
                <span className="terminal-language">TS</span>
              </div>

              <div className="terminal-body">
                <div className="terminal-path">
                  <span className="path-symbol">~/</span> portfolio
                  <span className="path-separator">/</span> src
                </div>

                <div className="code-block">
                  {codeLines.map((line) => (
                    <div className="code-line" key={line.number}>
                      <span className="line-number">{line.number}</span>
                      <code className={`code-${line.tone}`}>
                        {line.text}
                      </code>
                    </div>
                  ))}
                </div>

                <div className="terminal-footer">
                  <span className="terminal-status">
                    <span className="status-dot" />
                    {t("hero.terminalReady")}
                  </span>
                  <span className="terminal-encoding">UTF-8</span>
                </div>
              </div>
            </div>

            <div className="floating-label label-top">
              <span className="label-icon">{`{ }`}</span>
              <span>
                <strong>{t("hero.cleanCode")}</strong>
                <small>{t("hero.builtWithPurpose")}</small>
              </span>
            </div>

            <div className="floating-label label-bottom">
              <span className="label-icon label-icon-alt">↗</span>
              <span>
                <strong>{t("hero.alwaysLearning")}</strong>
<small>{t("hero.improvingEveryDay")}</small>
              </span>
            </div>
          </div>
        </section>

<section className="skills-section" id="stack">
  <div className="skills-heading">
    <div>
      <p className="eyebrow">
  <span className="status-dot" />
  {t("skillsPage.eyebrow")}
</p>

      <h2>
  {t("skillsPage.title")}{" "}
  <span className="accent-text">
    {t("skillsPage.titleAccent")}
  </span>
</h2>
    </div>

    <p className="skills-intro">
  {t("skillsPage.intro")}
</p>
  </div>

  <div className="skills-workspace">
    {/* Windows-style Project Explorer */}
    <aside
      className="skills-explorer"
      onMouseEnter={cancelExplorerClose}
      onMouseLeave={scheduleExplorerClose}
      onFocusCapture={cancelExplorerClose}
      onBlurCapture={scheduleExplorerClose}
    >
      <div
        className={`explorer-minimized ${
          activeSkill ? "is-hidden" : ""
        }`}
        aria-hidden={Boolean(activeSkill)}
      >
        <div className="computer-desktop-icon">
          <span className="computer-glyph" aria-hidden="true">
            ▣
          </span>

          <span>{t("skillsPage.computer")}</span>
        </div>

        <p className="explorer-minimized-title">
  {t("skillsPage.explorerTitle")}
</p>

        <p className="explorer-hint">
  {t("skillsPage.explorerHint")}
</p>
      </div>

      <div
        className={`explorer-window ${
          activeSkill ? "is-open" : ""
        }`}
        aria-hidden={!activeSkill}
        onTransitionEnd={(event) => {
          if (
  event.target === event.currentTarget &&
  event.propertyName === "transform" &&
  activeSkill === null
) {
  setDisplayedSkill(null);
}
        }}
      >
        <div className="explorer-titlebar">
          <span className="explorer-app-icon" aria-hidden="true">
            ▰
          </span>

          <span className="explorer-window-title">
  {t("skillsPage.fileExplorer")}
</span>

          <div className="explorer-window-controls" aria-hidden="true">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="explorer-toolbar">
          <span>←</span>
          <span>→</span>
          <span>↑</span>

          <div className="explorer-address">
            <span>Computer</span>
            <span>›</span>
            <span>Projects</span>
            <span>›</span>
            <strong>
  {displayedSkill ?? t("skillsPage.selectSkill")}
</strong>
          </div>
        </div>

        <div className="explorer-content">
          <div className="explorer-sidebar">
            <p>{t("skillsPage.quickAccess")}</p>
<span>⌂ {t("skillsPage.home")}</span>
<span>▤ {t("skillsPage.desktop")}</span>
<span>▧ {t("skillsPage.documents")}</span>
<span>▣ {t("skillsPage.downloads")}</span>

<div className="explorer-sidebar-divider" />

<span className="explorer-sidebar-selected">
  ▣ {t("skillsPage.thisPc")}
</span>

<span>▰ {t("skillsPage.projects")}</span>
          </div>

          <div className="explorer-files">
            <div className="explorer-files-heading">
  <span>{t("skillsPage.nameColumn")}</span>
  <span>{t("skillsPage.typeColumn")}</span>
</div>

            {activeProjects.length > 0 ? (
              activeProjects.map((project) => (
                <a
                  className="project-folder"
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  title={t("skillsPage.openProjectTitle", {
  name: project.name,
})}
                  tabIndex={activeSkill ? 0 : -1}
                >
                  <span className="project-folder-icon" aria-hidden="true">
                    📁
                  </span>

                  <span className="project-folder-name">
                    {project.name}
                  </span>

                  <span className="project-folder-type">
  {t("skillsPage.linkType")}
</span>
                </a>
              ))
            ) : (
              <div className="explorer-empty">
                <span className="empty-folder-icon" aria-hidden="true">
                  📂
                </span>

                <strong>{t("skillsPage.noLinkedProject")}</strong>

                <p>{t("skillsPage.noPublicProject")}</p>
              </div>
            )}
          </div>
        </div>

        <div className="explorer-statusbar">
          <span>
  {activeProjects.length}{" "}
  {activeProjects.length === 1
    ? t("skillsPage.item")
    : t("skillsPage.items")}
</span>

          <span>
  <span className="status-dot" />
  {t("skillsPage.ready")}
</span>
        </div>
      </div>
    </aside>

    {/* Skill cards */}
    <div className="skills-grid">
      {skills.map((skill) => (
        <div
          className={`skill-card ${
            activeSkill === skill.name ? "is-active" : ""
          }`}
          key={skill.name}
          tabIndex={0}
          aria-label={t("skillsPage.skillAriaLabel", {
  name: skill.name,
  level: skill.level,
})}
          aria-expanded={activeSkill === skill.name}
          style={
            {
              "--skill-level": `${skill.level}%`,
            } as CSSProperties & { "--skill-level": string }
          }
          onMouseEnter={() => openSkillExplorer(skill.name)}
          onMouseLeave={scheduleExplorerClose}
          onFocus={() => openSkillExplorer(skill.name)}
          onBlur={scheduleExplorerClose}
          onTouchStart={() => openSkillExplorer(skill.name)}
        >
          <div className="skill-fill" aria-hidden="true" />

          <div className="skill-content">
            <span className="skill-name">{skill.name}</span>

            <span className="skill-percent">
              {skill.level}
              <span>%</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

<p className="skills-footnote">
  {t("skillsPage.proficiencyFootnote")}
</p>
</section>
<section className="experience-section" id="experience">
  <div className="experience-heading">
    <div>
      <p className="eyebrow">
  <span className="status-dot" />
  {t("workExperience.eyebrow")}
</p>

      <h2>
  {t("workExperience.title")}
  <span className="accent-text">
    {t("workExperience.titleAccent")}
  </span>
</h2>
    </div>

    <p className="experience-intro">
  {t("workExperience.intro")}
</p>
  </div>

  <div className="experience-list">
    {workExperiences.map((experience, index) => (
      <article
        className="experience-card"
        key={experience.id}
      >
        <div className="experience-card-top">
          <div className="experience-company-mark">
            <span aria-hidden="true">
              {"</>"}
            </span>
          </div>

          <div className="experience-company-info">
            <span className="experience-period">
              {experience.period}
            </span>

            <h3>
  {t(`workExperience.jobs.${experience.id}.role`)}
</h3>

            <p className="experience-company">
              {experience.company}
            </p>
          </div>

          <span className="experience-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="experience-card-body">
          <div className="experience-meta">
            <span className="experience-employment">
              <span className="status-dot" />
              {t(`workExperience.jobs.${experience.id}.employmentType`)}
            </span>

            <span className="experience-focus">
              Software Development
            </span>
          </div>

          <p className="experience-summary">
  {t(`workExperience.jobs.${experience.id}.summary`)}
</p>

          <ul className="experience-responsibilities">
  {(
    t(`workExperience.jobs.${experience.id}.responsibilities`, {
      returnObjects: true,
    }) as string[]
  ).map((item) => (
    <li key={item}>
      <span className="responsibility-marker" aria-hidden="true">
        →
      </span>
      <span>{item}</span>
    </li>
  ))}
</ul>

          <div className="experience-tech-area">
            <p className="experience-tech-label">
  {t("workExperience.technologyLabel")}
</p>

            <div className="experience-tech-list">
  {(
    t(`workExperience.jobs.${experience.id}.technologies`, {
      returnObjects: true,
    }) as string[]
  ).map((technology) => (
    <span key={technology}>{technology}</span>
  ))}
</div>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

<Certifications />
<Education />
<section className="projects-section" id="projects">
  <div className="projects-heading">
    <div>
      <p className="eyebrow">
  <span className="status-dot" />
  {t("projects.publicSection.eyebrow")}
</p>

      <h2>
  {t("projects.publicSection.title")}{" "}
  <span className="accent-text">
    {t("projects.publicSection.titleAccent")}
  </span>
</h2>

    </div>

    <p className="projects-intro">
  {t("projects.publicSection.intro")}
</p>
  </div>

  <div className="projects-grid">
    {publicProjects.map((project, index) => (
      <article className="public-project-card" key={project.id}>
        <div className="project-card-top">
          <span className="project-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="project-category">
            {t(`projects.public.${project.id}.category`)}
          </span>
        </div>

        <div className="project-card-icon" aria-hidden="true">
          {project.id === "notesara" && "♫"}
          {project.id === "haminhomes" && "⌂"}
          {project.id === "expertcommunicationlab" && "</>"}
          {project.id === "visual-annotation-tool" && "⌖"}
        </div>

        <h3>{project.name}</h3>

        <p className="project-description">
          {t(`projects.public.${project.id}.description`)}
        </p>

        <div className="project-tags">
  {(
    t(`projects.public.${project.id}.tags`, {
      returnObjects: true,
    }) as string[]
  ).map((tag) => (
    <span key={tag}>{tag}</span>
  ))}
</div>

        <a
          className="project-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          {t(`projects.public.${project.id}.linkLabel`)}
          <span aria-hidden="true">↗</span>
        </a>
      </article>
    ))}
  </div>
  <section
  className="private-projects-section"
  aria-labelledby="private-projects-title"
>
  <div className="private-projects-heading">
    <span className="private-projects-eyebrow">
    {t("projects.professionalSection.eyebrow")}
  </span>

    <h2 id="private-projects-title">
    {t("projects.professionalSection.title")}{" "}
    <span>{t("projects.professionalSection.titleAccent")}</span>
  </h2>

    <p>{t("projects.professionalSection.intro")}</p>
  </div>

  <div className="projects-grid">
    {professionalCaseStudies.map((project, index) => (
      <article
        className="public-project-card private-project-card"
        key={project.id}
      >
        <div className="project-card-top">
          <span className="project-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="project-category">
  {t(`projects.professional.${project.id}.category`)}
</span>
        </div>

        <div className="project-card-icon" aria-hidden="true">
          {project.id === "anahid" && "▶"}
          {project.id === "razi-supplier-portal" && "⇄"}
          {project.id === "razi-sales-portal" && "▤"}
          {project.id === "razi-desktop-apps" && "▣"}
        </div>

        <h3>{project.name}</h3>

        <p className="project-description">
  {t(`projects.professional.${project.id}.description`)}
</p>

       <div className="case-study-role">
  <span>{t("projects.professional.roleLabel")}</span>
  <p>{t(`projects.professional.${project.id}.role`)}</p>
</div>

        <ul className="case-study-highlights">
  {(
    t(`projects.professional.${project.id}.highlights`, {
      returnObjects: true,
    }) as string[]
  ).map((highlight) => (
    <li key={highlight}>{highlight}</li>
  ))}
</ul>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-access">
          <span className="project-access-label">
  {t(`projects.professional.${project.id}.accessLabel`)}
</span>

          {project.url && (
  <a
    className="project-link"
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {t(`projects.professional.${project.id}.linkLabel`, {
      defaultValue: project.linkLabel ?? "View project",
    })}
    <span aria-hidden="true">↗</span>
  </a>
)}
        </div>
      </article>
    ))}
  </div>

</section>
<Contact />
</section>

        <footer className="site-footer" id="contact">
          <a className="brand" href="#top">
            <span className="brand-symbol">&lt;/&gt;</span>
           
          </a>

          <span>POORIYA RESUME</span>

          <a className="back-to-top" href="#top">
            Back to top ↑
          </a>
        </footer>
      </main>
    </div>
  );
}

export default App;