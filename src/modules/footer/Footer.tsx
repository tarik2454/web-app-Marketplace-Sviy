'use client';
import { useState } from 'react';

import Logo from '@/shared/components/Logo/Logo';
import Container from '@/shared/components/Container/Container';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';

import { Contacts } from '.';
import Copyright from '@/shared/components/Contacts/Copyright';
import Modal from '@/shared/components/Modal/Modal';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <footer className="bg-blue-200">
      <Container>
        <div className="flex justify-between pt-5 pb-3 md:pt-12 md:item-center">
          <div>
            <Logo />
          </div>
          <div className="pb-7">
            <Contacts />
          </div>
        </div>
        <div className="text-center pb-4 sm:text-sm sm:font-normal sm:leading-snug md:text-base md:leading-relaxed">
          <Copyright />
        </div>
        <div>
          {' '}
          <ArrowButton onClick={openModal}>Ckick</ArrowButton>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose">
              Реєстрація пройшла успішно
            </h2>
            <div className="justify-between items-start gap-3 flex">
              <OrangeButton onClick={() => {}}> До</OrangeButton>
              <ArrowButton onClick={() => {}}>До</ArrowButton>
            </div>
          </Modal>
        </div>
      </Container>
    </footer>
  );
}
