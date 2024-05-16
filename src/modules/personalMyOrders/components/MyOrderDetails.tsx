// import React, { useState } from 'react';
// import Image from 'next/image';
// import { SpriteSVG } from '@/shared/img/SpriteSVG';
// import InfoAboutOrder from './InfoAboutOrder';
// import { OrderList } from '@/shared/components';
// import OrderImage from '@/shared/img/salo.jpeg';

// export default function MyOrderDetails({
//   orderItem,
//   statusName,
//   isListOpen,
//   setOpenOrderList,
//   index,
//   orderedItems,
// }) {
//   return (
//     <div className="bg-white w-full h-full rounded-[20px]">
//       <div className="flex justify-between">
//         <div className="flex mb-3">
//           <p className="mr-3">{orderItem.number}</p>
//           <p className="text-gray-600">{orderItem.date}</p>
//         </div>
//         <div onClick={() => setOpenOrderList(isListOpen ? null : index)}>
//           <SpriteSVG name={isListOpen ? 'expand_up' : 'expand_down'} />
//         </div>
//       </div>
//       <div className="mb-5">
//         <span>{statusName}</span>
//       </div>
//       <div className="xl:flex">
//         <div>
//           <div className="md:flex mb-8 xl:block">
//             <InfoAboutOrder />
//           </div>
//         </div>
//         <div>
//           <OrderList
//             cartItems={orderedItems}
//             stylesImageWrapper="w-[84px] h-[81px]"
//             stylesButton="hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
