"use client"

import { CloseButton } from "@/shared/components";

export default function SortingMenu () {
  return (
    <div className="fixed w-full h-[304px] px-4 py-6 bottom-0 left-0 bg-white">
      <div className="flex items-center pb-[10px] border-b-2">
        <h1 className="mr-auto text-2xl">Сортування</h1>
        <CloseButton />
      </div>
    </div>
  )
}