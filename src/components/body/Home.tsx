import React from "react";

interface Props {
  title: string;
}

const Home: React.FC<Props> = (title) => {
  return (
    <div>
      Home <hr />
    </div>
  );
};

export default Home;
