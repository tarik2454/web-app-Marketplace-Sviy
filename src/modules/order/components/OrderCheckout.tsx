'use client';

import { FormInput } from '@/shared/components';

export default function OrderChecout({ formik }: any) {
  return (
    <div className="mb-10 md:mb-0">
      <h3 className="mb-5 text-xl text-gray-900 xl:mb-6 xl:text-2xl">
        Ваші контактні дані
      </h3>
      <div className="flex flex-col gap-4 xl:mb-10">
        <div className="flex flex-col gap-5 xl:gap-6">
          <FormInput
            formik={formik}
            name="name"
            inputType="text"
            inputIcon="user"
            inputLink="Змінити"
          />
          <FormInput
            formik={formik}
            name="location"
            inputType="text"
            inputIcon="location"
            inputLink="Змінити"
          />
                    <div className="inline-flex items-center justify-start px-4 py-1.5 bg-white border rounded-2xl border-blue-700">
            <p className="text-xs text-gray-900 md:text-base">
            Увійдіть, щоб мати можливість оформити замовлення, додавати товари до обраного та бачити свої замовлення.
            </p>
          </div>
          <div className="inline-flex items-center justify-start px-4 py-1.5 bg-white border rounded-2xl border-blue-700">
            <p className="text-xs text-gray-900 md:text-base">
              Зверніть увагу, товари, які замовлені у різних продавців, буде
              доставлено окремими замовленнями.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
