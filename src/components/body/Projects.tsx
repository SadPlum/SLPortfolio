import React, { useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import SingleProject from "../projects/SingleProject";
import sudokuSm from "../../images/sudoku.png";
import perfectPupSm from "../../images/perfectpup.png";
import portfolio from "../../images/portfolio.png";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const Projects: React.FC<Props> = ({ title, changeTab }) => {
  const options = { threshold: 0.3 };
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  useIntersectionObserver(projectRef1, changeTab, title, options);
  useIntersectionObserver(projectRef2, changeTab, title, options);
  return (
    <div className="projects">
      <div ref={projectRef1}>
        <SingleProject
          title="Sudoku"
          image={sudokuSm}
          note="Game is playable. It will be impleted with React, Typescript, tests and be refactored."
          description="
          A simple sudoku game. Can generate it's own board, or solve one of yours; both through recursion. Was first designed 
          to solve games through logic by iterating through all the potential numbers of each."
          websiteURL="https://sadplum.github.io/sudokuNew/"
          githubURL="https://github.com/SadPlum/perfect-pup"
        />
      </div>
      <SingleProject
        title="Perfect Pup"
        image={perfectPupSm}
        note="*WIP* Slow loading due to being hosted for free with Heroku. Needs refactoring and tests. Will implement a Node.JS backend and CRUD APP for the dog listings"
        description="
      A responsive dog adoption website, designed to work with an API. Searches for dogs through a (currently hardcoded) database and renders them on the search page.
      "
        websiteURL="https://perfect-pup.herokuapp.com/about"
        githubURL="https://github.com/SadPlum/perfect-pup"
      />
      <div ref={projectRef2}>
        <SingleProject
          title="Portfolio Website"
          image={portfolio}
          note="Project needs refining and refactoring. Spacing of height on very large screens is odd"
          description="The current site you're visitng. My first attempt at a portfolio website."
          websiteURL="https://sebastienlegault.com"
          githubURL="https://github.com/SadPlum/SLPortfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
