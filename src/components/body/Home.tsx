import React, { useState, useEffect, useMemo } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import facepicture from "../../images/facepicture.jpg";
import facepicturelg from "../../images/resizedface.png";
import reactLogo from "../../images/React-icon.png";
import fullStack from "../../images/full-stack-icon.png";
import lightningBolt from "../../images/lightning-bolt.png";
import Br from "../br/Br";
import Typewritter from "../typewritter/Typewritter";

interface Props {
  title: string;
  reference: React.RefObject<HTMLElement>;
  changeTab: (title: string) => void;
}

const Home: React.FC<Props> = ({ title, reference, changeTab }) => {
  const [p1Done, setp1Done] = useState(false);

  const [p2Done, setp2Done] = useState(false);

  const options = { threshold: 0.3 };

  useIntersectionObserver(reference, changeTab, title, options);
  return (
    <section className="home">
      <div className="name-mobile-container">
        <h1 className="name-mobile">Sebastien Legault</h1>
      </div>
      <article className="home-content">
        <div className="face-picture-box">
          <img
            src={facepicturelg}
            alt="Picture of Sebastien Legault"
            className="face-picture"
          />
        </div>
        <div className="info">
          <h2 className="info-heading">Hi, welcome to my portfolio.</h2>
          <div className="info-parag">
            <Typewritter text="I'm a front-end developer," setter={setp1Done} />

            {p1Done && (
              <Typewritter text="aspiring full-stack," setter={setp2Done} />
            )}

            {p2Done && <Typewritter text="and Journeyman Electrician." />}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
