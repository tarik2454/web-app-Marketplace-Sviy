'use client';

import CartList from '@/shared/components/Cart/CartList';

import { Section, FormHeading, FormInput } from '@/shared/components';
import { FinalPrice } from '@/shared/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function MyCart() {
  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Введіть ім'я"),
      location: Yup.string().required('Виберіть ваше місто'),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <Section className="relative pt-[3px] md:px-4 xl:px-[80px] xl:pt-[58px]">
      <h2 className="px-4 pb-10 text-2xl leading-10 text-gray-900 md:pb-8 xl:text-4xl ">
        Оформлення замовлення
      </h2>
      <h3 className="px-4 pb-5 text-xl leading-loose text-gray-900 xl:text-2xl">
        Ваші контактні дані
      </h3>
      <form
        className="flex flex-col min-w-[343px] mx-4 gap-5 "
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-5 md:w-[49%] xl:w-[65%]">
          <FormInput
            formik={formik}
            id="name"
            inputType="text"
            inputIcon="user"
            inputLink="Змінити"
          />
          <FormInput
            formik={formik}
            id="location"
            inputType="text"
            inputIcon="location"
            inputLink="Змінити"
          />
          <div className="inline-flex items-center justify-start px-4 py-1.5 bg-white border rounded-2xl border-blue-700">
            <p className="text-xs text-gray-900 md:text-base">
              Зверніть увагу, товари, які замовлені у різних продавців, буде
              доставлено окремими замовленнями.
            </p>
          </div>
        </div>
        <div className="w-full">
          <CartList />
        </div>
        <div className=" md:absolute md:top-[17%] md:right-8 xl:top-[23%] xl:right-[100px]">
          <FinalPrice itemsQuantity={4} totalPrice={470} />
        </div>
      </form>
    </Section>
  );
}
