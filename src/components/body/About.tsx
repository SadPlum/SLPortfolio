import React from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";

interface Props {
  title: string;
  reference: React.RefObject<HTMLElement>;
  changeTab: (title: string) => void;
}

const About: React.FC<Props> = ({ title, reference, changeTab }) => {
  const options = { threshold: 0.2 };

  useIntersectionObserver(reference, changeTab, title, options);
  return (
    <section className="about">
      {" "}
      <article className="about-me">
        <p className="about-text">
          {" "}
          My name is Sebastien. I am an Electrician turned developer. I like
          playing around with React, making little games and functional
          applications. I have worked with Civic Tech Fredericton on their Meal
          Planner Team.
        </p>
        <p className="about-text">
          My main focus is on front-end development, am working on my skills to
          do full-stack, and like solving algorythmic problems; making a sudoku
          solver was a blast.
        </p>
        <p className="about-text">
          I know JavaScript(ES6)/TypeScript, React, CSS/SASS, Semantic HTML, Git/GitHub and
          a touch of Node.js.
        </p>
        <p className="about-text">
          In my spare time I like to play board games, taste the latest
          craft-brews and fiddle on my bass.
        </p>
      </article>
    </section>
  );
};

export default About;
