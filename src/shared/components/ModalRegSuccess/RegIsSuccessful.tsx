'use client';
import { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Modal from '@/shared/components/Modal/Modal';

export default function RegIsSuccesful() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        // buttonText="Зареєструватися"
      >
        <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose">
          Реєстрація пройшла успішно
        </h2>
        <div className=" flex justify-center py-10">
          <SpriteSVG name="check-mark" />
        </div>

        <div className="flex justify-center items-start gap-3 ">
          <Link href="/">
            <OrangeButton onClick={() => {}}>
              <span className="text-nowrap">До каталогу</span>
            </OrangeButton>
          </Link>
          <Link href="/">
            <ArrowButton onClick={() => {}}>
              <span className="text-nowrap">До профілю</span>
            </ArrowButton>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
