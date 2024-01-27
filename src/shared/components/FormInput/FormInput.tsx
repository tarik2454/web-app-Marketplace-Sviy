"use client"

import { SpriteSVG } from "@/shared/img/SpriteSVG";
import { FormikProps } from "formik";
import { ChangeEventHandler, useEffect, useState } from "react";

type Props = {
  id: string,
  label: string,
  inputType: "password" | "text" | "email",
  formik: FormikProps<any>,
};

export default function FormInput ({ label, inputType, id, formik }: Props ) {
  const [inputTypePass, setInputTypePass] = useState(inputType);
  const error = formik.touched[id] && formik.errors[id];

  const [borderColor, setBorderColor] = useState(error ? "border-red-700" : "border-blue-200");

  useEffect(() => {
    setBorderColor(error ? "border-red-700" : "border-blue-200");
  }, [error])

  const eyeButtonHandler = () => {
    setInputTypePass(inputTypePass === "password" ? "text" : "password");
  }

  return (
    <div className="relative h-auto flex flex-col w-full">
      <label htmlFor={label} className="ml-4">{ label }</label>
      <div className={`flex px-4 py-3 gap-2 ${borderColor} border-2 bg-white rounded-default`}>
        <input 
          onChange={formik.handleChange} 
          type={inputTypePass} 
          id={id}
          value={formik.values.id} 
          className="w-full h-6 outline-none" 
        />
        {inputType === "password" && 
          (
            <button onClick={eyeButtonHandler} type="button">
              <SpriteSVG name={inputTypePass === "password" ? "eye" : "eye-off"} />
            </button>
          )
        }
      </div>
        {error && 
          (
            <p className="absolute top-20 right-0 text-red-700">{ String(error) }</p>
          )
        }
    </div>
  )
}