import { OrangeButton, ArrowButton, CloseButton } from '@/shared/components';
import useModal from '@/shared/hooks/useModal';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function MyOrderPaymentDetails() {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

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

      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white px-5 py-6 rounded-2xl sm:min-w-[343px]">
            <div className="flex justify-between">
              <h2 className="text-2xl leading-10 text-gray-900 mb-4">
                Написати відгук
              </h2>
              <CloseButton closeButtonClick={handleCloseModal} />
            </div>

            <p className="text-base leading-relaxed text-gray-900 mb-5">
              Ваша оцінка товара
            </p>
            <div className="flex gap-2 mb-5">
              <SpriteSVG name="rating-star" />
              <SpriteSVG name="rating-star" />
              <SpriteSVG name="rating-star" />
              <SpriteSVG name="rating-star" />
              <SpriteSVG name="rating-star" />
            </div>
            <p className="text-base leading-relaxed text-gray-900 mb-2">
              Ваш коментар
            </p>
            <textarea
              className="w-full p-2 border rounded-2xl mb-4"
              rows={5}
            ></textarea>
            <div className="flex flex-col items-center">
              <OrangeButton cssSettings="px-8 py-2.5 font-medium text-white mb-4">
                Залишити відгук
              </OrangeButton>
              <ArrowButton
                cssSettings="text-gray-900 mr-2 px-5 py-3 "
                onClick={handleCloseModal}
              >
                Скасувати
              </ArrowButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
