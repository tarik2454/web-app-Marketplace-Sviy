'use client';

import { Cart, Categories } from '..';
import { BurgerMenu } from './components';
import Logo from '../../shared/components/Logo/Logo';
import { HamburgerButton, FunctionalButtons, Catalog } from './components';
import Container from '@/shared/components/Container/Container';
import { SearchProducts } from './components';
import { useState } from 'react';
import CatalogButton from './components/Catalog/CatalogButton';

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState('hidden');
  const [displaySearchProducts, setDisplaySearchProducts] = useState('hidden');
  const [displayCart, setDisplayCart] = useState('hidden');
  const [displayCategories, setDisplayCategories] = useState('hidden');

  const searchButtonHandler = () => {
    if (displaySearchProducts === 'hidden') {
      setDisplaySearchProducts('block');
      document.body.style.overflow = 'hidden';
    } else {
      setDisplaySearchProducts('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  const toggleCatalogVisibility = () => {
    setDisplayCategories(prevClass =>
      prevClass === 'hidden' ? 'visible' : 'hidden'
    );
  };

  return (
    <header className="w-full py-[30px] bg-neutral-50 shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] fixed z-50 ">
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

          <CatalogButton catalogueClick={() => toggleCatalogVisibility()} />
          <Catalog displayCategories={displayCategories} />

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

  );
}
