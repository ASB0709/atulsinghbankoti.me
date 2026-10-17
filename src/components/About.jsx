import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <div className="hero-content">
          {profile.avatar && (
            <img className="avatar" src={profile.avatar} alt={profile.name} />
          )}
          <div>
            <p className="eyebrow">{profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="title">{profile.title}</p>
            <p className="tagline">{profile.tagline}</p>
            <div className="about">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
