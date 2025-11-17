import React from 'react';
import { FormikProps } from 'formik';

interface CheckboxFormProps {
  name: string;
  labelText: string; // текст для відображення
  value: string; // значення для валідації
  formik: FormikProps<any>;
  className?: string;
  id?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxForm({
  name,
  labelText,
  value, // новий пропс для значення валідації
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
      updatedValues.push(value); // використовуємо value для валідації
    } else {
      updatedValues = updatedValues.filter(item => item !== value); // використовуємо value для видалення
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
            checked={formik.values[name]?.includes(value)} // перевірка за value
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-[16px]">{labelText}</span>
        </label>
        {error && <p className="error">{String(error)}</p>}
      </span>
    </div>
  );
}
