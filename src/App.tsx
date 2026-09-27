import "./App.css";
import { useState } from "react";

import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Navbar, { type Page } from "./components/Navbar";


function App() {
  const [activePage, setActivePage] = useState<Page>("about");

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} onNavigate={setActivePage} />

        <About        isActive={activePage === "about"} />
        <Experience   isActive={activePage === "experience"} />
        <Projects     isActive={activePage === "projects"} />
        <Achievements isActive={activePage === "achievements"} />
      </div>
    </main>
  );
}

export default App;