import { Order } from '@/modules';

import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

function OrderDetails() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
        homeElement={<span>Головна</span>}
      />
      <Order />
    </PageWrapper>
  );
}

export default OrderDetails;
