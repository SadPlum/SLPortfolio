import React, { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import useIntersectionAnimation from "../../Hooks/useIntersectionAnimation";
import Skills from "./Skills";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const About: React.FC<Props> = ({ title, changeTab }) => {
  const [visible, setVisible] = useState(false);
  const options = { threshold: 0.2 };
  const aboutRef1 = useRef(null);
  const animationRef = useRef(null);
  useIntersectionObserver(aboutRef1, changeTab, title, options);
  useIntersectionAnimation(animationRef, setVisible);

  useEffect(() => {});
  return (
    <section
      ref={animationRef}
      className={visible ? "about fade-up-animation" : "about"}
    >
      <article className="about-me">
        <p className="about-text">
          {" "}
          My name is <i>Sebastien</i>. I am an Electrician turned developer. I
          like playing around with React, making little games and functional
          applications. I have worked with Civic Tech Fredericton on their Meal
          Planner Team.
        </p>
        <p ref={aboutRef1} className="about-text">
          My main focus is on front-end development, am working on my skills to
          do full-stack, and like solving algorythmic problems; making a sudoku
          solver was a blast.
        </p>

        <p className="about-text">
          In my spare time I like to play board games, enjoy chinese teas, taste
          the latest craft-brews and fiddle on my bass.
        </p>
      </article>
      <Skills />
    </section>
  );
};

export default About;
