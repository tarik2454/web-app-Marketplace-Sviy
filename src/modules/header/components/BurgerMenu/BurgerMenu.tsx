'use client';
import { CatalogButton } from '@/shared/components/index';
import { Cabinet } from '.';
import { CloseButton } from '@/shared/components/index';
import { Categories } from '@/modules';
import { MouseEventHandler, useState } from 'react';
import { Contacts } from '@/modules/footer';

type Props = {
  display: String;
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function BurgerMenu({ display, closeButtonClick }: Props) {
  const [categoriesDisplay, setCategoriesDisplay] = useState('hidden');

  return (
    <nav
      className={`${display} fixed z-20 w-full h-screen inset-0 px-4 py-5 overflow-y-auto bg-white`}
    >
      <CloseButton closeButtonClick={closeButtonClick} />
      {/* <Cabinet />
      <div className="block absolute w-screen left-0 py-5 px-4 mt-5 border-y-2">
        <CatalogButton catalogueClick={() => setCategoriesDisplay('block')} />
      </div>
      <Cabinet />

      <div className="block w-screen py-5 px-4 mt-5 border-y-2">
        <CatalogueButton catalogueClick={() => setCategoriesDisplay("block")} />
      </div>

      <div className="mt-5 px-4">
        <Contacts />
      </div>

      <Categories
        categoriesDisplay={categoriesDisplay}
        closeCategoriesClick={() => setCategoriesDisplay('hidden')}
      />  */}

    </nav>
  );
}
