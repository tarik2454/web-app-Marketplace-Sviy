'use client';

import { Field, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';
import SelectPostoffice from './SelectPostoffice';

export default function Delivery({ formik }: any) {
  const [showNovaposhta, setShowNovaposhta] = useState('hidden');
  const [showUkrposhta, setShowUkrposhta] = useState('hidden');
  const [showByAddress, setShowByAddress] = useState('hidden');
  const [postOfficeView, setPostOfficeView] = useState('block');

  const [errorClassRadio, setErrorClassRadio] = useState('');

  const handleSetShowByAddress = () => {
    setShowByAddress('block');
    setPostOfficeView('hidden');
    formik.values.postOfficeApiSelect = '';
    formik.values.city = '';
  };

  const handleByYourself = () => {
    setShowNovaposhta('hidden');
    setShowUkrposhta('hidden');
    setShowByAddress('hidden');
    setPostOfficeView('block');
    formik.values.deliveryByAddressPicked = false;
    formik.values.postOfficeApiSelect = '';
    formik.values.city = '';
  };

  const handleShowNovaposhta = () => {
    setPostOfficeView('block');
    setShowNovaposhta('block');
    setShowUkrposhta('hidden');
    setShowByAddress('hidden');
    formik.values.deliveryByAddressPicked = false;
    formik.values.postOfficeApiSelect = '';
    formik.values.city = '';
  };

  const handleShowUkrposhta = () => {
    setPostOfficeView('block');
    setShowNovaposhta('hidden');
    setShowUkrposhta('block');
    setShowByAddress('hidden');
    formik.values.deliveryByAddressPicked = false;
    formik.values.postOfficeApiSelect = '';
    formik.values.city = '';
  };

  useEffect(() => {
    formik.errors.deliveryPicked && formik.touched.deliveryPicked
      ? setErrorClassRadio('border-[#C60000] border-[1px]')
      : setErrorClassRadio('border-blue-200');
  }, [formik]);

  return (
    <div className="mb-10 ">
      <h3 className="mb-5 font-lora text-2xl md:mb-6">Доставка</h3>

      <div
        className={`bg-white pl-3 pr-3 pt-6 pb-6 rounded-[20px] ${errorClassRadio}`}
      >
        <div className="flex justify-between items-start">
          <div className="mb-5 flex items-center">
            <Field
              className="border-gray-600 w-6 h-6 block absolute"
              id="byYourself"
              type="radio"
              name="deliveryPicked"
              value="Самовивіз"
              onClick={() => handleByYourself()}
            />
            <label
              htmlFor="byYourself"
              className="xl:text-base md:text-base text-gray-900 pl-9 sm:text-sm"
            >
              Самовивіз
            </label>
          </div>
          <p className="xl:text-base md:text-base text-gray-900 text-end sm:text-xs">
            Безкоштовно
          </p>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <div className="mb-5 flex items-center">
              <Field
                className="border-gray-600 w-6 h-6 block absolute"
                id="novaposhta"
                type="radio"
                name="deliveryPicked"
                value="Доставка на Нову Пошту"
                onClick={() => handleShowNovaposhta()}
              />
              <label
                htmlFor="novaposhta"
                className="xl:text-base md:text-base text-gray-900 pl-9 sm:text-sm"
              >
                Доставка на Нову Пошту
              </label>
            </div>
            <p className="xl:text-base md:text-base text-gray-900 text-end xl:text-nowrap md:text-nowrap sm:text-wrap sm:text-xs">
              За тарифами перевізника
            </p>
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
            formik={formik}
          />
        </div>
        <div>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <Field
                className="border-gray-600 w-6 h-6 block absolute"
                id="ukrposhta"
                type="radio"
                name="deliveryPicked"
                value="Доставка на Укрпошту"
                onClick={() => handleShowUkrposhta()}
              />
              <label
                htmlFor="ukrposhta"
                className="xl:text-base md:text-base text-gray-900 pl-9 sm:text-sm"
              >
                Доставка на Укрпошту
              </label>
            </div>
            <p className="xl:text-base md:text-base text-gray-900 text-end xl:text-nowrap md:text-nowrap sm:text-wrap sm:text-xs">
              За тарифами перевізника
            </p>
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
            formik={formik}
          />
        </div>
      </div>

      <ErrorMessage
        name="deliveryPicked"
        render={msg => (
          <p className="text-[#C60000] text-end text-sm">{msg} </p>
        )}
      />
    </div>
  );
}
