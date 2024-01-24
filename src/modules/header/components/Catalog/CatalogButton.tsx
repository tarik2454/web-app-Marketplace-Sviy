'use client';

import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';

export default function CatalogButton({
  catalogueClick,
}: {
  catalogueClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsClicked(!isClicked);

    if (catalogueClick) {
      catalogueClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex gap-2 py-3 pl-5 pr-8 border-2 border-blue-700 text-blue-700 rounded-default transition-all ${
        (isClicked && 'text-neutral-50 bg-blue-700') || null
      } `}
    >
      {(isClicked && <SpriteSVG name="close-catalog-button" />) || (
        <SpriteSVG name="catalog" />
      )}

      <p>Каталог</p>
    </button>
  );
}
