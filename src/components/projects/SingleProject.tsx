import React, { useRef } from "react";
import gitHubIcon from "../../images/icons8-github-192.png";
import webIcon from "../../images/icons8-web-100.png";
import useIntersectionChangeClass from "../../Hooks/useIntersectionChangeClass";

interface Props {
  title?: string;
  image?: string;
  gifURL?: string;
  // I shouldn't have to use any, but if  I use string | Element, typescript spits out
  // "Type 'Element' is not assignable to type 'string | Element | undefined'."
  note?: any;
  description?: string;
  projectNotes?: string;
  websiteURL?: string;
  githubURL?: string;
}

const SingleProject: React.FC<Props> = ({
  title,
  image,
  gifURL,
  note,
  description,
  projectNotes,
  websiteURL,
  githubURL,
}) => {
  const ref = useRef(null);
  useIntersectionChangeClass(ref, "flip-effect");
  return (
    <section className="single-project">
      <div className="project-title-box">
        <h3 className=" project-title">{title}</h3>
      </div>
      <div className="project-content">
        <div className="project-description-box">
          <p className="project-description">{description}</p>
          <img src={gifURL} className="project-video" alt="" />
        </div>
        <article ref={ref} className="project-flip-box">
          {/* front of card */}
          <div className="project-content-front">
            <div className="project-img-box">
              <img className="project-img-sm" src={image} alt="" />
            </div>
          </div>

          {/* back of card */}
          <div className="project-content-back">
            <div className="project-img-box project-back">
              <img className="project-img-sm img-back" src={image} alt="" />
              <article className="project-article">
                <p className="project-note">{note}</p>
                <p className="project-text">{projectNotes}</p>
              </article>
            </div>

            <div className="project-head">
              <div className=" project-links">
                <a className="project-url" href={websiteURL} target="_blank">
                  <img
                    className="project-icon"
                    src={webIcon}
                    alt="Website Icon"
                  />
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
      </div>
    </section>
  );
};

export default SingleProject;
