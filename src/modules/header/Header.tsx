'use client';

import { Cart } from '..';
import { BurgerMenu } from './components';
import Logo from '../../shared/components/Logo/Logo';
import { HamburgerButton, FunctionalButtons, Catalog } from './components';
import Container from '@/shared/components/Container/Container';
import { SearchProducts } from './components';
import { useCallback, useEffect, useRef, useState } from 'react';
import CatalogButton from './components/Catalog/CatalogButton';

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState('hidden');
  const [displaySearchProducts, setDisplaySearchProducts] = useState('hidden');
  const [displayCart, setDisplayCart] = useState('hidden');
  const [displayCategories, setDisplayCategories] = useState('hidden');
  const [displayBackdrop, setDisplayBackdrop] = useState('hidden');

  const backdropRef = useRef<HTMLDivElement | null>(null);

  const searchButtonHandler = () => {
    if (displaySearchProducts === 'hidden') {
      setDisplaySearchProducts('block');
      document.body.style.overflow = 'hidden';
    } else {
      setDisplaySearchProducts('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  const toggleCatalogVisibility = useCallback(() => {
    if (displayCategories && displayBackdrop === 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setDisplayCategories(prevClass =>
      prevClass === 'hidden' ? 'block ' : 'hidden'
    );

    setDisplayBackdrop(prevClass =>
      prevClass === 'hidden' ? 'block' : 'hidden'
    );
  }, [displayBackdrop, displayCategories]);

  const closeCatalog = () => {
    setDisplayCategories('hidden');
    setDisplayBackdrop('hidden');
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (backdropRef.current === (event.target as Node)) {
        toggleCatalogVisibility();
      }
    };

    const handleEscapeClick = (event: KeyboardEvent): void => {
      if (event.code === 'Escape') {
        closeCatalog();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscapeClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleEscapeClick);
    };
  }, [toggleCatalogVisibility]);

  return (
    <>
      <header className="w-full py-[30px] bg-neutral-50 shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] fixed top-0 left-0 z-50">
        <Container>
          <div className="flex items-center gap-auto ">
            <BurgerMenu
              display={displayMenu}
              closeButtonClick={() => setDisplayMenu('hidden')}
            />

            <Cart
              closeButtonClick={() => setDisplayCart('hidden')}
              display={displayCart}
            />

            <CatalogButton
              catalogueClick={() => toggleCatalogVisibility()}
              isClicked={displayCategories === 'block'}
            />

            <HamburgerButton hamburgerClick={() => setDisplayMenu('block')} />

            <div className="mx-auto">
              <Logo />
            </div>

            <FunctionalButtons
              searchButtonClick={searchButtonHandler}
              cartButtonClick={() => setDisplayCart('flex')}
            />
          </div>

          <SearchProducts display={displaySearchProducts} />
        </Container>
      </header>

      <div
        ref={backdropRef}
        className={`${displayBackdrop} w-full h-full bg-black bg-opacity-40 fixed top-0 left-0 z-10`}
      ></div>

      <Catalog
        displayCategories={displayCategories}
        closeCatalogClick={closeCatalog}
      />
    </>
  );
}
