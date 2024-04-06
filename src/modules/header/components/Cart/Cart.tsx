import { OrderFinalPrice, OrderList } from '@/shared/components';

import orderedProductsData from '../../../../shared/data/ordered-products-data';

type Props = {
  closeModal: () => void;
};

export default function Cart({ closeModal }: Props) {
  return (
    <div>
      <p
        className="mb-5 font-lora text-[32px] font-normal leading-[1.3]
        md:text-2xl md:font-lato md:font-normal 
        xlfont-lora xl:text-[32px] xl:font-normal xl:leading-[1.28]
      after:content-[''] after:block after:w-full after:h-[1px] after:mt-6 after:bg-neutral-400 md:after:mt-[18px] xl:after:mt-6"
      >
        Кошик
      </p>

      <div className="flex flex-col gap-5 md:flex-row md:gap-4 xl:gap-5">
        <OrderList
          stylesUlWrapper={'md:bg-red-400'}
          cartItems={orderedProductsData}
        />
        <OrderFinalPrice
          closeModal={closeModal}
          itemsQuantity={4}
          totalPrice={470}
        />
      </div>
    </div>
  );
}
