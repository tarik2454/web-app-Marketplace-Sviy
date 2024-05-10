import Slider from '@/shared/components/Slider/Slider';
import productsData from '@/shared/data/products-data';

export default function ProductsList() {
  const pageLink = '/products-week';

  return (
    <div className="relative">
      <Slider data={productsData} pageLink={pageLink} />
    </div>
  );
}
