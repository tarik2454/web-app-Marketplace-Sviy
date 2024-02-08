"use client"

import { CloseButton } from "@/shared/components";

export default function SortingMenu () {
  return (
    <div className="fixed w-full h-[304px] px-4 py-6 bottom-0 left-0 bg-white">
      <div className="flex items-center pb-[10px] border-b-2">
        <h1 className="mr-auto text-2xl">Сортування</h1>
        <CloseButton />
      </div>

      <ul className="mt-6 bg-neutral-50 rounded-default">
        <li className="p-[10px]">
          <button className="w-full text-left">Новинки</button>
        </li>
        <li className="p-[10px]">
          <button className="w-full text-left">Від дорогих до дешевих</button>
        </li>
        <li className="p-[10px]">
          <button className="w-full text-left">Від дешевих до дорогих</button>
        </li>
        <li className="p-[10px]">
          <button className="w-full text-left">За рейтингом</button>
        </li>
      </ul>
    </div>
  )
}