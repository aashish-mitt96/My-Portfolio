import "../styles/Projects.css";


interface Project {
  id:          string;
  title:       string;
  description: string;
  tech:        string[];
  link:        string;
  icon:        string;
}


const projects: Project[] = [
  {
    id:    "livebus-tracker",
    title: "LiveBus Tracker",
    description:
      "Real-time GPS tracking platform streaming locations every 10s via Socket.IO & Redis Pub/Sub, with a FastAPI microservice using Gradient Boosting & Kalman Filter for 20s GPS outage recovery.",
    tech: [
      "Node.js",
      "Socket.IO",
      "Redis",
      "FastAPI",
      "Scikit-learn",
      "PostgreSQL",
    ],
    link: "https://github.com/aashish-mitt96/LiveBus-Tracker",
    icon: "location-outline",
  },
  {
    id:    "fraud-intelligence",
    title: "Fraud Intelligence",
    description:
      "Fraud detection system with a PyTorch Autoencoder achieving 99.2% AUC-ROC, plus a LangChain agent using ChromaDB, PostgreSQL, and reputation checks for automated investigations.",
    tech: [
      "PyTorch",
      "LangChain",
      "FastAPI",
      "NumPy",
      "Pandas",
    ],
    link: "https://github.com/aashish-mitt96/Fraud-Intelligence",
    icon: "search-outline",
  },
  {
    id:    "hireone-ats",
    title: "HireOne ATS",
    description:
      "AI-powered Applicant Tracking System that streamlines recruitment with job postings, candidate pipelines, resume parsing, NLP-based skill extraction, and TF-IDF matching to evaluate resume relevance against job descriptions.",
    tech: [
      "Node.js",
      "PostgreSQL",
      "Python",
      "NLP",
      "TF-IDF",
      "Gemini API",
    ],
    link: "https://github.com/aashish-mitt96/HireOne-ATS",
    icon: "document-text-outline",
  },
  {
    id:    "strmix-live",
    title: "Strmix Live",
    description:
      "Real-time live streaming platform with interactive viewer experiences, low-latency media delivery, live chat, and scalable communication powered by GetStream.io and Socket.IO.",
    tech: [
      "Node.js",
      "React.js",
      "Socket.IO",
      "GetStream.io",
      "Express.js",
    ],
    link: "https://github.com/aashish-mitt96/Strmix-Live",
    icon: "videocam-outline",
  },
];


const TECH_ICON_SLUGS: Record<string, string> = {
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "React.js": "react",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  Redis: "redis",
  "Socket.IO": "socketdotio",
  PyTorch: "pytorch",
  LangChain: "langchain",
  NumPy: "numpy",
  Pandas: "pandas",
  "Scikit-learn": "scikitlearn",
  Python: "python",
  TypeScript: "typescript",
  JavaScript: "javascript",
  Docker: "docker",
  Git: "git",
  ChromaDB: "chromadb",
};


const getTechIconUrl = (tech: string) => {
  const slug = TECH_ICON_SLUGS[tech];

  return slug
    ? `https://cdn.simpleicons.org/${slug}/e8e8e8`
    : null;
};

interface ProjectsProps {
  isActive: boolean;
}


const Projects = ({ isActive }: ProjectsProps) => {
  return (
    
    <article
      className={`projects${isActive ? " active" : ""}`}
      data-page="projects"
    >
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects-text">
        <p>
A showcase of intelligent systems, scalable applications and full-stack products engineered to solve real-world problems.
        </p>
      </section>

      <ul className="project-list">
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <a
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card-header">
                <span className="project-avatar" aria-hidden="true">
                  <ion-icon name={project.icon}></ion-icon>
                </span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <ul className="project-tech-list">
                {project.tech.map((tech) => {
                  const iconUrl = getTechIconUrl(tech);

                  return (
                    <li
                      className="project-tech-item"
                      key={tech}
                      title={tech}
                    >
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={tech}
                          loading="lazy"
                        />
                      ) : (
                        <ion-icon name="code-slash-outline"></ion-icon>
                      )}

                      <span>{tech}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="project-card-footer">
                <span>View on GitHub</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Projects;