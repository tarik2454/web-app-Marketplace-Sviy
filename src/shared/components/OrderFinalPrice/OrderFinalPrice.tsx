'use client';

import { twMerge } from 'tailwind-merge';
import { usePathname, useRouter } from 'next/navigation';

import { OrangeButton } from '@/shared/components';
import ScreenSize from '@/shared/hooks/useMediaQuery';

type OrderFinalPriceProps = {
  stylesWrapper?: string;
  stylesDelivery?: string;
  stylesTotal?: string;
  stylesSumWrapper?: string;
  stylesSumText?: string;
  stylesSumNumber?: string;
  stylesPaymentWrapper?: string;
  stylesPaymentNumber?: string;
  totalPrice?: number;
  itemsQuantity?: number;
  closeModal?: () => void;
  isInCart?: boolean;
};

export default function OrderFinalPrice({
  stylesWrapper,
  stylesDelivery,
  stylesTotal,
  stylesSumWrapper,
  stylesSumText,
  stylesSumNumber,
  stylesPaymentWrapper,
  stylesPaymentNumber,
  totalPrice,
  itemsQuantity,
  closeModal,
  isInCart = false,
}: OrderFinalPriceProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameOrderDetails = '/order-details';

  const { isOnMobile, isOnTablet } = ScreenSize();

  const handleButtonClick = () => {
    if (pathname === pathnameOrderDetails) {
      if (closeModal) {
        closeModal();
      }
      return;
    }
    router.push(pathnameOrderDetails);
    if (closeModal) {
      closeModal();
    }
  };

  const buttonText = isInCart
    ? isOnTablet
      ? 'Оформити'
      : 'Оформити замовлення'
    : 'Замовлення підтверджую';

  return (
    <div
      className={twMerge(
        `h-fit py-5 px-4 bg-white shadow-default rounded-default xl:py-10`,
        stylesWrapper
      )}
    >
      <p
        className={twMerge(
          `mb-5 text-xl text-gray-900 md:text-2xl md:mb-8 xl:font-lora xl:text-[32px] xl:leading-[1.3]`,
          stylesTotal
        )}
      >
        Разом
      </p>

      <div
        className={twMerge(
          `flex justify-between mb-4 md:mb-5 xl:mb-6`,
          stylesSumWrapper
        )}
      >
        <p
          className={twMerge(
            `text-sm text-gray-900 leading-[1.4] xl:text-base`,
            stylesSumText
          )}
        >
          {!isInCart || isOnMobile ? `${itemsQuantity} ` : null}
          {!isInCart || isOnMobile ? 'товари на суму' : 'Сума'}
        </p>
        <p
          className={twMerge(
            `text-xs leading-[1.4] md:text-sm xl:text-base`,
            stylesSumNumber
          )}
        >
          {totalPrice} ₴
        </p>
      </div>

      <div
        className={twMerge(
          `flex justify-between mb-[17px] pb-4 border-b border-gray-600 md:mb-6 md:pb-6 xl:mb-8`,
          stylesDelivery
        )}
      >
        <p className="text-sm text-gray-900 leading-[1.4] xl:text-base">
          Вартість доставки
        </p>
        <p className="text-xs leading-[1.4] md:text-sm xl:text-base">
          за тарифами перевізників
        </p>
      </div>

      <div
        className={twMerge(
          `flex justify-between mb-6 md:mb-10`,
          stylesPaymentWrapper
        )}
      >
        <p>До сплати</p>
        <p className={twMerge(`xl:text-xl`, stylesPaymentNumber)}>
          {totalPrice} ₴
        </p>
      </div>

      <OrangeButton
        cssSettings={`py-3 text-white xl:py-4 ${
          isInCart && isOnTablet && 'md:py-[10px]'
        }`}
        onClick={handleButtonClick}
        type="submit"
      >
        {buttonText}
      </OrangeButton>
    </div>
  );
}
