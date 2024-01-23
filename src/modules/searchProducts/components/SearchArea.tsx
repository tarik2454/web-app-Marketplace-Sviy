import { SpriteSVG } from "@/shared/img/SpriteSVG";
import React from 'react'
import { Dropdown } from ".";

export default function SearchArea () {
  const options = [
    { value: "за районом", label: "За районом" },
    { value: "галицький", label: "Галицький" },
    { value: "залізничний", label: "Залізничний" },
    { value: "франківський", label: "Франківський" },
    { value: "сихівський", label: "Сихівський" },
    { value: "личаківський", label: "Личаківський" },
  ];

  return (
    <div className="hidden border-r-2 border-blue-700 md:block md:w-full xl:w-72">
      <div className="flex items-center px-2 py-2">
        <div>
          <SpriteSVG name="location" />
        </div>
        <Dropdown options={options} placeholder={"Район"} />
      </div>
    </div>
  );
}