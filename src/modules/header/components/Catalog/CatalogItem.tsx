'use client';

import { useState } from 'react';
import Link from 'next/link';

import ScreenSize from '@/shared/hooks/useMediaQuery';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type SubCategory = {
  title: string;
  items: string[];
};

type CategoryWithSubcategories = {
  id: number;
  title: string;
  subCategories?: SubCategory[];
};

type CatalogItemProps = {
  category: CategoryWithSubcategories;
  onCategoryClick: (categoryName: string) => void;
  setIsThirdList?: (value: string) => void;
};

export default function CatalogItem({
  category,
  onCategoryClick,
  setIsThirdList,
}: CatalogItemProps) {
  const [isHoveredCategory, setHoveredCategory] = useState(false);
  const [isHoveredSubCategory, setIsHoveredSubCategory] = useState<
    string | null
  >(null);

  const { isOnMobile, isOnDesktop } = ScreenSize();

  const handleMouseEnter = (categoryTitle: string) => {
    setHoveredCategory(true);
    setIsHoveredSubCategory(categoryTitle);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(false);
    setIsHoveredSubCategory(null);
    if (setIsThirdList) {
      setIsThirdList('');
    }
  };

  const stylesLink = `flex justify-between items-center w-full px-4 md:px-5 py-2.5 hover:bg-blue-200 focus:bg-blue-200 transition-all relative`;
  const stylesLining = `hidden md:block w-full h-full bg-transparent absolute top-0 left-2 z-10`;

  return (
    <li
      className={`w-full md:w-[302px] bg-neutral-50 md:bg-white `}
      onMouseEnter={() => handleMouseEnter(category.title)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="#"
        className={stylesLink}
        onClick={() => onCategoryClick(category.title)}
      >
        <p className="text-black">{category.title}</p>
        <SpriteSVG name="catalog-arrow" />
        <div className={stylesLining}></div>
      </Link>

      {isHoveredCategory && category.subCategories && (
        <ul
          className={`w-full md:w-[302px] h-full bg-neutral-50 absolute top-0 z-10 pointer-events-auto ${
            isHoveredCategory && isOnMobile
              ? 'left-0 overflow-y-hidden'
              : 'left-[310px] overflow-y-visible'
          }`}
        >
          {category.subCategories.map((subCategory, index) => (
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

              {isHoveredSubCategory === subCategory.title &&
                !isOnMobile &&
                setIsThirdList && (
                  <>
                    {isOnDesktop
                      ? setIsThirdList('')
                      : setIsThirdList('pointer-events-none')}

                    <ul
                      className={`w-full md:w-[302px] xl:w-[302px] h-full bg-neutral-50 absolute top-0 left-[310px] md:-left-[310px] xl:left-[310px] z-50 pointer-events-auto`}
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
      )}
    </li>
  );
}
