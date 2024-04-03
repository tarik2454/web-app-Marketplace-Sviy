import { Order } from '@/modules';

import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

function OrderDetails() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'pt-5 mb-0 md:pt-10'}
        homeElement={<span>Головна</span>}
      />
      <Order />
    </PageWrapper>
  );
}

export default OrderDetails;
