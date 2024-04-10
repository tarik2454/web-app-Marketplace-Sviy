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
import { v4 as uuidv4 } from 'uuid';

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
        .required('Введіть електронну пошту'),
      password: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Введіть пароль'),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: async values => {
      console.log(values);
    },
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
        <div className="flex justify-between items-center pt-2">
          <FormCheckbox
            formik={formik}
            name="rememberMe"
            label="Запам’ятати мене"
            className="md:text-base sm:text-sm"
          />
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
