'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';

import { Counter } from '.';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  toggleSearchVisibility: MouseEventHandler<HTMLButtonElement>;
  openModal: () => void;
  setShowCatalog: Dispatch<SetStateAction<boolean>>;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
};

export default function FunctionalButtons({
  toggleSearchVisibility,
  openModal,
  setShowCatalog,
  setShowSearch,
}: Props) {
  const router = useRouter();
  const signinPage = '/signin';
  const favoritesPage = '/favorites';

  const handleSigninClick = () => {
    setShowCatalog(false);
    setShowSearch(false);
    router.push(signinPage);
  };

  const handleFavoritesClick = () => {
    setShowCatalog(false);
    setShowSearch(false);
    router.push(favoritesPage);
  };

  return (
    <>
      <div className="flex gap-4 md:gap-8">
        <button
          onClick={toggleSearchVisibility}
          className="w-8 text-blue-700 hover:text-neutral-800 active:text-neutral-400"
        >
          <SpriteSVG name="search" />
        </button>

        <button
          onClick={handleSigninClick}
          className="hidden md:flex text-blue-700 hover:text-neutral-800 active:text-neutral-400 items-center content-center"
        >
          <SpriteSVG name="user" />
        </button>

        <button
          onClick={handleFavoritesClick}
          className="hidden w-8 relative md:block text-blue-700 hover:text-neutral-800 active:text-neutral-400"
        >
          <Counter />
          <SpriteSVG name="favorite-header" />
        </button>

        <button
          onClick={openModal}
          className="relative w-8 text-blue-700 hover:text-neutral-800 active:text-neutral-400"
        >
          <Counter />
          <div>
            <SpriteSVG name="cart" />
          </div>
        </button>
      </div>
    </>
  );
}
