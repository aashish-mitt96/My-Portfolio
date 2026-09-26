import "../styles/Experience.css";

interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  duration: string;
  current?: boolean;
  points: string[];
}

const experience: ExperienceEntry[] = [
  {
    id: "canopux",
    role: "Backend Engineer",
    org: "Canopux",
    duration: "Jan 2025 – Present",
    current: true,
    points: [
      "Engineered a Social Feed Microservice with 5+ REST endpoints covering feed retrieval, post creation, likes, and user interactions, integrated into a distributed system via an API Gateway.",
      "Designed the feed schema in PostgreSQL, integrating with 2+ existing tables through a modular Node.js backend.",
      "Optimized query performance with targeted indexing and connection pooling, reducing average feed-retrieval latency.",
      "Collaborated with frontend and platform teams to define API contracts, ensuring consistent integration across clients.",
    ],
  },
  {
    id: "dt-digisol",
    role: "Freelance Backend Developer",
    org: "DT Digisol",
    duration: "Jan 2026 – Feb 2026",
    points: [
      "Implemented a Node.js invoicing system with branded templates, auto-generated via Razorpay webhooks.",
      "Delivered invoices instantly to customers via Nodemailer, syncing real-time payment and customer data.",
    ],
  },
  {
    id: "indocrypt",
    role: "Web Development Contributor",
    org: "IndoCrypt 2025",
    duration: "May 2025",
    points: [
      "Shipped responsive React UI components for IndoCrypt 2025's official conference website, driving 1000+ visits.",
      "Collaborated with a distributed team of contributors to translate design mockups into accessible, cross-browser-compatible components.",
    ],
  },
];

interface ExperienceProps {
  isActive: boolean;
}

const Experience = ({ isActive }: ExperienceProps) => {
  return (
    <article className={`experience${isActive ? " active" : ""}`} data-page="experience">
      <header>
        <h2 className="h2 article-title">Experience</h2>
      </header>

      <section className="experience-text">
        <p>
          An overview of my professional experience, technical contributions, and the systems I've helped build.
        </p>
      </section>

      <ul className="timeline-list">
        {experience.map((entry, index) => (
          <li className="timeline-item" key={entry.id}>
            <div className="timeline-icon-box">
              <ion-icon name="briefcase"></ion-icon>
            </div>

            {index !== experience.length - 1 && <div className="timeline-line"></div>}

            <div className="timeline-content">
              <div className="timeline-heading">
                <div className="timeline-heading-text">
                  <h4 className="h4 timeline-title">{entry.role}</h4>
                  <p className="timeline-org">{entry.org}</p>
                </div>

                <time className="timeline-duration">
                  {entry.duration}
                  {entry.current && <span className="timeline-current-dot" aria-hidden="true"></span>}
                </time>
              </div>

              <ul className="timeline-points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Experience;