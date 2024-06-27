'use client';

import { useFormik } from 'formik';
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import { toast } from 'react-toastify';

import { selectAuth } from '@/redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginThunk } from '@/redux/auth/operations';

import {
  FormInput,
  OrangeButton,
  FormHeading,
  Section,
} from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import validationSchemaSignin from './helpers/validationSchemaSignin';
import { authFormValues } from '@/models/authFormValues';
import Modal from '@/shared/components/Modal/Modal';
import RegIsSuccesful from '@/shared/components/ModalRegSuccess/RegSuccess';

type SigninFormProps = {
  signinType: 'page' | 'burger';
  signupClick?: MouseEventHandler<HTMLButtonElement>;
  signinForgotClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function SigninForm({
  signinType,
  signupClick,
  signinForgotClick,
}: SigninFormProps) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { email, isLoggedIn } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const signupPage = '/signup';
  const signinForgotPage = '/signin-forgot';

  const handleSubmit = (values: authFormValues) => {
    const { passwordRepeat, chekSignUp, ...formData } = values;

    dispatch(loginThunk(formData))
      .unwrap()
      .then(() => {
        setShowModal(true);
        setIsFormSubmitted(true);
      })
      .catch(error => {
        toast.error(error);
      });
  };

  const formik = useFormik<authFormValues>({
    initialValues: {
      email: email,
      password: '',
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
          {signinType === 'page' ? (
            <Link href={signinForgotPage} className="text-blue-900 text-sm">
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
          <OrangeButton type="submit">Увійти</OrangeButton>
        </div>
      </form>

      <p className="text-center pb-3 text-sm">Або увійдіть за допомогою:</p>
      <div className="flex justify-center pb-3">
        <SpriteSVG name="icon_google" />
      </div>

      <div className="flex justify-center items-baseline pb-7">
        <p className="pr-6 ">Немає профілю?</p>
        {signinType === 'page' ? (
          <Link href={signupPage} className="text-blue-90 text-sm">
            Зареєструйся
          </Link>
        ) : (
          <button className="text-blue-90 text-sm" onClick={signupClick}>
            Зареєструйся
          </button>
        )}
      </div>

      {isFormSubmitted && showModal && isLoggedIn && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <RegIsSuccesful />
        </Modal>
      )}
    </Section>
  );
}
