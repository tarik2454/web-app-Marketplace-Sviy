import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';
import { updateProfileThunk } from '@/redux/auth/operations';

import ScreenSize from '@/shared/hooks/useMediaQuery';
import validationSchemaFormikProfile from '../helpers/validationSchemaFormikProfile';

import FormPersonalData from './FormPersonalData';
import FormLoginPassword from './FormLoginPassword';
import ButtonProfile from './ButtonProfile';

type FormPersonalDataValues = {
  full_name: string | undefined;
  lastName: string;
  address: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  newEmail: string;
  currentPassword: string;
  password: string;
  repeatPassword: string;
};

export default function FormikProfile() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const { full_name, email, phone, address } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState('');
  const [remainingNames, setRemainingNames] = useState('');
  const [initialValues, setInitialValues] = useState<FormPersonalDataValues>({
    full_name: '',
    lastName: '',
    address: address,
    phone: phone,
    email: email,
    newEmail: '',
    currentPassword: '',
    password: '',
    repeatPassword: '',
  });

  useEffect(() => {
    if (full_name) {
      const nameParts = full_name.split(' ');
      if (nameParts.length > 0) {
        setFirstName(nameParts[0]);
        setRemainingNames(nameParts.slice(1).join(' '));
      }
    }
  }, [full_name]);

  useEffect(() => {
    setInitialValues(prevValues => ({
      ...prevValues,
      full_name: firstName,
      lastName: remainingNames,
    }));
  }, [firstName, remainingNames, address, phone, email]);

  const handleSubmit = (values: FormPersonalDataValues) => {
    const {
      full_name,
      lastName,
      newEmail,
      currentPassword,
      password,
      repeatPassword,
      ...formData
    } = values;

    const combinedFullName = `${full_name} ${lastName}`.trim();

    const dataToSubmit = {
      ...formData,
      full_name: combinedFullName,
    };

    dispatch(updateProfileThunk(dataToSubmit))
      .unwrap()
      .then(() => {
        toast.success('Profile updated successfully');
      })
      .catch(error => {
        toast.error(error);
      });
  };

  const formik = useFormik<FormPersonalDataValues>({
    initialValues,
    validationSchema: validationSchemaFormikProfile,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {(isOnMobile && (
        <div className="flex flex-col gap-8 mb-8 mt-8">
          <FormPersonalData formik={formik} />
          <FormLoginPassword formik={formik} />
          <ButtonProfile />
        </div>
      )) ||
        (isOnTablet && (
          <div className="flex md:gap-4 mb-10 mt-10 items-start ">
            <div className="basis-1/2 max-w-[344px]">
              <FormPersonalData formik={formik} />
              <ButtonProfile />
            </div>
            <div className="basis-1/2">
              <FormLoginPassword formik={formik} />
            </div>
          </div>
        )) || (
          <div className="flex w-full xl:gap-[132px] ">
            <div className="basis-1/2">
              <FormPersonalData formik={formik} />
              <ButtonProfile />
            </div>
            <div className="basis-1/2">
              <FormLoginPassword formik={formik} />
            </div>
          </div>
        )}
    </form>
  );
}
