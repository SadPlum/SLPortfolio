import React from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";
import facepicture from "../../images/facepicture.jpg";
import facepicturelg from "../../images/resizedface.png";
import reactLogo from "../../images/React-icon.png";
import fullStack from "../../images/full-stack-icon.png";
import lightningBolt from "../../images/lightning-bolt.png";

interface Props {
  title: string;
  reference: React.RefObject<HTMLElement>;
  changeTab: (title: string) => void;
}

const Home: React.FC<Props> = ({ title, reference, changeTab }) => {
  const options = { threshold: 0.3 };
  useIntersectionObserver(reference, changeTab, title, options);
  return (
    <section className="home">
      <h1 className="name-mobile">Sebastien Legault</h1>
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
          <p className="info-parag">
            <p className="info-text">I'm a front-end developer,</p>
            {/* <img
              src={reactLogo}
              className="home-icons react-img react-spin"
              alt=""
            /> */}
            <p className="info-text">aspiring full-stack</p>
            {/* <img
              src={fullStack}
              className="home-icons full-stack stack-bounce"
              alt=""
            /> */}
            <p className="info-text"> and Journeyman Electrician.</p>
            {/* <img
              src={lightningBolt}
              className="home-icons lightning-bolt lightning-fade"
              alt=""
            /> */}
          </p>
        </div>
      </article>
          <img
              src={reactLogo}
              className="home-icons react-img react-spin"
              alt=""
            />
    </section>
  );
};

export default Home;
