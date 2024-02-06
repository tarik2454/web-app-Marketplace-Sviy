'use client';

import Image from 'next/image';

import cardImg from '@/shared/img/salo.jpeg';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import ButtonArrowrRight from '../CardButtons/ButtonArrowrRight';
import ButtonToСart from '../CardButtons/ButtonToСart';
import { ArrowButton } from '..';

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
    <div className="max-w-[343px] rounded-default bg-white relative group">
      <Image
        className="h-[216px] rounded-tl-default rounded-tr-default group-hover:h-[222px] group-hover:animate-jump transition-all"
        src={cardImg}
        sizes="100vw"
        width={343}
        height={216}
        alt="Card image"
      />

      <button className="flex justify-center items-center p-2 bg-white rounded-circle absolute top-2 right-2 group-hover:top-[11px] group-hover:animate-jump group-focus:top-[11px] group-focus:animate-jump transition-all">
        <SpriteSVG name="heart" />
      </button>

      <div className="p-[18px] group-hover:pb-[12px] group-hover:animate-jump group-focus:pb-[12px] group-focus:animate-jump transition-all">
        <div className="mb-4">{name}</div>
        <div className="text-neutral-400 mb-[18px] text-xs leading-[19.2px]">
          {information}
        </div>
        <div className="justify-start items-start gap-2 inline-flex mb-6">
          <div className="text-xl leading-8">{price}</div>
          <div className="text-xl leading-8">{currency}</div>
        </div>
        <ButtonToСart />
      </div>

      <div className="absolute right-[-0.5px] bottom-0 z-auto">
        <SpriteSVG name="card-part" />

        <ButtonArrowrRight />
      </div>
    </div>
  );
}
