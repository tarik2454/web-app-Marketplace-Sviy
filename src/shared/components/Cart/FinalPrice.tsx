import { OrangeButton } from '@/shared/components';

type Props = {
  totalPrice: number;
  itemsQuantity: number;
};

export default function FinalPrice({ totalPrice, itemsQuantity }: Props) {
  return (
    <div className="min-w-[344px] py-5 px-4 shadow rounded-2xl  ">
      <h2 className="text-xl text-gray-900 font-lora pb-5 md:text-2xl md:pb-8">
        Разом
      </h2>
      <div className="flex pb-4 md:pb-5">
        <p className="text-sm text-gray-900">{itemsQuantity} товара на суму</p>
        <p className="ml-auto md:text-sm">{totalPrice} ₴</p>
      </div>
      <div className="flex pb-[17px] md:pb-6">
        <p className="text-sm">Вартість доставки</p>
        <p className="text-xs ml-auto md:text-sm">за тарифами перевізників </p>
      </div>
      <div className="flex pt-8 pb-6 border-t-2 md:pb-10">
        <p>До сплати</p>
        <p className="ml-auto">{totalPrice} ₴</p>
      </div>
      <div className="block text-white">
        <OrangeButton onClick={() => {}} type="submit">
          Замовлення підтверджую
        </OrangeButton>
      </div>
    </div>
  );
}
