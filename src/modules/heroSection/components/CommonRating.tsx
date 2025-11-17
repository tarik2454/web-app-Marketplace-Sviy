import Image from 'next/image';
import React from 'react';
import one from '../image/rating/1.jpg';
import two from '../image/rating/2.jpg';
import three from '../image/rating/3.jpg';
import four from '../image/rating/4.jpg';
import five from '../image/rating/5.jpg';
import { Rating } from '.';

const CommonRating = () => {
  const avatarsArr = [one, two, three, four, five];
  return (
    <div className="hidden absolute top-[557px] left-[577px]  flex-col items-center justify-center gap-2 w-fit h-fit px-4 py-3 bg-white rounded-default xl:flex">
      <div className="flex">
        {avatarsArr.map((img, index) => (
          <Image
            key={index}
            className={
              'block rounded-[100%] w-[40px] h-[40px]' +
              (index > 0 ? '-mr-[4px]' : '')
            }
            src={img}
            alt={`User number ${index}`}
          />
        ))}
      </div>
      <Rating cssSettings="xl:w-6 xl:h-6" />
    </div>
  );
};

export default CommonRating;
