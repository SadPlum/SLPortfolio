import React, { useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import SingleProject from "../projects/SingleProject";
import sudokuSm from "../../images/sudoku.png";
import perfectPupSm from "../../images/perfectpup.png";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const Projects: React.FC<Props> = ({ title, changeTab }) => {
  const options = { threshold: 0.3 };
  const projectRef1 = useRef(null);
  useIntersectionObserver(projectRef1, changeTab, title, options);
  return (
    <div className="projects">
      <div ref={projectRef1} className="project">
        <SingleProject
          title="Sudoku"
          image={sudokuSm}
          description="*WIP Needs refactoring and tests. Will recreate using React and Typescript for final product*
          A simple sudoku game. Can generate it's own board, or solve one of yours; both through recursion. Was first designed 
          to solve games through logic by iterating through all the potential numbers of each"
        />
      </div>
      <SingleProject
        title="Perfect Pup"
        image={perfectPupSm}
        description="*WIP Needs refactoring and tests. Will implement a Node.JS backend and CRUD APP for the dog listings*
      A responsive dog adoption website. Searches for dogs through a (currently hardcoded) database and renders them on the search page.
      "
      />
    </div>
  );
};

export default Projects;
