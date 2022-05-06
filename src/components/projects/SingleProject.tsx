import React, { useState, useRef } from "react";
import useIntersectionAnimation from "../../Hooks/useIntersectionAnimation";
import gitHubIcon from "../../images/icons8-github-192.png";
import webIcon from "../../images/icons8-web-100.png";

interface Props {
  title?: string;
  image?: string;
  note?: string;
  description?: string;
  websiteURL?: string;
  githubURL?: string;
}

const SingleProject: React.FC<Props> = ({
  title,
  image,
  note,
  description,
  websiteURL,
  githubURL,
}) => {
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
      {/* front of card */}
      <div className="project-content-front">
        <div className="project-img-box">
          <img className="project-img-sm" src={image} alt="" />
        </div>
        <div className="project-head">
          <h3 className=" project-title">{title}</h3>
        </div>
      </div>

      {/* back of card */}
      <div className="project-content-back">
        <div className="project-img-box project-back">
          <img className="project-img-sm-back" src={image} alt="" />
          <article className="project-article">
            <p className="project-note">{note}</p>
            <p className="project-text">{description}</p>
          </article>
        </div>

        <div className="project-head">
          <div className=" project-links">
            <a className="project-url" href={websiteURL} target="_blank">
              <img className="project-icon" src={webIcon} alt="Website Icon" />
            </a>
            <a className="project-url" href={githubURL} target="_blank">
              <img
                className="project-icon"
                src={gitHubIcon}
                alt="GitHub Logo Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
