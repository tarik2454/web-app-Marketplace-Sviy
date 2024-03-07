'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import styles from '@/styles/FormInput.module.css';

type Props = {
  id: string;
  label?: string;
  inputType: 'password' | 'text' | 'email' | 'number';
  formik: FormikProps<any>;
  placeholder?: string;
  inputIcon?: string;
};

export default function FormInput({
  label,
  inputType,
  id,
  formik,
  placeholder,
  inputIcon,
}: Props) {
  const [inputTypePass, setInputTypePass] = useState(inputType);
  const error = formik.touched[id] && formik.errors[id];

  const [borderColor, setBorderColor] = useState(
    error ? 'border-red-700' : 'border-blue-200'
  );

  useEffect(() => {
    setBorderColor(error ? 'border-red-700' : 'border-blue-200');
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
        className={`flex flex-row-reverse px-4 py-3 gap-2 relative ${borderColor} border-2 bg-white rounded-default`}
      >
        <input
          onChange={formik.handleChange}
          type={inputTypePass}
          id={id}
          placeholder={placeholder}
          value={formik.values.id}
          className="w-full h-6 outline-none"
        />
        {inputIcon && (
          <span className={`${styles.prevIcon} text-gray-400`}>
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
      </div>
      {error && (
        <p className="absolute -bottom-7 right-0 text-red-700">
          {String(error)}
        </p>
      )}
    </div>
  );
}
