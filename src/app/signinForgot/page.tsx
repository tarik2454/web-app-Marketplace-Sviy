'use client';

import {
  Breadcrumbs,
  ColorSpot,
  FormHeading,
  FormInput,
  OrangeButton,
} from '@/shared/components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useState } from 'react';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import Link from 'next/link';
import EmailConfirmation from '@/shared/components/ModalEmailConfirm/EmailConfirmation';

export default function Page() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const handleSubmit = async (values: { email: string }) => {
    console.log(values.email);
    setEmail(values.email);
    setShowModal(true);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Дані введені некоректно')
        .required("Обов'язкова наявність електронної пошти"),
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
            heading="Забули свій пароль"
            additionalText="Нічого страшного! Заповніть свою електронну адресу, і ми надішлемо вам"
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

            <div className="w-28 mt-10 mx-auto pb-7">
              <OrangeButton
                onClick={() => {
                  setShowModal(true);
                }}
                type="submit"
              >
                Надіслати
              </OrangeButton>
            </div>
            <Link href="" className="text-center pb-8 text-blue-900">
              Я згадав свій пароль
            </Link>
          </form>
          {showModal && <EmailConfirmation email={email} />}
          <p className="text-center pb-3 ">Або увійдіть за допомогою:</p>
          <div className="flex justify-center pb-3">
            <SpriteSVG name="icon_google" />
          </div>
          <div className="flex justify-center">
            <p className="pr-6">Немає профілю?</p>
            <Link href="/signup" className="text-blue-90">
              Зареєструйся
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
