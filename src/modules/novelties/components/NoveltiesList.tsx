'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/shared/components/Card/Card';
import productsData from '@/shared/data/products-data';
import Link from 'next/link';

export default function NoveltiesList() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const pageLink = '/catalogue';

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
            <li key={`${product.id}-${index}`}>
              <Card product={product} />
            </li>
          ))}
      </ul>

      <div className="flex justify-center ">
        <button
          onClick={handleShowMore}
          className="text-xs md:text-xl leading-[25.6px] md:leading-8 text-blue-900"
        >
          {viewportWidth >= 320 && visibleCards >= 8 && viewportWidth < 768 ? (
            <Link href={pageLink}>До каталогу</Link>
          ) : viewportWidth >= 768 && visibleCards >= 16 ? (
            <Link href={pageLink}>До каталогу</Link>
          ) : (
            'Ще новинки'
          )}
        </button>
      </div>
    </div>
  );
}
