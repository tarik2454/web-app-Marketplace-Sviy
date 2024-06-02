import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '@/modules/personalMyOrders/helpers/orderUtils';
import { StaticImageData } from 'next/image';

import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';

// import InfoAboutOrder from './InfoAboutOrder';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { Dropdown } from '@/shared/components';
import sortOrder from '@/shared/data/sort-order-data';
// import MyOrderPaymentDetails from './MyOrderPaymentDetails';
// import MyOrderItemsList from './MyOrderItemsList';

type Order = {
  name: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
  images: StaticImageData;
};

type MySalesListProps = {
  mySalesData: Order[];
};

export default function MySalesList({ mySalesData }: MySalesListProps) {
  const [openOrderList, setOpenOrderList] = useState<number | null>(null);
  const { isOnMobile } = ScreenSize();

  return (
    <>
      {mySalesData.map((saleItem, index) => {
        const { class: statusClass, name: statusName } = getStatusValues([
          saleItem,
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
          <li key={index} className="mb-5">
            <div className={containerClassName} onClick={openList}>
              <div className={`${isListOpen ? 'hidden' : 'block'}`}>
                <div className="flex mb-2.5 md:items-baseline ">
                  <p className="mr-3">{saleItem.number}</p>
                  <p className="text-gray-600">{saleItem.date} </p>
                  <p className="ml-auto md:hidden">{statusName}</p>
                  <div className="sm:hidden  md:flex md:justify-between md:ml-[22px]">
                    <p className="mb-2.5 md:mr-3">{saleItem.text}</p>
                    <p>{saleItem.total} ₴</p>
                  </div>
                  <div className="md:ml-auto">
                    <Dropdown
                      onChange={() => {}}
                      options={sortOrder}
                      placeholder="Нове"
                      controlClassName="text-sm md:text-base"
                      id={`novelties-${23}`}
                      wrapperClassName="w-[142px] md:w-[193px] sm:hidden md:block"
                      menuClassName="!w-[142px] md:!w-[193px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between  md:hidden">
                  <p className="mb-2.5">{saleItem.text}</p>
                  <p>{saleItem.total} ₴</p>
                </div>
                <div className="flex items-center  ">
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
                <div className="flex justify-between ">
                  <Dropdown
                    onChange={() => {}}
                    options={sortOrder}
                    placeholder="Нове"
                    controlClassName="text-sm md:text-base"
                    id={`novelties-${23}`}
                    wrapperClassName="w-[142px] md:w-[193px] md:hidden"
                    menuClassName="!w-[142px] md:!w-[193px]"
                  />
                  <div
                    onClick={e => {
                      e.stopPropagation();
                      toggleOpenList();
                    }}
                    className="mt-4"
                  >
                    <SpriteSVG
                      name={isListOpen ? 'expand_up' : 'expand_down'}
                    />
                  </div>
                </div>
              </div>
              {isListOpen && (
                <div className="bg-white  w-full h-full rounded-[20px]">
                  <div className="flex justify-between">
                    <div className="flex mb-3">
                      <p className="mr-3">{saleItem.number}</p>
                      <p className="text-gray-600">{saleItem.date}</p>
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
                  <div className="xl:flex ">
                    <div>
                      <div className="md:flex mb-8 xl:block xl:mr-6 xl:w-[282px]">
                        {/* <InfoAboutOrder /> */}
                      </div>
                    </div>
                    <div className="xl:w-full">
                      {/* <MyOrderItemsList myOrderData={myOrderData} /> */}
                    </div>
                  </div>
                  {/* <MyOrderPaymentDetails status={saleItem.status} /> */}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}
