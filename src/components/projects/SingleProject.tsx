import React, { useState, useRef } from "react";
import useIntersectionAnimation from "../../Hooks/useIntersectionAnimation";

function SingleProject() {
  const [visible, setVisible] = useState(false);
  const [projectTitle, setProjectTitle] = useState("title");
  const projectRef = useRef<HTMLDivElement>(null);
  useIntersectionAnimation(projectRef, setVisible);

  return (
    <article
      ref={projectRef}
      className={
        visible ? "single-project fade-up-animation" : "single-project"
      }
    >
      <div className="project-content">
        <div className="project-img">
          <div className="temp-img"></div>
        </div>
        <h3 className="project-title">
          {projectTitle ? projectTitle : "TempTitle"}
        </h3>
      </div>
    </article>
  );
}

export default SingleProject;
