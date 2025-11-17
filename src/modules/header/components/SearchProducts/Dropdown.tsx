"use client"

import { ReactNode, useId } from 'react'
import Select from 'react-select'

type Options = {
  value: String,
  label: String,
}

export default function Dropdown (
  { options, placeholder }: { options: Array<Options>, placeholder: ReactNode, }
  ) {
  return (
    <div className="w-full">
      <Select 
        classNames={{
          control: () => ("ml-2 font-lato"),
          option: () => ("px-5 py-2 bg-neutral-50 font-lato rounded-b-default"),
          menu: () => ("h-fit rounded-b-default bg-white overflow-hidden"),
          dropdownIndicator: () => ("text-[#212121] font-thin"),
        }}
        unstyled={true} 
        options={options}
        placeholder={placeholder} 
        instanceId={useId()}
      />
    </div>
  )
}