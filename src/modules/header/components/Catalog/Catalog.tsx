'use client';

import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import categoriesData from './data/categories-data';
import CatalogItem from './CatalogItem';
import Backdrop from '@/shared/components/Backdrop/Backdrop';

type CatalogProps = {
  displayCategories: string;
  closeCategoriesClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Catalog({ displayCategories }: CatalogProps) {
  return (
    <div
      className={`${displayCategories} w-[1216px] bg-neutral-50 rounded-br-default rounded-bl-default overflow-y-auto shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] transition-all translate ease-in-out delay-900 duration-900 -translate-x-2/4 fixed top-[113px] left-[50%] z-20`}
    >
      {/* <div className="flex w-screen left-0 py-6 border-b-2">
          <p className="text-stone-900 text-xl">Категорії товарів</p>
        </div> */}

      <nav className="px-8 py-4">
        <ul className="">
          {categoriesData.map((category, index) => (
            <CatalogItem categoryName={category} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
