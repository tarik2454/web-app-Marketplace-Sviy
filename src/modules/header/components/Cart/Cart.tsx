import { CloseButton, FinalPrice } from '@/shared/components';

import { MouseEventHandler } from 'react';
import { CartList } from '.';

export default function Cart() {
  return (
    <div>
      <p
        className="mb-5 font-lora text-[32px] leading-[41px]
      after:content-[''] after:block after:w-full after:h-[1px] after:mt-6 after:bg-neutral-400"
      >
        Кошик
      </p>

      <div className="flex">
        <CartList />
        <FinalPrice />
      </div>
    </div>
  );
}
