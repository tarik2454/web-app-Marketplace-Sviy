'use client';

import { AmountButtons } from '@/modules/header/components/Cart';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Image from 'next/image';
import OrderImage from '@/shared/img/salo.jpeg';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import ScreenSize from '@/shared/hooks/useMediaQuery';

type OrderListObjectProps = {
  heading: string;
  price: string;
};

type OrderListProps = {
  cartItems: OrderListObjectProps[];
  stylesUlWrapper?: string;
  stylesLiWrapper?: string;
  stylesImageWrapper?: string;
  stylesContentWrapper?: string;
  stylesProductName?: string;
  stylesPriceWrapper?: string;
  stylesSumWrapper?: string;
  stylesSumNumber?: string;
  stylesButton?: string;
  stylesSumWord?: string;
  isInCart?: boolean;
};

export default function OrderList({
  cartItems,
  stylesUlWrapper,
  stylesLiWrapper,
  stylesImageWrapper,
  stylesContentWrapper,
  stylesProductName,
  stylesPriceWrapper,
  stylesSumWrapper,
  stylesSumNumber,
  stylesButton,
  stylesSumWord,
  isInCart = false,
}: OrderListProps) {
  const { isOnMobile, isOnTablet, isOnDesktop } = ScreenSize();

  return (
    <ul className={twMerge(`max-w-full`, stylesUlWrapper)}>
      {cartItems.map((cartItem, counter) => (
        <li
          className={twMerge(
            `flex pt-2 gap-4 mb-4 border-b-0 border-gray-600 pb-0 last:border-b-0 last:pb-0 md:border-b-[1px] md:gap-6 md:pb-6`,
            stylesLiWrapper
          )}
          key={counter}
        >
          <div
            className={twMerge(
              `max-w-[82px] max-h-[82px] rounded-default overflow-hidden md:max-w-[136px] md:max-h-[100px]`,
              stylesImageWrapper
            )}
          >
            <Image
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vh"
              src={OrderImage}
              alt="Order photo"
            />
          </div>
          <div
            className={twMerge(
              `flex justify-between w-full xl:gap-16`,
              stylesContentWrapper
            )}
          >
            <div className="flex flex-col justify-center">
              <p
                className={twMerge(
                  `max-w-[222px] text-sm leading-[1.4] mb-[22px] md:leading-[1.6] md:mb-10 md:text-base`,
                  stylesProductName
                )}
              >
                {cartItem.heading}
              </p>
              {(!isInCart && (
                <AmountButtons stylesWrapper={'w-auto md:w-auto xl:w-auto'} />
              )) ||
                null}
            </div>

            <div
              className={twMerge(
                `hidden flex-col my-2 text-center pt-6 md:flex`,
                stylesPriceWrapper
              )}
            >
              <p className="text-center">Ціна</p>
              <p className="text-xl text-center">{cartItem.price}</p>
            </div>

            <div
              className={twMerge(`flex flex-col items-end`, stylesSumWrapper)}
            >
              <button className={twMerge(`mb-8 md:mb-3`, stylesButton)}>
                <SpriteSVG name="trash" />
              </button>

              <p className={twMerge(`hidden md:block`, stylesSumWord)}>Сума</p>
              <p className={twMerge(`text-sm md:text-2xl`, stylesSumNumber)}>
                {cartItem.price} <span> ₴</span>
              </p>
              {isInCart && (isOnTablet || isOnDesktop) ? (
                <AmountButtons stylesWrapper={'w-auto md:w-auto xl:w-auto'} />
              ) : null}
            </div>

            {(isInCart && isOnMobile && <AmountButtons />) || null}
          </div>
        </li>
      ))}
    </ul>
  );
}
