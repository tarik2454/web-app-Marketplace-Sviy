import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { SpriteSVG } from '@/shared/img/SpriteSVG';

type Props = {
  formik: any;
  fieldName: string;
  id: string;
  label?: string;
  field: {
    name: string;
    value: string;
  };
  index: number;
  inputIcon?: string;
  classNameLogin?: string;
};

export default function PhoneInput({
  formik,
  fieldName,
  id,
  label,
  index,
  field,
  inputIcon,
  classNameLogin,
}: Props) {
  const errors = Array.isArray(formik.errors[fieldName])
    ? formik.errors[fieldName][index]
    : formik.errors[fieldName];
  const touched = Array.isArray(formik.touched[fieldName])
    ? formik.touched[fieldName][index]
    : formik.touched[fieldName];
  const error = touched && errors;
  const [borderColor, setBorderColor] = useState(
    error ? 'border-red-700' : 'border-blue-200'
  );

  useEffect(() => {
    setBorderColor(error ? 'border-red-700' : 'border-blue-200');
  }, [error]);

  return (
    <div className="relative h-auto flex flex-col w-full customInput">
      {label && (
        <label htmlFor={id} className={`ml-4 ${classNameLogin}`}>
          {label}
        </label>
      )}
      <div
        className={`flex flex-row-reverse px-4 py-3 gap-2 border-blue-200 border bg-white rounded-default ${borderColor}`}
      >
        <InputMask
          mask="+3\80 99 999 99 99"
          maskChar="_"
          placeholder="+380 99 999 99 99"
          name={field.name}
          onChange={formik.handleChange}
          className="w-full h-6 outline-none p-invalid"
        />
        {inputIcon && (
          <span className="prevIcon text-gray-400">
            <SpriteSVG name={inputIcon} />
          </span>
        )}
        {error && (
          <p className="absolute -bottom-7 right-0 text-red-700">
            {String(error)}
          </p>
        )}
      </div>
    </div>
  );
}
