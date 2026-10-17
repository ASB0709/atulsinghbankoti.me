import { profile } from '../data/profile.js';
import { ExternalLinkIcon } from './Icons.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <ul className="list">
        {profile.projects.map((project) => {
          const href = project.link || project.repo;
          return (
            <li className="item" key={project.name}>
              <h3>
                {href ? (
                  <a className="project-title" href={href} target="_blank" rel="noopener noreferrer">
                    {project.name}
                    <ExternalLinkIcon width={14} height={14} />
                  </a>
                ) : (
                  <span className="project-title">{project.name}</span>
                )}
              </h3>
              <p className="project-desc">{project.description}</p>
              <ul className="chip-list">
                {project.tech.map((t) => (
                  <li className="chip" key={t}>{t}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
