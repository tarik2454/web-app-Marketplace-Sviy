'use client';

import { Section, OrangeButton, Container } from '@/shared/components';
import { useState } from 'react';
import Modal from '@/shared/components/Modal/Modal';
import OrderAd from './OrderAd';
import MarketingTextBlock from './MarketingTextBlock';

export default function Marketing() {
  const [showModal, setShowModal] = useState(false);

  const handleOrderAdClick = () => {
    setShowModal(true);
  };

  return (
    <Section className="mb-20 md:mb-[104px]">
      <Container>
        <MarketingTextBlock />
        <OrangeButton onClick={handleOrderAdClick}>
          <span className="text-white text-sm xl:text-base">
            Замовити рекламу
          </span>
        </OrangeButton>
        {showModal && (
          <Modal
            stylesWrapper="sm:h-screen sm:pt-[28px] sm:rounded-none md:rounded-default md:h-auto xl:rounded-default xl:h-auto"
            stylesCloseButton="sm:top-8 sm:right-6"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <OrderAd closeModal={() => setShowModal(false)} />
          </Modal>
        )}
      </Container>
    </Section>
  );
}
