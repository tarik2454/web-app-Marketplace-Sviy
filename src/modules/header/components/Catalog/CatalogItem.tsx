'use client';

import { useState } from 'react';
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
};

export default function CatalogItem({ object }: CatalogItemProps) {
  const [isHovered, setHovered] = useState(false);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(
    null
  );
  const styleLink = `flex justify-between items-center w-full px-5 py-2.5 hover:bg-blue-200 focus:bg-blue-200 transition-all relative`;
  const styleLining = `w-full h-full bg-transparent absolute top-0 left-2 z-10`;

  const handleMouseEnter = (subCategoryTitle: string) => {
    setHovered(true);
    setHoveredSubCategory(subCategoryTitle);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredSubCategory(null);
  };

  return (
    <li
      className="w-[302px] bg-white"
      onMouseEnter={() => handleMouseEnter(object.category)}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="#" className={styleLink}>
        <p className="text-black text-base leading-relaxed">
          {object.category}
        </p>

        <SpriteSVG name="catalog-arrow" />

        <div className={styleLining}></div>
      </Link>

      {isHovered && object.subCategories && (
        <ul className="w-[302px] absolute top-0 left-[310px]">
          {object.subCategories.map((subCategory, index) => (
            <li
              className="bg-white"
              onMouseEnter={() => handleMouseEnter(subCategory.title)}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              <Link href="#" className={styleLink}>
                <p className="text-black text-base leading-relaxed">
                  {subCategory.title}
                </p>

                <div className="">
                  <SpriteSVG name="catalog-arrow" />
                </div>

                <div className={styleLining}></div>
              </Link>

              {hoveredSubCategory === subCategory.title && (
                <ul className="w-[302px] absolute top-0 left-[310px]">
                  {subCategory.items.map((item, index) => (
                    <li key={index} className="flex bg-[white]">
                      <Link href="#" className={styleLink}>
                        <p className="text-black text-base leading-relaxed">
                          {item}
                        </p>
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
