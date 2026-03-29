"use client";

import Image from "next/image";
import { useState } from "react";
import {
  aboutSummary,
  education,
  experience,
  projects,
  services,
  siteConfig,
  skills
} from "@/lib/siteConfig";
import { FaGithub, FaLinkedin, FaDatabase, FaCogs, FaReact } from "react-icons/fa";
import { TbMessageChatbot, TbSparkles, TbApi, TbBrain, TbCpu } from "react-icons/tb";

export function AboutSection() {
  return (
    <section id="about" className="section reveal-on-scroll">
      <div className="container about-layout">
        <div className="about-visual card">
          <div className="about-photo-wrap">
            <Image
              src={siteConfig.profileImageUrl}
              alt={siteConfig.name}
              width={280}
              height={280}
              className="about-photo"
              sizes="(max-width: 860px) 100vw, 280px"
              unoptimized
            />
          </div>
          <p className="section-label">CV</p>
          <p className="section-copy section-copy--compact">
            View or download the full CV on Google Drive.
          </p>
          <a
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary about-cv-btn"
          >
            Open CV on Drive
          </a>
        </div>

        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">Data Scientist & Software Engineer</h2>
          <p className="section-copy">{aboutSummary}</p>
          <div className="education-block">
            <p className="education-block__label">Education</p>
            <p className="education-block__main">{education.degree}</p>
            <p className="education-block__sub">
              {education.school} · {education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const skillsList = [skills.backend, skills.mern, skills.ai, skills.data, skills.tools];
  return (
    <section id="skills" className="section section--alt reveal-on-scroll">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">Skills</p>
            <h2 className="section-title">What I bring to a team</h2>
          </div>
          <p className="section-copy section-copy--compact">
            A practical mix of data science, full stack development, and AI integration. No fluff, just tools and approaches I've used on real projects and in teaching.
          </p>
        </div>

        <div className="skills-grid">
          {skillsList.map((group) => (
            <div key={group.title} className="card card--hover">
              <h3 className="card-title">{group.title}</h3>
              <ul className="list-plain">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="list-marker" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">Projects</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <p className="section-copy section-copy--compact">
            Code links go to GitHub. For more repos, use Visit GitHub in the hero or footer.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="card card--hover">
              <div className="project-header">
                <div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="project-highlight">{project.highlight}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--small button--ghost"
                >
                  <FaGithub />
                  Code
                </a>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="list-points list-points--compact">
                {project.bullets.map((line) => (
                  <li key={line}>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const iconMap: Record<string, JSX.Element> = {
  chat: <TbMessageChatbot />,
  sparkles: <TbSparkles />,
  database: <FaDatabase />,
  api: <TbApi />,
  ml: <TbBrain />,
  automation: <TbCpu />,
  mern: <FaReact />,
  default: <FaCogs />
};

export function ServicesSection() {
  return (
    <section id="services" className="section section--alt reveal-on-scroll">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">Services</p>
            <h2 className="section-title">How I can help</h2>
          </div>
          <p className="section-copy section-copy--compact">
            Data science consulting, full stack development, and AI systems. Tell me your data challenges and project goals up front.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="card card--hover">
              <div className="service-header">
                <div className="service-icon">{iconMap[service.icon] ?? iconMap.default}</div>
                <span className="service-note">Remote friendly</span>
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="section-copy section-copy--compact">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section reveal-on-scroll">
      <div className="container">
        <div>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}-${item.period}`} className="timeline__item">
              <div className="card">
                <div className="timeline__head">
                  <h3 className="card-title">{item.role}</h3>
                  <span className="chip">{item.period}</span>
                </div>
                <p className="timeline__meta">
                  {item.company}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="section-copy section-copy--compact">{item.focus}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(typeof payload.error === "string" ? payload.error : "Something went wrong.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Try again in a moment.");
    }
  }

  return (
    <section id="contact" className="section section--alt reveal-on-scroll">
      <div className="container section-grid">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let us talk</h2>
          <p className="section-copy">
            Send a short note about what you need. I read every message. You will get a confirmation email when it sends
            successfully.
          </p>
          <div className="contact-list">
            <p>
              <span>Email:</span>{" "}
              <a href={`mailto:${siteConfig.email}`} className="inline-link">
                {siteConfig.email}
              </a>
            </p>
            <div className="contact-links">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button button--ghost button--small"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href={siteConfig.githubReposUrl}
                target="_blank"
                rel="noreferrer"
                className="button button--ghost button--small"
              >
                <FaGithub />
                Visit GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you building, timeline, and budget range if any?"
                required
              />
            </div>
            <button type="submit" className="button button--primary contact-form__submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="form-success" role="status">
                Message delivered. Check your inbox for a confirmation. I will reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-error" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {year} {siteConfig.name} · {siteConfig.role}
        </p>
        <div className="site-footer__links">
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="inline-link">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href={siteConfig.githubReposUrl} target="_blank" rel="noreferrer" className="inline-link">
            <FaGithub />
            Visit GitHub
          </a>
          <a href={siteConfig.cvUrl} target="_blank" rel="noreferrer" className="inline-link">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
