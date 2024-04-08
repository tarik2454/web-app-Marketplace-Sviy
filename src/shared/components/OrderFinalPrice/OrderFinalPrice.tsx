'use client'

import { OrangeButton } from '@/shared/components';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  totalPrice?: number;
  itemsQuantity?: number;
  closeModal?: () => void;
  isInCart?: boolean;
};

export default function OrderFinalPrice({
  totalPrice,
  itemsQuantity,
  closeModal,
  isInCart = false,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    if (pathname === '/order-details') {
      if (closeModal) {
        closeModal();
      }
      return;
    }
    router.push('/order-details');
    if (closeModal) {
      closeModal();
    }
  };

  const buttonText = isInCart ? 'Оформити' : 'Замовлення підтверджую';

  return (
    <div className="h-fit py-5 px-4 bg-white shadow-default rounded-default xl:py-10">
      <h2 className="pb-5 text-xl text-gray-900 md:text-2xl md:pb-8 xl:text-3xl">
        Разом
      </h2>

      <div className="flex justify-between mb-4 md:mb-5">
        <p className="text-sm text-gray-900 leading-[1.4] xl:text-base">
          {itemsQuantity} товара на суму
        </p>
        <p className="text-xs leading-[1.4] md:text-sm xl:text-base">
          {totalPrice} ₴
        </p>
      </div>

      <div className="flex justify-between mb-[17px] pb-4 border-b border-gray-600 md:mb-6">
        <p className="text-sm text-gray-900 leading-[1.4] xl:text-base">
          Вартість доставки
        </p>
        <p className="text-xs leading-[1.4] md:text-sm xl:text-base">
          за тарифами перевізників
        </p>
      </div>

      <div className="flex pt-8 pb-6 md:pb-10">
        <p>До сплати</p>
        <p className="ml-auto xl:text-xl">{totalPrice} ₴</p>
      </div>

      <div className="block text-white">
        <OrangeButton onClick={handleButtonClick} type="submit">
          {buttonText}
        </OrangeButton>
      </div>
    </div>
  );
}