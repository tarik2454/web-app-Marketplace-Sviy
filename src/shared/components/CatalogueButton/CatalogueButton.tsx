import { SpriteSVG } from "@/shared/img/SpriteSVG"
import { MouseEventHandler } from "react";

export default function CatalogueButton ({ catalogueClick }: { catalogueClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={catalogueClick} className="flex w-full gap-4 md:gap-2">
      <SpriteSVG name="catalog" />
      <p>Каталог</p>
    </button>
  );
}