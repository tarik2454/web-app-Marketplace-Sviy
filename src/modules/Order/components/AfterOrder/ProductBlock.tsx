import React from 'react';
import Image from 'next/image';
import OrderImage from '@/shared/img/salo.jpeg';

export default function ProductBlock() {
  return (
    <div>
      <div className="xl:flex xl:flex-row xl:items-center md:justify-center justify-center xl:gap-12 md:gap-8 gap-4 border-b-[1px] border-[#9E9E9E] pb-5 mb-5 md:flex-col flex-col">
        <div className="flex gap-3 md:gap-4 items-center">
          <div className="xl:max-w-[120px] md:max-w-[100px] max-w-[82px] rounded-default overflow-hidden">
            <Image
              className="w-full"
              width={0}
              height={0}
              sizes="100vh"
              src={OrderImage}
              alt="Order photo"
            />
          </div>
          <p className="xl:text-xl md:text-base text-sm">
            Вареники з картоплею
          </p>
        </div>
        <div className="flex justify-between xl:gap-[85px] md:gap-[55px]">
          <div>
            <p>Ціна</p>
            <p>150 ₴ х</p>
          </div>
          <div>
            <p>Кількість</p>
            <p className="text-center"> 1кг</p>
          </div>
          <div>
            <p className="text-end">Сума</p>
            <p className="xl:text-2xl md:text-xl text-base">150 ₴</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 xl:mb-[56px] md:mb-[56px] mb-10">
        <div className="flex justify-between">
          <p>Оплата</p>
          <p className="text-end text-wrap">Під час отримання товару</p>
        </div>
        <div className="flex justify-between">
          <p>Доставка</p>
          <p className="text-end">За тарифами перевізника</p>
        </div>
        <div className="flex justify-between">
          <p>Разом</p>
          <p className="text-end">150 ₴</p>
        </div>
      </div>
    </div>
  );
}
