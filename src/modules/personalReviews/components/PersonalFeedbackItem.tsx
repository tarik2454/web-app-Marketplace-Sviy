import Image from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useRouter } from 'next/navigation';
import { OrangeButton } from '@/shared/components';
import Feedback from '../data/types';

type MyFeedbackItemProps = {
  feedback: Feedback;
  isListOpen: number | null;
  setIsListOpen: (id: number | null) => void;
  handleOpenModal: () => void;
};

export default function PersonalFeedbackItem({
  feedback,
  isListOpen,
  setIsListOpen,
  handleOpenModal,
}: MyFeedbackItemProps) {
  const router = useRouter();

  return (
    <li
      key={feedback.id}
      className={`bg-white w-full h-full p-4 rounded-[20px] shadow px-5 py-2.5 ${
        feedback.reviewStatus
          ? 'border-l-4 border-blue-900'
          : 'border-l-4 border-orange-500'
      }`}
    >
      <div className="flex gap-3">
        <div className="max-w-[85px] h-[81px] rounded-[10px] overflow-hidden mr-3 md:mr-6">
          <Image
            className="w-full"
            width={85}
            height={81}
            src={feedback.orderImage}
            alt="Order photo"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between py-0 md:py-2.5">
          <div>
            <p className="text-gray-900 mb-5">{feedback.title}</p>
            <ul
              className={`flex gap-2 mb-3 md:mb-0 ${
                isListOpen === feedback.id ? 'block md:hidden' : 'block'
              }`}
            >
              {Array.from({ length: feedback.rating }, (_, i) => (
                <li key={i} className="w-[18px] h-[18px]">
                  <SpriteSVG name="rating-star" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between gap-8">
            <p
              className={
                isListOpen === feedback.id
                  ? 'block text-sm md:text-base md:hidden'
                  : 'block text-sm md:text-base'
              }
            >
              {feedback.date}
            </p>
            <div
              onClick={() =>
                setIsListOpen(isListOpen === feedback.id ? null : feedback.id)
              }
            >
              <SpriteSVG
                name={isListOpen === feedback.id ? 'expand_up' : 'expand_down'}
              />
            </div>
          </div>
        </div>
      </div>
      {isListOpen === feedback.id && (
        <div className="pt-0 md:pt-5">
          <div className="flex justify-between">
            <div>
              <p className="hidden md:block text-[20px] mb-3">
                {feedback.reviewer}
              </p>
              <ul className="hidden md:flex gap-2 mb-5">
                {Array.from({ length: feedback.rating }, (_, i) => (
                  <li key={i} className="w-[18px] h-[18px]">
                    <SpriteSVG name="rating-star" />
                  </li>
                ))}
              </ul>
            </div>
            <p className="hidden md:block">{feedback.reviewDate}</p>
          </div>
          <p className="mb-5">{feedback.reviewText}</p>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <OrangeButton
              cssSettings="text-white text-sm max-w-[196px] md:max-w-full"
              onClick={() => router.push('/product-card')}
            >
              Переглянути товар
            </OrangeButton>
            {!feedback.reviewStatus && (
              <button
                type="button"
                className="flex gap-2 text-gray-500 items-center text-sm md:text-base"
                onClick={handleOpenModal}
              >
                <SpriteSVG name="trash" />
                Видалити
              </button>
            )}
          </div>
        </div>
      )}
    </li>
  );
}
