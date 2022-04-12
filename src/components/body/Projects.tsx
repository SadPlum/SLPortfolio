import React from "react";

interface Props {
  title: string;
}

const Projects: React.FC<Props> = (title) => {
  return (
    <div>
      Projects
      <hr />
    </div>
  );
};

export default Projects;
