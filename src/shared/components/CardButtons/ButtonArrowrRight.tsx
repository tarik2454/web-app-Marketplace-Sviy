import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function ButtonArrowLeft() {
  return (
    <button className="flex justify-center items-center text-white w-[52px] h-[52px] group-hover:w-[54px] group-focus:w-[54px] group-hover:h-[54px] group-focus:h-[54px] rounded-circle bg-blue-700 absolute right-[7px] bottom-4 origin-[45%_60%] transition-all group-hover:animate-rotateAndTranslate group-focus:animate-rotateAndTranslate">
      <SpriteSVG name="arrow-right" />
    </button>
  );
}
