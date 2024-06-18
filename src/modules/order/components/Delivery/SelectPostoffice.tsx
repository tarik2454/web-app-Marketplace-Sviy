// 'use client';
// import React, { useEffect, useId, useState } from 'react';
// import { Field, ErrorMessage, useField } from 'formik';
// import Select from 'react-select';

// type SelectPostofficeProps = {
//   postOfficeShow: string;
//   byAddress: string;
//   onclick: () => void;
//   postOfficeView: string;
//   forAddressDelivery: string;
//   forAddressPoshta: string;
//   homeAddress: string;
//   apartmentAddress: string;
//   exitAddress: string;
//   floorAddress: string;
//   optionsPoshta?: string[];
//   formik: any;
// };

// const SelectItems = (props: any) => {
//   const [field, state, { setValue }] = useField(props.field.name);
//   const onChange = ({ value }: { value: string; label: string }) => {
//     setValue(value);
//   };

//   return (
//     <Select
//       classNames={{
//         control: () =>
//           `py-3 px-4 mt-5 text-nowrap w-full cursor-pointer bg-white border text-start text-gray-900 xl:min-w-[813px] md:w-[668px] sm:w-[311px] rounded-[20px] ${props.errorClassInputSelect}`,
//         option: state =>
//           state.isSelected
//             ? 'font-lato px-5 py-2 bg-blue-100'
//             : 'px-5 py-2 bg-white font-lato',
//         menu: () =>
//           'rounded-b-default bg-neutral-50 overflow-hidden xl:overflow-auto',
//         dropdownIndicator: () => 'text-[#212121] font-thin',
//       }}
//       unstyled={true}
//       placeholder="Виберіть своє відділення"
//       instanceId={useId()}
//       onChange={onChange}
//       value={
//         props.options.find(
//           (option: { value: string; label: string }) =>
//             option.value === field.value
//         ) || null
//       }
//       {...props}
//     />
//   );
// };

// export default function SelectPostoffice({
//   postOfficeShow,
//   byAddress,
//   onclick,
//   postOfficeView,
//   forAddressDelivery,
//   forAddressPoshta,
//   homeAddress,
//   apartmentAddress,
//   exitAddress,
//   floorAddress,
//   formik,
// }: SelectPostofficeProps) {
//   const [errorClassInputCity, setErrorClassInputCity] =
//     useState('border-blue-200');
//   const [errorClassInputSelect, setErrorClassInputSelect] =
//     useState('border-blue-200');
//   const [errorClassInputAddress, setErrorClassInputAddress] =
//     useState('border-blue-200');
//   const [errorClassInputHome, setErrorClassInputHome] =
//     useState('border-blue-200');

//   useEffect(() => {
//     formik.errors.city && formik.touched.city
//       ? setErrorClassInputCity('border-[#C60000]')
//       : setErrorClassInputCity('border-blue-200');
//     formik.errors.postOfficeApiSelect && formik.touched.postOfficeApiSelect
//       ? setErrorClassInputSelect('border-[#C60000]')
//       : setErrorClassInputSelect('border-blue-200');
//     formik.errors.address && formik.touched.address
//       ? setErrorClassInputAddress('border-[#C60000]')
//       : setErrorClassInputAddress('border-blue-200');
//     formik.errors.homeAddress && formik.touched.homeAddress
//       ? setErrorClassInputHome('border-[#C60000]')
//       : setErrorClassInputHome('border-blue-200');
//   }, [formik]);

//   const options = [
//     { value: '№1 вул.Городецька 5', label: '№1 вул.Городецька 5' },
//     { value: '№1 вул.Городецька 6', label: '№1 вул.Городецька 6' },
//     { value: '№1 вул.Городецька 7', label: '№1 вул.Городецька 7' },
//     { value: '№1 вул.Городецька 8', label: '№1 вул.Городецька 8' },
//     { value: '№1 вул.Городецька 9', label: '№1 вул.Городецька 9' },
//     { value: '№1 вул.Городецька 10', label: '№1 вул.Городецька 10' },
//     { value: '№1 вул.Городецька 15', label: '№1 вул.Городецька 15' },
//     { value: '№1 вул.Городецька 11', label: '№1 вул.Городецька 11' },
//   ];

//   return (
//     <div className={postOfficeShow}>
//       <div className={postOfficeView}>
//         <Field
//           className={`placeholder:text-gray-900 text-gray-900 xl:min-w-[813px] md:w-[668px] sm:w-[311px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] mt-5 ${errorClassInputCity}`}
//           type="text"
//           name="city"
//           placeholder="Вкажіть місто"
//         />
//         <ErrorMessage
//           name="city"
//           component="p"
//           className="text-[#C60000] text-end"
//         />
//         <div>
//           <Field
//             component={SelectItems}
//             options={options}
//             name="postOfficeApiSelect"
//             errorClassInputSelect={errorClassInputSelect}
//           />
//         </div>
//         <ErrorMessage
//           name="postOfficeApiSelect"
//           component="p"
//           className="text-[#C60000] text-end"
//         />
//       </div>
//       <div className="flex justify-between items-start mt-5">
//         <div className="mb-5 flex items-center gap-2">
//           <Field
//             className="border-gray-600 ml-2 w-4 h-4"
//             id={forAddressDelivery}
//             type="checkbox"
//             name="deliveryByAddressPicked"
//             onClick={onclick}
//           />
//           <label htmlFor={forAddressDelivery} className="text-gray-900">
//             Кур’єр на вашу адресу
//           </label>
//         </div>
//         <p className="xl:text-base md:text-base text-gray-900 text-end xl:text-nowrap md:text-nowrap sm:text-wrap sm:text-xs">
//           За тарифами перевізника
//         </p>
//       </div>
//       <div className={byAddress}>
//         <div className="flex flex-col">
//           <label htmlFor={forAddressPoshta} className="text-gray-600 ml-[32px]">
//             Адреса доставки
//           </label>
//           <Field
//             id={forAddressPoshta}
//             type="text"
//             name="address"
//             className={`xl:min-w-[813px] md:w-[668px] sm:w-[311px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputAddress}`}
//           />
//           <ErrorMessage
//             name="address"
//             component="p"
//             className="text-[#C60000] text-end"
//           />
//         </div>

//         <div className="grid xl:grid-cols-4 xl:grid-rows-1 md:grid-rows-2 md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-2 gap-auto mt-5 mb-5 ">
//           <div className="flex flex-col">
//             <label htmlFor={homeAddress} className="text-gray-600">
//               Дім
//             </label>
//             <Field
//               id={homeAddress}
//               type="text"
//               name="homeAddress"
//               className={`xl:min-w-[160px] md:w-[140px] sm:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputHome}`}
//             />
//             <ErrorMessage
//               name="homeAddress"
//               component="p"
//               className="text-[#C60000] text-sm"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor={apartmentAddress} className="text-gray-600">
//               Квартира
//             </label>
//             <Field
//               id={apartmentAddress}
//               type="text"
//               name="apartmentAddress"
//               className="xl:min-w-[160px] sm:w-[140px] md:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor={exitAddress} className="text-gray-600">
//               Під’їзд
//             </label>
//             <Field
//               id={exitAddress}
//               type="text"
//               name="exitAddress"
//               className="xl:min-w-[160px] md:w-[140px] sm:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor={floorAddress} className="text-gray-600">
//               Поверх
//             </label>
//             <Field
//               id={floorAddress}
//               type="text"
//               name="floorAddress"
//               className="xl:min-w-[160px] sm:w-[140px] md:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useEffect, useId, useState } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import Select from 'react-select';
import { getCities } from '../../api/novapostAPI';
import { handleWarehouseChange } from '../../helpers/get-warehouses';
import { handleCityChange } from '../../helpers/get-cities';

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
  formik: any;
};

const SelectItems = (props: any) => {
  const [field, _, { setValue }] = useField(props.field.name);
  const onChange = (option: { value: string; label: string } | null) => {
    if (option) {
      setValue(option.value);
      props.onChange(option);
    }
  };

  return (
    <Select
      classNames={{
        control: () =>
          `py-3 px-4 mt-5 text-nowrap w-full cursor-pointer bg-white border text-start text-gray-900 xl:min-w-[813px] md:w-[668px] sm:w-[311px] rounded-[20px] ${props.errorClassInputSelect}`,
        option: state =>
          state.isSelected
            ? 'font-lato px-5 py-2 bg-blue-100'
            : 'px-5 py-2 bg-white font-lato',
        menu: () =>
          'rounded-b-default bg-neutral-50 overflow-hidden xl:overflow-auto',
        dropdownIndicator: () => 'text-[#212121] font-thin',
      }}
      unstyled={true}
      placeholder="Виберіть своє відділення"
      instanceId={useId()}
      onChange={onChange}
      value={
        props.options.find(
          (option: { value: string; label: string }) =>
            option.value === field.value
        ) || null
      }
      {...props}
    />
  );
};

export default function SelectPostoffice({
  postOfficeShow,
  byAddress,
  onclick,
  postOfficeView,
  forAddressDelivery,
  forAddressPoshta,
  homeAddress,
  apartmentAddress,
  exitAddress,
  floorAddress,
  formik,
}: SelectPostofficeProps) {
  const [_, setErrorClassInputCity] = useState('border-blue-200');
  const [errorClassInputSelect, setErrorClassInputSelect] =
    useState('border-blue-200');
  const [errorClassInputAddress, setErrorClassInputAddress] =
    useState('border-blue-200');
  const [errorClassInputHome, setErrorClassInputHome] =
    useState('border-blue-200');
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState<{
    value: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    async function fetchCities() {
      try {
        const citiesData = await getCities();
        setCities(citiesData);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    }
    fetchCities();
  }, []);

  useEffect(() => {
    formik.errors.city && formik.touched.city
      ? setErrorClassInputCity('border-[#C60000]')
      : setErrorClassInputCity('border-blue-200');
    formik.errors.postOfficeApiSelect && formik.touched.postOfficeApiSelect
      ? setErrorClassInputSelect('border-[#C60000]')
      : setErrorClassInputSelect('border-blue-200');
    formik.errors.address && formik.touched.address
      ? setErrorClassInputAddress('border-[#C60000]')
      : setErrorClassInputAddress('border-blue-200');
    formik.errors.homeAddress && formik.touched.homeAddress
      ? setErrorClassInputHome('border-[#C60000]')
      : setErrorClassInputHome('border-blue-200');
  }, [formik]);

  const handleChangeCity = (
    selectedOption: { value: string; label: string } | null
  ) => {
    handleCityChange(
      selectedOption,
      setSelectedCity,
      setWarehouses,
      setSelectedWarehouse
    );
    console.log(selectedCity);
  };

  const handleChangeWarehouse = (
    selectedOption: { value: string; label: string } | null
  ) => {
    handleWarehouseChange(selectedOption, setSelectedWarehouse);
    console.log(selectedWarehouse);
  };

  const cityOptions = cities.map((city: any) => ({
    value: city.Ref,
    label: city.Description,
  }));

  const warehouseOptions = warehouses.map((warehouse: any) => ({
    value: warehouse.Ref,
    label: warehouse.Description,
  }));

  return (
    <div className={postOfficeShow}>
      <div className={postOfficeView}>
        <Field
          name="city"
          component={SelectItems}
          options={cityOptions}
          placeholder="Вкажіть місто"
          errorClassInputSelect={errorClassInputSelect}
          onChange={handleChangeCity}
          value={selectedCity}
        />
        <ErrorMessage
          name="city"
          component="p"
          className="text-[#C60000] text-end"
        />
        <div>
          <Field
            component={SelectItems}
            options={warehouseOptions}
            name="postOfficeApiSelect"
            errorClassInputSelect={errorClassInputSelect}
            onChange={handleChangeWarehouse}
            value={selectedWarehouse}
          />
        </div>
        <ErrorMessage
          name="postOfficeApiSelect"
          component="p"
          className="text-[#C60000] text-end"
        />
      </div>
      <div className="flex justify-between items-start mt-5">
        <div className="mb-5 flex items-center gap-2">
          <Field
            className="border-gray-600 ml-2 w-4 h-4"
            id={forAddressDelivery}
            type="checkbox"
            name="deliveryByAddressPicked"
            onClick={onclick}
          />
          <label htmlFor={forAddressDelivery} className="text-gray-900">
            Кур’єр на вашу адресу
          </label>
        </div>
        <p className="xl:text-base md:text-base text-gray-900 text-end xl:text-nowrap md:text-nowrap sm:text-wrap sm:text-xs">
          За тарифами перевізника
        </p>
      </div>
      <div className={byAddress}>
        <div className="flex flex-col">
          <label htmlFor={forAddressPoshta} className="text-gray-600 ml-[32px]">
            Адреса доставки
          </label>
          <Field
            id={forAddressPoshta}
            type="text"
            name="address"
            className={`xl:min-w-[813px] md:w-[668px] sm:w-[311px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputAddress}`}
          />
          <ErrorMessage
            name="address"
            component="p"
            className="text-[#C60000] text-end"
          />
        </div>

        <div className="grid xl:grid-cols-4 xl:grid-rows-1 md:grid-rows-2 md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-2 gap-auto mt-5 mb-5 ">
          <div className="flex flex-col">
            <label htmlFor={homeAddress} className="text-gray-600">
              Дім
            </label>
            <Field
              id={homeAddress}
              type="text"
              name="homeAddress"
              className={`xl:min-w-[160px] md:w-[140px] sm:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] ${errorClassInputHome}`}
            />
            <ErrorMessage
              name="homeAddress"
              component="p"
              className="text-[#C60000] text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={apartmentAddress} className="text-gray-600">
              Квартира
            </label>
            <Field
              id={apartmentAddress}
              type="text"
              name="apartmentAddress"
              className="xl:min-w-[160px] sm:w-[140px] md:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={exitAddress} className="text-gray-600">
              Під’їзд
            </label>
            <Field
              id={exitAddress}
              type="text"
              name="exitAddress"
              className="xl:min-w-[160px] md:w-[140px] sm:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={floorAddress} className="text-gray-600">
              Поверх
            </label>
            <Field
              id={floorAddress}
              type="text"
              name="floorAddress"
              className="xl:min-w-[160px] sm:w-[140px] md:w-[140px] rounded-[20px] focus:outline-blue-200 py-3 px-4 border-[1px] border-blue-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
