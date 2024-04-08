import { OrderList } from '@/shared/components';
import orderedProducts from '../../../shared/data/ordered-products-data';

export default function OrderListHeader() {
  return (
    <div className="mb-10 px-4 py-5 shadow-sm rounded-default bg-white">
      <h3 className="mb-6 text-xl md:text-2xl">Замовлення №1</h3>
      <div className="flex justify-between mb-6 pb-4 border-b-[1px] border-neutral-400">
        <p className="text-sm md:text-xl xl:text-2xl">Продавець: Баба Надя</p>
        <p className="md:text-2xl xl:text-2xl">Сума: 150 ₴</p>
      </div>
      <OrderList cartItems={orderedProducts} />
    </div>
  );
}
