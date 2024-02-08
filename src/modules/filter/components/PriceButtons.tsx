import { OrangeButton } from "@/shared/components";

export default function PriceButtons () {
  return (
    <div className="flex mt-8 flex-col gap-4">
      <span>Ціна</span>
      <div className="flex gap-5">
        <input 
          className="max-w-[120px] px-4 py-3 border-2 rounded-default placeholder:text-black" 
          type="" 
          placeholder="Від" 
        />
        <input 
          className="max-w-[120px] px-4 py-3 border-2 rounded-default placeholder:text-black" 
          type="" 
          placeholder="До" 
        />
        <OrangeButton cssSettings="!px-5 !py-3" onClick={() => {}}>Ок</OrangeButton>
      </div>
    </div>
  )
}