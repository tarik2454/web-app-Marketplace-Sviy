import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { twMerge } from 'tailwind-merge';

type AmountButtonsProps = {
  stylesWrapper?: string;
};

export default function AmountButtons({ stylesWrapper }: AmountButtonsProps) {
  return (
    <div
      className={twMerge(`flex items-center w-full xl:w-2/3`, stylesWrapper)}
    >
      <div className="flex w-20 md:mx-auto ">
        <button className="border-2 p-2 rounded-circle">
          <SpriteSVG name="minus" />
        </button>
        <p className="mx-auto">1</p>
        <button className="border-2 p-2 rounded-circle">
          <SpriteSVG name="plus" />
        </button>
      </div>
    </div>
  );
}
