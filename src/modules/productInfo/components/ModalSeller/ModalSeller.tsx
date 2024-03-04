'use client';

import ScreenSize from '@/shared/hooks/useMediaQuery';

import dataContactSeller from '../../data/data-modal-seller';

import Modal from '@/shared/components/Modal/Modal';
import { Container } from '@/shared/components';
import ModalContent from './ModalContent';

interface ModalSellerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalSeller({ isOpen, onClose }: ModalSellerProps) {
  const { isOnMobile } = ScreenSize();

  return (
    <Modal
      stylesWrapper={`max-w-full pt-6 pb-6 rounded-none translate-y-0 
      md:max-w-[390px] md:px-[40px] md:pt-5 mb:pb-10 md:rounded-default md:-translate-y-1/2 ${
        isOnMobile ? 'bottom-0' : ''
      }`}
      stylesCloseButton="top-6 md:right-10"
      isOpen={isOpen}
      onClose={onClose}
    >
      {isOnMobile && (
        <Container>
          <ModalContent {...dataContactSeller} />
        </Container>
      )}

      {!isOnMobile && <ModalContent {...dataContactSeller} />}
    </Modal>
  );
}
