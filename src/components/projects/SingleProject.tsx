import React, { useState, useRef } from "react";
import useIntersectionAnimation from "../../Hooks/useIntersectionAnimation";

function SingleProject() {
  const [visible, setVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);
  useIntersectionAnimation(projectRef, setVisible);

  return (
    <div
      ref={projectRef}
      className={visible ? "single-project hidden red" : "single-project"}
    >
      This is single project
    </div>
  );
}

export default SingleProject;
