import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Cart, Counter } from '.';
import { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import Modal from '@/shared/components/Modal/Modal';

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

      <Modal
        stylesWrapper={`max-w-[375px] h-screen px-5 py-6 bg-neutral-50 overflow-y-auto rounded-none 
        md:max-w-[704px] md:h-3/4 md:m-auto md:py-5 md:px-4 md:rounded-default
        xl:max-w-[1280px] xl:p-[32px]`}
        stylesCloseButton="top-[30.5px] right-4 md:top-[25px] md:right-4 xl:top-[32px] xl:right-[32px]"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Cart />
      </Modal>
    </>
  );
}
