'use client';

import { MouseEventHandler, useState } from 'react';
import categoriesData from './data/categories-data';
import CatalogItem from './CatalogItem';
import Container from '@/shared/components/Container/Container';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { CloseButton } from '@/shared/components';

type CatalogProps = {
  displayCategories: string;
  closeCatalogClick?: MouseEventHandler<HTMLButtonElement>;
  closeButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Catalog({
  displayCategories,
  closeCatalogClick,
  closeButtonClick,
}: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Категорії товарів');
  const [isThirdList, setIsThirdList] = useState('');

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const stylesCatalog = `w-full md:w-[704px] xl:w-[1280px] h-full md:h-[80vh] my-0 mx-auto bg-neutral-50 md:rounded-br-default md:rounded-bl-default shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] absolute top-0 md:top-[113px] left-[50%] z-20 -translate-x-2/4`;

  return (
    <div className={`${displayCategories} ${stylesCatalog}`}>
      <div className="h-full md:h-[80vh] overflow-y-auto">
        <div className="xl:hidden py-5 border-b-2">
          <Container>
            <div
              className="flex items-center justify-between"
              onClick={() => {
                setSelectedCategory('Категорії товарів');
                setIsThirdList('');
              }}
            >
              <button className="flex items-center gap-3">
                <SpriteSVG name="catalog-arrow-left" />

                <p className="text-stone-900 text-xl leading-8">
                  {selectedCategory}
                </p>
              </button>

              <CloseButton
                closeButtonClick={closeButtonClick}
                closeCatalogClick={closeCatalogClick}
              />
            </div>
          </Container>
        </div>

        <nav className="max-w-[375px] my-0 mx-auto md:mx-0 py-5 md:w-full md:px-8 md:py-4">
          <ul className={`relative ${isThirdList}`}>
            {categoriesData.map((category, index) => (
              <CatalogItem
                object={category}
                key={index}
                onCategoryClick={handleCategoryClick}
                setIsThirdList={setIsThirdList}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
