'use client';

import { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import { FormikHelpers, useFormik } from 'formik';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/redux/hooks';
import { registerThunk } from '@/redux/auth/operations';

import phoneFormattingBeforeSending from '@/shared/helpers/phoneFormattingBeforeSending';
import validationSchemaSignup from './helpers/validationSchemaSignup';

import Modal from '@/shared/components/Modal/Modal';
import RegIsSuccesful from '@/shared/components/ModalRegSuccess/RegSuccess';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import {
  FormInput,
  OrangeButton,
  Section,
  FormHeading,
} from '@/shared/components';

type SignupFormProps = {
  signupType: 'page' | 'burger';
  signinClick?: MouseEventHandler<HTMLButtonElement>;
};

type SignupFormValues = {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  passwordRepeat?: string;
  chekSignUp?: boolean;
};

export default function SignupForm({
  signupType,
  signinClick,
}: SignupFormProps) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const signinPage = '/signin';

  const handleSubmit = (
    values: SignupFormValues,
    actions: FormikHelpers<SignupFormValues>
  ) => {
    const { passwordRepeat, chekSignUp, ...formData } = values;

    // formData.phone = phoneFormattingBeforeSending(formData, 'phone');

    dispatch(registerThunk(formData))
      .unwrap()
      .then(() => {
        setShowModal(true);
        setIsFormSubmitted(true);
      })
      .catch(error => {
        toast.error(error);
      });

    actions.resetForm();
  };

  const formik = useFormik<SignupFormValues>({
    initialValues: {
      full_name: '',
      email: '',
      phone: '',
      password: '',
      // passwordRepeat: '',
      // chekSignUp: false,
    },
    validationSchema: validationSchemaSignup,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Section className="py-[80px] md:pt-[38px] xl:py-[98px]">
        <FormHeading
          heading="Реєстрація нового користувача"
          additionalText=""
        />
        <form
          className="flex flex-col max-w-[400px] mx-auto mb-6 gap-5"
          onSubmit={formik.handleSubmit}
        >
          <FormInput
            formik={formik}
            name="full_name"
            label={'Ваше ім’я та призвище'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="email"
            label={'Електронна пошта'}
            inputType="email"
          />
          <FormInput
            formik={formik}
            name="phone"
            label={'Телефон'}
            inputType="tel"
          />
          <FormInput
            formik={formik}
            name="password"
            label={'Придумайте пароль'}
            inputType="password"
          />
          <FormInput
            formik={formik}
            name="passwordRepeat"
            label={'Повторіть пароль'}
            inputType="password"
          />
          {/* <FormCheckbox
          formik={formik}
          id="chekSignUp"
          label="Запам’ятати мене"
          className="text-sm md:text-base"
        /> */}

          <a
            className="text-gray-500 font-lato text-sm md:pb-[34px] "
            href="https://www.termsfeed.com/live/3dd36d5f-36ec-41fc-9795-f516c6d2694e"
          >
            Реєструючись ви погоджуєтесь з&nbsp;
            <span className="underline text-blue-800">
              Правилами використання сайту та Політикою конфіденційності
            </span>
          </a>

          <div className="text-white md:text-base sm:text-sm">
            <OrangeButton
              onClick={() => setShowModal(true)}
              type="submit"
              cssSettings=" mx-auto"
            >
              Зареєструватися
            </OrangeButton>
          </div>
        </form>

        <p className="text-center pb-3 sm:text-sm">
          Або увійдіть за допомогою:
        </p>
        <div className="flex justify-center pb-3">
          <SpriteSVG name="icon_google" />
        </div>

        <div className="flex justify-center pb-7 items-baseline">
          <p className="pr-6">Маєте профіль?</p>

          {signupType === 'page' ? (
            <Link href={signinPage} className="text-blue-90 text-sm">
              Увійти
            </Link>
          ) : (
            <button className="text-blue-90 text-sm" onClick={signinClick}>
              Увійти
            </button>
          )}
        </div>
      </Section>

      {isFormSubmitted && showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <RegIsSuccesful />
        </Modal>
      )}
    </>
  );
}
