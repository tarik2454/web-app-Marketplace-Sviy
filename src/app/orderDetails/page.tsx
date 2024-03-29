import { MyCart } from '@/modules';
import FormLogic from '@/modules/header/components/Cart/FormLogic';
import { ColorSpot, OrderCount, PageWrapper } from '@/shared/components';
import React from 'react';

function OrderDetails() {
  return (
    <PageWrapper>
      <ColorSpot />
      <MyCart />
      <OrderCount />
      <FormLogic />
    </PageWrapper>
  );
}

export default OrderDetails;
