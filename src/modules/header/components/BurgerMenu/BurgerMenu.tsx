'use client';

import { Cabinet } from '.';
import { CloseButton } from '@/shared/components/index';
import { Categories } from '@/modules';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Contacts } from '@/modules/footer';
import CatalogueButton from '@/shared/components/CatalogueButton/CatalogueButton';
import Container from '@/shared/components/Container/Container';

type Props = {
  display: string;
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function BurgerMenu({ display, closeButtonClick }: Props) {
  const [displayCategories, setDisplayCategories] = useState('hidden');

  useEffect(() => {
    if (display === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [display]);

  const closeCatalogClick = () => {
    setDisplayCategories('hidden');
  };

  return (
    <div
      className={`${display} md:hidden w-full py-5 bg-neutral-50 fixed inset-0 z-10`}
    >
      <Container>
        <div className="flex justify-end mb-5">
          <CloseButton
            closeButtonClick={closeButtonClick}
            closeCatalogClick={closeCatalogClick}
          />
        </div>

        <nav>
          <Cabinet />

          <div className="w-full max-w-[375px] py-5 border-y-2 absolute top-[158px] left-[50%] -translate-x-2/4">
            <div className="px-4 py-2.5 bg-white">
              <CatalogueButton
                catalogueClick={() => setDisplayCategories('block')}
              />
            </div>
          </div>

          <Contacts stylesContactsUl={'flex-col'} />
        </nav>
      </Container>

      <Categories
        displayCategories={displayCategories}
        closeButtonClick={closeButtonClick}
        closeCatalogClick={closeCatalogClick}
      />
    </div>
  );
}
