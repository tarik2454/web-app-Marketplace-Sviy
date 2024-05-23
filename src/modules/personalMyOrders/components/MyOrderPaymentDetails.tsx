import { OrangeButton, ArrowButton } from '@/shared/components';

type Props = {
  handleOpenModal: () => void;
};

export default function MyOrderPaymentDetails({ handleOpenModal }: Props) {
  return (
    <>
      <div className="flex justify-between sm:mb-3">
        <p className="sm:text-sm">Оплата</p>
        <p className="sm:text-sm">Оплата під час отримання товару</p>
      </div>
      <div className="flex justify-between sm:mb-3">
        <p className="sm:text-sm">Доставка</p>
        <p className="sm:text-sm">За тарифами перевізника</p>
      </div>
      <div className="flex justify-between sm:mb-3">
        <p className="sm:text-sm">Разом</p>
        <p className="sm:text-sm">150 ₴</p>
      </div>
      <div className="flex">
        <div className="text-white sm:mr-[2px] sm:text-sm md:mr-6">
          <OrangeButton cssSettings="sm:px-2" onClick={() => {}}>
            Скасувати замовлння
          </OrangeButton>
        </div>
        <div className="sm:text-sm">
          <ArrowButton onClick={handleOpenModal} cssSettings="sm:px-2">
            Залишити відгук
          </ArrowButton>
        </div>
      </div>
    </>
  );
}
