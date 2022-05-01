import React, { useState, useEffect } from "react";
import Tab from "./Tab";

interface Props {
  home: React.RefObject<HTMLElement>;
  about: React.RefObject<HTMLElement>;
  skills: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
  activeTab: string;
  changeTab: (title: string) => void;
}

const Header: React.FC<Props> = ({
  home,
  about,
  skills,
  projects,
  contact,
  activeTab,
  changeTab,
}) => {
  const homeHeight: number = Number(home.current?.offsetTop);
  const aboutHeight: number = Number(about.current?.offsetTop);
  const skillsHeight: number = Number(skills.current?.offsetTop);
  const projectsHeight: number = Number(projects.current?.offsetTop);
  const contactHeight: number = Number(contact.current?.offsetTop);

  const scroll = (height: number, title: string) => {
    window.scrollTo({ left: 0, top: height - 80, behavior: "smooth" });
  };

  return (
    <header className="header">
      <h2 className="name">Sebastien Legault</h2>
      <nav className="nav">
        <button
          className={activeTab === "home" ? "tab active" : "tab"}
          onClick={() => scroll(homeHeight, "home")}
        >
          <Tab title="Home" />
        </button>
        <button
          className={activeTab === "about" ? "tab active" : "tab"}
          onClick={() => scroll(aboutHeight, "about")}
        >
          <Tab title="About" />
        </button>
        <button
          className={activeTab === "skills" ? "tab active" : "tab"}
          onClick={() => scroll(skillsHeight, "skills")}
        >
          <Tab title="Skills" />
        </button>

        <button
          className={activeTab === "projects" ? "tab active" : "tab"}
          onClick={() => {
            scroll(projectsHeight, "projects");
          }}
        >
          <Tab title="Projects" />
        </button>
        <button
          className={activeTab === "contact" ? "tab active last" : "tab last"}
          onClick={() => scroll(contactHeight, "contact")}
        >
          <Tab title="Contact" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
