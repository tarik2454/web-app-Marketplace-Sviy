import React from 'react';
import { OrangeButton, ArrowButton } from '@/shared/components';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  isDeleteModal: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

export default function ModalForm({
  isOpen,
  isDeleteModal,
  handleClose,
  handleDelete,
}: ModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {!isDeleteModal ? (
        <div className="bg-white px-5 md:px-[60px] py-6 md:py-[40px] rounded-[20px]">
          <h2 className="text-gray-900 text-xl xl:text-2xl mb-6 md:mb-10 flex flex-wrap justify-center">
            Ви дійсно бажаєте скасувати створення оголошення?
          </h2>
          <div className="flex justify-center gap-[28px] md:gap-[48px]">
            <OrangeButton
              cssSettings="text-white text-sm px-[45px] xl:px-[67px] xl:text-base"
              onClick={handleClose}
            >
              Назад
            </OrangeButton>
            <ArrowButton
              cssSettings="text-sm xl:text-base !py-1 xl:!py-3"
              onClick={handleDelete}
            >
              Скасувати
            </ArrowButton>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[20px] px-5 md:px-[20px] py-6 md:py-[30px]">
          <h2 className="px-[60px] text-xl xl:text-2xl mb-6 md:mb-10">
            Оголошення додано
          </h2>
          <div className="flex justify-center mb-5">
            <OrangeButton
              cssSettings="text-white w-full max-w-[215px] !py-3"
              onClick={() => router.push('/personal-office/my-ads')}
            >
              Мої оголошення
            </OrangeButton>
          </div>
        </div>
      )}
    </div>
  );
};

