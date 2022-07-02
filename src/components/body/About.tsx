import React, { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import useIntersectionVisible from "../../Hooks/useIntersectionVisible";
import Skills from "./Skills";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const About: React.FC<Props> = ({ title, changeTab }) => {
  // if visible, then use animation
  const [visible, setVisible] = useState(false);

  // options for intersection observer
  const options = { threshold: 0.2 };

  // ref for navbar change tab
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);

  // ref for fade-up animation
  const animationRef = useRef(null);

  useIntersectionObserver(aboutRef1, changeTab, title, options);
  useIntersectionObserver(aboutRef2, changeTab, title, options);
  useIntersectionVisible(animationRef, setVisible);

  useEffect(() => {});
  return (
    <section
      ref={animationRef}
      className={visible ? "about fade-up-animation" : "about"}
    >
      <article className="about-me">
        <p className="about-text">
          {" "}
          My name is <i>Sébastien</i>, I'm a Front-End Developer with an
          unconventional background. I am a Journeyman Electrician turned
          developer. I'm bilingual (English/French), enjoy working on teams with
          unique individuals and thrive in an environment where I have to
          constantly learn and grow.
        </p>
        <p ref={aboutRef1} className="about-text">
          I played around with programmable logic controllers (PLCs) in trade
          school and immediately fell in love with programming. I dabbled with
          Python, but quickly moved on to Front-End development. I reached out
          to Civic Tech Fredericton, joined their Meal Planner team and started
          to learn React.
        </p>
        <p className="about-text">
          {/* Currently I work with semantic HTML, CSS, JavaScript, React.JS, Sass
          and TypeScript. I am learning Node.JS and plan on learning some Python
          with a web framework such as Flask. */}
          My languages include React, HTML, CSS/SCSS, JavaScript/TypeScript and
          a bit of Node. I can consume APIs with React, and write them with
          Node. I also have some experience unit testing code in React. I am
          comfortable using Git, communicating, and understand agile software
          development principles.
        </p>
        <Skills />
        <p ref={aboutRef2} className="about-text">
          In my spare time you can find me at the gym, coding a hobby project,
          playing modern board games, tasting the local craft brews, enjoying
          fine chinese teas, wood burning and fiddling on my 5-string bass.
        </p>
        <p className="about-text about-last">
          Down below you'll see my projects in order of when I started working
          on them. Hover over, or tap them to find links to the website and to
          the code, as well as notes on it's current state in production.
        </p>
      </article>
    </section>
  );
};

export default About;
