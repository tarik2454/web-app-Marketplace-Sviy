import { LookedAtBefore, SellerProducts, TabMenu } from '@/modules';
import ProductInfo from '@/modules/productInfo/ProductInfo';
import { Breadcrumbs, PageWrapper } from '@/shared/components';

export default function ProductCard() {
  return (
    <PageWrapper>
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <ProductInfo />
      <TabMenu />
      <SellerProducts />
      <LookedAtBefore />
    </PageWrapper>
  );
}
