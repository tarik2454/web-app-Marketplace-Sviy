import { MyCart } from '@/modules';
import FormLogic from '@/modules/header/components/Cart/FormLogic';
import { ColorSpot, Container, OrderCount, PageWrapper } from '@/shared/components';
import React from 'react';

function OrderDetails() {
  return (
    <PageWrapper>
      <Container>
      <ColorSpot />
      <MyCart />
      <OrderCount />
      <FormLogic />
      </Container>
    </PageWrapper>
  );
}

export default OrderDetails;
