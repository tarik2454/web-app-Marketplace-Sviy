import React from 'react';

type Props = {
  cssSettings?: string;
};

const ColorSpot = ({ cssSettings }: Props) => {
  return (
    <div
      className={`absolute rounded-[100%] bg-[#BBDEFB] w-[368px] h-[368px] -top-[23px] -left-[143px] blur-[150px] -z-[2] md:w-[729px]  md:h-[729px]  md:-top-[434px]  md:-left-[304px] xl:w-[867px]  xl:h-[867px]  xl:-top-[389px]  xl:-left-[388px] ${cssSettings}`}
    ></div>
  );
};

export default ColorSpot;
