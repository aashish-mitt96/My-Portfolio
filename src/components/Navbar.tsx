import "../styles/Navbar.css";


export type Page = "about" | "projects" | "experience" | "achievements";


interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}


const NAV_ITEMS: { page: Page; label: string }[] = [
  { page: "about",        label: "About" },
  { page: "experience",   label: "Experience" },
  { page: "projects",     label: "Projects" },
  { page: "achievements", label: "Achievements" },
];


const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAV_ITEMS.map((item) => (
          <li className="navbar-item" key={item.page}>
            <button
              className={`navbar-link${activePage === item.page ? " active" : ""}`}
              onClick={() => onNavigate(item.page)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;