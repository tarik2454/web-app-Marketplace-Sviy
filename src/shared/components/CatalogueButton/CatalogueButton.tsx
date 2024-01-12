import { SpriteSVG } from "@/shared/img/SpriteSVG"

export default function CatalogueButton ({ gap }: { gap: string }) {
  return (
    <button className={`flex gap-${gap}`}>
      <SpriteSVG name="catalog" />
      <p>Каталог</p>
    </button>
  );
}