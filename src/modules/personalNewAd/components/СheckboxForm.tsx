import React from 'react';
import { FormikProps } from 'formik';

interface CheckboxFormProps {
  name: string;
  labelText: string;
  formik: FormikProps<any>;
  className?: string;
  id?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxForm({
  name,
  labelText,
  formik,
  className,
  id,
}: CheckboxFormProps) {
  const error = formik.touched[name] && formik.errors[name];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    let updatedValues = Array.isArray(formik.values[name])
      ? [...formik.values[name]]
      : [];

    if (isChecked) {
      updatedValues.push(labelText);
    } else {
      updatedValues = updatedValues.filter(item => item !== labelText);
    }

    formik.setFieldValue(name, updatedValues);
  }

  return (
    <div className={`flex items-center ${className}`}>
      <span>
        <label htmlFor={id}>
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={formik.values[name]?.includes(labelText)}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-[16px]">{labelText}</span>
        </label>
        {error && (
          <p className="text-[#C60000] text-end text-sm">{String(error)}</p>
        )}
      </span>
    </div>
  );
}

export default CheckboxForm;
