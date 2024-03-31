import { OrderCheckout } from '@/modules';

import FormLogic from '@/modules/delivery/FormLogic';
import { ColorSpot, OrderCount, PageWrapper } from '@/shared/components';

function OrderDetails() {
  return (
    <PageWrapper>
      <ColorSpot />
      <OrderCheckout />
      <OrderCount />
      <FormLogic />
    </PageWrapper>
  );
}

export default OrderDetails;
