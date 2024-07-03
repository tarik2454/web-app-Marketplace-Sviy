import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormPersonalData from './FormPersonalData';
import FormLoginPassword from './FormLoginPassword';
import ButtonProfile from './ButtonProfile';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';
import validationSchemaFormikProfile from '../helpers/validationSchemaFormikProfile';
import { authFormValues } from '@/models/authFormValues';
import {
  currentUserThunk,
  refreshThunk,
  updateProfileThunk,
} from '@/redux/auth/operations';
import { toast } from 'react-toastify';

export default function FormikProfile() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const { full_name, email, phone } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const handleSubmit = (values: authFormValues) => {
    // const { passwordRepeat, chekSignUp, ...formData } = values;
    // console.log(JSON.stringify(values, null, 2));
    // dispatch(updateProfileThunk(formData))
    //   .unwrap()
    //   .then(() => {
    //     toast.success('Profile updated successfully');
    //   })
    //   .catch(error => {
    //     toast.error(error);
    //   });
  };

  return (
    <Formik
      initialValues={{
        name: full_name,
        lastName: '',
        address: phone,
        phoneNumbers: [''],
        telegram: '',
        viber: '',
        currentEmail: email,
        newEmail: '',
        password: '',
        newPassword: '',
      }}
      validationSchema={validationSchemaFormikProfile}
      onSubmit={handleSubmit}
    >
      {formik => {
        const { values, handleChange, touched, errors } = formik;
        return (
          <Form>
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
          </Form>
        );
      }}
    </Formik>
  );
}
