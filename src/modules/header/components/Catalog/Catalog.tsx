import { CloseCatalogButton } from '@/shared/components';
import { MouseEventHandler } from 'react';
import categoriesData from '../../data/categories-data';
import Container from '@/shared/components/Container/Container';
import CatalogItem from './CatalogItem';

type Props = {
  displayCategories?: string;
  closeCategoriesClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Catalog({ displayCategories }: Props) {
  return (
    <div
      className={`${displayCategories} min-w-[1216px] bg-neutral-50 rounded-br-default rounded-bl-default overflow-y-auto -translate-x-2/4 shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] absolute top-[100px] left-[50%] z-0`}
    >
      {/* <div className="flex w-screen left-0 py-6 border-b-2">
          <p className="text-stone-900 text-xl">Категорії товарів</p>
        </div> */}

      <nav className="px-8 py-4">
        <ul className="">
          {categoriesData.map((category, counter) => (
            <CatalogItem categoryName={category} key={counter} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
