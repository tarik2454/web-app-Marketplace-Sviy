import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React from 'react';

type Props = {
  cssSettings?: string;
};

const Rating = ({ cssSettings }: Props) => {
  return (
    <ul className="flex items-center justify-center w-fit gap-[3px]">
      <li className={'w-2 h-2 md:w-3 md:h-3' + ' ' + cssSettings}>
        <SpriteSVG name="rating-star" />
      </li>
      <li className={'w-2 h-2 md:w-3 md:h-3' + ' ' + cssSettings}>
        <SpriteSVG name="rating-star" />
      </li>
      <li className={'w-2 h-2 md:w-3 md:h-3' + ' ' + cssSettings}>
        <SpriteSVG name="rating-star" />
      </li>
      <li className={'w-2 h-2 md:w-3 md:h-3' + ' ' + cssSettings}>
        <SpriteSVG name="rating-star" />
      </li>
      <li className={'w-2 h-2 md:w-3 md:h-3' + ' ' + cssSettings}>
        <SpriteSVG name="rating-star" />
      </li>
    </ul>
  );
};

export default Rating;
