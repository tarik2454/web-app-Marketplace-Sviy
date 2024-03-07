'use client';

import {
  FormCheckbox,
  FormInput,
  OrangeButton,
  FormHeading,
  Section,
} from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { MouseEventHandler } from 'react';

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
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Дані введені некоректно')
        .required("Обов'язкова наявність електронної пошти"),
      password: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });

  const handleCheckboxChange = () => {
    formik.setFieldValue('rememberMe', !formik.values.rememberMe);
  };

  return (
    <Section className="py-[80px] md:pt-[104px] xl:py-[164px]">
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
          id="email"
          label={'Електронна пошта'}
          inputType="email"
        />

        <FormInput
          formik={formik}
          id="password"
          label={'Пароль'}
          inputType="password"
        />
        <div className="flex justify-between">
          <FormCheckbox
            formik={formik}
            id="rememberMe"
            label="Запам’ятати мене"
          />
          {signinType === 'page' ? (
            <Link href="/signin-forgot" className="text-blue-900">
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

        <div className="w-28 mt-10 mx-auto pb-6">
          <OrangeButton onClick={() => {}} type="submit">
            Увійти
          </OrangeButton>
        </div>
      </form>

      <p className="text-center pb-3 md:text-base sm:text-sm">
        Або увійдіть за допомогою:
      </p>
      <div className="flex justify-center pb-3">
        <SpriteSVG name="icon_google" />
      </div>
      <div className="flex justify-center pb-7">
        <p className="pr-6">Немає профілю?</p>
        {signinType === 'page' ? (
          <Link href="/signup" className="text-blue-90">
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
