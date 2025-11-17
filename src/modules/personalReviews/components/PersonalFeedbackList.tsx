import { useState } from 'react';
import { ArrowButton, CloseButton, OrangeButton } from '@/shared/components';
import Feedback from '../data/types';
import useModal from '@/shared/hooks/useModal';
import PersonalFeedbackItem from './PersonalFeedbackItem';

type MyFeedbackListProps = {
  myFeedbackData: Feedback[];
};

export default function PersonalFeedbackList({
  myFeedbackData,
}: MyFeedbackListProps) {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();
  const [isDeleteModal, setIsDeleteModal] = useState(true);
  const [isListOpen, setIsListOpen] = useState<number | null>(null);

  return (
    <>
      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          {isDeleteModal ? (
            <div className="bg-white px-5 md:px-[60px] py-6 md:py-[40px] rounded-[20px]">
              <h2 className="text-gray-900 text-xl xl:text-2xl mb-4 flex justify-center">
                Ви дійсно бажаєте видалити ваш відгук?
              </h2>
              <p className="flex justify-center text-sm md:text-base text-gray-900 mb-6 md:mb-10">
                Ваш відгук буде видалено без можливості відновлення
              </p>
              <div className="flex justify-center gap-[28px] md:gap-[48px]">
                <OrangeButton
                  cssSettings="text-white text-sm px-[45px] xl:px-[67px] xl:text-base"
                  onClick={handleCloseModal}
                >
                  Скасувати
                </OrangeButton>
                <ArrowButton
                  cssSettings="text-sm xl:text-base !py-1 xl:!py-3"
                  onClick={() => setIsDeleteModal(false)}
                >
                  Видалити
                </ArrowButton>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-[20px]">
              <div className="flex justify-end p-[30px]">
                <CloseButton closeButtonClick={handleCloseModal} />
              </div>
              <h2 className="px-[60px] text-xl xl:text-2xl pb-[60px]">
                Ваш відгук було видалено
              </h2>
            </div>
          )}
        </div>
      )}
      {myFeedbackData.map(feedback => (
        <PersonalFeedbackItem
          key={feedback.id}
          feedback={feedback}
          isListOpen={isListOpen}
          setIsListOpen={setIsListOpen}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </>
  );
}
