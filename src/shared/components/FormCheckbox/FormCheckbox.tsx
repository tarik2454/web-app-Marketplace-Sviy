import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikProps } from 'formik';
import React from 'react';

type Props = {
  formik: FormikProps<any>;
  id: string;
  label: string;
  className?: string;
};

export default function FormCheckbox({ formik, id, label, className }: Props) {
  // console.log(formik.values[id]);
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label className="flex items-center gap-2 ">
        <input
          type="checkbox"
          name={id}
          onChange={formik.handleChange}
          checked={formik.values[id]}
          className="absolute z-10 w-5 h-5 opacity-0 cursor-pointer"
        />

        <span
          className={`block w-5 h-5 ${
            formik.values[id] ? 'text-blue-700' : 'text-neutral-400'
          }`}
        >
          {formik.values[id] ? (
            <SpriteSVG name="selected" />
          ) : (
            <SpriteSVG name="noSelected" />
          )}
        </span>
        {label}
      </label>
    </div>
  );
}
