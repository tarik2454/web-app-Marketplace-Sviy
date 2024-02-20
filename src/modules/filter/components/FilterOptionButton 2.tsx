import { SpriteSVG } from "@/shared/img/SpriteSVG";
import { MouseEventHandler } from "react";

type Props = {
  buttonText: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function FilterOptionButton ({ buttonText, onClick }: Props) {
  return (
    <button onClick={onClick} className="flex items-center w-fit px-5 py-[10px] gap-2 border-2 rounded-default">
      <p>{buttonText}</p>
      <SpriteSVG name="close-button" />
    </button>
  )
}