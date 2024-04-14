import { OrderFinalPrice, OrderList } from '@/shared/components';

import orderedProductsData from '../../../../shared/data/ordered-products-data';

type CatrProps = {
  closeModal: () => void;
};

export default function Cart({ closeModal }: CatrProps) {
  return (
    <div>
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
          stylesUlWrapper={
            'md:w-[466px] xl:w-[804px] flex flex-col gap-4 md:gap-[6px] xl:gap-2'
          }
          stylesLiWrapper={
            'flex mb-0 pt-0 p-4 shadow-default rounded-default bg-white last:pb-4 height-[700px] md:gap-4 md:p-[12px] md:border-none md:last:pb-[12px] xl:pt-[14px] xl:pb-[18px] xl:pl-5 xl:pr-[66px]'
          }
          stylesImageWrapper={
            'w-[93px] h-[86px] min-w-[93px] min-h-[86px] md:w-[60px] md:h-[66px] md:min-w-[60px] md:min-h-[66px] xl:w-[114px] xl:h-[100px] xl:min-w-[114px] xl:min-h-[100px]'
          }
          stylesContentWrapper={
            'flex flex-col w-full md:justify-normal xl:flex-row xl:gap-0'
          }
          stylesProductName={
            'mb-2 text-base md:text-sm md:leading[1.4] md:mb-[12px] xl:mb-0 xl:w-[244px] xl:text-base'
          }
          stylesPriceWrapper={'md:hidden'}
          stylesSumWrapper={
            'relative flex flex-row justify-start items-center md:flex-row-reverse md:justify-between xl:w-full'
          }
          stylesSumNumber={'flex mb-2 md:mb-0 md:text-base xl:text-xl'}
          stylesButton={`mb-0 absolute top-[32px] right-0 md:relative md:top-0 md:mb-0`}
          stylesSumWord={'md:hidden'}
          isInCart={true}
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
    </div>
  );
}
