// import { AmountButtons } from '.';

// export default function CartList() {
//   const cartItems = [
//     {
//       heading: 'Lorem ipsum dolor sit amet consectetur.',
//       price: '150 ₴',
//     },
//     {
//       heading: 'Lorem ipsum dolor sit amet consectetur.',
//       price: '150 ₴',
//     },
//   ];

//   return (
//     <div className="w-full mt-5 mb-1 shadow-sm rounded-default md:overflow-auto md:h-full xl:max-w-[760px]">
//       {cartItems.map((cartItem, counter) => (
//         <div className="flex p-2 gap-4 mb-4" key={counter}>
//           <div className="min-w-20 h-20 bg-neutral-400 rounded-default"></div>
//           <div className="w-full items-center xl:flex">
//             <p className="xl:max-w-60">{cartItem.heading}</p>
//             <div className="w-full items-center md:flex">
//               <p className="min-w-14 my-2 xl:w-1/3 xl:text-center">
//                 {cartItem.price}
//               </p>
//               <AmountButtons />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

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
    <div className="'shadow-sm rounded-default  md:max-w-[704px] xl:max-w-[800px] sm:max-w-[343px] font-lato bg-white font-normal'">
      <div className="mx-4 my-5">
        <h3 className="w-[246px] h-[38px] xl:text-[32px] md:text-2xl mb-6 sm:text-xl">
          Замовлення №1
        </h3>
        <div className="xl:w-[813px] md:w-[672px] sm:w-[311px] flex items-start mb-6 xl:gap-[376px] md:gap-[306px] sm:gap-[77px]">
          <p className="xl:w-[249px] md:w-[208px] sm:w-[146px] xl:text-2xl md:text-xl sm:text-sm">
            Продавець: Баба Надя
          </p>
          <p className="xl:w-[158px] md:w-[158px] sm:w-[88px] xl:h-[38px] md:h-[38px] sm:h-[26px] xl:text-2xl md:text-2xl sm:text-base">
            Сума: 150 ₴{' '}
          </p>
        </div>
        <div className="bg-gray-600 b-6 w-full h-[2px] px-4"></div>
        <Order cartItems={cartItems} />
      </div>
    </div>
  );
}

// 'shadow-sm rounded-default  md:max-w-[704px] xl:max-w-[800px] sm:max-w-[343px] font-lato bg-white font-normal'
