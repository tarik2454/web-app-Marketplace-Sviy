import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikProps } from 'formik';
import React from 'react';

type Props = {
  formik: FormikProps<any>;
  id: string;
  label: string;
  className?: string;
};

const FormCheckbox = ({ formik, id, label, className }: Props) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={formik.handleChange}
        checked={formik.values[id]}
        className="hidden"
      />
      <label htmlFor={id} className="flex items-center gap-2">
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
};

export default FormCheckbox;
