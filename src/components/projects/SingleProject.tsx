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
      <div className="project-content-front">
        <div className="project-img-box">
          <img className="project-img-sm" src={image} alt="" />
        </div>
        <div className="project-head">
          <h3 className=" project-title">{title}</h3>
        </div>
      </div>
      <div className="project-content-back">
        <div className="project-img-box project-back">
          <img className="project-img-sm-back" src={image} alt="" />
          <p className="project-text">{description}</p>
        </div>

        <div className="project-head">
          <div className=" project-links"></div>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
