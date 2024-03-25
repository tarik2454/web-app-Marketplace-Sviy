// import { CloseButton } from '@/shared/components';
// import { CartList, FinalPrice } from '.';
// import { MouseEventHandler } from 'react';

// type Props = {
//   closeButtonClick: MouseEventHandler<HTMLButtonElement>;
//   display: String;
// };

// export default function Cart({ closeButtonClick, display }: Props) {
//   return (
//     <div
//       className={`${display} flex-col fixed z-20 md:max-w-[704px] xl:max-w-[1280px] md:h-3/4 md:m-auto inset-0 px-4 py-6 rounded-default bg-neutral-50`}
//     >
//       <div className="flex border-b-2 font-lora text-3xl items-center">
//         <h1>Кошик</h1>
//         <div className="ml-auto">
//           <CloseButton closeButtonClick={closeButtonClick} />
//         </div>
//       </div>
//       <div className="block mt-5 items-start overflow-auto md:flex md:overflow-hidden">
//         <CartList />
//         <FinalPrice />
//       </div>
//     </div>
//   );
// }
