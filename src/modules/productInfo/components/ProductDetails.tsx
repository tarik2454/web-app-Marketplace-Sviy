'use client';

import { ArrowButton, OrangeButton } from '@/shared/components';
import dataProduct from '../data/data-product';
import { SpriteSVG } from '../img/SpriteSVG';
import { useState } from 'react';

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
      <h3 className="mb-5 text-xl md:text-base xl:text-2xl">{title}</h3>

      <div className="flex gap-[2px] mb-[10px]">
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

      <div className="mb-6 font-lora md:font-lato xl:font-lora text-[32px] md:text-2xl xl:text-[32px] leading-[41px] md:leading-[1.6] xl:leading-[41px] text-blue-900">
        {price} грн
        <span className="mr-1 ml-2 font-lato text-[22px] md:text-xl xl:text-[22px] leading-[1.6] text-gray-600">
          /
        </span>
        <span className="font-lato text-xl text-gray-600">шт</span>
      </div>

      <div className="flex items-center gap-[13px] mb-6">
        <button
          className="p-[10px] border border-gray-600 rounded-circle"
          onClick={() => handleCounter('minus')}
        >
          <SpriteSVG name="minus" />
        </button>
        <div className="text-xl text-[#656565]">{isCounter}</div>
        <button
          className="p-[10px] border border-gray-600 rounded-circle"
          onClick={() => handleCounter('plus')}
        >
          <SpriteSVG name="plus" />
        </button>
      </div>

      <div className="flex mb-[29px] md:mb-7 xl:mb-8">
        <OrangeButton cssSettings="px-8 py-3 md:py-[10px] xl:py-3 text-base md:text-sm leading-[1.6]">
          В кошик
        </OrangeButton>
        <ArrowButton cssSettings="px-4">Контакти продавця</ArrowButton>
      </div>

      <div className="flex mb-5 md:mb-[14px] text-blue-900">
        {brand} / {seller}
      </div>

      <div className="flex gap-2">
        <SpriteSVG name="location" />
        <p className="md:text-sm leading-[1.4] text-gray-900">{location}</p>
      </div>
    </div>
  );
}
