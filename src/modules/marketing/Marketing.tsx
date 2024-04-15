'use client';

import { Section, OrangeButton, Container } from '@/shared/components';
import { useEffect, useState } from 'react';
import Modal from '@/shared/components/Modal/Modal';
import OrderAd from './OrderAd';
import MarketingTextBlock from './MarketingTextBlock';
import { CloseButton } from '@/shared/components/index';

export default function Marketing() {
  const [orderAdDisplay, setOrderAdDisplay] = useState('hidden');
  const [showModal, setShowModal] = useState(false);
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (orderAdDisplay === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [orderAdDisplay]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setScreenSize('small');
      } else {
        setScreenSize('medium');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOrderAdClick = () => {
    if (screenSize === 'small') {
      setOrderAdDisplay('block');
    } else {
      setShowModal(true);
    }
  };

  const closeForm = () => {
    setOrderAdDisplay('hidden');
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
        <div
          className={`${orderAdDisplay} absolute z-50 left-0 top-0 bg-white w-full h-screen pr-[16px] pl-[16px]`}
        >
          <div className="absolute top-5 right-4">
            <CloseButton closeForm={closeForm} />
          </div>
          <OrderAd marketingOrderType="mobile" closeForm={closeForm} />
        </div>
        {showModal && (
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <OrderAd
              marketingOrderType="page"
              closeModal={() => setShowModal(false)}
            />
          </Modal>
        )}
      </Container>
    </Section>
  );
}
