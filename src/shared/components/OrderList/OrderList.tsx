'use client';

import { AmountButtons } from '@/modules/header/components/Cart';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Image from 'next/image';
import OrderImage from '@/shared/img/salo.jpeg';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type OrderListProps = {
  heading: string;
  price: string;
  // image: string;
};

export default function OrderList({
  cartItems,
  stylesUlWrapper,
}: {
  cartItems: OrderListProps[];
  stylesUlWrapper?: string;
}) {
  return (
    <ul className={twMerge(`max-w-full`, stylesUlWrapper)}>
      {cartItems.map((cartItem, counter) => (
        <li
          className="flex pt-2 gap-4 mb-4 border-b-0 border-gray-600 pb-0 last:border-b-0 last:pb-0 md:border-b-[1px] md:gap-6 md:pb-6"
          key={counter}
        >
          <div className="max-w-[82px] rounded-default overflow-hidden max-h-[82px] md:max-w-[136px] md:max-h-[100px]">
            <Image
              className="w-full"
              width={0}
              height={0}
              sizes="100vh"
              src={OrderImage}
              alt="Order photo"
            />
          </div>
          <div className="grid grid-cols-2 gap-0 md:grid-cols-3 xl:gap-16">
            <div className="flex-col">
              <p className="text-sm leading-[1.4] mb-[22px] sm:whitespace-nowrap md:leading-[1.6] md:mb-10 md:text-base whitespace-normal">
                {cartItem.heading}
              </p>
              <AmountButtons />
            </div>
            <div className="hidden flex-col my-2 text-center pt-6 md:flex">
              <p className="text-center">Ціна</p>
              <p className="text-xl text-center">{cartItem.price}</p>
            </div>
            <div className="flex flex-col items-end">
              <button className="mb-8 md:mb-3">
                <SpriteSVG name="trash" />
              </button>
              <p className="hidden md:block">Сума</p>
              <p className="text-sm md:text-2xl">{cartItem.price}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
