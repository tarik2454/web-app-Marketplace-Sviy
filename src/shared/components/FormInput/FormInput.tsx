"use client"

import { SpriteSVG } from "@/shared/img/SpriteSVG";
import { ChangeEventHandler, useState } from "react";

type Props = {
  id: string,
  label: string,
  inputType: "password" | "text",
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string,
  formik: Object,
};

export default function FormInput ({ label, inputType, id, onChange, value}: Props ) {
  const [inputTypePass, setInputTypePass] = useState(inputType);

  const eyeButtonHandler = () => {
    setInputTypePass(inputTypePass === "password" ? "text" : "password");
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={label} className="ml-4">{ label }</label>
      <div className="flex px-4 py-3 gap-2 border-2 border-blue-200 bg-white rounded-default">
        <input 
          onChange={onChange} 
          type={inputTypePass} 
          id={id}
          value={value} 
          className="w-full outline-none" 
        />
        {inputType === "password" && 
          (
            <button onClick={eyeButtonHandler}>
              <SpriteSVG name={inputTypePass === "password" ? "eye" : "eye-off"} />
            </button>
          )
        }
      </div>
    </div>
  )
}