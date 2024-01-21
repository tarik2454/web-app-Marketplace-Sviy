"use client"
import Section from '@/shared/components/Section/Section';
import { BurgerMenu, Cart } from '..';
import Logo from '../../shared/components/Logo/Logo';
import { HamburgerButton, FunctionalButtons } from './components';
import { CatalogueButton } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import { SearchProducts } from '..';
import { useState } from 'react';

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState("hidden");
  const [displaySearchProducts, setDisplaySearchProducts] = useState("hidden");
  const [displayCart, setDisplayCart] = useState("hidden");

  const searchButtonHandler = () => {
    if (displaySearchProducts === "hidden") {
      setDisplaySearchProducts("block");
      document.body.style.overflow = "hidden";
    } else {
      setDisplaySearchProducts("hidden");
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div className="w-full bg-white">
      <Section>
        <Container>
          <header className="flex font-normal w-full items-center h-20 gap-auto xl:h-24">
            <BurgerMenu display={displayMenu} closeButtonClick={() => setDisplayMenu("hidden")} />
            <Cart closeButtonClick={() => setDisplayCart("hidden")} display={displayCart} />
            <div className="hidden pl-5 pr-8 py-3 border-2 border-blue-700 text-blue-700 rounded-default md:block">
              <CatalogueButton catalogueClick={() => {}} />
            </div>
            <HamburgerButton hamburgerClick={() => setDisplayMenu("block")} />
            <div className="mx-auto">
              <Logo />
            </div>
            <FunctionalButtons 
              searchButtonClick={searchButtonHandler}
              cartButtonClick={() => setDisplayCart("flex")}
            />
          </header>
          <SearchProducts display={displaySearchProducts} />
        </Container>
      </Section>
    </div>
  );
}
