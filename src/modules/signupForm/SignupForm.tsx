'use client';

import { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';

import validationSchemaSignup from './helpers/validationSchemaSignup';

import Modal from '@/shared/components/Modal/Modal';
import RegIsSuccesful from '@/shared/components/ModalRegSuccess/RegSuccess';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import {
  FormCheckbox,
  FormInput,
  OrangeButton,
  Section,
  FormHeading,
} from '@/shared/components';

type PropsSignupForm = {
  signupType: 'page' | 'burger';
  signinClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function SignupForm({
  signupType,
  signinClick,
}: PropsSignupForm) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setShowModal(true);
    setIsFormSubmitted(true);
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordRepeat: '',
      chekSignUp: false,
    },
    validationSchema: validationSchemaSignup,
    onSubmit: handleSubmit,
  });

  return (
    <Section className="py-[80px] md:pt-[38px] xl:py-[98px]">
      <FormHeading heading="Реєстрація нового користувача" additionalText="" />
      <form
        className="flex flex-col max-w-[400px] mx-auto mb-6 gap-5"
        onSubmit={formik.handleSubmit}
      >
        <FormInput
          formik={formik}
          name="login"
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
          name="phoneNumber"
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
        <FormCheckbox
          formik={formik}
          id="chekSignUp"
          label="Запам’ятати мене"
          className="text-sm md:text-base"
        />
        <a
          className="text-gray-500 font-lato text-sm md:pb-[34px] "
          href="https://www.termsfeed.com/live/3dd36d5f-36ec-41fc-9795-f516c6d2694e"
        >
          Реєструючись ви погоджуєтесь з{' '}
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
      {isFormSubmitted && showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <RegIsSuccesful />
        </Modal>
      )}
      <p className="text-center pb-3 sm:text-sm">Або увійдіть за допомогою:</p>
      <div className="flex justify-center pb-3">
        <SpriteSVG name="icon_google" />
      </div>
      <div className="flex justify-center pb-7 items-baseline">
        <p className="pr-6">Маєте профіль?</p>
        {signupType === 'page' ? (
          <Link href="/signin" className="text-blue-90 text-sm">
            Увійти
          </Link>
        ) : (
          <button className="text-blue-90 text-sm" onClick={signinClick}>
            Увійти
          </button>
        )}
      </div>
    </Section>
  );
}
