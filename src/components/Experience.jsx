import { profile } from '../data/profile.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <ol className="timeline">
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="timeline-item">
              <div className="timeline-header">
                <h3>{job.role} <span className="muted">at {job.company}</span></h3>
                <span className="period">{job.period}</span>
              </div>
              <p>{job.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
