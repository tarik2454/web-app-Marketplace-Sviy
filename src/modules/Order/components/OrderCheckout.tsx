'use client';

import { FormInput } from '@/shared/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function OrderChecout() {
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
    <>
      <h2 className="pb-10 text-2xl leading-10 text-gray-900 md:pb-8 xl:text-4xl ">
        Оформлення замовлення
      </h2>
      <h3 className="pb-5 text-xl leading-loose text-gray-900 xl:text-2xl">
        Ваші контактні дані
      </h3>
      <form
        className="flex flex-col min-w-[343px] gap-5 "
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-5 md:w-[49%] xl:w-[66%]">
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
      </form>
    </>
  );
}
