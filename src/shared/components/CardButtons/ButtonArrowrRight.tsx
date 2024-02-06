import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function ButtonArrowRight() {
  return (
    <button className="flex justify-center items-center text-white w-[52px] h-[52px] rounded-full bg-blue-700 absolute right-[7px] bottom-4 origin-[50%_60%] transition-all group-hover:w-[55px] group-focus:w-[55px] group-hover:h-[55px] group-focus:h-[55px] group-hover:rotate-[60deg] group-hover:focus-[60deg] group-hover:bottom-3 group-focus:bottom-3">
      <SpriteSVG name="card-arrow-right" />
    </button>
  );
}
