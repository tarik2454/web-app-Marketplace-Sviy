'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import styles from '@/styles/FormInput.module.css';
import Link from 'next/link';
import InputMask from 'react-input-mask';

type Props = {
  name: string;
  label?: string;
  inputType?: 'password' | 'text' | 'email' | 'number' | 'textarea' | 'tel';
  formik: FormikProps<any>;
  placeholder?: string;
  inputIcon?: string;
  inputLink?: string;
};

export default function FormInput({
  name,
  label,
  inputType,
  formik,
  placeholder,
  inputIcon,
  inputLink,
}: Props) {
  const [inputTypePass, setInputTypePass] = useState(inputType);
  const error = formik.touched[name] && formik.errors[name];
  const [borderColor, setBorderColor] = useState('border-blue-200');

  useEffect(() => {
    setBorderColor(error ? 'border-[#C60000]' : 'border-blue-200');
  }, [error]);

  const eyeButtonHandler = () => {
    setInputTypePass(inputTypePass === 'password' ? 'text' : 'password');
  };

  return (
    <div
      className={`relative h-auto flex flex-col w-full ${styles.customInput}`}
    >
      <label htmlFor={name} className="ml-4 md:text-base sm:text-sm">
        {label}
      </label>
      <div
        className={`flex px-4 py-3 gap-2 relative ${borderColor} border-[1px] bg-white rounded-default`}
      >
        {inputType !== 'textarea' && inputType !== 'tel' && (
          <input
            onChange={formik.handleChange}
            type={inputTypePass}
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            className="w-full h-6 outline-none flex-grow order-2"
            pattern={inputType === 'number' ? '[0-9]*' : undefined}
          />
        )}
        {inputType === 'textarea' && (
          <textarea
            onChange={formik.handleChange}
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            className="w-full h-6 outline-none flex-grow order-2 overflow-hidden"
          />
        )}
        {inputType === 'tel' && (
          <InputMask
            mask="+3\80 99 999 99 99"
            maskChar="_"
            placeholder="+380"
            name={name}
            onChange={formik.handleChange}
            className="w-full h-6 outline-none p-invalid"
          />
        )}
        {inputIcon && (
          <span className={`${styles.prevIcon} text-gray-400 order-1`}>
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
