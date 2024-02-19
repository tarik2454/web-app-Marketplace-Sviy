import React from 'react';
import InputMask from 'react-input-mask';
import { FormikProps } from 'formik';

type Props = {
  maskPlaceholder: string,
  placeholder: string,
  id: string,
  label?: string,
  field: {
    name: string,
    value: string
  },
  formik: FormikProps<any>
};

export default function PhoneInput ({ maskPlaceholder, placeholder, formik, id, label, field }: Props) {

  return (
    <div className="relative h-auto flex flex-col w-full">
      {label && <label htmlFor={id} className="ml-4">{label}</label>}
      <div className={`flex px-4 py-3 gap-2 border-blue-200 border-2 bg-white rounded-default`}>
        <InputMask mask={maskPlaceholder}
                   maskChar='_'
                   placeholder={placeholder}
                   name={field.name}
                   onChange={formik.handleChange}
                   className="w-full h-6 outline-none p-invalid" />
      </div>
    </div>
  )
}