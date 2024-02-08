import LookedAtBefore from '@/modules/lookedAtBefore/LookedAtBefore';
import SellerProducts from '@/modules/sellerProducts/SellerProducts';

export default function ProductCard() {
  return (
    <div className="pt-[113px]">
      <SellerProducts />
      <LookedAtBefore />
    </div>
  );
}
