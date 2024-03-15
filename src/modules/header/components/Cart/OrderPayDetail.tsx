'use client';
import React, { useState } from 'react';
import Image from "next/image";
import userIcon from './img/userIcon.png';
import { Field, ErrorMessage } from 'formik';

const OrderPayDetail = ({customer}:any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorClassRadio, setErrorClassRadio] = useState('');
  const [errorClassInput, setErrorClassInput] = useState('');
  const [selectInput, setSelectInput] = useState('');

  const handleInput = () => {
    setIsDisabled(false);
    setSelectInput('border-[#1565C0] border-[1px] rounded-[20px] pl-2');
  }
  return (
    <div className='flex-col ml-[92px]'>
        <div className='bg-inherit '>
          <h3 className='font-lora text-2xl mt-10 mb-8'>Оплата</h3>
                <div className={`bg-white pl-3 pt-6 pb-6 rounded-[20px] xl:w-[845px] md:max-w-[700px] ${errorClassRadio}`}>
                  <div className='mb-5 flex items-center gap-2'>
                    <Field aria-checked="false" className='border-gray-600 w-6 h-6'id="afterDelivery" type="radio" name="picked" value="Оплата під час отримання товару"/>
                    <label htmlFor='afterDelivery' className='text-base text-gray-900 font-lato'> Оплата під час отримання товару </label>
                  </div>
                  <div className='bg-white flex items-center gap-2'>
                    <Field className='border-gray-600 w-6 h-6' type="radio" id="toCard" name="picked" value="Оплата на картку продавця"/>
                    <label htmlFor='toCard' className='text-base text-gray-900 font-lato'> Оплата на картку продавця </label>
                  </div>
                </div>
                <ErrorMessage name="picked">{msg => <><p className='text-[#C60000]'>{msg}</p> {setErrorClassRadio("border-[#C60000] border-[1px]")}</> }</ErrorMessage>
        </div>
        <div> 
         <h3 className='font-lora text-2xl mt-10 mb-10'>Отримувач</h3>
         <div className={`bg-white flex pl-4 pr-4 pt-3 pb-3 items-center justify-between rounded-[20px] border-[1px] border-blue-200 xl:w-[845px] md:max-w-[700px] ${errorClassInput}`}>
            <div className={`flex gap-2`}>
              <Image src={userIcon} alt="user-icon" width={24} height={24}/>
              <Field className={`focus:outline-none text-base font-lato ${selectInput} `} type="text" name="customer" disabled={isDisabled} value={customer}/>
            </div>
            <button type="button" className='text-blue-700 text-base font-lato' onClick={() => handleInput()}>Змінити</button>
          </div>
          <ErrorMessage name="customer">{msg => <><p className='text-[#C60000]'>{msg}</p>{setErrorClassInput("border-[#C60000] border-[1px]")}</>}</ErrorMessage>
        </div>
        <div className='mb-[164px]'>
          <h3 className='font-lora text-2xl mt-10 mb-8'>Залишити коментар</h3>
          <Field as="textarea" className='focus:outline-[#1565C0] placeholder:text-gray-900 h-20 focus:border-blue-900 box-border resize-none bg-white pl-4 pr-4 pt-6 pb-6 rounded-[20px] xl:w-[845px] md:max-w-[700px]' name="comment" id="comment" placeholder='Напишіть коментар'></Field>
        </div>
    </div>
  )
}

export default OrderPayDetail
