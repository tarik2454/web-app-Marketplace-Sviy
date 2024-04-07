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
  // border-b-[1px] border-gray-600
  return (
    <ul className={twMerge(`max-w-full`, stylesUlWrapper)}>
      {cartItems.map((cartItem, counter) => (
        <li
          className="flex pt-2 gap-4 mb-4 border-b-[1px] border-gray-600 md:gap-2 md:pb-6 xl:gap-6 "
          key={counter}
        >
          <div className="max-w-[136px] max-h-[100px] rounded-default overflow-hidden">
            <Image
              className="w-full"
              width={0}
              height={0}
              sizes="100vh"
              src={OrderImage}
              alt="Order photo"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 xl:gap-16">
            <div className="flex-col">
              <p className="text-sm leading-[1.4] md:leading-[1.6] md:text-base mb-[22px] md:mb-10">
                {cartItem.heading}
              </p>
              <AmountButtons />
            </div>
            <div className="hidden flex-col md:flex my-2 text-center pt-6">
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
