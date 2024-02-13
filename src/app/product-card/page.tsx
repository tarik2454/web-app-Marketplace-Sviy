import { LookedAtBefore, SellerProducts, TabMenu } from '@/modules';

export default function ProductCard() {
  return (
    <div className="pt-[113px]">
      <TabMenu />
      <SellerProducts />
      <LookedAtBefore />
    </div>
  );
}
