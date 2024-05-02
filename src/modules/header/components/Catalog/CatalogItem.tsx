'use client';

import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

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
  setIsThirdList?: (value: string) => void;
};

export default function CatalogItem({
  object,
  onCategoryClick,
  setIsThirdList,
}: CatalogItemProps) {
  const [isHovered, setHovered] = useState(false);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(
    null
  );

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isDescktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  const handleMouseEnter = (categoryTitle: string) => {
    setHovered(true);
    setHoveredSubCategory(categoryTitle);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredSubCategory(null);
    if (setIsThirdList) {
      setIsThirdList('');
    }
  };

  const stylesLink = `flex justify-between items-center w-full px-4 md:px-5 py-2.5 hover:bg-blue-200 focus:bg-blue-200 transition-all relative`;
  const stylesLining = `hidden md:block w-full h-full bg-transparent absolute top-0 left-2 z-10`;

  return (
    <li
      className={`w-full md:w-[302px] bg-neutral-50 md:bg-white `}
      onMouseEnter={() => handleMouseEnter(object.category)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="#"
        className={stylesLink}
        onClick={() => onCategoryClick(object.category)}
      >
        <p className="text-black">{object.category}</p>
        <SpriteSVG name="catalog-arrow" />
        <div className={stylesLining}></div>
      </Link>

      {isHovered && object.subCategories && setIsThirdList && (
        <>
          {/* {isDescktopScreen
            ? setIsThirdList('')
            : setIsThirdList('pointer-events-none')} */}
          <ul
            className={`w-full md:w-[302px] h-full bg-neutral-50 absolute top-0 z-10 pointer-events-auto ${
              isHovered && isSmallScreen
                ? 'left-0 overflow-y-hidden'
                : 'left-[310px] overflow-y-visible'
            }`}
          >
            {object.subCategories.map((subCategory, index) => (
              <li
                className="md:bg-white"
                onMouseEnter={() => handleMouseEnter(subCategory.title)}
                onMouseLeave={handleMouseLeave}
                key={index}
              >
                <Link href="#" className={stylesLink}>
                  <p className="text-black">{subCategory.title}</p>
                  <SpriteSVG name="catalog-arrow" />
                  <div className={stylesLining}></div>
                </Link>

                {hoveredSubCategory === subCategory.title &&
                  !isSmallScreen &&
                  setIsThirdList && (
                    <>
                      {isDescktopScreen
                        ? setIsThirdList('')
                        : setIsThirdList('pointer-events-none')}

                      <ul
                        className={`w-full md:w-[302px] xl:w-[302px] h-full bg-neutral-50 absolute top-0 left-[310px] md:-left-[310px] xl:left-[310px] z-50 pointer-events-auto `}
                      >
                        {subCategory.items.map((item, index) => (
                          <li
                            key={index}
                            className="flex w-[302px] bg-neutral-50 md:bg-white"
                            onMouseEnter={() =>
                              handleMouseEnter(subCategory.title)
                            }
                            onMouseLeave={handleMouseLeave}
                          >
                            <Link href="#" className={stylesLink}>
                              <p className="text-black">{item}</p>
                              <div className={stylesLining}></div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}
