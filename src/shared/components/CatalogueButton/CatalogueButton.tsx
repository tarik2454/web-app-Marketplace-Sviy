import { SpriteSVG } from "@/shared/img/SpriteSVG"

export default function CatalogueButton () {
  return (
    <button className={`flex gap-4 text-cyan-700 md:gap-2`}>
      <SpriteSVG name="catalog" />
      <p>Каталог</p>
    </button>
  );
}