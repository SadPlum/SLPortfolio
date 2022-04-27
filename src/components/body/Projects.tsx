import React from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import SingleProject from "../projects/SingleProject";

interface Props {
  title: string;
  reference: React.RefObject<HTMLElement>;
  changeTab: (title: string) => void;
}

const Projects: React.FC<Props> = ({ title, reference, changeTab }) => {
  const options = { threshold: 0.3 };
  useIntersectionObserver(reference, changeTab, title, options);
  return (
    <div className="projects">
      <SingleProject />
      <SingleProject />

      <hr />
    </div>
  );
};

export default Projects;
