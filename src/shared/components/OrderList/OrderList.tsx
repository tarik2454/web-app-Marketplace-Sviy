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
        <div className="flex pt-2 gap-4 xl:gap-6 md:gap-2 mb-4" key={counter}>
          <div className="max-w-[136px] max-h-[100px] rounded-default overflow-hidden">
            <Image
              className="w-full object-contain"
              width={0}
              height={0}
              sizes="100vh"
              src={OrderImage}
              alt="Order photo"
            />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-0 xl:gap-16">
            <li className="flex-col">
              <p className="text-sm leading-[1.4] md:leading-[1.6] md:text-base mb-[22px] md:mb-10">
                {cartItem.heading}
              </p>
              <AmountButtons />
            </li>
            <li className="hidden flex-col md:flex my-2 text-center pt-6">
              <p className="text-center">Ціна</p>
              <p className="text-xl text-center">{cartItem.price}</p>
            </li>
            <li className="flex flex-col items-end">
              <button className="mb-8 md:mb-3">
                <SpriteSVG name="trash" />
              </button>
              <p className="hidden md:block">Сума</p>
              <p className="text-sm md:text-2xl">{cartItem.price}</p>
            </li>
          </ul>
        </div>
      ))}
    </ul>
  );
}
