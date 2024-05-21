import { useState } from 'react';
import { OrderList, Dropdown } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '../orderUtils';
import { Order } from '../types';

import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';

import InfoAboutOrder from './InfoAboutOrder';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import MyOrderPaymentDetails from './MyOrderPaymentDetails';

type Props = {
  orderedItems: Order[];
};

export default function MyOrderList({ orderedItems }: Props) {
  const [openOrderList, setOpenOrderList] = useState<number | null>(null);
  const { isOnMobile } = ScreenSize();

  return (
    <>
      {orderedItems.map((orderItem, index) => {
        const { class: statusClass, name: statusName } = getStatusValues([
          orderItem,
        ])[0];
        const containerClassName = `bg-white w-full h-full p-4 rounded-[20px] shadow border-l-4 ${statusClass}`;
        const isListOpen = openOrderList === index;

        return (
          <li key={index}>
            <div className={containerClassName}>
              <div className={`${isListOpen ? 'hidden' : 'block'}`}>
                <div className="md:flex justify-between ">
                  <div className="md:order-2">
                    <div className="flex mb-2.5  ">
                      <p className="mr-3">{orderItem.number}</p>
                      <p className="text-gray-600">{orderItem.date} </p>
                    </div>
                    <p className="sm:hidden md:block">{statusName}</p>
                  </div>

                  <div className="flex justify-between mb-2.5  md:order-3 md:block ">
                    <p>{orderItem.text}</p>
                    <p>{orderItem.total} ₴</p>
                  </div>
                  <div className="flex items-center md:order-1">
                    {[...Array(isOnMobile ? 2 : 3)].map((_, i) => (
                      <Image
                        key={i}
                        className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 "
                        width={0}
                        height={0}
                        sizes="100vh"
                        src={OrderImage}
                        alt="Order photo"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between md:order-4">
                    <p className="mt-2.5 md:hidden">{statusName}</p>
                    <div
                      onClick={() =>
                        setOpenOrderList(isListOpen ? null : index)
                      }
                    >
                      <SpriteSVG
                        name={isListOpen ? 'expand_up' : 'expand_down'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {isListOpen && (
                <div className="bg-white  w-full h-full rounded-[20px]">
                  <div className="flex justify-between">
                    <div className="flex mb-3">
                      <p className="mr-3">{orderItem.number}</p>
                      <p className="text-gray-600">{orderItem.date}</p>
                    </div>
                    <div
                      onClick={() =>
                        setOpenOrderList(isListOpen ? null : index)
                      }
                    >
                      <SpriteSVG
                        name={isListOpen ? 'expand_up' : 'expand_down'}
                      />
                    </div>
                  </div>
                  <div className="mb-5 ">
                    <span>{statusName}</span>
                  </div>
                  <div className="xl:flex">
                    <div>
                      <div className="md:flex mb-8 xl:block">
                        <InfoAboutOrder />
                      </div>
                    </div>
                    <div>
                      <OrderList
                        cartItems={orderedItems}
                        stylesImageWrapper="w-[84px] h-[81px] mb-6"
                        stylesButton="hidden"
                      />
                    </div>
                  </div>
                  <MyOrderPaymentDetails />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}
