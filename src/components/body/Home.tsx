import React, { useState, useRef } from "react";
import useIntersectionChangeTab from "../../Hooks/useIntersectionChangeTab";
import useIntersectionVisible from "../../Hooks/useIntersectionVisible";
import facepicturelg from "../../images/resizedface.png";
import Typewriter from "../typewriter/Typewriter";

interface Props {
  title: string;

  changeTab: (title: string) => void;
}

const Home: React.FC<Props> = ({ title, changeTab }) => {
  // options for intersection observer
  const options = { threshold: 0.3 };

  // only run typewriter effect if previous line is complete & visible
  const [p1Visible, setP1Visible] = useState(false);
  const [p1Done, setP1Done] = useState(false);
  const [p2Visible, setP2Visible] = useState(false);
  const [p2Done, setP2Done] = useState(false);
  const [p3Visible, setP3Visible] = useState(false);

  // Refs for typewriter
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

  // only run typewriter if visible
  useIntersectionVisible(p1Ref, setP1Visible);
  useIntersectionVisible(p2Ref, setP2Visible);
  useIntersectionVisible(p3Ref, setP3Visible);

  // Refs for changing tab
  const homeRef = useRef(null);
  const faceRef = useRef(null);
  const topRef = useRef(null);

  // Change tab on nav
  useIntersectionChangeTab(homeRef, changeTab, title, options);
  useIntersectionChangeTab(faceRef, changeTab, title, options);
  useIntersectionChangeTab(topRef, changeTab, title, options);
  return (
    <section className="home">
      <div ref={topRef}></div>

      <div className="name-mobile-container">
        <h1 className="name-mobile">Sebastien Legault</h1>
      </div>
      <article className="home-content">
        <div ref={faceRef} className="face-picture-box">
          <img
            src={facepicturelg}
            alt="Picture of Sebastien Legault"
            className="face-picture"
          />
        </div>
        <div className="info-title">
          <h2 ref={homeRef} className="info-heading">
            Hi, <br /> welcome to my portfolio.
          </h2>
        </div>
        <div className="info">
          <div className="info-parag">
            <div ref={p1Ref}>
              {p1Visible && (
                <Typewriter text="Full-Stack developer," setter={setP1Done} />
              )}
            </div>
            <div ref={p2Ref}>
              {p1Done && p2Visible && (
                <Typewriter text="Focussing on React," setter={setP2Done} />
              )}
            </div>
            <div ref={p3Ref}>
              {p2Done && p3Visible && (
                <Typewriter text="and a bit of Node for the Back-End." />
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
