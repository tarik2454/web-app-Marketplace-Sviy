'use client';

import CartList from '@/shared/components/Cart/CartList';

import { Section, FormHeading, FormInput } from '@/shared/components';
import { FinalPrice } from '@/shared/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function MyCart() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      location: '',
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().label("Введіть ім'я").required("Введіть ім'я"),
      location: Yup.string()
        .min(4, 'Виберіть місто')
        .required('Виберіть ваше місто'),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <Section className="relative pt-[3px] md:px-4">
      <h2 className="px-4 pb-10 text-2xl leading-10 text-gray-900 md:pb-8">
        Оформлення замовлення
      </h2>
      <h3 className="px-4 pb-5 text-xl leading-loose text-gray-900">
        Ваші контактні дані
      </h3>
      <form
        className="flex flex-col min-w-[343px] mx-4 gap-5 "
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-5 md:max-w-[344px]">
          <FormInput
            formik={formik}
            id="fullName"
            inputType="text"
            inputIcon="user"
          />
          <FormInput
            formik={formik}
            id="location"
            inputType="text"
            inputIcon="location"
          />
          <div className="inline-flex items-center justify-start px-4 py-1.5 bg-white border rounded-2xl border-blue-700">
            <p className="text-xs text-gray-900 md:text-base">
              Зверніть увагу, товари, які замовлені у різних продавців, буде
              доставлено окремими замовленнями.
            </p>
          </div>
        </div>
        <div className="md:w-full">
          <CartList />
        </div>
        <div className=" md:absolute md:top-[16%] md:right-8">
          <FinalPrice itemsQuantity={4} totalPrice={470} />
        </div>
      </form>
    </Section>
  );
}
