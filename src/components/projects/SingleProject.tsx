import React, { useState, useRef } from "react";
import useIntersectionAnimation from "../../Hooks/useIntersectionAnimation";

interface Props {
  title?: string;
  image?: string;
  description?: string;
}

const SingleProject: React.FC<Props> = ({ title, image, description }) => {
  const [visible, setVisible] = useState(false);
  const [projectTitle, setProjectTitle] = useState("title");
  const projectRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(projectRef, setVisible);

  return (
    <article
      ref={projectRef}
      className={
        visible ? "single-project " : "single-project"
        // fade-up-animation
      }
    >
      <div className="project-content">
        <div className="project-img-box">
          <img className="project-img" src={image} alt="" />
        </div>
        <h3 className="project-title">{title}</h3>
      </div>
    </article>
  );
};

export default SingleProject;
