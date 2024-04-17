import { ArrowButton } from '@/shared/components';
import React from 'react';

export default function QuestionsAnswersItem() {
  return (
    <li className="flex justify-between max-w-[1062px] max-h-[76px] bg-white px-4 py-[6px] rounded-[20px]">
      <h3 className="text-neutral-800 flex items-center md:text-xl">
        Що таке СВІЙ маркетплейс?
      </h3>
      <ArrowButton
        svgCssSettings="w-[52px] h-[52px] xl:w-[52px] xl:h-[52px]"
        cssSettings="py-0 px-0"
      />
    </li>
  )
}