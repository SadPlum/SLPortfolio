import React, { useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import SingleProject from "../projects/SingleProject";
import sudoku from "../../images/sudoku.png";

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
        <SingleProject title="Sudoku" image={sudoku} description="fasdf" />
      </div>
      <SingleProject title="Perfect Pup" />
    </div>
  );
};

export default Projects;
