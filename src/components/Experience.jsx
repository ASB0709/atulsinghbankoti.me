import { profile } from '../data/profile.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ol className="list">
        {profile.experience.map((job) => (
          <li className="item" key={`${job.company}-${job.role}`}>
            <div className="job-grid">
              <span className="job-period">{job.period}</span>
              <div className="job-body">
                <h3 className="job-title">
                  {job.role} &middot; {job.company}
                </h3>
                <p className="job-desc">{job.summary}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
