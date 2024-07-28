'use client';

import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
import { FormikProps } from 'formik';
import { useState, useEffect } from 'react';

type Props = {
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  id: string;
  name: string;
  dropdownName?: string;
  formik: FormikProps<any>;
  wrapperClassName?: string;
  stylesInput?: string;
  controlClassName?: string;
  optionClassName?: string;
  menuClassName?: string;
  dropdownIndicatorClassName?: string;
  onChange: (selectedOption: { value: string; label: string } | null) => void;
};

export default function DropDownForm({
  options,
  placeholder,
  id,
  name,
  formik,
  dropdownName,
  wrapperClassName,
  stylesInput,
  controlClassName,
  optionClassName,
  menuClassName,
  dropdownIndicatorClassName,
  onChange,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const error = formik.touched[name] && formik.errors[name];

  useEffect(() => {
    const formikValue = formik.values[name];
    setSelectedOption(
      options.find(option => option.value === formikValue) || null
    );
    // eslint-disable-next-line
  }, [formik.values[name], options]);

  const customStyles = {
    placeholder: (provided: any) => ({
      ...provided,
      color: selectedOption ? '#000000' : '#9E9E9E',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#000000',
    }),
  };

  const handleChange = (option: { value: string; label: string } | null) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className={twMerge('flex flex-col mt-0', wrapperClassName)}>
      {dropdownName ? <label htmlFor={id}>{dropdownName}</label> : null}

      <div
        className={twMerge(
          'px-4 py-1 border-[1px] border-slate-300 rounded-default bg-white',
          stylesInput
        )}
      >
        <Select
          classNames={{
            control: () => twMerge('font-lato', controlClassName),
            menu: () =>
              twMerge(
                'w-full mt-[14px] bg-neutral-50 border-x-[1px] border-b-[1px] border-slate-300 rounded-default overflow-hidden absolute -left-[16px] xl:overflow-auto',
                menuClassName
              ),
            option: () =>
              twMerge(
                'px-5 py-2 bg-neutral-50 font-lato border-b-[1px] border-slate-300 last-of-type:border-b-0',
                optionClassName
              ),
            dropdownIndicator: () =>
              twMerge('text-[#212121] font-thin', dropdownIndicatorClassName),
          }}
          unstyled={true}
          options={options}
          styles={customStyles}
          placeholder={placeholder}
          id={id}
          value={selectedOption}
          onChange={handleChange}
        />
      </div>
      {error && <p className="error">{String(error)}</p>}
    </div>
  );
}
