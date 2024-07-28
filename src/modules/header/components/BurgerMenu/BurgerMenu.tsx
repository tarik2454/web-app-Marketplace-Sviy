'use client';

import { Cabinet } from '.';
import { Catalog } from '../Catalog';
import { CatalogueButton, CloseButton } from '@/shared/components/index';
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import { Contacts } from '@/modules/footer';
import Container from '@/shared/components/Container/Container';
import { twMerge } from 'tailwind-merge';

type CatalogItemType = {
  id: number;
  name: string;
  items: [];
};

type Props = {
  display: string;
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
  setDisplayMenu: Dispatch<SetStateAction<string>>;
  catalogData: CatalogItemType[];
};

export default function BurgerMenu({
  display,
  closeButtonClick,
  setDisplayMenu,
  catalogData,
}: Props) {
  const [displayCategories, setDisplayCategories] = useState('hidden');

  const closeCatalogClick = () => {
    setDisplayCategories('hidden');
  };

  return (
    <div
      className={twMerge(
        display,
        `md:hidden w-full py-5 bg-neutral-50 fixed inset-0 z-10`
      )}
    >
      <Container>
        <div className="flex justify-end mb-5">
          <CloseButton
            closeButtonClick={closeButtonClick}
            closeCatalogClick={closeCatalogClick}
          />
        </div>

        <nav>
          <Cabinet setDisplayMenu={setDisplayMenu} />
          <div className="w-full max-w-[375px] py-5 border-y-2 absolute top-[158px] left-[50%] -translate-x-2/4">
            <div className="px-4 py-2.5 bg-white">
              <CatalogueButton
                catalogueClick={() => setDisplayCategories('block')}
              />
            </div>
          </div>
          <Contacts
            stylesContactsUl={'flex-col'}
            setDisplayMenu={setDisplayMenu}
          />
        </nav>
      </Container>

      <Catalog
        catalogData={catalogData}
        displayCategories={displayCategories}
        closeButtonClick={closeButtonClick}
        closeCatalogClick={closeCatalogClick}
      />
    </div>
  );
}
