'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/shared/components/Card/Card';
import productsData from '@/shared/data/products-data';

export default function NoveltiesList() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const handleShowMore = () => {
    const currentViewportWidth = window.innerWidth;
    const elementsToAdd = currentViewportWidth >= 768 ? 8 : 4;

    setVisibleCards(prevVisibleCards => prevVisibleCards + elementsToAdd);
  };

  const handleResize = () => {
    const newViewportWidth = window.innerWidth;
    setViewportWidth(newViewportWidth);

    setVisibleCards(newViewportWidth >= 768 ? 8 : 4);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4 xl:gap-6 mb-6 md:mb-8 xl:mb-10">
        {productsData
          .slice(0, Math.min(visibleCards, viewportWidth >= 768 ? 16 : 8))
          .map((product, index) => (
            <li key={product.id}>
              <Card product={product} />
            </li>
          ))}
      </ul>

      <div className="flex justify-center ">
        <button
          onClick={handleShowMore}
          className="text-xl leading-8 text-blue-900"
        >
          {viewportWidth <= 375 && visibleCards >= 8
            ? 'До каталогу'
            : viewportWidth >= 768 && visibleCards >= 16
            ? 'До каталогу'
            : 'Ще новинки'}
        </button>
      </div>
    </div>
  );
}
