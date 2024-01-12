import { SpriteSVG } from "@/shared/img/SpriteSVG"

export default function FunctionalButtons () {
  return (
    <div className="flex gap-4 md:gap-8">
      <button>
        <SpriteSVG name="search" />
      </button>
      <button className="hidden md:block">
        <SpriteSVG name="user" />
      </button>
      <button className="hidden md:block">
        <SpriteSVG name="favorite-header" />
      </button>
      <button>
        <SpriteSVG name="cart" />
      </button>
    </div>
  )
}