import { MouseEventHandler } from 'react';

type Props = {
  moreProductsClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Pagination({ moreProductsClick }: Props) {
  return (
    <div>
      <button
        onClick={moreProductsClick}
        className="block mx-auto mb-11 p-1 text-xl text-blue-700"
      >
        Дивитися більше
      </button>

      <div className="hidden md:flex gap-5 items-center justify-center text-neutral-400">
        <button className="px-[9px] py-[6px]">-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>8</button>

        <button className="px-[9px] py-[6px]">-</button>
      </div>
    </div>
  );
}
