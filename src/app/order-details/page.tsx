import { MyCart } from '@/modules';

import FormLogic from '@/modules/delivery/FormLogic';
import { ColorSpot, OrderCount, PageWrapper } from '@/shared/components';

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
