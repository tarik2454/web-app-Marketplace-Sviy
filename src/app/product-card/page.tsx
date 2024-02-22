import { LookedAtBefore, SellerProducts, TabMenu } from '@/modules';
import ProductInfo from '@/modules/productInfo/ProductInfo';

export default function ProductCard() {
  return (
    <div className="pt-[113px]">
      <ProductInfo />
      <TabMenu />
      <SellerProducts />
      <LookedAtBefore />
    </div>
  );
}
