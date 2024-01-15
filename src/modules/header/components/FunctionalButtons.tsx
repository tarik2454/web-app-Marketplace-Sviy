import { SpriteSVG } from "@/shared/img/SpriteSVG"
import { Counter } from "."

export default function FunctionalButtons () {
  return (
    <div className="flex gap-4 md:gap-8">
      <button className="w-8">
        <SpriteSVG name="search" />
      </button>
      <button className="hidden w-8 md:block">
        <SpriteSVG name="user" />
      </button>
      <button className="hidden w-8 relative md:block">
        <Counter />
        <SpriteSVG name="favorite-header" />
      </button>
      <button className="relative w-8">
        <Counter />
        <SpriteSVG name="cart" />
      </button>
    </div>
  )
}