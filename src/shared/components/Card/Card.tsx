'use client';

import Image from 'next/image';

import cardImg from '@/shared/img/salo.jpeg';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import ButtonArrowLeft from '../CatalogButtons/ButtonArrowLeft';
import ButtonToСart from '../CatalogButtons/ButtonToСart';

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
    <li className="w-[328px] xl:w-[302px] rounded-default bg-white relative">
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

        <ButtonArrowLeft />
        <ButtonToСart />
      </div>

      <div className="absolute right-[-0.3px] bottom-0">
        <SpriteSVG name="card-part" />
      </div>
    </li>
  );
}
