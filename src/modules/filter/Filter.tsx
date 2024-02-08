"use client"

import { CloseButton } from "@/shared/components";
import { Dropdown, OptionsButtons, PriceButtons } from "./components";

export default function Filter () {
  const options = [
    { value: "за районом", label: "За районом" },
    { value: "галицький", label: "Галицький" },
    { value: "залізничний", label: "Залізничний" },
    { value: "франківський", label: "Франківський" },
    { value: "сихівський", label: "Сихівський" },
    { value: "личаківський", label: "Личаківський" },
  ];

  return (
    <div className="hidden fixed h-screen w-full left-0 top-0 px-4 py-6 bg-white z-[60] overflow-auto">
      <div className="flex items-center text-2xl pb-[10px] border-b-2">
        <h1 className="mr-auto">Фільтр</h1>
        <CloseButton />
      </div>

      <OptionsButtons />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />
      <PriceButtons />
    </div>
  )
}