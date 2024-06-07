import React from 'react';
import { StaticImageData } from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import InfoAboutSales from './InfoAboutSales';
import MySalesItemsList from './MySalesItemList';

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
  mySalesData: Order[];
  saleItem: Order;
  statusName: string;
  isListOpen: boolean;
  toggleOpenList: (e: React.MouseEvent) => void;
};

export default function MySalesListOpen({
  mySalesData,
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
        <div className="md:flex flex-col-reverse xl:flex-row ">
          <div>
            <div className="sm:mb-8 md:mb-0">
              <InfoAboutSales />
            </div>
          </div>
          <div className="xl:w-full">
            <MySalesItemsList mySalesData={mySalesData} />
          </div>
        </div>
      </div>
    )
  );
}
