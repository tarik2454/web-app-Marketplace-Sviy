'use client';

import { FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import InputMask from 'react-input-mask';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { twMerge } from 'tailwind-merge';

type Props = {
  name: string;
  label?: string;
  inputType?: 'password' | 'text' | 'email' | 'number' | 'textarea' | 'tel';
  formik: FormikProps<any>;
  placeholder?: string;
  inputIcon?: string;
  inputLink?: string;
  classNameLogin?: string;
  stylesInputWrapper?: string;
  id?: string;
  readOnly?: boolean;
};

export default function FormInput({
  name,
  label,
  inputType,
  formik,
  placeholder,
  inputIcon,
  inputLink,
  classNameLogin,
  stylesInputWrapper,
  id,
  readOnly,
}: Props) {
  const [inputTypePass, setInputTypePass] = useState(inputType);
  const [borderColor, setBorderColor] = useState('border-blue-200');

  const error = formik.touched[name] && formik.errors[name];

  useEffect(() => {
    setBorderColor(error ? 'border-[#C60000]' : 'border-blue-200');
  }, [error]);

  const eyeButtonHandler = () => {
    setInputTypePass(inputTypePass === 'password' ? 'text' : 'password');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formik.setFieldValue(name, value);
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');

    return cleaned.replace(
      /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1 $2 $3 $4 $5'
    );
  };

  return (
    <div className="relative h-auto flex flex-col w-full">
      <label
        htmlFor={id}
        className={`ml-4 md:text-base sm:text-sm ${classNameLogin}`}
      >
        {label}
      </label>

      <div
        className={twMerge(
          `flex px-4 py-3 gap-2 relative ${borderColor} border-[1px] bg-white rounded-default`,
          stylesInputWrapper
        )}
      >
        {inputType !== 'textarea' && inputType !== 'tel' && (
          <input
            id={id}
            onChange={formik.handleChange}
            type={inputTypePass}
            name={name}
            placeholder={placeholder}
            value={formik.values[name] || ''}
            className={`w-full h-6 outline-none flex-grow order-2 ${
              readOnly ? 'text-gray-600' : ''
            }`}
            pattern={inputType === 'number' ? '[0-9]*' : undefined}
            readOnly={readOnly}
          />
        )}
        {inputType === 'textarea' && (
          <textarea
            onChange={formik.handleChange}
            name={name}
            placeholder={placeholder}
            value={formik.values[name] || ''}
            className="w-full h-6 outline-none flex-grow order-2 overflow-hidden"
          />
        )}
        {inputType === 'tel' && (
          <InputMask
            mask="+38 099 999 99 99"
            maskChar={'_'}
            placeholder="+38 0"
            name={name}
            onChange={handlePhoneChange}
            className="w-full h-6 outline-none p-invalid"
            value={formatPhoneNumber(formik.values[name] || '')}
          />
        )}
        {inputIcon && (
          <span className="text-gray-400 order-1">
            <SpriteSVG name={inputIcon} />
          </span>
        )}
        {inputType === 'password' && (
          <button onClick={eyeButtonHandler} type="button">
            <SpriteSVG
              name={inputTypePass === 'password' ? 'eye' : 'eye-off'}
            />
          </button>
        )}
        {inputLink && (
          <Link href="" className="text-base text-blue-700 order-3">
            {inputLink}
          </Link>
        )}
      </div>

      {error && (
        <p className="text-[#C60000] text-end text-sm">{String(error)}</p>
      )}
    </div>
  );
}
