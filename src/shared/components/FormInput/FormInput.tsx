'use client';

import { FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';
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
  textAreaStyle?: string;
};

export default function FormInput({
  name,
  label,
  inputType = 'text',
  formik,
  placeholder,
  inputIcon,
  inputLink,
  classNameLogin,
  stylesInputWrapper,
  textAreaStyle,
  id,
  readOnly = false,
}: Props) {
  const [inputTypePass, setInputTypePass] = useState(inputType);
  const [borderColor, setBorderColor] = useState('border-blue-200');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const fieldProps = formik.getFieldProps(name);
  const fieldMeta = formik.getFieldMeta(name);
  const error = fieldMeta.touched && fieldMeta.error;
   
  useEffect(() => {
    setBorderColor(error ? 'border-[#C60000]' : 'border-blue-200');
  }, [error]);

  const textAreaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (inputType === 'textarea') {
      textAreaHeight();
    }
  }, [formik.values[name], inputType]);

  const eyeButtonHandler = () => {
    setInputTypePass(inputTypePass === 'password' ? 'text' : 'password');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formik.setFieldValue(name, value);
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
        {inputType === 'tel' ? (
          <InputMask
            mask="+38 (099) 999 9999"
            maskChar={'_'}
            placeholder="+38 (0"
            name={name}
            onChange={handlePhoneChange}
            value={fieldProps.value || ''}
            className={`w-full h-6 outline-none ${error ? 'p-invalid' : ''}`}
          />
        ) : inputType === 'textarea' ? (
          <textarea
            {...fieldProps}
            ref={textAreaRef}
            placeholder={placeholder}
            className={`${textAreaStyle} w-full h-6 outline-none flex-grow order-2`}
          />
        ) : (
          <input
            id={id}
            {...fieldProps}
            type={inputTypePass}
            placeholder={placeholder}
            className={`${textAreaStyle} w-full h-6 outline-none flex-grow order-2 ${
              readOnly ? 'text-gray-600' : ''
            }`}
            pattern={inputType === 'number' ? '[0-9]*' : undefined}
            readOnly={readOnly}
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
