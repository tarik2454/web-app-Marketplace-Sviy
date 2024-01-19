import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function ButtonArrowLeft() {
  return (
    <button className="flex justify-center items-center w-[52px] h-[52px] rounded-circle bg-blue-700 absolute right-[7px] bottom-4 z-10 group-hover:rotate-45 transition-all">
      <SpriteSVG name="arrow-right" />
    </button>
  );
}
