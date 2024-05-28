import { OrangeButton, ArrowButton } from '@/shared/components';
import MyOrderFeedback from './MyOrderFeedback';
import useModal from '@/shared/hooks/useModal';

type MyOrderPaymentDetailsProps = {
  status: string;
};

export default function MyOrderPaymentDetails({
  status,
}: MyOrderPaymentDetailsProps) {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

  const isOrderCancelable = status !== 'fulfilled' && status !== 'canceled';

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
      <div className="flex justify-between md:justify-start md:items-baseline ">
        <div className="text-white sm:mr-[2px] sm:text-sm md:mr-6 ">
          <OrangeButton
            cssSettings="sm:px-2 md:py-2.5 md:px-8"
            onClick={() => {}}
            disabled={!isOrderCancelable}
          >
            Скасувати замовлння
          </OrangeButton>
        </div>
        <div className="sm:text-sm ">
          <ArrowButton
            onClick={handleOpenModal}
            cssSettings="sm:px-2 md:py-2.5 md:px-8"
            svgCssSettings="sm:hidden md:block "
          >
            Залишити відгук
          </ArrowButton>
        </div>
        <MyOrderFeedback
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </>
  );
}
