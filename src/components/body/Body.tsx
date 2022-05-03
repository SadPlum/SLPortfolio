import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Header from "../header/Header";
import Skills from "./Skills";
import Footer from "./Footer";

function Body() {
  const homeRef = useRef<HTMLElement>(null);
  // const [homeSize, setHomeSize] = useState(homeRef);
  const aboutRef = useRef<HTMLElement>(null);
  // const [aboutSize, setAboutSize] = useState(aboutRef);
  const projectsRef = useRef<HTMLElement>(null);

  
  const contactRef = useRef<HTMLElement>(null);
  // const [contactSize, setContactSize] = useState(contactRef);
  const [activeTab, setActiveTab] = useState("");

  // useEffect(() => {
  //   setHomeSize((homeSize) => homeRef);
  //   setAboutSize((aboutSize) => aboutRef);
  //   setProjectsSize((projectsSize) => projectsRef);
  //   setContactSize((contactSize) => contactRef);
  // }, [homeRef, aboutRef, projectsRef, contactRef]);

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
        <div className="fade-up-body content-container">
          <section ref={homeRef} className="">
            <Home title={"home"} changeTab={changeTab} />
          </section>
          <section ref={aboutRef} className="">
            <About title={"about"} reference={aboutRef} changeTab={changeTab} />
            <Skills />
          </section>
         
         
          <section ref={projectsRef} className="">
            <Projects
              title={"projects"}
              reference={projectsRef}
              changeTab={changeTab}
            />
          </section>

          <section ref={contactRef} className="body-content">
            <Contact
              title={"contact"}
              reference={contactRef}
              changeTab={changeTab}
            />
          </section>
        </div>
        <div className="backdrop"></div>
      </main>
      <Footer />
    </>
  );
}

export default Body;
