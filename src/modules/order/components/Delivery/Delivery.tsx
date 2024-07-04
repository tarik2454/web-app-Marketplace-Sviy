'use client';

import { Field, ErrorMessage } from 'formik';
import SelectPostoffice from './SelectPostoffice';
import useDeliveryOptions from '../../hooks/useDeliveryOptions';

export default function Delivery({ formik }: any) {
  const {
    showNovaposhta,
    showByAddress,
    postOfficeView,
    errorClassRadio,
    handleSetShowByAddress,
    handleByYourself,
    handleShowNovaposhta,
    // handleShowUkrposhta,
  } = useDeliveryOptions(formik);

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
      </div>
      <ErrorMessage
        name="deliveryPicked"
        render={msg => <p className="text-red-700 text-end text-sm">{msg} </p>}
      />
    </div>
  );
}
