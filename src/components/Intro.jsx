import { useEffect, useState } from 'react';
import { profile } from '../data/profile.js';
import useActiveSection from '../hooks/useActiveSection.js';
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './Icons.jsx';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Module-level so the scroll-spy effect subscribes once.
const navIds = navItems.map((item) => item.id);

// The inline script in index.html sets data-theme before paint, so we read it
// here to avoid a flash of the wrong theme on first render.
function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function Intro() {
  const [theme, setTheme] = useState(getInitialTheme);
  const active = useActiveSection(navIds);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors (e.g. private mode); theme still applies for the session.
    }
  }, [theme]);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const themeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  const { contact } = profile;
  const socials = [
    contact.github && { label: 'GitHub', href: contact.github, Icon: GitHubIcon },
    contact.linkedin && { label: 'LinkedIn', href: contact.linkedin, Icon: LinkedInIcon },
    contact.twitter && { label: 'Twitter', href: contact.twitter, Icon: TwitterIcon },
    contact.email && { label: 'Email', href: `mailto:${contact.email}`, Icon: MailIcon },
  ].filter(Boolean);

  return (
    <header className="intro">
      <div className="intro-top">
        <h1>
          <a href="#top">{profile.name}</a>
        </h1>
        <h2 className="intro-role">{profile.title}</h2>
        <p className="intro-tagline">{profile.tagline}</p>

        <nav className="section-nav" aria-label="In-page jump links">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'active' : undefined}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  <span className="nav-indicator" aria-hidden="true" />
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="intro-bottom">
        <ul className="social-list">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={themeLabel}
          aria-pressed={isDark}
          title={themeLabel}
        >
          <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </header>
  );
}
