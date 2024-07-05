import { useState, useEffect } from 'react';

export default function useDeliveryOptions({ formik }: any) {
  const [showNovaposhta, setShowNovaposhta] = useState('hidden');
  const [showByAddress, setShowByAddress] = useState('hidden');
  const [postOfficeView, setPostOfficeView] = useState('block');
  const [errorClassRadio, setErrorClassRadio] = useState('');

  const handleSetShowByAddress = () => {
    setShowByAddress('block');
    setPostOfficeView('hidden');
    formik.values.warehouse = '';
    formik.values.city = '';
  };

  const handleByYourself = () => {
    setShowNovaposhta('hidden');
    setShowByAddress('hidden');
    setPostOfficeView('block');
    formik.values.deliveryByAddressPicked = false;
    formik.values.warehouse = '';
    formik.values.city = '';
  };

  const handleShowNovaposhta = () => {
    setPostOfficeView('block');
    setShowNovaposhta('block');
    setShowByAddress('hidden');
    formik.values.deliveryByAddressPicked = false;
    formik.values.warehouse = '';
    formik.values.city = '';
  };

  // const handleShowUkrposhta = () => {
  //   setPostOfficeView('block');
  //   setShowNovaposhta('hidden');
  //   setShowByAddress('hidden');
  //   formik.values.deliveryByAddressPicked = false;
  //   formik.values.warehouse = '';
  //   formik.values.city = '';
  // };

  useEffect(() => {
    formik.errors.deliveryPicked && formik.touched.deliveryPicked
      ? setErrorClassRadio('border-[#C60000] border-[1px]')
      : setErrorClassRadio('border-blue-200');
  }, [formik]);

  return {
    showNovaposhta,
    showByAddress,
    postOfficeView,
    errorClassRadio,
    handleSetShowByAddress,
    handleByYourself,
    handleShowNovaposhta,
    // handleShowUkrposhta,
  };
}
