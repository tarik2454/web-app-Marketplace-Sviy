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
        'absolute flex items-center justify-center w-[163px] h-[75px] p-3 gap-3 bg-white/70 rounded-default xl:bg-white/100' +
        `${styleSetting}`
      }
    >
      <Image
        className="rounded-[100%]"
        src={avatar}
        alt={uName}
        width={43}
        height={43}
      />
      <div className="flex flex-col gap-1">
        <p className="text-[8px] text-cyan-700">{uName}</p>
        <Rating />
        <p className="text-[10px] text-stone-900">{text}</p>
      </div>
    </div>
  );
};

export default Response;
