import React from 'react';
import { BlueBorderButton, OrangeButton } from '@/shared/components';

export default function ButtonProfile() {
  return (
    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mt-10 gap-6 text-nowrap">
        <OrangeButton type="submit" cssSettings="text-white md:max-w-[159px] xl:max-w-[167px]">
        Зберегти дані
        </OrangeButton>
        <BlueBorderButton onClick={() => {}} type="button" cssSettings="md:max-w-[163px] xl:max-w-[201px]">
        Видалити профіль
        </BlueBorderButton>
  </div>
  )
}
