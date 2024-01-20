import { SpriteSVG } from "@/shared/img/SpriteSVG"
import { Counter } from "."
import { MouseEventHandler } from "react"

type Props = {
  searchButtonClick: MouseEventHandler<HTMLButtonElement>,
  cartButtonClick: MouseEventHandler<HTMLButtonElement>,
}

export default function FunctionalButtons ({ searchButtonClick, cartButtonClick }: Props) {
  return (
    <div className="flex gap-4 md:gap-8">
      <button onClick={searchButtonClick} className="w-8">
        <SpriteSVG name="search" />
      </button>
      <button className="hidden w-8 md:block">
        <SpriteSVG name="user" />
      </button>
      <button className="hidden w-8 relative md:block">
        <Counter />
        <SpriteSVG name="favorite-header" />
      </button>
      <button onClick={cartButtonClick} className="relative w-8">
        <Counter />
        <SpriteSVG name="cart" />
      </button>
    </div>
  )
}