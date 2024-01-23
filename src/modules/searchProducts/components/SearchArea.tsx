import { SpriteSVG } from "@/shared/img/SpriteSVG";

export default function SearchArea () {
  return (
    <div className="hidden md:block">
      <button className="flex items-center px-2 py-2 md:w-36 xl:w-72">
        <SpriteSVG name="location" />
        <p className="ml-3 mr-auto">Район</p>
        <SpriteSVG name="arrow-to-bottom" />
      </button>
    </div>
  );
}