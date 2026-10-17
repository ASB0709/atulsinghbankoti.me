import { profile } from '../data/profile.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-groups">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <ul className="chip-list">
              {items.map((skill) => (
                <li className="chip" key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
