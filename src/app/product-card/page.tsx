import { LookedAtBefore, SellerProducts, TabMenu } from '@/modules';
import ProductInfo from '@/modules/productInfo/ProductInfo';
import { Breadcrumbs, Container } from '@/shared/components';

export default function ProductCard() {
  return (
    <div className="pt-[97px] md:pt-[113px] pb-20 md:pb-[104px] xl:pb-[164px]">
      <Breadcrumbs
        containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
        homeElement={<span>Головна</span>}
        capitalizeLinks
      />
      <ProductInfo />
      <TabMenu />
      <SellerProducts />
      <LookedAtBefore />
    </div>
  );
}
