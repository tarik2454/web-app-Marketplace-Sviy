'use client';

import { MouseEventHandler, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import categoriesData from './data/categories-data';
import CatalogItem from './CatalogItem';
import Container from '@/shared/components/Container/Container';

type CatalogProps = {
  displayCategories: string;
  closeCategoriesClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Catalog({ displayCategories }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Категорії товарів');

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767.9px)' });

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const stylesCatalog = `w-full md:w-[704px] xl:w-[1280px] h-screen my-0 mx-auto bg-neutral-50 md:rounded-br-default md:rounded-bl-default shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] fixed top-0 md:top-[113px] left-[50%] z-20 -translate-x-2/4`;

  return (
    <div
      className={`${displayCategories} ${
        !isSmallScreen ? 'overflow-y-auto' : ''
      } ${stylesCatalog}`}
    >
      <div className="xl:hidden py-6 border-b-2">
        <Container>
          <p className="text-stone-900 text-xl">{selectedCategory}</p>
        </Container>
      </div>

      <nav
        className={`${
          isSmallScreen ? 'my-0 mx-auto overflow-y-auto' : ''
        } max-w-[375px] h-full md:px-8 py-5 md:py-4`}
      >
        <ul className="relative">
          {categoriesData.map((category, index) => (
            <CatalogItem
              object={category}
              key={index}
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
