import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Counter } from '.';

import Link from 'next/link';

type Props = {
  toggleSearchVisibility?: () => void;
  openModal: () => void;
};

export default function FunctionalButtons({
  toggleSearchVisibility,
  openModal,
}: Props) {
  return (
    <>
      <div className="flex gap-4 md:gap-8">
        <button
          onClick={toggleSearchVisibility}
          className="w-8 text-blue-700 hover:text-neutral-800 active:text-neutral-400"
        >
          <SpriteSVG name="search" />
        </button>

        <Link
          href={'/signin'}
          className="hidden md:flex text-blue-700 hover:text-neutral-800 active:text-neutral-400 items-center content-center"
        >
          <SpriteSVG name="user" />
        </Link>

        <Link
          href={'/favorites'}
          className="hidden w-8 relative md:block text-blue-700 hover:text-neutral-800 active:text-neutral-400"
        >
          <Counter />
          <SpriteSVG name="favorite-header" />
        </Link>

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
