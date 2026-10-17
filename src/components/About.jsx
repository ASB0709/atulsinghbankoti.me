import { profile } from '../data/profile.js';

export default function About() {
  const { avatar } = profile;

  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about">
        {avatar && (
          <div className="about-photo">
            <img src={avatar} alt={profile.name} />
          </div>
        )}
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
