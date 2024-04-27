import React from 'react';
import { BlueBorderButton, OrangeButton } from '@/shared/components';

export default function ButtonProfile() {
  return (
    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mt-10 gap-6 text-nowrap">
        <OrangeButton type="submit" cssSettings="text-white">
        Зберегти дані
        </OrangeButton>
        <BlueBorderButton onClick={() => {}} type="button">
        Видалити профіль
        </BlueBorderButton>
  </div>
  )
}
