import { OrderList } from '@/shared/components';
import { useState } from 'react';
import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '../orderUtils';
import { Order } from '../types';

type Props = {
  orderedItems: Order[];
};

export default function OnAdaptiveOrder({ orderedItems }: Props) {
  const [openOrderList, setOpenOrderList] = useState<number | null>(null);

  return (
    <ul className="">
      {orderedItems.map((orderItem, index) => {
        const { class: statusClass, name: statusName } = getStatusValues([
          orderItem,
        ])[0];
        const containerClassName = `rounded-[20px] shadow border-l-4 ${statusClass}`;
        const isListOpen = openOrderList === index;

        return (
          <li className="" key={index}>
            <div className={containerClassName}>
              <div className="flex justify-between white mt-8 mb-8 w-full h-full p-4 ">
                <div className="flex flex-wrap">
                  <Image
                    className="max-w-[57px] max-h-[60px] rounded-[10px] mr-3"
                    width={0}
                    height={0}
                    sizes="100vh"
                    src={orderItem.images}
                    alt="Order photo"
                  />
                  <Image
                    className="max-w-[57px] max-h-[60px] rounded-[10px] mr-3"
                    width={0}
                    height={0}
                    sizes="100vh"
                    src={OrderImage}
                    alt="Order photo"
                  />
                  <Image
                    className="max-w-[57px] max-h-[60px] rounded-[10px] "
                    width={0}
                    height={0}
                    sizes="100vh"
                    src={OrderImage}
                    alt="Order photo"
                  />
                </div>
                <div>
                  <div className="flex mb-2.5">
                    <span className="mr-3">{orderItem.number}</span>
                    <span className="text-gray-600">{orderItem.date} </span>
                  </div>
                  <span>{statusName}</span>
                </div>

                <div className="flex flex-col items-center mb-2.5 mr-4">
                  <span>{orderItem.text}</span>
                  <span>{orderItem.total} ₴</span>
                </div>
                <div
                  onClick={() => setOpenOrderList(isListOpen ? null : index)}
                >
                  <SpriteSVG name={isListOpen ? 'expand_up' : 'expand_down'} />
                </div>
              </div>
              {isListOpen && (
                <OrderList
                  cartItems={orderedItems}
                  stylesImageWrapper="max-w-[57px] min-w-[57px]"
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
