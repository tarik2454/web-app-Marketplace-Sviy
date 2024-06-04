import { MouseEventHandler } from 'react';

type Props = {
  inStockClick: MouseEventHandler<HTMLButtonElement>;
  salesPromotionClick: MouseEventHandler<HTMLButtonElement>;
};

export default function OptionsButtons({
  inStockClick,
  salesPromotionClick,
}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={inStockClick}
        className="px-7 py-3 border-2 rounded-default"
      >
        В наявності
      </button>
      <button
        onClick={salesPromotionClick}
        className="px-7 py-3 border-2 rounded-default"
      >
        Акційні
      </button>
    </div>
  );
}
