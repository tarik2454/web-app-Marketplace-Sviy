import { OrangeButton } from "@/shared/components";

export default function PriceButtons () {
  return (
    <div className="flex mt-8 flex-col gap-4">
      <span>Ціна</span>
      <div className="flex gap-5 xl:gap-1">
        <input 
          className="max-w-[100px] px-4 py-3 border-2 rounded-default outline-none placeholder:text-black" 
          type="" 
          placeholder="Від" 
        />
        <input 
          className="max-w-[100px] px-4 py-3 border-2 rounded-default outline-none placeholder:text-black" 
          type="" 
          placeholder="До" 
        />
        <OrangeButton cssSettings="!px-5 !py-3" onClick={() => {}}>Ок</OrangeButton>
      </div>
    </div>
  )
}