import { OrangeButton } from '@/shared/components';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  totalPrice?: number;
  itemsQuantity?: number;
  closeModal?: () => void;
};

export default function OrderFinalPrice({
  totalPrice,
  itemsQuantity,
  closeModal,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  console.log(router);
  console.log(pathname);

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

  return (
    <div className="bg-white py-5 px-4 shadow rounded-2xl xl:py-10 xl:h-fit">
      <h2 className="text-xl text-gray-900 font-lora pb-5 md:text-2xl md:pb-8 xl:text-3xl">
        Разом
      </h2>
      <div className="flex pb-4 md:pb-5">
        <p className="text-sm text-gray-900 xl:text-base">
          {itemsQuantity} товара на суму
        </p>
        <p className="ml-auto md:text-sm xl:text-base">{totalPrice} ₴</p>
      </div>
      <div className="flex pb-[17px] md:pb-6">
        <p className="text-sm xl:text-base">Вартість доставки</p>
        <p className="text-xs ml-auto md:text-sm xl:text-base">
          за тарифами перевізників{' '}
        </p>
      </div>
      <div className="flex pt-8 pb-6 border-t-2 md:pb-10">
        <p>До сплати</p>
        <p className="ml-auto xl:text-xl">{totalPrice} ₴</p>
      </div>
      {/* <div className="block md:hidden xl:block">
        <OrangeButton onClick={() => {}}>
          <Link href="/order-details">Оформити замовлення</Link>
        </OrangeButton>
      </div> */}
      <div className="block text-white">
        <OrangeButton onClick={handleButtonClick} type="submit">
          Замовлення підтверджую
        </OrangeButton>
      </div>
    </div>
  );
}
