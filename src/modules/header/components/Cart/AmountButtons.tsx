import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function AmountButtons() {
  return (
    <div className="flex items-start w-[113px] h-[28px]">
      <div className="flex w-20 md:mx-auto">
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
