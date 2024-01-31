'use client';

import {
  Breadcrumbs,
  ColorSpot,
  FormCheckbox,
  FormHeading,
  FormInput,
  OrangeButton,
} from '@/shared/components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordRepeat: '',
      rememberMe: false,
    },
    validationSchema: Yup.object().shape({
      login: Yup.string()
        .min(2, 'Login should be of minimum 2 characters length')
        .required('Login is required'),
      email: Yup.string()
        .email('Email is not correct')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
      passwordRepeat: Yup.string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <>
      <Section className="py-[153px]">
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <FormHeading
            heading="Реєстрація нового користувача"
            additionalText=""
          />
          <form
            className="flex flex-col max-w-[400px] mx-auto gap-5"
            onSubmit={formik.handleSubmit}
          >
            <FormInput
              formik={formik}
              id="login"
              label={'Ваше ім’я '}
              inputType="text"
            />
            <FormInput
              formik={formik}
              id="email"
              label={'Електронна пошта'}
              inputType="email"
            />
            <FormInput
              formik={formik}
              id="password"
              label={'Придумайте пароль'}
              inputType="password"
            />
            <FormInput
              formik={formik}
              id="passwordRepeat"
              label={'Повторіть пароль'}
              inputType="password"
            />
            <FormCheckbox
              formik={formik}
              id="rememberMe"
              label="Запам’ятати мене"
            />
            <p className="text-[#656565] font-lato text-sm">
              Реєструючись ви погоджуєтесь з Правилами використання сайту та
              Політикою конфіденційності
            </p>
            <OrangeButton
              onClick={() => {}}
              type="submit"
              cssSettings="mt-10 mx-auto"
            >
              Зареєструватися
            </OrangeButton>
          </form>
        </Container>
      </Section>
    </>
  );
}
