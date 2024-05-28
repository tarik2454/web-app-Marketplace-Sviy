import {
  OrangeButton,
  CloseButton,
  ArrowButton,
  OrderList,
} from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useState } from 'react';
import myOrderData from '../data/my-order-data';

type MyOrderFeedback = {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
};

export default function MyOrderFeedback({
  isOpenModal,
  handleCloseModal,
  handleOpenModal,
}: MyOrderFeedback) {
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);
  const [rating, setRating] = useState(0); // Додайте стан для рейтингу

  const handleOpenFeedback = () => {
    setIsOpenFeedback(true);
  };

  const handleCloseFeedback = () => {
    setIsOpenFeedback(false);
  };

  const handleSetRating = (index: number) => {
    setRating(index + 1);
  };

  const getStarClass = (index: number) => {
    return `${
      index < rating ? 'text-orange-500' : 'text-gray-400'
    } hover:text-orange-500`;
  };

  return (
    <>
      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white px-5 py-6 rounded-2xl w-full mx-5 md:mx-10 md:px-10 md:py-15 md:max-w-[768px] ">
            <div className="flex justify-between">
              <h2 className="text-2xl leading-10 text-gray-900 ">
                Оберіть товар
              </h2>
              <CloseButton closeButtonClick={handleCloseModal} />
            </div>
            <div className="border-b-2 border-gray-300 w-full mb-5"></div>

            <OrderList
              cartItems={myOrderData}
              stylesLiWrapper="flex pt-4 gap-2 mb-0 md:gap-3 md:pb-2 "
              stylesImageWrapper="w-[84px] h-[81px] mb-6"
              stylesContentWrapper="hidden"
              stylesProductName=""
              stylesAmountButtons="hidden"
              stylesPriceWrapper="hidden"
              stylesSumWrapper="hidden"
              stylesSumNumber="hidden"
              stylesButton="hidden"
              stylesSumWord="hidden"
            />

            <div className="flex flex-col items-center md:flex-row md:justify-center">
              <OrangeButton
                onClick={() => {
                  handleOpenFeedback();
                  handleCloseModal();
                }}
                cssSettings="px-8 py-2.5 font-medium text-white mb-4 md:mr-6"
              >
                Залишити відгук
              </OrangeButton>
            </div>
          </div>
        </div>
      )}
      {isOpenFeedback && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white px-5 py-6 rounded-2xl w-full mx-5 md:mx-10 md:px-10 md:py-15 md:max-w-[768px] ">
            <div className="flex justify-between">
              <h2 className="text-2xl leading-10 text-gray-900 ">
                Написати відгук
              </h2>
              <CloseButton closeButtonClick={handleCloseFeedback} />
            </div>
            <div className="border-b-2 border-gray-300 w-full mb-5"></div>

            <p className="text-base leading-relaxed text-gray-900 mb-5">
              Ваша оцінка товара
            </p>
            <ul className="flex gap-2 mb-5">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  onClick={e => {
                    e.stopPropagation();
                    handleSetRating(i);
                  }}
                >
                  <div className={`w-6 h-6 transition-all  ${getStarClass(i)}`}>
                    <SpriteSVG name="star" />
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-gray-900 mb-2">
              Ваш коментар
            </p>
            <textarea
              className="w-full p-2 border border-gray-400 rounded-2xl mb-4"
              rows={5}
            ></textarea>
            <div className="flex flex-col items-center md:flex-row md:justify-center">
              <OrangeButton cssSettings="px-8 py-2.5 font-medium text-white mb-4 md:mr-6">
                Залишити відгук
              </OrangeButton>
              <ArrowButton
                cssSettings="text-gray-900 mr-2 px-5 py-3 "
                onClick={handleCloseFeedback}
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
