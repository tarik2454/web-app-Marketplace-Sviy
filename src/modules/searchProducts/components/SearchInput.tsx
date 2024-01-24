import { SpriteSVG } from "@/shared/img/SpriteSVG";

export default function SearchInput () {
  return (
    <div className="flex w-full items-center px-3 py-2">
      <button>
        <SpriteSVG name="search" />
      </button>
      <input className="w-full outline-none px-2 text-neutral-800 placeholder-neutral-800" type="text" placeholder="Я шукаю" />
    </div>
  );
}