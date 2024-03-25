import { AmountButtons } from '@/modules/header/components/Cart';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React from 'react';

interface CartItem {
  heading: string;
  price: string;
}

interface OrderProps {
  cartItems: CartItem[];
}

const Order: React.FC<OrderProps> = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((cartItem, counter) => (
        <div
          className="flex p-2 xl:gap-4 md:gap-4 sm:gap-4 mb-4 w-[783px] md-[672px]"
          key={counter}
        >
          <div className="min-w-[136px] sm:min-w-[82px] h-[100px] sm:h-[82px] bg-neutral-400 rounded-default"></div>
          <div className="xl:w-[642px] md:w-[536px] sm: w-[213px]">
            <div className="flex justify-between">
              <p className="xl:max-w-60 sm:max-w-[181px] text-base sm:text-sm">
                {cartItem.heading}
              </p>
              <button className="ml-auto md:ml-0">
                <SpriteSVG name="trash" />
              </button>
            </div>
            <div className="xl:w-653 md:w-[712px] xl:flex">
              <div className="w-auto flex-row xl:justify-between sm:justify-normal items-end flex xl:gap-8 md:gap-0 sm:gap-[40px]">
                <div className="sm:mt-[22px] ml-4">
                  <AmountButtons />
                </div>
                <div className="flex-col justify-center sm:hidden w-[222px] xl:flex md:flex my-2 xl:text-center pb-0">
                  <p className="w-[46px] text-base mx-[90px]">Ціна</p>
                  <p className="w-[115px] h-[27px] mx-[53px] text-xl mb-0 flex justify-center">
                    {cartItem.price}
                  </p>
                </div>
                <div className="xl:w-[222px] md:w-[193px] sm:w-[42px] flex flex-col justify-start xl:items-end md:items-end sm:items-baseline">
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
};

export default Order;
