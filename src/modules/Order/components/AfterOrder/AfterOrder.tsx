import React from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

import ScreenSize from '@/shared/hooks/useMediaQuery';
import ProductBlock from './ProductBlock';
import InfoBlock from './InfoBlock';
import ButtonBlock from './ButtonBlock';

export default function AfterOrder() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  const date = new Date().toLocaleDateString('uk', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <div>
      <div className="flex justify-center gap-6 xl:mb-[60px] md:mb-[60px] mb-[40px]">
        <SpriteSVG
          name="check-mark"
          className="fill-[#038620] xl:w-[47px] xl:h-[44px] md:w-[47px] md:h-[44px] w-[24px] h-[24px]"
        />
        <h2 className="xl:text-center md:text-center text-start xl:text-[32px] md:text-[32px] text-xl">
          Дякуємо, Ваше замовлення прийнято!
        </h2>
      </div>
      <div className="bg-white rounded-[20px] py-8 xl:px-10 md:px-10 sm:px-[17px] px-[10px]">
        <div className="flex gap-6 mb-10">
          <p className="block">№1</p>
          <p className="block">від {date}</p>
        </div>
        <div className="xl:flex xl:gap-[86px] md:gap-[86px] md:flex md:flex-row flex-col">
          {(isOnMobile && (
            <>
              <ProductBlock />
              <div>
                <div className="mb-10">
                  <InfoBlock />
                </div>
                <ButtonBlock />
              </div>
            </>
          )) ||
            (isOnTablet && (
              <>
                <InfoBlock />
                <div>
                  <ProductBlock />
                  <ButtonBlock />
                </div>
              </>
            )) || (
              <>
                <InfoBlock />
                <div>
                  <ProductBlock />
                  <ButtonBlock />
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
