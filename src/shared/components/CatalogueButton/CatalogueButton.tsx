import { SpriteSVG } from "@/shared/img/SpriteSVG"

export default function CatalogueButton () {
  return (
    <button className="flex gap-4 md:gap-2">
      <SpriteSVG name="catalog" />
      <p>Каталог</p>
    </button>
  );
}