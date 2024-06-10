import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '@/modules/personalMyOrders/helpers/orderUtils';
import { StaticImageData } from 'next/image';
import { Dropdown } from '@/shared/components';

import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import sortSales from '@/shared/data/sort-sales-data';
import MySalesListOpen from './MySalesListOpen';

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
  const { isOnMobile, isOnTablet } = ScreenSize();

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
          (isOnMobile && (
            <li key={index} className="mb-5">
              <div className={containerClassName} onClick={openList}>
                <div className={`${isListOpen ? 'hidden' : 'block'}`}>
                  <div className="flex mb-2.5 ">
                    <p className="mr-3">{saleItem.number}</p>
                    <p className="text-gray-600">{saleItem.date} </p>
                    <p className="ml-auto">{statusName}</p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="mb-2.5">{saleItem.text}</p>
                    <p>{saleItem.total} ₴</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center mb-2.5 ">
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
                  </div>
                  <div
                    className="flex justify-between"
                    onClick={e => e.stopPropagation()}
                  >
                    <Dropdown
                      onChange={() => {}}
                      options={sortSales}
                      placeholder="Нове"
                      controlClassName="text-sm"
                      id={`novelties-${23}`}
                      stylesInput="py-0"
                      wrapperClassName="w-[142px]"
                      menuClassName="!w-[142px]"
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
                  <MySalesListOpen
                    saleItem={saleItem}
                    statusName={statusName}
                    isListOpen={isListOpen}
                    toggleOpenList={toggleOpenList}
                    mySalesData={mySalesData}
                  />
                )}
              </div>
            </li>
          )) ||
          (isOnTablet && (
            <li key={index} className="mb-5">
              <div className={containerClassName} onClick={openList}>
                <div className={`${isListOpen ? 'hidden' : 'block'}`}>
                  <div className="flex mb-2.5 items-baseline ">
                    <p className="mr-3">{saleItem.number}</p>
                    <p className="text-gray-600">{saleItem.date} </p>
                    <div className="flex justify-between ml-[22px]">
                      <p className="mb-2.5 mr-3">{saleItem.text}</p>
                      <p>{saleItem.total} ₴</p>
                    </div>
                    <div className="ml-auto" onClick={e => e.stopPropagation()}>
                      <Dropdown
                        onChange={() => {}}
                        options={sortSales}
                        placeholder="Нове"
                        controlClassName="text-base"
                        id={`novelties-${23}`}
                        stylesInput="py-0"
                        wrapperClassName="w-[193px] block"
                        menuClassName="!w-[193px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
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
                    <div
                      onClick={e => {
                        e.stopPropagation();
                        toggleOpenList();
                      }}
                      className="mt-4 block self-end"
                    >
                      <SpriteSVG
                        name={isListOpen ? 'expand_up' : 'expand_down'}
                      />
                    </div>
                  </div>
                </div>
                {isListOpen && (
                  <MySalesListOpen
                    saleItem={saleItem}
                    statusName={statusName}
                    isListOpen={isListOpen}
                    toggleOpenList={toggleOpenList}
                    mySalesData={mySalesData}
                  />
                )}
              </div>
            </li>
          )) || (
            <li key={index} className="mb-5">
              <div className={containerClassName} onClick={openList}>
                <div className={`${isListOpen ? 'hidden' : 'block'}`}>
                  <div className="flex justify-between items-center">
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
                    <div>
                      <div className="flex mb-2.5">
                        <p className="mr-3">№ {saleItem.number}</p>
                        <p className="text-gray-600">{saleItem.date} </p>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="text-center">
                      <p className="mb-2.5 mr-3">{saleItem.text}</p>
                      <p>{saleItem.total} ₴</p>
                    </div>
                    <div className="" onClick={e => e.stopPropagation()}>
                      <Dropdown
                        onChange={() => {}}
                        options={sortSales}
                        placeholder="Нове"
                        controlClassName="text-base"
                        id={`novelties-${23}`}
                        wrapperClassName="w-[193px] block"
                        menuClassName="!w-[193px]"
                      />
                      <div
                        onClick={e => {
                          e.stopPropagation();
                          toggleOpenList();
                        }}
                        className="flex justify-end mt-4"
                      >
                        <SpriteSVG
                          name={isListOpen ? 'expand_up' : 'expand_down'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {isListOpen && (
                  <MySalesListOpen
                    saleItem={saleItem}
                    statusName={statusName}
                    isListOpen={isListOpen}
                    toggleOpenList={toggleOpenList}
                    mySalesData={mySalesData}
                  />
                )}
              </div>
            </li>
          )
        );
      })}
    </>
  );
}
