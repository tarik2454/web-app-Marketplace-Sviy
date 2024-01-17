import { SpriteSVG } from "@/shared/img/SpriteSVG";

export default function Category ({ categoryName }: { categoryName: string }) {
  return (
    <button className="flex w-full h-12 items-center py-2">
      <h2 className="text-black text-base font-normal font-lato leading-relaxed">{categoryName}</h2>
      <div className="ml-auto mr-2">
        <SpriteSVG name="catalog-arrow" />
      </div>
    </button>
  )
}