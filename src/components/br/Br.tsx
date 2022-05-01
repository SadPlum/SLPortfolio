import React from "react";

const Br: React.FC<{ tag: string }> = ({ tag }) => {
  return <h3 className="br">&lt;{tag}&gt;</h3>;
};

export default Br;
