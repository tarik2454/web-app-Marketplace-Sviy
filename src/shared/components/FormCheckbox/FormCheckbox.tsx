import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikProps } from 'formik';
import React from 'react';

type Props = {
  formik: FormikProps<any>;
  name: string;
  label: string;
  className?: string;
};

const FormCheckbox = ({ formik, name, label, className }: Props) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        // id={id}
        name={name}
        onChange={formik.handleChange}
        checked={formik.values[name]}
        className="absolute -left-full"
        aria-hidden="true"
      />
      <label htmlFor={name} className="flex items-center gap-2 ">
        <span
          className={`block w-5 h-5 ${
            formik.values[name] ? 'text-blue-700' : 'text-neutral-400'
          }`}
        >
          {formik.values[name] ? (
            <SpriteSVG name="selected" />
          ) : (
            <SpriteSVG name="noSelected" />
          )}
        </span>
        {label}
      </label>
    </div>
  );
};

export default FormCheckbox;
