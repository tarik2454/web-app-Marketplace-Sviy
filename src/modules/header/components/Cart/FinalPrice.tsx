import { OrangeButton } from "@/shared/components";
import Link from 'next/link';

export default function FinalPrice () {
  return (
    <div className="min-w-[200px] py-10 px-4 shadow-sm rounded-default md:ml-4 md:px-[10px] md:py-5 xl:py-10 xl:px-4 xl:ml-auto">
      <h2 className="text-3xl font-lora">Разом</h2>
      <div className="flex mt-8 mb-6">
        <p>3 товари на суму</p>
        <p className="ml-auto">450 ₴</p>
      </div>
      <div className="flex pt-8 pb-10 border-t-2">
        <p>До сплати</p>
        <p className="ml-auto">450 ₴</p>
      </div>
      <div className="block md:hidden xl:block">
        <OrangeButton onClick={() => {}}><Link href="/orderDetails">Оформити замовлення</Link></OrangeButton>
      </div>
      <div className="hidden md:block xl:hidden">
        <OrangeButton onClick={() => {}}>Оформити</OrangeButton>
      </div>
    </div>
  )
}