'use client';

import Image from 'next/image';

import cardImg from '@/shared/img/salo.jpeg';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type ProductType = {
  id?: number;
  image: string;
  name: string;
  information: string;
  price: number;
  currency: string;
};

export default function Card({ product }: { product: ProductType }) {
  const { id, image, name, information, price, currency } = product;
  return (
    <li className="w-[302px] rounded-default bg-white relative">
      <Image
        className="max-h-[216px] rounded-tl-default rounded-tr-default"
        src={cardImg}
        sizes="100vw"
        alt="Card image"
      />

      <button className="flex justify-center items-center p-2 bg-white rounded-circle absolute top-2 right-2">
        <SpriteSVG name="heart" />
      </button>

      <div className="p-[18px]">
        <div className="w-[266px] mb-4">{name}</div>
        <div className="text-stone-500 mb-[18px] text-xs leading-[19.2px]">
          {information}
        </div>

        <div className="justify-start items-start gap-2 inline-flex mb-6">
          <div className="text-xl leading-8">{price}</div>
          <div className="text-xl leading-8">{currency}</div>
        </div>

        <button className="flex justify-center items-center w-[52px] h-[52px] rounded-circle bg-cyan-700 absolute right-[7px] bottom-4 z-10">
          <SpriteSVG name="arrow-right" />
        </button>

        <div className="w-[100%]">
          <button className="inline-flex justify-center items-center w-[186px] md:w-[190px] py-2.5 md:py-3 bg-gradient-to-r from-yellow-600 via-orange-300 to-orange-300 rounded-[20px] custom-box-shadow hover:bg-orange-400">
            <div className="text-white text-base font-normal leading-relaxed">
              В кошик
            </div>
          </button>
        </div>
      </div>

      <div className="absolute right-[-0.3px] bottom-0">
        <SpriteSVG name="card-part" />
      </div>
    </li>
  );
}
