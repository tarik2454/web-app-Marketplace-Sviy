'use client';

import { BurgerMenu } from './components';
import Logo from '../../shared/components/Logo/Logo';
import { HamburgerButton, FunctionalButtons, Catalog } from './components';
import Container from '@/shared/components/Container/Container';
import { SearchProducts } from './components';
import { useCallback, useEffect, useRef, useState } from 'react';
import CatalogButton from './components/Catalog/CatalogButton';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import ModalCart from './components/Cart/ModalCart';

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState('hidden');
  const [displayCategories, setDisplayCategories] = useState('hidden');
  const [showCatalog, setShowCatalog] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isOnMobile, isOnTablet } = ScreenSize();

  const backdropCatalogRef = useRef<HTMLDivElement | null>(null);
  const backdropSearchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (displayMenu === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [displayMenu]);

  const toggleCatalogVisibility = useCallback(() => {
    if (showCatalog) {
      setShowCatalog(false);
      document.body.style.overflow = 'auto';
    } else {
      setShowCatalog(true);
      setShowSearch(false);
      setDisplayCategories('block');
      document.body.style.overflow = 'hidden';
    }
  }, [showCatalog]);

  const toggleSearchVisibility = useCallback(() => {
    if (showSearch) {
      setShowSearch(false);
      document.body.style.overflow = 'auto';
    } else {
      setShowSearch(true);
      setShowCatalog(false);
      document.body.style.overflow = 'hidden';
    }
  }, [showSearch]);

  const closeBackdrop = () => {
    setShowCatalog(false);
    setShowSearch(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (
        backdropCatalogRef.current === event.target ||
        backdropSearchRef.current === event.target
      ) {
        closeBackdrop();
      }
    };

    const handleEscapeClick = (event: KeyboardEvent): void => {
      if (event.code === 'Escape') {
        closeBackdrop();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscapeClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleEscapeClick);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-full py-[22.5px] md:py-[30px] bg-neutral-50 shadow-[2px_2px_12px_0_rgba(186,186,186,0.40)] fixed top-0 left-0 z-50">
        <Container>
          <div className="flex items-center gap-auto ">
            <BurgerMenu
              display={displayMenu}
              setDisplayMenu={setDisplayMenu}
              closeButtonClick={() => setDisplayMenu('hidden')}
            />

            <CatalogButton
              catalogueClick={toggleCatalogVisibility}
              isClicked={showCatalog}
            />

            <HamburgerButton hamburgerClick={() => setDisplayMenu('block')} />

            <div className="mx-auto">
              {isOnMobile ? (
                <Logo logo="logoHeaderMobile" />
              ) : isOnTablet ? (
                <Logo logo="logoTablet" />
              ) : (
                <Logo logo="logoHeaderDesktop" />
              )}
            </div>

            <FunctionalButtons
              openModal={openModal}
              toggleSearchVisibility={toggleSearchVisibility}
              setShowCatalog={setShowCatalog}
              setShowSearch={setShowSearch}
            />
          </div>
        </Container>
      </header>

      {showCatalog && (
        <div
          className="w-full h-full bg-black bg-opacity-40 fixed top-0 left-0 z-10"
          ref={backdropCatalogRef}
        >
          <Catalog
            displayCategories={displayCategories}
            closeCatalogClick={closeBackdrop}
          />
        </div>
      )}

      {showSearch && (
        <div
          className="w-full h-full bg-black bg-opacity-40 fixed top-0 left-0 z-10"
          ref={backdropSearchRef}
        >
          <SearchProducts toggleSearchVisibility={toggleSearchVisibility} />
        </div>
      )}

      <ModalCart
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        showCatalog={showCatalog}
        showSearch={showSearch}
      />
    </>
  );
}
