import React from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionChangeTab";

interface Props {
  title: string;
  reference: React.RefObject<HTMLElement>;
  changeTab: (title: string) => void;
}

const Contact: React.FC<Props> = ({ title, reference, changeTab }) => {
  const options = { threshold: 0.3 };
  useIntersectionObserver(reference, changeTab, title, options);
  return (
    <div>
      Contact
      <hr />
    </div>
  );
};

export default Contact;
