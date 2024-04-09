import { LookedAtBefore, SellerProducts, TabMenu } from '@/modules';
import ProductInfo from '@/modules/productInfo/ProductInfo';
import { Breadcrumbs } from '@/shared/components';

export default function ProductCard() {
  return (
    <div className="pt-[97px] md:pt-[113px] pb-20 md:pb-[104px] xl:pb-[164px]">
      <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
      <ProductInfo />
      <TabMenu />
      <SellerProducts />
      <LookedAtBefore />
    </div>
  );
}
