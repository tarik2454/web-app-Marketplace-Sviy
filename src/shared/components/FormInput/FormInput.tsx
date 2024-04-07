'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import styles from '@/styles/FormInput.module.css';
import Link from 'next/link';

type Props = {
  id: string;
  label?: string;
  inputType: 'password' | 'text' | 'email' | 'number';
  formik: FormikProps<any>;
  placeholder?: string;
  inputIcon?: string;
  inputLink?: string;
  name?: string;
};

export default function FormInput({
  label,
  inputType,
  id,
  formik,
  placeholder,
  inputIcon,
  inputLink,
  name,
}: Props) {
  const [inputTypePass, setInputTypePass] = useState(inputType);
  const error = formik?.touched[id] && formik?.errors[id];

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
      <label htmlFor={id} className="ml-4 md:text-base sm:text-sm">
        {label}
      </label>
      <div
        className={`flex px-4 py-3 gap-2 relative ${borderColor} border-[1px] bg-white rounded-default`}
      >
        <input
          onChange={formik.handleChange}
          type={inputTypePass}
          id={id}
          placeholder={placeholder}
          value={formik.values.id}
          name={name}
          className="w-full h-6 outline-none flex-grow order-2"
        />
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
        <p className="text-[#C60000] text-end text-sm">
          {String(error)}
        </p>
      )}
    </div>
  );
}
