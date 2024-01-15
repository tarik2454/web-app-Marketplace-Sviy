import { SpriteSVG } from "@/shared/img/SpriteSVG"

export default function CatalogueButton ({ gap }: { gap: String }) {
  return (
    <button className={`flex gap-${gap} text-cyan-700`}>
      <SpriteSVG name="catalog" />
      <p>Каталог</p>
    </button>
  );
}