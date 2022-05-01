import React, { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  setter?: (value: boolean) => void;
}

const Typewritter: React.FC<Props> = ({ text, setter }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

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
      console.log(currentText);
    }, 50);
  }, [currentText, text, setter]);

  return (
    <>
      <p className="info-text">{currentText}</p>
    </>
  );
};

export default Typewritter;
