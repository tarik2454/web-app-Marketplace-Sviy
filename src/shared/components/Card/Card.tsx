'use client';

import Image from 'next/image';

import cardImg from '@/shared/img/salo.jpeg';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Link from 'next/link';

type CardType = {
  id?: number;
  image: string;
  name: string;
  information: string;
  price: number;
  currency: string;
};

export default function Card({ product }: { product: CardType }) {
  const { id, image, name, information, price, currency } = product;

  return (
    <Link
      href={'./product-card'}
      className="max-w-[343px] rounded-default bg-white relative group"
    >
      <Image
        className="h-[216px] rounded-tl-default rounded-tr-default group-hover:h-[222px] group-hover:animate-jump transition-all"
        src={cardImg}
        sizes="100vw"
        width={0}
        height={0}
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

        <button className="flex justify-center items-center px-[76px] py-3 xl:px-[62px] bg-gradient-to-r from-amber-500 to-orange-300 rounded-[20px] custom-box-shadow hover:from-amber-500 focus:from-amber-500 hover:to-amber-500 focus:to-amber-500  transition-colors">
          <div className="text-white text-base font-normal leading-relaxed">
            В кошик
          </div>
        </button>
      </div>

      <div className="absolute right-[-0.5px] bottom-0 z-auto">
        <SpriteSVG name="card-part" />

        <button className="flex justify-center items-center text-white w-[52px] h-[52px] rounded-full bg-blue-700 absolute right-[7px] bottom-4 origin-[50%_60%] transition-all group-hover:w-[55px] group-focus:w-[55px] group-hover:h-[55px] group-focus:h-[55px] group-hover:rotate-[60deg] group-hover:focus-[60deg] group-hover:bottom-3 group-focus:bottom-3">
          <SpriteSVG name="card-arrow-right" />
        </button>
      </div>
    </Link>
  );
}
