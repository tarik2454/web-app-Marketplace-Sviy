import React from 'react';

type Props = {
  settings: string;
};

const Ellipse = ({ settings }: Props) => {
  return <div className={`absolute rounded-[100%] z-[-3] ${settings}`}></div>;
};

export default Ellipse;
