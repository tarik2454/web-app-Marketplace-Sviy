import { OrderList } from '@/shared/components';
import React, { useState } from 'react';
import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '../orderUtils';
import { Order } from '../types';

type Props = {
  orderedItems: Order[];
};

export default function OnMobileOrder({ orderedItems }: Props) {
  const [openOrderList, setOpenOrderList] = useState<number | null>(null);

  // const containerStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 57px))',
  //   gridGap: '10px',
  //   marginBottom: '10px',
  // }; стилі для картинок грідами

  return (
    <ul>
      {orderedItems.map((orderItem, index) => {
        const { class: statusClass, name: statusName } = getStatusValues([
          orderItem,
        ])[0];
        const containerClassName = `bg-white mt-8 mb-8 w-full h-full p-4 rounded-[20px] shadow border-l-4 ${statusClass}`;
        const isListOpen = openOrderList === index;

        return (
          <li key={index}>
            <div className={containerClassName}>
              <div className="flex mb-2.5">
                <span className="mr-3">{orderItem.number}</span>
                <span className="text-gray-600">{orderItem.date} </span>
              </div>
              <div className="flex justify-between mb-2.5">
                <span>{orderItem.text}</span>
                <span>{orderItem.total} ₴</span>
              </div>
              <div className="flex flex-wrap ">
                <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 mb-2.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                />
                <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 mb-2.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                />
                <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 mb-2.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                />
                <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 mb-2.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                />
                {/* <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 mb-2.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                />
                <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] mr-2.5 mb-2.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                /> */}
              </div>
              <div className="flex justify-between">
                <span>{statusName}</span>
                <div
                  onClick={() => setOpenOrderList(isListOpen ? null : index)}
                >
                  <SpriteSVG name={isListOpen ? 'expand_up' : 'expand_down'} />
                </div>
              </div>
              {isListOpen && (
                <OrderList
                  cartItems={orderedItems}
                  stylesImageWrapper="max-w-[50px] min-w-[50px]"
                  stylesButton="hidden"
                />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
