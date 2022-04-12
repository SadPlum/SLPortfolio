import React from "react";

interface Props {
  title: string;
}

function Tab({ title }: Props) {
  return <div>{title}</div>;
}

export default Tab;
