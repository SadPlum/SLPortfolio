import React from "react";
import reactLogo from "../../images/icons8-react-120.png";
import htmlLogo from "../../images/icons8-html-5-144.png";
import cssLogo from "../../images/icons8-css3-144.png";
import jsLogo from "../../images/icons8-javascript-144.png";
import sassLogo from "../../images/icons8-sass-144.png";
import tsLogo from "../../images/icons8-typescript-144.png";

function Skills() {
  return (
    <div className="skills">
      <div className="row">
        <div className="logo-container">
          <img src={htmlLogo} alt="" className="logo" />
        </div>
        <div className="logo-container">
          <img src={cssLogo} alt="" className="logo" />
        </div>
        <div className="logo-container">
          <img src={jsLogo} alt="" className="logo" />
        </div>
      </div>
      <div className="row">
        <div className="logo-container">
          <img src={reactLogo} alt="" className="logo" />
        </div>
        <div className="logo-container">
          <img src={sassLogo} alt="" className="logo" />
        </div>
        <div className="logo-container">
          <img src={tsLogo} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
