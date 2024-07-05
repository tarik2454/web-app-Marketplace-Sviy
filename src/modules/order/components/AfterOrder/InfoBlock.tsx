import React from 'react';

import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function InfoBlock() {
  return (
    <div>
      <div className="border-b-[1px] border-[#9E9E9E] pb-6 mb-5">
        <h3 className="text-2xl mb-5">Інформація про замовлення</h3>
        <div className="mb-5 flex flex-col gap-3">
          <p>Самовивіз з відділення Нової Пошти</p>
          <p className="text-blue-700">Львів, Сихівська 74А, Відділення 25</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Поліна Ващук</p>
          <div className="flex gap-2 items-center">
            <SpriteSVG name="phone" className="stroke-[#1565C0]" />
            <p className="block">+380 96 900 90 90</p>
          </div>
          <div className="flex gap-2 items-center">
            <SpriteSVG
              name="mail"
              className="stroke-[#1565C0]"
              width={20}
              height={20}
            />
            <p className="block">polina.vach@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl">Продавець</h3>
        <p>Назва бренду</p>
        <div className="flex gap-2 items-center">
          <span className="text-blue-700">
            <SpriteSVG name="location" />
          </span>
          <p className="block">м. Львів, Залізничний р-н</p>
        </div>
        <div className="flex gap-2 items-center">
          <SpriteSVG 
            name="mail" 
            width={20}
            height={20} 
            className="stroke-[#1565C0]" 
          />
          <p className="block">fuhriug@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <SpriteSVG name="phone" className="stroke-[#1565C0]" />
          <p className="block">+380 96 900 90 99</p>
        </div>
      </div>
    </div>
  );
}
