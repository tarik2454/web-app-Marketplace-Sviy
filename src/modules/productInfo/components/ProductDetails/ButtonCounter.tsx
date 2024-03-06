import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '../../img/SpriteSVG';

interface ButtonCounterProps {
  stylesWrapper?: string;
  handleMinusClick: () => void;
  handlePlusClick: () => void;
  counter: number;
}

export default function ButtonCounter({
  stylesWrapper,
  handleMinusClick,
  handlePlusClick,
  counter,
}: ButtonCounterProps) {
  return (
    <div className={twMerge(`flex items-center gap-[13px]`, stylesWrapper)}>
      <button
        className="p-[10px] border border-gray-600 rounded-circle text-neutral-600 transition-all
        active:text-white
        hover:border-[#BBDEFB] hover:bg-[#BBDEFB] 
        active:border-blue-900 active:bg-blue-900 "
        onClick={handleMinusClick}
      >
        <SpriteSVG name="minus" />
      </button>
      <div className="text-xl text-[#656565]">{counter}</div>
      <button
        className="p-[10px] border border-gray-600 rounded-circle text-neutral-600 transition-all
        active:text-white
        hover:border-[#BBDEFB] hover:bg-[#BBDEFB] 
        active:border-blue-900 active:bg-blue-900 "
        onClick={handlePlusClick}
      >
        <SpriteSVG name="plus" />
      </button>
    </div>
  );
}
