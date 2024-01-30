import { CloseButton } from '@/shared/components';
import { CartList, FinalPrice } from './components';
import { MouseEventHandler } from 'react';

type Props = {
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
  display: String;
};

export default function Cart({ closeButtonClick, display }: Props) {
  return (
    <div
      className={`${display} flex-col fixed z-20 md:max-w-[704px] xl:max-w-[1280px] h-screen inset-0 px-4 py-6 overflow-y-auto bg-white`}
    >
      <div className="flex border-b-2 font-lora text-3xl items-center">
        <h1>Кошик</h1>
        <CloseButton closeButtonClick={closeButtonClick} />
      </div>
      <div className="block mt-5 items-start md:flex">
        <CartList />
        <FinalPrice />
      </div>
    </div>
  );
}
