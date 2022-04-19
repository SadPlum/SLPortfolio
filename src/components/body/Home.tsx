import React from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";

interface Props {
  title: string;
  reference: React.RefObject<HTMLElement>;
  changeTab: (title: string) => void;
}

const Home: React.FC<Props> = ({ title, reference, changeTab }) => {
  const options = { threshold: 0.3 };
  useIntersectionObserver(reference, changeTab, title, options);
  return (
    <div>
      Home <hr />
    </div>
  );
};

export default Home;
