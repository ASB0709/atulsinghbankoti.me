import { profile } from '../data/profile.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div className="card" key={group}>
              <h3>{group}</h3>
              <ul className="chip-list">
                {items.map((skill) => (
                  <li className="chip" key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
