import "../styles/Sidebar.css";
import { useState } from "react";
import Profile from "../assets/Profile.jpeg";


interface ContactItem {
  icon:    string;
  title:   string;
  content: React.ReactNode;
}


interface SocialItem {
  href:      string;
  label:     string;
  iconName?: string;
  iconSrc?:  string;
}


const contacts: ContactItem[] = [
  {
    icon:  "mail-outline",
    title: "Email",
    content: (
      <a href="mailto:mittals.one@gmail.com" className="contact-link contact-small">
        mittals.one@gmail.com
      </a>
    ),
  },
  {
    icon:  "call-outline",
    title: "Phone",
    content: (
      <a href="tel:+918176034547" className="contact-link contact-small">
        +91 8176034547
      </a>
    ),
  },
  {
    icon:  "locate-outline",
    title: "Location",
    content: <address className="contact-small">Gorakhpur, India</address>,
  },
];


const socials: SocialItem[] = [
  {
    href:     "https://www.linkedin.com/in/ashishmittal96/",
    label:    "LinkedIn",
    iconName: "logo-linkedin",
  },
  {
    href:     "https://github.com/aashish-mitt96",
    label:    "GitHub",
    iconName: "logo-github",
  },
  {
    href:     "https://leetcode.com/u/Ashish_Mittal96/",
    label:    "LeetCode",
    iconSrc:  "https://cdn.simpleicons.org/leetcode",
  },
  {
    href:     "https://wa.me/918176034547",
    label:    "WhatsApp",
    iconName: "logo-whatsapp",
  },
];


const Sidebar = () => {

  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => setIsActive((prev) => !prev);

  return (
    <aside className={`sidebar${isActive ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Profile} alt="Ashish Mittal" width={80} />
        </figure>

        <div className="info-content">
          <h1 className="name">Ashish Mittal</h1>
          <p className="title">AI ML & Web Developer</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {contacts.map((contact) => (
            <li className="contact-item" key={contact.title}>
              <div className="icon-box">
                <ion-icon name={contact.icon}></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>
                {contact.content}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {socials.map((social) => (
            <li className="social-item" key={social.href}>
              <a
                target="_blank"
                rel="noreferrer"
                href={social.href}
                className="social-link"
                aria-label={social.label}
              >
                {social.iconName ? (
                  <ion-icon className="socials-icons" name={social.iconName}></ion-icon>
                ) : (
                  <span
                    className="socials-icons social-icon-mask"
                    style={{
                      maskImage: `url(${social.iconSrc})`,
                      WebkitMaskImage: `url(${social.iconSrc})`,
                    }}
                  ></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;