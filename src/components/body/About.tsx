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
  const aboutRef2 = useRef(null);
  const animationRef = useRef(null);
  useIntersectionObserver(aboutRef1, changeTab, title, options);
  useIntersectionObserver(aboutRef2, changeTab, title, options);
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
          My name is <i>Sebastien</i>, I'm a Front-End Developer with a focus on
          React.JS. I come from an unconventional background when it comes to
          tech. I am a Journeyman Electrician turned developer, and I think I
          bring an interesting perspective to the table. I'm used to unexpected
          changes of plans, clients changing their minds mid-project, and crunch
          times. I'm bilingual (English/French), enjoy working on teams with
          unique individuals and thrive in an environment where I have to
          constainly learn and grow.
        </p>

        <p ref={aboutRef1} className="about-text">
          I started playing around with programmable logic controllers (PLCs) in
          trade school and immediately fell in love with programming. I started
          with Python, but quickly moved on to JavaScript and Front-End
          Development.
        </p>
        <p className="about-text">
          I I wanted to practice my skills in a real setting, so I reached out
          to Civic Tech Fredericton and joined their Meal Planner Team, which is
          where I started to learn React. On that team I familiarized myself
          with GitHub, working in an AGILE environment, and communicating with
          designers and other developers.
        </p>
        <p className="about-text">
          Currently I work with semantic HTML, CSS, JavaScript, React.JS, Sass
          and TypeScript. I am learning Node.JS and plan on learning some Python
          with a web framework such as Flask.
        </p>
        <Skills />
        <p ref={aboutRef2} className="about-text">
          In my spare time I enjoy lots of hobbies. I enjoy going to the gym,
          playing modern board games, tasting the local craft brews, enjoying
          fine chinese teas, wood burning and fiddling on my 5-string bass.
        </p>
        <p className="about-text about-last">
          Down below you'll see my projects in order of when I started working
          on them. Hover over them and you'll find a little exert and links to
          the website and top the code.
        </p>
      </article>
    </section>
  );
};

export default About;
