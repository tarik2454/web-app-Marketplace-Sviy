'use client';
import { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import Modal from '@/shared/components/Modal/Modal';

import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';

export default function EmailConfirmation() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="flex justify-center">
      {' '}
      <OrangeButton onClick={openModal}>Ckick</OrangeButton>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2 className="text-center text-blue-700 text-xl font-normal font-['Lato'] leading-loose pb-6">
          Перевірте ваш email
        </h2>
        <div className="text-center pb-10 w-[311px]">
          {' '}
          <span className=" text-neutral-800 text-base font-normal font-['Lato'] leading-relaxed text-nowrap">
            перейдіть за посиланням, яке ми вам <br />
            вислали на адресу{' '}
            <span className="text-blue-700 text-base font-normal font-['Lato'] leading-relaxed">
              g***@gmail.com
            </span>
          </span>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <ArrowButton onClick={() => {}}>
              <span className="text-nowrap">Встановити новий пароль</span>
            </ArrowButton>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
