import Card from '@/shared/components/Card/Card';
import productsData from '@/shared/data/products-data';

export default function CardList() {
  return (
    <ul>
      {productsData.map((value, index, array) => {
        <Card />;
      })}
    </ul>
  );
}
