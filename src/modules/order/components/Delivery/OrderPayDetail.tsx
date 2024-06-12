'use client';
import React, { useEffect, useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import OrderChangeRecipient from './OrderChangeRecipient';

import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function OrderPayDetail({ formik }: any) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorClassRadio, setErrorClassRadio] = useState('');
  const [errorClassInput, setErrorClassInput] = useState('border-blue-200');
  const [selectInput, setSelectInput] = useState('');
  const [isGhangeRepicient, setIsGhangeRepicient] = useState(false)

  const handleInput = () => {
    setIsDisabled(false);
    setSelectInput('border-[#1565C0] border-[1px] rounded-[20px] pl-2');
    setIsGhangeRepicient(prevState => !prevState); 
  };

  const handleInputChange = (value: string) => {
    setSelectInput(value);
    console.log(value)
  };

 

  useEffect(() => {
    formik.errors.picked && formik.touched.picked
      ? setErrorClassRadio('border-[#C60000] border-[1px]')
      : setErrorClassRadio('');
    formik.errors.customer && formik.touched.customer
      ? setErrorClassInput('border-[#C60000]')
      : setErrorClassInput('border-blue-200');
  }, [formik.touched, formik.errors]);

  return (
    <>
      <div className="mb-10 bg-inherit">
        <h3 className="mb-5 font-lora text-2xl md:mb-6">Оплата</h3>
        <div
          className={`bg-white pl-3 pt-6 pb-6 rounded-[20px] xl:min-w-[845px] md:max-w-[700px] sm:max-w-[343px] ${errorClassRadio}`}
        >
          <div className="mb-5 flex items-center gap-2">
            <Field
              className="border-gray-600 w-6 h-6 block absolute"
              id="afterDelivery"
              type="radio"
              name="picked"
              value="Оплата під час отримання товару"
            />
            <label htmlFor="afterDelivery" className="text-gray-900 pl-9">
              Оплата під час отримання товару{' '}
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Field
              className="border-gray-600 w-6 h-6 block absolute"
              type="radio"
              id="toCard"
              name="picked"
              value="Оплата на картку продавця"
            />
            <label htmlFor="toCard" className="text-gray-900 pl-9">
              Оплата на картку продавця{' '}
            </label>
          </div>
        </div>
        <ErrorMessage
          name="picked"
          component="p"
          className="text-[#C60000] text-end text-sm"
        />
      </div>
      <div className="mb-10 flex flex-col gap-5">
        <h3 className="mb-5 font-lora text-2xl md:mb-6">Отримувач</h3>
        <div
          className={`bg-white flex pl-4 pr-4 pt-3 pb-3 items-center justify-between rounded-[20px] border-[1px] xl:min-w-[845px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
        >
          <div className="flex gap-2 basis-5/6">
            <span className="text-gray-400">
              <SpriteSVG name="user" />
            </span>
            <Field
              className={`bg-white focus:outline-none basis-5/6 ${selectInput} `}
              type="text"
              name="customer"
              disabled={isDisabled}
              value={formik.values.customer}
            />
          </div>
          <button
            type="button"
            className="text-blue-700"
            onClick={() => handleInput()}
          >
            Змінити
          </button>
        </div>
        {isGhangeRepicient && <OrderChangeRecipient formik={formik} onInputChange={handleInputChange}/>}
        <ErrorMessage
          name="customer"
          component="p"
          className="text-[#C60000] text-end text-sm"
        />
      </div>
      <div>
        <h3 className="mb-5 font-lora text-2xl md:mb-6">Залишити коментар</h3>
        <Field
          as="textarea"
          className="w-full focus:outline-[#1565C0] placeholder:text-gray-900 h-20 focus:border-blue-900 box-border resize-none bg-white pl-4 pr-4 pt-6 pb-6 rounded-[20px]"
          name="comment"
          placeholder="Введіть ваш коментар"
        />
      </div>
    </>
  );
}
