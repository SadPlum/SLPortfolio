import React, { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  setter?: (value: boolean) => void;
}

const Typewriter: React.FC<Props> = ({ text, setter }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

  // loops over string for typewriter effect. Let
  useEffect(() => {
    setTimeout(() => {
      if (currentText.length === text.length) {
        {
          setter && setter(true);
        }
        return;
      }
      setCurrentText((currentText) => currentText + text.charAt(index.current));
      index.current += 1;
    }, 25);
  }, [currentText, text, setter]);

  return (
    <>
      <p className="info-text">{currentText}</p>
    </>
  );
};

export default Typewriter;
