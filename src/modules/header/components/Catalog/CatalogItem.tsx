'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type Category = {
  id: number;
  name: string;
  sub_categories?: Category[];
};

type CatalogItemProps = {
  category: Category;
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
    number | null
  >(null);

  const { isOnMobile, isOnDesktop } = ScreenSize();

  const handleMouseEnter = (categoryId: number) => {
    setHoveredCategory(true);
    setIsHoveredSubCategory(categoryId);
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
      className="w-full md:w-[302px] bg-neutral-50 md:bg-white"
      onMouseEnter={() => handleMouseEnter(category.id)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="#"
        className={stylesLink}
        onClick={() => onCategoryClick(category.name)}
      >
        <p className="text-black">{category.name}</p>
        <SpriteSVG name="catalog-arrow" />
        <div className={stylesLining}></div>
      </Link>

      {isHoveredCategory && category.sub_categories && (
        <ul
          className={`w-full md:w-[302px] h-full bg-neutral-50 absolute top-0 z-10 pointer-events-auto ${
            isOnMobile
              ? 'left-0 overflow-y-hidden'
              : 'left-[310px] overflow-y-visible'
          }`}
        >
          {category.sub_categories.map(subCategory => (
            <li
              className="md:bg-white"
              onMouseEnter={() => handleMouseEnter(subCategory.id)}
              onMouseLeave={handleMouseLeave}
              key={subCategory.id}
            >
              <Link href="#" className={stylesLink}>
                <p className="text-black">{subCategory.name}</p>
                <SpriteSVG name="catalog-arrow" />
                <div className={stylesLining}></div>
              </Link>

              {isHoveredSubCategory === subCategory.id &&
                !isOnMobile &&
                setIsThirdList && (
                  <>
                    {isOnDesktop
                      ? setIsThirdList('')
                      : setIsThirdList('pointer-events-none')}

                    <ul className="w-full md:w-[302px] xl:w-[302px] h-full bg-neutral-50 absolute top-0 left-[310px] md:-left-[310px] xl:left-[310px] z-50 pointer-events-auto">
                      {subCategory.sub_categories?.map(item => (
                        <li
                          key={item.id}
                          className="flex w-[302px] bg-neutral-50 md:bg-white"
                          onMouseEnter={() => handleMouseEnter(subCategory.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link href="#" className={stylesLink}>
                            <p className="text-black">{item.name}</p>
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
