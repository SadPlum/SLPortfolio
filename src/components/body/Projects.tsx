import React, { useRef } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import SingleProject from "../projects/SingleProject";
import sudokuSm from "../../images/sudoku.png";
import perfectPupSm from "../../images/perfectpup.png";
import portfolio from "../../images/portfolio.png";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const Projects: React.FC<Props> = ({ title, changeTab }) => {
  const options = { threshold: 0.3 };
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);
  useIntersectionObserver(projectRef1, changeTab, title, options);
  useIntersectionObserver(projectRef2, changeTab, title, options);
  useIntersectionObserver(projectRef3, changeTab, title, options);

  // Note for back of sudoku card to include link to Nahummc github
  const sudokuNote = (
    <p>
      Game is playable. The code is currently a nightmare. Currently being
      implemented as a new project with{" "}
      <a href="https://github.com/nahummc">nahummc</a> with React, Typescript
      and a backend using Node and Python. The new code will be much cleaner and
      refined.
    </p>
  );

  return (
    <div className="projects">
      <div ref={projectRef1}>
        <SingleProject
          title="Sudoku"
          image={sudokuSm}
          note={sudokuNote}
          description="My first real project, and a tough one to be my first, a sudoku generator and solver using vanilla JavaScript, HTML and CSS. 
          Originally designed to use human logic to solve it, but due to the level of abstraction required I did a deep dive into recursion. Using lots of arrays and math, 
          I really learned a lot about thinking algorithmically, how iteration works and how to really learn how to code on my own without following any tutorials."
          gifURL="https://media0.giphy.com/media/Ut3oLyh9KiSq1iAJM4/giphy.gif"
          websiteURL="https://sadplum.github.io/sudokuNew/"
          githubURL="https://github.com/SadPlum/perfect-pup"
        />
      </div>
      <div ref={projectRef2}>
        <SingleProject
          title="Perfect Pup"
          image={perfectPupSm}
          note="
        Demo site is not the most up-to-date version. Will have a faster site launched once tests and authentication are done.
        Slow loading due to being hosted for free with Heroku. "
          projectNotes="Uses MERN (MongoDB, Express, React Node) stack, and Mongoose as a MongoDB Library. SCSS is used for styling. React-Testing-Library and Jest are used for testing."
          description="Perfect Pup, a dog adoption application. It is my first Full-Stack app, where I first used Node, MongoDB, Express and learned to create unit tests. It was originally just a Front-End 
        project (as per the demo site), but I wanted to test myself and expand into Full-Stack. I first struggled with the base design and layout, but bounced ideas off some great graphic
         designers I know and they helped guide me into making a nice looking, functional website."
          gifURL="https://media0.giphy.com/media/XNcqbe6Lw2kwYJBuz4/giphy.gif"
          websiteURL="https://perfect-pup.herokuapp.com/about"
          githubURL="https://github.com/SadPlum/perfect-pup"
        />
      </div>
      <div ref={projectRef3}>
        <SingleProject
          title="Portfolio Website"
          image={portfolio}
          note="Always being updated and improved based on feedback"
          description="The current site you're visiting, my first attempt at a portfolio website and at using Typescript. The stack is React, Typescript and SCSS. My goal with this project was to
          learn how to use CSS animations and how to utilize the IntersectionObserver API to make the website and componenets come to life."
          websiteURL="https://sebastienlegault.com"
          githubURL="https://github.com/SadPlum/SLPortfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
