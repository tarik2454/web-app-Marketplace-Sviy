import { OrangeButton, ArrowButton } from '@/shared/components';
import MyOrderFeedback from './MyOrderFeedback';
import MyItemFeedback from './MyItemFeedback';
import useModal from '@/shared/hooks/useModal';

export default function MyOrderPaymentDetails() {
  // const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();
  const {
    isOpenModal,
    handleOpenModal,
    handleCloseModal,
    isItemModalOpen,
    handleOpenItemModal,
    handleCloseItemModal,
  } = useModal();
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
          {/* <ArrowButton onClick={handleOpenModal} cssSettings="sm:px-2">
            Залишити відгук
          </ArrowButton> */}
        </div>
        <MyItemFeedback
          isItemModalOpen={isItemModalOpen}
          handleCloseItemModal={handleCloseItemModal}
        />
        <MyOrderFeedback
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenItemModal}
        />
        {/* <MyItemFeedback
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <MyOrderFeedback
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        /> */}
      </div>
    </>
  );
}
