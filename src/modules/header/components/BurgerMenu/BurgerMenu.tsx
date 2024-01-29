'use client';

import { Cabinet } from '.';
import { CloseButton } from '@/shared/components/index';
import { Categories } from '@/modules';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Contacts } from '@/modules/footer';
import CatalogueButton from '@/shared/components/CatalogueButton/CatalogueButton';
import Container from '@/shared/components/Container/Container';

type Props = {
  display: String;
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function BurgerMenu({ display, closeButtonClick }: Props) {
  const [displayCategories, setDisplayCategories] = useState('hidden');

  useEffect(() => {
    if (display === 'hidden') {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [display]);

  return (
    <div
      className={`${display} md:hidden w-full h-screen pb-5 bg-neutral-50 fixed inset-0 z-10`}
    >
      <CloseButton closeButtonClick={closeButtonClick} />

      <nav>
        <Container>
          <Cabinet />

          <div className="w-full max-w-[375px] py-5 border-y-2 absolute top-[158px] left-[50%] -translate-x-2/4">
            <div className="px-4 py-2.5 bg-white">
              <CatalogueButton
                catalogueClick={() => setDisplayCategories('block')}
              />
            </div>
          </div>

          <div className="h-screen overflow-y-auto ">
            <Contacts />
          </div>
        </Container>
      </nav>

      <Categories
        displayCategories={displayCategories}
        closeCategoriesClick={() => setDisplayCategories('hidden')}
      />
    </div>
  );
}
