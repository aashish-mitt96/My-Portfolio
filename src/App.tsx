import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar, { type Page } from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css";
import Achievements from "./components/Achievements";

function App() {
  const [activePage, setActivePage] = useState<Page>("about");

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} onNavigate={setActivePage} />

        <About isActive={activePage === "about"} />
        <Projects isActive={activePage === "projects"} />
        <Experience isActive={activePage === "experience"} />
        <Achievements isActive={activePage === "achievements"} />
      </div>
    </main>
  );
}

export default App;