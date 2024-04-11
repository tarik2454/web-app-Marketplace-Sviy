import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { CatalogueProducts, SellerData } from '@/modules';

export default function Catalogue() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <SellerData
        phoneNumber="+380 96 900 90 90"
        email="fuhriug@gmail.com"
        area="м. Львів, Залізничний р-н"
        delivery="Самовивіз,  кур’єром"
      />

      <CatalogueProducts />
    </PageWrapper>
  );
}
