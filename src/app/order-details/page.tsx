import { Order } from '@/modules';

import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

function OrderDetails() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <Order />
    </PageWrapper>
  );
}

export default OrderDetails;
