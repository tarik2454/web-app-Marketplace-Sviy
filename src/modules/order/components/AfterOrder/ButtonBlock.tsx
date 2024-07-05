import React from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useRouter } from 'next/navigation';
import { OrangeButton } from '@/shared/components';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function ButtonBlock() {
  const router: AppRouterInstance = useRouter();

  return (
    <div className="flex xl:gap-6 md:gap-6 gap-3 items-center px-[8px]">
      <div className="max-w-[365px] text-white text-sm xl:text-nowrap md:text-nowrap">
        <OrangeButton
          onClick={() => router.push('/catalogue')}
          cssSettings="max-w-[155px]"
        >
          До каталогу
        </OrangeButton>
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-sm xl:text-nowrap md:text-nowrap">В мої покупки</p>
        <span className="bg-blue-700 rounded-circle xl:w-[34px] xl:h-[34px] md:w-[34px] md:h-[34px] w-[28px] h-[28px] flex justify-center items-center">
          <SpriteSVG name="card-arrow-right" />
        </span>
      </div>
    </div>
  );
}
