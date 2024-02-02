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
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Email is not correct')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
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
            <div className="w-28 mt-10 mx-auto">
              <OrangeButton onClick={() => {}} type="submit">
                Увійти
              </OrangeButton>
            </div>
          </form>
        </Container>
      </Section>
    </>
  );
}
