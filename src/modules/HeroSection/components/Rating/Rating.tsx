import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React from 'react';

const Rating = () => {
  return (
    <div className="flex items-center justify-center w-fit">
      <SpriteSVG name="rating-star" />
      <SpriteSVG name="rating-star" />
      <SpriteSVG name="rating-star" />
      <SpriteSVG name="rating-star" />
      <SpriteSVG name="rating-star" />
    </div>
  );
};

export default Rating;
