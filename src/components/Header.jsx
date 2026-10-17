import { useEffect, useState } from 'react';
import { profile } from '../data/profile.js';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

// The inline script in index.html sets data-theme before paint, so we read it
// here to avoid a flash of the wrong theme on first render.
function getInitialTheme() {
  const current = document.documentElement.dataset.theme;
  return current === 'dark' ? 'dark' : 'light';
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme);

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
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header id="top" className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">{profile.name}</a>
        <div className="header-actions">
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={label}
            aria-pressed={isDark}
            title={label}
          >
            <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
