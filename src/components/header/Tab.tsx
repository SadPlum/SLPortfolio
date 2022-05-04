import React from "react";

interface Props {
  title: string;
}

function Tab({ title }: Props) {
  return <span>{title}</span>;
}

export default Tab;
