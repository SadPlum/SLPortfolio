import React from "react";

interface Props {
  title: string;
}

const Contact: React.FC<Props> = (title) => {
  return (
    <div>
      Contact
      <hr />
    </div>
  );
};

export default Contact;
