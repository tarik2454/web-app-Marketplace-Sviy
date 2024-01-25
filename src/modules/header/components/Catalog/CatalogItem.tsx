'use client';

import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Link from 'next/link';

type SubCategory = string;

type Category = {
  id?: number;
  category: string;
  subCategory?: SubCategory[];
};

type CatalogItemProps = {
  categoryName: Category;
};

export default function CatalogItem({ categoryName }: CatalogItemProps) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      className="max-w-[302px] bg-[white]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="#"
        className="flex flex-row justify-between items-center px-5 py-2.5 hover:bg-blue-200 focus:bg-blue-200 transition-all"
      >
        <p className="text-black text-base leading-relaxed">
          {categoryName.category}
        </p>
        <div className="">
          <SpriteSVG name="catalog-arrow" />
        </div>
      </Link>

      {isHovered && categoryName.subCategory && (
        <ul>
          {categoryName.subCategory.map((subCategory, index) => (
            <li key={index}>{subCategory}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
