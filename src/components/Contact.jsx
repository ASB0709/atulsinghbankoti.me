import { profile } from '../data/profile.js';

export default function Contact() {
  const { email } = profile.contact;

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="muted">
        I&rsquo;m open to conversations about software engineering, collaboration, and new
        projects. My inbox is always open &mdash; I&rsquo;ll do my best to get back to you.
      </p>
      {email && (
        <a className="button" href={`mailto:${email}`}>Say Hello</a>
      )}
    </section>
  );
}
