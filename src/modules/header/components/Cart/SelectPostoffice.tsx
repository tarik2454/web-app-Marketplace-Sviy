'use client';
import React, { useEffect, useId, useState } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import Select from 'react-select';

type SelectPostofficeProps = {
    postOfficeShow: string; 
    byAddress: string;
    onclick: () => void;
    postOfficeView: string;
    forAddressDelivery: string;
    forAddressPoshta: string;
    homeAddress: string;
    apartmentAddress: string;
    exitAddress: string;
    floorAddress: string;
    optionsPoshta?: string[];
    values: any;
}

const SelectItems = (props: any) => {
    const [field, state, {setValue}] = useField(props.field.name);

    const onChange = ({value}:{
        value: string;
        label: string;
    }) => {
        setValue(value);
    };
    return (
        <Select 
            classNames={{
                    control: () => (`py-3 px-4 mt-5 text-nowrap w-full cursor-pointer bg-white border text-start text-base text-gray-900 font-lato xl:min-w-[813px] md:max-w-[668px] rounded-[20px] ${props.errorClassInputSelect}`),
                    option: (state) => (state.isSelected ? "font-lato px-5 py-2 bg-blue-100" : "px-5 py-2 bg-white font-lato"),
                    menu: () => ("rounded-b-default bg-neutral-50 overflow-hidden xl:overflow-auto"),
                    dropdownIndicator: () => ("text-[#212121] font-thin"),
                    }}
            unstyled={true} 
            placeholder="Виберіть своє відділення"
            instanceId={ useId() }
            onChange={onChange}
            value ={props.options.find((option:{
                value: string;
                label: string;
            }) => option.value === field.value) || null}
            {...props}
                    />
    )
}

const SelectPostoffice = ({postOfficeShow, byAddress, onclick, postOfficeView, forAddressDelivery, forAddressPoshta, homeAddress, apartmentAddress, exitAddress, floorAddress, values}: SelectPostofficeProps) => {
    const [errorClassInputCity, setErrorClassInputCity] = useState('border-blue-200');
    const [errorClassInputSelect, setErrorClassInputSelect] = useState('border-blue-200');
    const [errorClassInputAddress, setErrorClassInputAddress] = useState('border-blue-200');
    const [errorClassInputHome, setErrorClassInputHome] = useState('border-blue-200');

    useEffect(() => {
        if(values.city) setErrorClassInputCity("border-blue-200");
        if(values.postOfficeApiSelect) setErrorClassInputSelect("border-blue-200");
        if(values.address) setErrorClassInputAddress("border-blue-200");
        if(values.homeAddress) setErrorClassInputHome("border-blue-200");
      }, [values])

    const options = [
        {value: "№1 вул.Городецька 5", label: "№1 вул.Городецька 5"},
        {value: "№1 вул.Городецька 6", label: "№1 вул.Городецька 6"},
        {value: "№1 вул.Городецька 7", label: "№1 вул.Городецька 7"},
        {value: "№1 вул.Городецька 8", label: "№1 вул.Городецька 8"},
        {value: "№1 вул.Городецька 9", label: "№1 вул.Городецька 9"},
        {value: "№1 вул.Городецька 10", label: "№1 вул.Городецька 10"},
        {value: "№1 вул.Городецька 15", label: "№1 вул.Городецька 15"},
        {value: "№1 вул.Городецька 11", label: "№1 вул.Городецька 11"},
      ]
    return (
    <div className={postOfficeShow}>
                <div className={postOfficeView}>
                    <Field className={`placeholder:text-gray-900 text-base text-gray-900 font-lato min-w-[813px] md:w-[668px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputCity}`} type="text" name="city" placeholder="Вкажіть місто"/>
                    <ErrorMessage name="city">{msg => <><p className='text-[#C60000]'>{msg}</p>{setErrorClassInputCity("border-[#C60000]")}</>}</ErrorMessage>
                    <div>
                        <Field component={SelectItems} values={values} options={options} name="postOfficeApiSelect" errorClassInputSelect={errorClassInputSelect}/> 
                    </div>
                    <ErrorMessage name="postOfficeApiSelect">{msg =><><p className='text-[#C60000]'>{msg}</p>{setErrorClassInputSelect("border-[#C60000]")}</>}</ErrorMessage>
                </div>
                <div className='flex justify-between items-start mt-5'>
                <div className='mb-5 flex items-center gap-2'>
                    <Field className='border-gray-600 ml-2 w-4 h-4'id={forAddressDelivery} type="checkbox" name="deliveryByAddressPicked" onClick={onclick}/>
                    <label htmlFor={forAddressDelivery} className='text-base text-gray-900 font-lato'> Кур’єр на вашу адресу </label>
                </div>
                <p className='text-base text-gray-900 font-lato'>За тарифами перевізника</p>
                </div>
                <div className={byAddress}>
                    <div className='flex-col text-base font-lato'>
                        <label htmlFor={forAddressPoshta} className='text-gray-600 ml-[32px]'>Адреса доставки</label>
                        <Field id={forAddressPoshta} type="text" name='address' className={`xl:min-w-[813px] md:max-w-[668px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputAddress}`}/>
                    </div>
                    <ErrorMessage name="address">{msg =><><p className='text-[#C60000]'>{msg}</p>{setErrorClassInputAddress("border-[#C60000]")}</>}</ErrorMessage>
                    <div className='flex text-base font-lato gap-[57px] mt-5 mb-5'>
                        <div className='flex-col'>
                            <label htmlFor={homeAddress} className='text-gray-600'>Дім</label>
                            <Field id={homeAddress} type="text" name="homeAddress" className={`w-[160px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputHome}`}/>
                            <ErrorMessage name="homeAddress">{msg =><><p className='text-[#C60000]'>{msg}</p>{setErrorClassInputHome("border-[#C60000]")}</>}</ErrorMessage>
                        </div>
                        <div className='flex-col'>
                            <label htmlFor={apartmentAddress} className='text-gray-600'>Квартира</label>
                            <Field id={apartmentAddress} type="text" name="apartmentAddress" className="w-[160px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"/>
                        </div>
                        <div className='flex-col'>
                            <label htmlFor={exitAddress} className='text-gray-600'>Під’їзд</label>
                            <Field id={exitAddress} type="text" name="exitAddress" className="w-[160px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"/>
                        </div>
                        <div className='flex-col'>
                            <label htmlFor={floorAddress} className='text-gray-600'>Поверх</label>
                            <Field id={floorAddress} type="text" name="floorAddress" className="w-[160px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"/>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SelectPostoffice


