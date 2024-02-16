'use client';

import {
  Breadcrumbs,
  ColorSpot,
  FormCheckbox,
  FormHeading,
  FormInput,
  OrangeButton,
} from '@/shared/components';
import { useFormik } from 'formik';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useState } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import Modal from '@/shared/components/Modal/Modal';
import RegIsSuccesful from '@/shared/components/ModalRegSuccess/RegSuccess';

export default function Page() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setShowModal(true);
    setIsFormSubmitted(true);
  };

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
        .min(2, 'Логін повинен мати довжину не менше 2 символів')
        .required("Потрібно ім'я"),
      email: Yup.string()
        .email('Дані введені некоректно')
        .required("Обов'язкова наявність електронної пошти"),
      password: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
      passwordRepeat: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Section className="py-[80px] md:pt-[104px] xl:py-[164px]">
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
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
            <p className="text-[#656565] font-lato text-sm md:pb-[34px]">
              Реєструючись ви погоджуєтесь з Правилами використання сайту та
              Політикою конфіденційності
            </p>
            <OrangeButton
              onClick={() => setShowModal(true)}
              type="submit"
              cssSettings=" mx-auto"
            >
              Зареєструйся
            </OrangeButton>
          </form>
          {isFormSubmitted && showModal && (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <RegIsSuccesful />
            </Modal>
          )}
          <p className="text-center pb-3">Або увійдіть за допомогою:</p>
          <div className="flex justify-center pb-3">
            <SpriteSVG name="icon_google" />
          </div>
          <div className="flex justify-center">
            <p className="pr-6">Маєте профіль?</p>
            <Link href="/signin" className="text-blue-90">
              Увійти
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
