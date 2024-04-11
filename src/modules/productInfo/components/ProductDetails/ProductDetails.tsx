'use client';

import { useState } from 'react';

import dataProduct from '../../data/data-product';
import { ArrowButton, OrangeButton } from '@/shared/components';
import { SpriteSVG } from '../../image/SpriteSVG';
import { ButtonAddFavorite, ButtonCounter, ModalSeller, Price } from '.';
import ScreenSize from '@/shared/hooks/useMediaQuery';

export default function ProductDetails() {
  const {
    title,
    rating,
    amountFeedback,
    availability,
    price,
    brand,
    seller,
    location,
  } = dataProduct;
  const [isCounter, setIsCounter] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { isOnDesktop } = ScreenSize();

  const stars = Array.from({ length: rating });

  const handleCounter = (value: string) => {
    if (value === 'minus') {
      if (isCounter > 1) {
        setIsCounter(prevState => prevState - 1);
        return;
      }
    } else {
      setIsCounter(prevState => prevState + 1);
    }
  };

  return (
    <div className="flex flex-col xl:px-6 xl:py-[22px] xl:rounded-default xl:bg-white">
      {(isOnDesktop && (
        <div className="flex items-start">
          <h3 className="mb-5 md:mb-3 xl:mb-5 text-xl md:text-base xl:text-2xl">
            {title}
          </h3>
          <ButtonAddFavorite stylesWrapper="relative" />
        </div>
      )) || (
        <h3 className="mb-5 md:mb-3 xl:mb-5 text-xl md:text-base xl:text-2xl">
          {title}
        </h3>
      )}

      <div className="flex gap-[3px] mb-3">
        {stars.map((_, index) => (
          <div key={index}>
            <SpriteSVG name="star" />
          </div>
        ))}
      </div>

      <div className="flex justify-between mb-7 md:mb-6 xl:mb-7 md:text-xs xl:text-base">
        <div className="text-gray-600">{amountFeedback} Відгуків</div>
        <div className="text-blue-900">
          {(availability && 'В наявності') || 'Нема в наявності'}
        </div>
      </div>

      <div className="md:flex md:justify-between xl:block">
        <Price stylesWrapper="mb-6" price={price} />
        <ButtonCounter
          stylesWrapper="mb-6"
          handleMinusClick={() => handleCounter('minus')}
          handlePlusClick={() => handleCounter('plus')}
          counter={isCounter}
        />
      </div>

      <div className="flex justify-between xl:justify-normal xl:gap-6 mb-6 xl:mb-7">
        <OrangeButton cssSettings="px-8 py-3 md:py-[10px] xl:py-3 text-base md:text-sm xl:text-base font-normal md:leading-[1.4] text-white">
          В кошик
        </OrangeButton>
        <ArrowButton
          cssSettings="items-center pl-[18px] pr-2 py-3 md:py-[6px] xl:py-3 text-base md:text-sm xl:text-base md:leading-[1.4]"
          onClick={openModal}
        >
          Контакти продавця
        </ArrowButton>
      </div>

      <div className="flex mb-4 md:mb-[10px] text-blue-900">
        {brand} / {seller}
      </div>

      <div className="flex gap-2">
        <SpriteSVG name="location" />
        <p className="md:text-sm leading-[1.4] text-gray-900">{location}</p>
      </div>

      <ModalSeller isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
