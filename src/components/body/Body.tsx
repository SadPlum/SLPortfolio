import React, { useRef, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Header from "../header/Header";

import Footer from "./Footer";

function Body() {
  // References for header scroll
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Sets active Tab
  const [activeTab, setActiveTab] = useState("");

  // Global function for setting Tab
  const changeTab = (title: string) => {
    setActiveTab(title);
  };

  return (
    <>
      <Header
        home={homeRef}
        about={aboutRef}
        projects={projectsRef}
        contact={contactRef}
        activeTab={activeTab}
        changeTab={changeTab}
      />
      <main className="body">
        <div className="block"></div>
        {/* only fade content up */}
        <div className="fade-enter-body content-container">
          <section ref={homeRef}>
            <Home title={"home"} changeTab={changeTab} />
          </section>
          <section ref={aboutRef}>
            <About title={"about"} changeTab={changeTab} />
          </section>

          <section ref={projectsRef}>
            <Projects title={"projects"} changeTab={changeTab} />
          </section>

          <section ref={contactRef}>
            <Contact title={"contact"} changeTab={changeTab} />
          </section>
        </div>
        <div className="backdrop"></div>
      </main>
      <Footer />
    </>
  );
}

export default Body;
