'use client';

import {
  ColorSpot,
  Container,
  OrderFinalPrice,
  Section,
  SectionTitle,
} from '@/shared/components';
import { OrderCheckout, OrderListHeader } from './components';
import FormLogic from './components/Delivery/FormLogic';

export default function Order() {
  return (
    <Section>
      <Container>
        <SectionTitle name={'Кошик'} />
        <ColorSpot />

        <div className="">
          <OrderCheckout />
          <div className="md:absolute md:top-[40%] md:right-[32px] xl:top-[37%] xl:right-[90px]">
            <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
          </div>
        </div>

        <OrderListHeader />
        <FormLogic />
      </Container>
    </Section>
  );
}
