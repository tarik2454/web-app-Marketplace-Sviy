import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import OrderImage from '@/shared/img/salo.jpeg';
import { Dropdown } from '@/shared/components';
import sortSales from '@/shared/data/sort-sales-data';

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

type MySalesListOpenProps = {
  saleItem: Order;
  statusName: string;
  isListOpen: boolean;
  toggleOpenList: (e: React.MouseEvent) => void;
};

export default function MySalesListOpen({
  saleItem,
  statusName,
  isListOpen,
  toggleOpenList,
}: MySalesListOpenProps) {
  return (
    isListOpen && (
      <div className="bg-white  w-full h-full rounded-[20px]">
        <div className="flex justify-between">
          <div className="flex mb-3">
            <p className="mr-3">{saleItem.number}</p>
            <p className="text-gray-600">{saleItem.date}</p>
          </div>
          <div
            onClick={e => {
              e.stopPropagation();
              toggleOpenList(e);
            }}
          >
            <SpriteSVG name={isListOpen ? 'expand_up' : 'expand_down'} />
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
    )
  );
}
