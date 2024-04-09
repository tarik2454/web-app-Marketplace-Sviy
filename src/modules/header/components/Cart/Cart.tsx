import { OrderFinalPrice, OrderList } from '@/shared/components';

import orderedProductsData from '../../../../shared/data/ordered-products-data';

type CatrProps = {
  closeModal: () => void;
};

export default function Cart({ closeModal }: CatrProps) {
  return (
    <>
      <p
        className="mb-5 font-lora text-[32px] font-normal leading-[1.3]
        md:text-2xl md:font-lato md:font-normal 
        xl:font-lora xl:text-[32px] xl:font-normal xl:leading-[1.28]
      after:content-[''] after:block after:w-full after:h-[1px] after:mt-6 after:bg-neutral-400 md:after:mt-[18px] xl:after:mt-6"
      >
        Кошик
      </p>

      <div className="flex flex-col gap-5 md:flex-row md:gap-4 xl:gap-5">
        <OrderList
          stylesUlWrapper={'md:w-[466px] xl:w-[804px]'}
          cartItems={orderedProductsData}
        />
        <OrderFinalPrice
          stylesWrapper={
            'md:w-[190px] xl:w-[392px] py-10 md:py-5 md:px-[10px] xl:py-10 xl:px-4'
          }
          stylesDelivery={'hidden'}
          stylesTotal={
            'mb-[32px] font-lora text-[32px] leding-[1.28] md:font-lato md:font-2xl md:mb-6 xl:font-lora xl:text-[32px] xl:leding-[1.28] xl:mb-8'
          }
          stylesSumWrapper={
            'mb-8 pb-6 border-b border-gray-600 md:pb-5 md:mb-5 xl:mb-8 xl:pb-6'
          }
          stylesSumText={'text-base'}
          stylesSumNumber={'text-base md:text-base'}
          stylesPaymentWrapper={'mb-10 md:mb-[28px] xl:mb-10'}
          stylesPaymentNumber={'text-xl md:text-base'}
          isInCart={true}
          closeModal={closeModal}
          itemsQuantity={4}
          totalPrice={470}
        />
      </div>
    </>
  );
}
