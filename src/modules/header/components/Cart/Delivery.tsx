'use client';
import { Field, ErrorMessage } from 'formik'
import React, { useState, useEffect } from 'react'
import SelectPostoffice from './SelectPostoffice';


const Delivery = ({values}:any) => {
  const [showNovaposhta, setShowNovaposhta] = useState("hidden");
  const [showUkrposhta, setShowUkrposhta] = useState("hidden");
  const [showByAddress, setShowByAddress] = useState("hidden");
  const [postOfficeView, setPostOfficeView] = useState("block");

  const [errorClassRadio, setErrorClassRadio] = useState('');

  const handleSetShowByAddress = () => {
    setShowByAddress("block");
    setPostOfficeView("hidden");
    values.postOfficeApiSelect = '';
    values.city = '';
  }

  const handleByYourself = () => {
    setShowNovaposhta("hidden");
    setShowUkrposhta("hidden");
    setShowByAddress("hidden");
    setPostOfficeView("block");
    values.deliveryByAddressPicked = false;
    values.postOfficeApiSelect = '';
    values.city = '';
    
  }

  const handleShowNovaposhta = () => {
    setPostOfficeView("block");
    setShowNovaposhta("block");
    setShowUkrposhta("hidden");
    setShowByAddress("hidden");
    values.deliveryByAddressPicked = false;
    values.postOfficeApiSelect = '';
    values.city = '';
  };
  const handleShowUkrposhta = () => {
    setPostOfficeView("block");
    setShowNovaposhta("hidden");
    setShowUkrposhta("block");
    setShowByAddress("hidden");
    values.deliveryByAddressPicked = false;
    values.postOfficeApiSelect = '';
    values.city = '';
  }

  useEffect(() => {
    if(values.deliveryPicked) setErrorClassRadio("border-blue-200");
  }, [values.deliveryPicked])
  
  return (
    <div className='flex-col ml-[92px]'>
      <h3 className='font-lora text-2xl mt-10 mb-8'>Доставка</h3>
      <div className={`bg-white pl-3 pr-3 pt-6 pb-6 rounded-[20px] min-w-[845px] md:max-w-[700px] ${errorClassRadio}`}>
        <div className='flex justify-between items-start'>
            <div className='mb-5 flex items-center gap-2'>
                <Field className='border-gray-600 w-6 h-6'id="byYourself" type="radio" name="deliveryPicked" value="Самовивіз" onClick={() => handleByYourself()}/>
                <label htmlFor='byYourself' className='text-base text-gray-900 font-lato'> Самовивіз</label>
            </div>
            <p className='text-base text-gray-900 font-lato'>Безкоштовно</p>
        </div>
        <div>
            <div className='flex justify-between items-start'>
                <div className='mb-5 flex items-center gap-2'>
                  <Field className='border-gray-600 w-6 h-6' id="novaposhta" type="radio" name="deliveryPicked" value="Доставка на Нову Пошту" onClick={() => handleShowNovaposhta()}/>
                    <label htmlFor='novaposhta' className='text-base text-gray-900 font-lato'> Доставка на Нову Пошту </label>
                </div>
                <p className='text-base text-gray-900 font-lato'>За тарифами перевізника</p>
            </div>
            <SelectPostoffice
               postOfficeView={postOfficeView} 
               postOfficeShow={showNovaposhta} 
               byAddress={showByAddress} 
               onclick={handleSetShowByAddress} 
               forAddressDelivery="byAddress1"
               forAddressPoshta="addressPoshta1"
               homeAddress="homeAddress1"
               apartmentAddress="apartmentAddress1"
               exitAddress="exitAddress1"
               floorAddress="floorAddress1"
               values={values}
             />
        </div>
        <div>
            <div className='flex justify-between items-start'>
                <div className='mb-5 flex items-center gap-2'>
                    <Field className='border-gray-600 w-6 h-6' id="ukrposhta" type="radio" name="deliveryPicked" value="Доставка на Укрпошту" onClick={() => handleShowUkrposhta()}/>
                    <label htmlFor='ukrposhta' className='text-base text-gray-900 font-lato'> Доставка на Укрпошту </label>
                </div>
                <p className='text-base text-gray-900 font-lato'>За тарифами перевізника</p>
            </div>
            <SelectPostoffice 
              postOfficeView={postOfficeView}
              postOfficeShow={showUkrposhta} 
              byAddress={showByAddress} 
              onclick={handleSetShowByAddress} 
              forAddressDelivery="byAddress2"
              forAddressPoshta="addressPoshta2"
              homeAddress="homeAddress2"
              apartmentAddress="apartmentAddress2"
              exitAddress="exitAddress2"
              floorAddress="floorAddress2"
              values={values}
            />
        </div>
      </div>
      <ErrorMessage name="deliveryPicked">{msg => <><p className='text-[#C60000]'>{msg}</p>{setErrorClassRadio("border-[#C60000] border-[1px]")}</>}</ErrorMessage>
    </div>
  )
}

export default Delivery
