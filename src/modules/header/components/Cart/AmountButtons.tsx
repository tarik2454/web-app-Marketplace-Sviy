import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function AmountButtons() {
  return (
    <div className="flex items-center w-full xl:w-2/3">
      <div className="flex w-20 md:mx-auto">
        <button className="border-2 p-2 rounded-circle">
          <SpriteSVG name="minus" />
        </button>
        <p className="mx-auto">1</p>
        <button className="border-2 p-2 rounded-circle">
          <SpriteSVG name="plus" />
        </button>
      </div>
      <button className="ml-auto md:ml-0">
        <SpriteSVG name="trash" />
      </button>
    </div>
  );
}
