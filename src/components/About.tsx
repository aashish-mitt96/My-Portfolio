import "../styles/About.css";


interface ServiceItem {
  icon:  string; 
  title: string;
  text:  string;
}


const services: ServiceItem[] = [
  {
    icon:  "hardware-chip-outline",
    title: "AI / ML Systems",
    text:  "ML models and LLM agents with PyTorch, LangChain, and vector databases.",
  },
  {
    icon:  "server-outline",
    title: "Backend Engineering",
    text:  "REST APIs and backend services with Node.js, Express, and FastAPI.",
  },
  {
    icon:  "git-network-outline",
    title: "System Design",
    text:  "Distributed systems, API gateways, and schema design with PostgreSQL & Redis.",
  },
  {
    icon:  "code-slash-outline",
    title: "Full-Stack Development",
    text:  "End-to-end web apps with React.js, Node.js, and Express.",
  },
];


interface TechItem {
  icon:  string; 
  name:  string;
}


const techStack: TechItem[] = [
  { icon: "python",     name: "Python" },
  { icon: "pytorch",    name: "PyTorch" },
  { icon: "langchain",  name: "LangChain" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "react",      name: "React" },
  { icon: "nodedotjs",  name: "Node.js" },
];


const techStack2: TechItem[] = [
  { icon: "express",    name: "Express" },
  { icon: "fastapi",    name: "FastAPI" },
  { icon: "postgresql", name: "PostgreSQL" },
  { icon: "redis",      name: "Redis" },
  { icon: "docker",     name: "Docker" },
  { icon: "git",        name: "Git" },
];


const renderTechRow = (items: TechItem[], keyPrefix: string) =>
  [...items, ...items].map((tech, index) => (
    <div className="tech-pill" key={`${keyPrefix}-${tech.name}-${index}`}>
      <img
        src={`https://cdn.simpleicons.org/${tech.icon}/e8e8e8`}
        alt={tech.name}
        loading="lazy"
        className="tech-icon"
      />
      <span>{tech.name}</span>
    </div>
  ));


interface AboutProps {
  isActive: boolean;
}


const About = ({ isActive }: AboutProps) => {
  return (

    <article className={`about${isActive ? " active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          AI/ML Developer & Backend Engineer focused on building intelligent,
          scalable and production-ready systems. I combine software engineering
          with intelligent technologies to turn complex problems into practical solutions.
        </p>

        <p>
          I'm part of the <strong>Class of 2027 at IIIT Bhubaneswar</strong>,
          exploring AI/ML, backend engineering, system design and scalable web
          applications. I enjoy solving challenging problems and turning ideas
          into impactful products.
        </p>

        <p>
          I build with purpose, solve with curiosity and continuously explore
          what's possible at the intersection of software engineering and AI.
          I strive to write clean, efficient code and build solutions that create real-world impact.
          I'm always driven to learn, experiment and turn challenging ideas into reliable solutions.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {services.map((service) => (
            <li className="service-item" key={service.title}>
              <div className="service-icon-box">
                <ion-icon name={service.icon}></ion-icon>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="tech-stack">
        <h3 className="h3 tech-stack-title">Tech Stack</h3>

        <div className="tech-marquee">
          <div className="tech-track">{renderTechRow(techStack, "row1")}</div>
        </div>

        <div className="tech-marquee">
          <div className="tech-track tech-track-reverse">
            {renderTechRow(techStack2, "row2")}
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;