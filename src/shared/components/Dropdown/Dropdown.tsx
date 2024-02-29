"use client"

import Select from 'react-select'

type Option = {
  value: string,
  label: string,
}

type Props = {
  options: Array<Option>,
  placeholder: string,
  id: string,
  dropdownName?: string,
  className?: string,
  onChange: any,
}; 

export default function Dropdown ({ options, placeholder, id, dropdownName, className, onChange }: Props) {
  return (
    <div className={className ? `${className}` : "flex flex-col gap-4 mt-8"}>
      <label htmlFor={id}>{dropdownName}</label>
      <div className="px-4 py-1 border-2 rounded-default bg-white">
        <Select 
          classNames={{
            control: () => ("font-lato"),
            option: () => ("px-5 py-2 bg-neutral-50 font-lato rounded-b-default"),
            menu: () => ("rounded-b-default bg-neutral-50 overflow-hidden xl:overflow-auto"),
            dropdownIndicator: () => ("text-[#212121] font-thin"),
          }}
          unstyled={true} 
          options={options}
          placeholder={placeholder} 
          id={id}
          onChange={onChange}
        />
      </div>
    </div>
  )
}