import { AmountButtons } from '@/modules/header/components/Cart';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React from 'react';

type OrderListProps = {
  heading: string;
  price: string;
};

export default function OrderList({
  cartItems,
}: {
  cartItems: OrderListProps[];
}) {
  return (
    <>
      {cartItems.map((cartItem, counter) => (
        <div
          className="flex pt-2 xl:gap-6 md:gap-2 sm:gap-4 mb-4 xl:w-[783px] md:w-[672px] sm:max-w-[373px]"
          key={counter}
        >
          <div className="h-[82px] min-w-[82px] bg-neutral-400 rounded-default md:h-[100px] md:min-w-[136px] xl:min-w-[136px] xl:h-[100px]"></div>
          <div className="xl:w-[673px] md:w-[536px] sm:w-[213px]">
            <div className="flex justify-between">
              <p className="xl:max-w-60 sm:max-w-[181px] text-base sm:text-sm">
                {cartItem.heading}
              </p>
              <button className="ml-auto md:ml-0">
                <SpriteSVG name="trash" />
              </button>
            </div>
            <div className="flex">
              <div className="w-auto flex-row xl:justify-between sm:justify-normal items-end flex xl:gap-6 md:gap-0 gap-10">
                <div className="sm:mt-[22px] ml-4 xl:w-[113px] md:w-[113px] w-[104px]">
                  <AmountButtons />
                </div>
                <div className="flex-col justify-center hidden w-[222px] xl:flex md:flex my-2 xl:text-center pb-0">
                  <p className="w-[46px] text-base mx-[90px]">Ціна</p>
                  <p className="w-[115px] h-[27px] mx-[53px] text-xl mb-0 flex justify-center">
                    {cartItem.price}
                  </p>
                </div>
                <div className="xl:w-[222px] md:w-[153px] sm:w-[42px] flex flex-col justify-start xl:items-end md:items-end sm:items-baseline">
                  <p className="xl:block md:block sm:hidden text-base">Сума</p>
                  <p className="xl:text-2xl md:text-2xl sm:text-base">
                    {cartItem.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
