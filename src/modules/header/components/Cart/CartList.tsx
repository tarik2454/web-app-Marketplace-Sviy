import Image from 'next/image';
import Line from '@/shared/img/Line.png';
import Order from '@/shared/components/Order/Order';

export default function CartList() {
  const cartItems = [
    {
      heading: 'Вареники з картоплею',
      price: '150 ₴',
    },
    {
      heading: 'Вареники з картоплею',
      price: '150 ₴',
    },
    {
      heading: 'Вареники з картоплею',
      price: '150 ₴',
    },
  ];

  return (
    <div className="shadow-sm rounded-default md:overflow-auto md:max-w-[704px] xl:max-w-[845px] sm:max-w-[343px] font-lato bg-white font-normal">
      <div className="mx-4 my-5">
        <h3 className="w-[246px] h-[38px] xl:text-[32px] md:text-2xl mb-6 sm:text-xl">
          Замовлення №1
        </h3>
        <div className="xl:w-[813px] md:w-[672px] sm:w-[311px] flex items-start mb-6 xl:gap-[406px] md:gap-[306px] sm:gap-[77px]">
          <p className="xl:w-[249px] md:w-[208px] sm:w-[146px] xl:text-2xl md:text-xl sm:text-sm">
            Продавець: Баба Надя
          </p>
          <p className="xl:w-[158px] md:w-[158px] sm:w-[88px] xl:h-[38px] md:h-[38px] sm:h-[26px] xl:text-2xl md:text-2xl sm:text-base">
            Сума: 150 ₴{' '}
          </p>
        </div>
        <div className="bg-gray-600 b-6 xl:w-[813px] md:w-[672px] sm:w-[311px] h-[2px] px-4"></div>
        <Order cartItems={cartItems} />
      </div>
    </div>
  );
}
