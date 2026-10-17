import { profile } from '../data/profile.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {profile.projects.map((project) => (
            <article className="card project" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="chip-list">
                {project.tech.map((t) => (
                  <li className="chip" key={t}>{t}</li>
                ))}
              </ul>
              <div className="links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live</a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">Code</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
