import { useState } from 'react';
import { OrderList } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '../helpers/orderUtils';
import { StaticImageData } from 'next/image';

import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';

import InfoAboutOrder from './InfoAboutOrder';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import MyOrderPaymentDetails from './MyOrderPaymentDetails';

type Order = {
  heading: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
  images: StaticImageData;
};

type MyOrderListProps = {
  myOrderData: Order[];
};

export default function MyOrderList({ myOrderData }: MyOrderListProps) {
  const [openOrderList, setOpenOrderList] = useState<number | null>(null);
  const { isOnMobile } = ScreenSize();

  return (
    <>
      {myOrderData.map((orderItem, index) => {
        const { class: statusClass, name: statusName } = getStatusValues([
          orderItem,
        ])[0];
        const containerClassName = `bg-white w-full h-full p-4 rounded-[20px] shadow border-l-4 ${statusClass}`;
        const isListOpen = openOrderList === index;

        const openList = () => {
          if (!isListOpen) {
            setOpenOrderList(index);
          }
        };

        const toggleOpenList = () => {
          setOpenOrderList(isListOpen ? null : index);
        };

        return (
          <li key={index}>
            <div className={containerClassName} onClick={openList}>
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
                      onClick={e => {
                        e.stopPropagation();
                        toggleOpenList();
                      }}
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
                      onClick={e => {
                        e.stopPropagation();
                        toggleOpenList();
                      }}
                    >
                      <SpriteSVG
                        name={isListOpen ? 'expand_up' : 'expand_down'}
                      />
                    </div>
                  </div>
                  <div className="mb-5 ">
                    <span>{statusName}</span>
                  </div>
                  <div className="xl:flex justify-between">
                    <div>
                      <div className="md:flex mb-8 xl:block">
                        <InfoAboutOrder />
                      </div>
                    </div>
                    <div>
                      <OrderList
                        cartItems={myOrderData}
                        stylesImageWrapper="w-[70px] h-[60px] mb-6"
                        stylesSumWord=" h-6 text-base leading-relaxed text-right text-gray-400"
                        stylesSumNumber=" h-6 text-sm leading-relaxed text-right text-gray-900"
                        stylesButton="hidden"
                        stylesAmountButtons="hidden"
                      />
                    </div>
                  </div>
                  <MyOrderPaymentDetails status={orderItem.status} />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}
