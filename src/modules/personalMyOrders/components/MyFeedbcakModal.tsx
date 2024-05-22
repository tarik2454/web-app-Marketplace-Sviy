import { OrangeButton, ArrowButton, CloseButton } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type Props = {
  isOpenModal: boolean;
  handleCloseModal: () => void;
};

export default function MyFeedbackModal({
  isOpenModal,
  handleCloseModal,
}: Props) {
  return (
    <>
      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
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
            <ul className="flex gap-2 mb-5">
              <li className="w-7 h-7">
                <SpriteSVG name="rating-star" />
              </li>
              <li className="w-7 h-7">
                <SpriteSVG name="rating-star" />
              </li>
              <li className="w-7 h-7">
                <SpriteSVG name="rating-star" />
              </li>
              <li className="w-7 h-7">
                <SpriteSVG name="rating-star" />
              </li>
              <li className="w-7 h-7">
                <SpriteSVG name="rating-star" />
              </li>
            </ul>
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
