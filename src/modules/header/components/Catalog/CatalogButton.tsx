'use client';

import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';

// ... (imports)

export default function CatalogButton({
  catalogueClick,
  isClicked,
}: {
  catalogueClick?: MouseEventHandler<HTMLButtonElement>;
  isClicked: boolean; // Add isClicked prop
}) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
