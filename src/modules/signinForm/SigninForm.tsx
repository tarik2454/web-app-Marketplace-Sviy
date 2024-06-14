'use client';

import {
  FormCheckbox,
  FormInput,
  OrangeButton,
  FormHeading,
  Section,
} from '@/shared/components';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormikHelpers, useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { MouseEventHandler } from 'react';
import validationSchemaSignin from './helpers/validationSchemaSignin';
import { authFormValues } from '@/models/authFormValues';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { loginThunk, registerThunk } from '@/redux/auth/operations';
import { toast } from 'react-toastify';

type Props = {
  signinType: 'page' | 'burger';
  signupClick?: MouseEventHandler<HTMLButtonElement>;
  signinForgotClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function SigninForm({
  signinType,
  signupClick,
  signinForgotClick,
}: Props) {
  const { isLoggedIn, access, refresh } = useSelector(selectAuth);
  const dispatch = useAppDispatch();

  const handleSubmit = (values: authFormValues) => {
    const { passwordRepeat, chekSignUp, ...formData } = values;

    dispatch(loginThunk(formData))
      .unwrap()
      .then(() => {
        toast.success(`Welcome to Marketplace!`);
        console.log(isLoggedIn);
        console.log(access);
        console.log(refresh);
      })
      .catch(err => {
        toast.error(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // chekSignIn: false,
    },
    validationSchema: validationSchemaSignin,
    onSubmit: handleSubmit,
  });

  return (
    <Section className="py-[80px] md:pt-[38px] xl:py-[98px]">
      <FormHeading
        heading="Увійти в акаунт"
        additionalText="Увійдіть, щоб мати можливість додавати товари до обраного та бачити свої замовлення."
      />
      <form
        className="flex flex-col max-w-[400px] mx-auto gap-5"
        onSubmit={formik.handleSubmit}
      >
        <FormInput
          formik={formik}
          name="email"
          label={'Електронна пошта'}
          inputType="email"
        />
        <FormInput
          formik={formik}
          name="password"
          label={'Пароль'}
          inputType="password"
        />
        <div className="flex justify-end items-center">
          {/* <FormCheckbox
            formik={formik}
            id="chekSignIn"
            label="Запам’ятати мене"
            className="text-sm md:text-base"
          /> */}
          {signinType === 'page' ? (
            <Link href="/signin-forgot" className="text-blue-900 text-sm">
              Нагадати пароль
            </Link>
          ) : (
            <button
              className="text-blue-90 text-sm"
              onClick={signinForgotClick}
            >
              Нагадати пароль
            </button>
          )}
        </div>

        <div className="w-28 mt-10 mx-auto pb-6 text-white md:text-base sm:text-sm">
          <OrangeButton onClick={() => {}} type="submit">
            Увійти
          </OrangeButton>
        </div>
      </form>

      <p className="text-center pb-3 text-sm">Або увійдіть за допомогою:</p>
      <div className="flex justify-center pb-3">
        <SpriteSVG name="icon_google" />
      </div>
      <div className="flex justify-center items-baseline pb-7">
        <p className="pr-6 ">Немає профілю?</p>
        {signinType === 'page' ? (
          <Link href="/signup" className="text-blue-90 text-sm">
            Зареєструйся
          </Link>
        ) : (
          <button className="text-blue-90 text-sm" onClick={signupClick}>
            Зареєструйся
          </button>
        )}
      </div>
    </Section>
  );
}
