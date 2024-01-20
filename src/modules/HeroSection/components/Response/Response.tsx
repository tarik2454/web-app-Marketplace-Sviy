import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Rating } from '..';

type Props = {
  text: string;
  uName: string;
  avatar: StaticImageData;
  styleSetting?: string;
};

const Response = ({ text, uName, avatar, styleSetting }: Props) => {
  return (
    <div
      className={
        'absolute flex items-center justify-center max-w-[220px]  p-3 gap-3 bg-white/70 rounded-default xl:bg-white/100 xl:px-4 ' +
        `${styleSetting}`
      }
    >
      <Image
        className="rounded-[100%] w-[43px] h-[43px] xl:w-[58px] xl:h-[58px]"
        src={avatar}
        alt={uName}
      />
      <div className="flex flex-col gap-1 font-lato font-normal xl:leading-[120%]">
        <p className="text-[8px] text-cyan-700 xl:text-[12px]">{uName}</p>
        <Rating />
        <p className="text-[10px] text-stone-900 xl:text-[14px]">{text}</p>
      </div>
    </div>
  );
};

export default Response;
