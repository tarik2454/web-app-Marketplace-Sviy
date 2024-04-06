import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Cart, Counter } from '.';
import { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import Modal from '@/shared/components/Modal/Modal';
import ModalCart from './Cart/ModalCart';

type Props = {
  searchButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function FunctionalButtons({ searchButtonClick }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-4 md:gap-8">
        <button
          onClick={searchButtonClick}
          className="w-8 text-blue-700 hover:text-neutral-800 active:text-neutral-400"
        >
          <SpriteSVG name="search" />
        </button>
        <Link
          href={'/signin'}
          className="hidden w-8 md:flex text-blue-700 hover:text-neutral-800 active:text-neutral-400 items-center content-center"
        >
          <SpriteSVG name="user" />
        </Link>
        <button className="hidden w-8 relative md:block text-blue-700 hover:text-neutral-800 active:text-neutral-400">
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

      <ModalCart isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
