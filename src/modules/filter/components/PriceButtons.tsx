import { OrangeButton } from "@/shared/components";
import { ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
  okButtonClick: MouseEventHandler<HTMLButtonElement>,
  minPriceChange: ChangeEventHandler<HTMLInputElement>,
  maxPriceChange: ChangeEventHandler<HTMLInputElement>,
}

export default function PriceButtons ({ okButtonClick, minPriceChange, maxPriceChange }: Props) {
  return (
    <div className="flex mt-8 flex-col gap-4">
      <span>Ціна</span>
      <div className="flex gap-5 xl:gap-1">
        <input 
          className="max-w-[100px] px-4 py-3 border-2 rounded-default outline-none placeholder:text-black" 
          type="number" 
          placeholder="Від"
          onChange={minPriceChange} 
        />
        <input 
          className="max-w-[100px] px-4 py-3 border-2 rounded-default outline-none placeholder:text-black" 
          type="number" 
          placeholder="До"
          onChange={maxPriceChange} 
        />
        <OrangeButton cssSettings="!px-5 !py-3" onClick={okButtonClick}>Ок</OrangeButton>
      </div>
    </div>
  )
}