import { OrangeButton, CloseButton } from '@/shared/components';

type Props = {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
};

export default function MyOrderFeedback({
  isOpenModal,
  handleCloseModal,
  handleOpenModal,
}: Props) {
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

            <div className="flex flex-col items-center md:flex-row md:justify-center">
              <OrangeButton
                onClick={handleOpenModal}
                cssSettings="px-8 py-2.5 font-medium text-white mb-4 md:mr-6"
              >
                Залишити відгук
              </OrangeButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
