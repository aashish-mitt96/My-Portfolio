import "../styles/Achievements.css";


interface AchievementEntry {
  id:          string;
  title:       string;
  issuer:      string;
  date:        string;
  description: string;
  icon:        string;
}


const achievements: AchievementEntry[] = [
  {
    id:     "flipkart-grid",
    title:  "Flipkart GRiD 8.0",
    issuer: "Flipkart",
    date:   "Jul 2026",
    description:
      "Advanced to Round 3 of Flipkart's Software Engineering Challenge, competing among a nationwide pool of engineering candidates.",
    icon: "trophy",
  },
  {
    id:     "nirman",
    title:  "Nirman 4.0 Finalist",
    issuer: "Silicon University",
    date:   "Feb 2025",
    description:
      "Named a finalist for ArogSphere, a healthcare solution, at Silicon University's innovation and coding challenge.",
    icon: "ribbon",
  },
  {
    id:     "leetcode",
    title:  "600+ DSA Problems Solved",
    issuer: "LeetCode",
    date:   "Ongoing",
    description:
      "Solved 600+ data structures and algorithms problems on LeetCode, sharpening algorithmic thinking and optimization skills.",
    icon: "code-slash",
  },
  {
    id:     "cbse-aryabhata",
    title:  "CBSE Aryabhata Ganit Challenge 2019",
    issuer: "Central Board of Secondary Education (CBSE)",
    date:   "Nov 2019",
    description:
      "Secured a position among the top 100 participants in the Allahabad region in the CBSE Aryabhata Ganit Challenge 2019.",
    icon: "school",
  },
];


interface CertificateEntry {
  id:             string;
  title:          string;
  issuer:         string;
  date:           string;
  expiry?:        string;
  credentialId?:  string;
  credentialUrl?: string;
  skills?:        string[];
  icon:           string;
}


const certificates: CertificateEntry[] = [
  {
    id:     "oracle-agentic-ai",
    title:  "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date:   "Aug 2026",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5747E2F8A463F91B5A46DE7F5D71C540B7E9B5C35F6729A64625E56CBCA4E2EC",
    icon: "ribbon-outline",
  },

  {
    id:     "tcs-ion-ai",
    title:  "TCS iON Career Edge - AI Foundation",
    issuer: "TCS iON",
    date:   "Jul 2026",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5747E2F8A463F91B5A46DE7F5D71C540B7E9B5C35F6729A64625E56CBCA4E2EC",
    icon: "ribbon-outline",
  },
  {
    id:     "accenture-swe",
    title:  "Accenture Software Engineering Job Simulation",
    issuer: "Accenture",
    date:   "Jul 2025",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_mSaGbzNwgPvN7HNhj_1751537883747_completion_certificate.pdf",
    icon: "ribbon-outline",
  },
  {
    id:     "hackerrank-react",
    title:  "React Frontend Developer Certification",
    issuer: "HackerRank",
    date:   "Jul 2025",
    credentialUrl:
      "https://www.hackerrank.com/certificates/iframe/b25198f30b84",
    icon: "ribbon-outline",
  },
  {
    id:     "deloitte-data-analytics",
    title:  "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    date:   "Jun 2025",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_mSaGbzNwgPvN7HNhj_1750841356958_completion_certificate.pdf",
    icon: "ribbon-outline",
  },
];


interface AchievementsProps {
  isActive: boolean;
}


const Achievements = ({ isActive }: AchievementsProps) => {
  return (
    
    <article
      className={`achievements${isActive ? " active" : ""}`}
      data-page="achievements"
    >
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <section className="achievements-text">
        <p>
          A selection of competitions, challenges and milestones that reflect
          how I approach problem-solving under pressure.
        </p>
      </section>

      <ul className="achievements-grid">
        {achievements.map((entry) => (
          <li className="achievement-card" key={entry.id}>
            <div className="achievement-icon-box">
              <ion-icon name={entry.icon}></ion-icon>
            </div>

            <div className="achievement-content">
              <div className="achievement-heading">
                <h4 className="h4 achievement-title">{entry.title}</h4>
                <span className="achievement-date">{entry.date}</span>
              </div>

              <p className="achievement-issuer">{entry.issuer}</p>

              <p className="achievement-description">
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <header className="certificates-header">
        <h2 className="h2 article-title">Certifications</h2>
      </header>

      <ul className="achievements-grid certificates-grid">
        {certificates.map((entry) => (
          <li
            className="achievement-card certificate-card"
            key={entry.id}
          >
            <div className="achievement-icon-box">
              <ion-icon name={entry.icon}></ion-icon>
            </div>

            <div className="achievement-content">
              <div className="certificate-main">
                <h4 className="h4 achievement-title">{entry.title}</h4>
                <p className="achievement-issuer">{entry.issuer}</p>

                {entry.credentialId && (
                  <p className="certificate-credential-id">
                    Credential ID {entry.credentialId}
                  </p>
                )}

                {entry.skills && entry.skills.length > 0 && (
                  <div className="certificate-skills">
                    {entry.skills.map((skill) => (
                      <span
                        className="certificate-skill-chip"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="certificate-meta">
                <span className="achievement-date">
                  {entry.date}
                  {entry.expiry ? ` · Expires ${entry.expiry}` : ""}
                </span>

                {entry.credentialUrl && (
                  <a
                    href={entry.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    Show credential
                    <ion-icon name="open-outline"></ion-icon>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Achievements;