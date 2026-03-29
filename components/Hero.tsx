import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section id="top" className="hero section reveal-on-scroll is-visible">
      <div className="container">
        <div className="hero__photo-row">
          <div className="hero__photo-frame">
            <Image
              src="/images/profile.jfif"
              alt={siteConfig.name}
              width={200}
              height={200}
              className="hero__photo-img"
              priority
              sizes="(max-width: 860px) 160px, 200px"
            />
          </div>
        </div>

        <div className="hero__badge-row">
          <div className="hero__brand">
            <span className="hero__brand-mark">MT</span>
            <span className="hero__brand-text">Portfolio</span>
          </div>
          <span className="hero__status">Open to roles and project work</span>
        </div>

        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__name">{siteConfig.name}</span>
              <span className="hero__headline">{siteConfig.role}</span>
            </h1>

            <p className="hero__description">{siteConfig.tagline}</p>

            <div className="hero__actions">
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                Hire me
              </a>
              <a href="#projects" className="button button--ghost">
                View projects
              </a>
              <a
                href={siteConfig.githubReposUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--ghost"
              >
                Visit GitHub
              </a>
            </div>
          </div>

          <div className="hero__card card">
            <div className="profile-header">
              <div>
                <p className="section-label">Profile</p>
                <p className="profile-name">{siteConfig.name}</p>
                <p className="profile-role">{siteConfig.role}</p>
              </div>
              <div className="profile-avatar" aria-hidden>
                MT
              </div>
            </div>
            <div className="hero__mini-grid">
              <div className="mini-card">
                <p className="mini-card__label">Focus</p>
                <p className="mini-card__title">Data Science & Full Stack</p>
                <p className="mini-card__text">ML consulting, teaching, and building data-driven applications with practical AI integration.</p>
              </div>
              <div className="mini-card">
                <p className="mini-card__label">Current Roles</p>
                <p className="mini-card__title mini-card__title--ok">Consulting & Teaching</p>
                <p className="mini-card__text">Data Scientist in Residence (Paris) and Visiting Lecturer while building production systems.</p>
              </div>
            </div>
            <div className="hero__chips">
              <span className="chip">{siteConfig.location}</span>
              <span className="chip">Email: {siteConfig.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
