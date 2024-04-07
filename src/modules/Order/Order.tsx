'use client';

import {
  Container,
  OrderFinalPrice,
  Section,
  SectionTitle,
} from '@/shared/components';
import { OrderCheckout, OrderListHeader } from './components';
import FormLogic from './components/Delivery/FormLogic';
import ScreenSize from '@/shared/hooks/useMediaQuery';

export default function Order() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  return (
    <Section
      className={
        'pt-[43px] pb-10 md:pt-[38px] md:pb-[96px] xl:pt-[98px] xl:pb-[164px]'
      }
    >
      <Container>
        <SectionTitle
          className={'md:mb-[64px] xl:mb-[88px]'}
          name={'Оформлення замовлення'}
        />

        {(isOnMobile && (
          <>
            <OrderCheckout />
            <OrderListHeader />
            <div className="mb-10">
              <FormLogic />
            </div>
            <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
          </>
        )) ||
          (isOnTablet && (
            <>
              <div className="grid grid-cols-2 gap-4 md:mb-[52px]">
                <OrderCheckout />
                <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
              </div>
              <OrderListHeader />
              <FormLogic />
            </>
          )) || (
            <div className="xl:flex xl:gap-6">
              <div className="xl:max-w-[845px]">
                <OrderCheckout />
                <OrderListHeader />
                <FormLogic />
              </div>
              <div className="h-full sticky top-[137px] right-0">
                <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
              </div>
            </div>
          )}
      </Container>
    </Section>
  );
}
