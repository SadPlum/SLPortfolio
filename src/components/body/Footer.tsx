import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="line">Site built with React by Sebastien Legault</div>
      <div className="line">
        <a
          target="_blank"
          className="footer-link"
          href="https://icons8.com/icons/set/programming"
        >
          Programming Logo
        </a>{" "}
        icons by{" "}
        <a target="_blank" className="footer-link" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </footer>
  );
}

export default Footer;
