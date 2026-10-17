import { profile } from '../data/profile.js';

export default function Contact() {
  const { email, github, linkedin, twitter } = profile.contact;
  const links = [
    email && { label: 'Email', href: `mailto:${email}` },
    github && { label: 'GitHub', href: github },
    linkedin && { label: 'LinkedIn', href: linkedin },
    twitter && { label: 'X / Twitter', href: twitter },
  ].filter(Boolean);

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="muted">Open to conversations about software engineering, collaboration, and new projects.</p>
        <ul className="contact-list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
