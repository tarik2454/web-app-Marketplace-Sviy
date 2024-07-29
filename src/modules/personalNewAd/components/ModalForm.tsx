'use client';

import React from 'react';
import { OrangeButton, ArrowButton } from '@/shared/components';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isDeleteModal: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

export default function ModalForm({
  isDeleteModal,
  handleClose,
  handleDelete,
}: ModalProps) {
  
  const router = useRouter();

  return (
    <>
      {!isDeleteModal ? (
        <div>
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
        <div>
          <h2 className="text-xl md:text-2xl mb-6 md:mb-10 flex justify-center">
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
    </>
  );
}
