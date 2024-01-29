'use client';

import { useEffect, useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Link from 'next/link';

type SubCategory = {
  title: string;
  items: string[];
};

type CategoryWithSubcategories = {
  id?: number;
  category: string;
  subCategories?: SubCategory[];
};

type CatalogItemProps = {
  object: CategoryWithSubcategories;
  onCategoryClick: (categoryName: string) => void;
};

export default function CatalogItem({
  object,
  onCategoryClick,
}: CatalogItemProps) {
  const [isHovered, setHovered] = useState(false);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(
    null
  );

  const handleMouseEnter = (subCategoryTitle: string) => {
    setHovered(true);
    setHoveredSubCategory(subCategoryTitle);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredSubCategory(null);
  };

  const stylesLink = `flex justify-between items-center w-full px-4 md:px-5 py-2.5 hover:bg-blue-200 focus:bg-blue-200 transition-all relative`;
  const stylesLining = `hidden md:block w-full h-full bg-transparent absolute top-0 left-2 z-10`;

  return (
    <li
      className="md:w-[302px] md:bg-white"
      onMouseEnter={() => handleMouseEnter(object.category)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="#"
        className={stylesLink}
        onClick={() => onCategoryClick(object.category)}
      >
        <p className="text-black leading-3">{object.category}</p>

        <SpriteSVG name="catalog-arrow" />

        {<div className={stylesLining}></div>}
      </Link>

      {isHovered && object.subCategories && (
        <ul className="w-[302px] absolute top-0 left-[310px]">
          {object.subCategories.map((subCategory, index) => (
            <li
              className="md:bg-white"
              onMouseEnter={() => handleMouseEnter(subCategory.title)}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              <Link href="#" className={stylesLink}>
                <p className="text-black leading-3">{subCategory.title}</p>

                <div className="">
                  <SpriteSVG name="catalog-arrow" />
                </div>

                <div className={stylesLining}></div>
              </Link>

              {hoveredSubCategory === subCategory.title && (
                <ul className="w-[302px] absolute top-0 left-[310px]">
                  {subCategory.items.map((item, index) => (
                    <li key={index} className="flex md:bg-white">
                      <Link href="#" className={stylesLink}>
                        <p className="text-black leading-3">{item}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
