import { FormInput } from '@/shared/components';

export default function FormPersonalData({ formik }: any) {
  return (
    <>
      <h3 className="text-2xl xl:mb-7 md:mb-10 mb-6">Персональні дані</h3>

      <div className="flex flex-col gap-6">
        <FormInput
          formik={formik}
          name="full_name"
          label={'Ім’я'}
          classNameLogin="mb-2 ml-0"
          placeholder={'Ім’я'}
          inputType="text"
        />
        <FormInput
          formik={formik}
          name="lastName"
          label={'Прізвище'}
          classNameLogin="mb-2 ml-0"
          placeholder={'Прізвище'}
          inputType="text"
        />
        <FormInput
          formik={formik}
          name="address"
          label={'Адреса'}
          classNameLogin="mb-2 ml-0"
          placeholder={'Адреса'}
          inputType="text"
        />
        <FormInput
          formik={formik}
          name="phone"
          label={'Телефон'}
          inputType="tel"
        />
      </div>
    </>
  );
}
