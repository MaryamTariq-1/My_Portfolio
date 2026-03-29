import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="site-nav-wrap">
      <div className="container site-nav">
        <a href="/#top" className="site-nav__brand" aria-label="Go to top">
          <span className="site-nav__mark">MT</span>
          <span>
            {siteConfig.name}
            <span className="site-nav__role"> · {siteConfig.role}</span>
          </span>
        </a>

        <nav className="site-nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="button button--primary site-nav__cta">
          Contact
        </a>

        <details className="site-nav__mobile">
          <summary aria-label="Toggle navigation">Menu</summary>
          <nav className="site-nav__mobile-links" aria-label="Mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

