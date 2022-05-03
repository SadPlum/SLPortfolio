import React, { useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import linkedinIcon from "../../images/icons8-linkedin-150.png";
import githubIcon from "../../images/icons8-github-192.png";
import resumeIcon from "../../images/icons8-download-resume-100.png";
import resume from "../../files/sebastien-legault-resume.pdf";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const Contact: React.FC<Props> = ({ title, changeTab }) => {
  const options = { threshold: 0.3 };
  const contactRef1 = useRef(null);
  const bottomRef = useRef(null);
  useIntersectionObserver(contactRef1, changeTab, title, options);
  useIntersectionObserver(bottomRef, changeTab, title, options);
  return (
    <section className="contact" ref={contactRef1}>
      <div className="contact-icon-container">
        <a href="https://github.com/SadPlum/">
          <img
            className="contact-icon"
            src={githubIcon}
            alt="GitHub Icon Logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/sebastien-legault-b33938160/">
          <img
            className="contact-icon"
            src={linkedinIcon}
            alt="LinkedIn Icon Logo"
          />
        </a>
        <a className="contact-icon" href={resume} download>
          <img src={resumeIcon} alt="" />
        </a>
      </div>
      <div className="contact-info">
        <a className="contact-link" href="mailto: sebastienolegault@gmail.com">
          sebastienolegault@gmail.com
        </a>
        <p className="contact-number">250-740-1674</p>
      </div>
      <div ref={bottomRef}></div>
    </section>
  );
};

export default Contact;
