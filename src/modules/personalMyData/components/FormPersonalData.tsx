import { FormInput } from '@/shared/components';
import { Field, FieldArray, FormikProps } from 'formik';
import PhoneInput from './PhoneInput';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function FormPersonalData({ formik }: any) {
  return (
    <>
      <h3 className="text-2xl xl:mb-7 md:mb-10 mb-6">Персональні дані</h3>
      <div className="flex flex-col gap-6">
        <FormInput
          formik={formik}
          name="name"
          label={'Ім’я'}
          classNameLogin="mb-2 ml-0"
          placeholder={'Ім’я'}
          inputType="text"
          id="nameProfile"
        />
        <FormInput
          formik={formik}
          name="lastName"
          label={'Прізвище'}
          classNameLogin="mb-2 ml-0"
          placeholder={'Прізвище'}
          inputType="text"
          id="lastNameProfile"
        />
        <FormInput
          formik={formik}
          name="address"
          label={'Адреса'}
          classNameLogin="mb-2 ml-0"
          placeholder={'Адреса'}
          inputType="text"
          id="addressProfile"
        />
        <FieldArray name="phoneNumbers">
          {({ push, remove }) => (
            <div className="flex flex-col gap-2">
              {formik.values.phoneNumbers.map(
                (number: number, index: number) => (
                  <div key={index} className="flex relative">
                    <Field
                      formik={formik}
                      fieldName="phoneNumbers"
                      name={`phoneNumbers[${index}]`}
                      id={`phoneNumbers${index}`}
                      index={index}
                      label={index === 0 ? 'Телефон' : ''}
                      classNameLogin="mb-2 ml-0"
                      component={PhoneInput}
                    />
                    {index === 0 ? null : (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="flex items-center w-[18px] h-[18px] absolute -right-6 inset-y-2/4 top-4"
                      >
                        <SpriteSVG name="cross" />
                      </button>
                    )}
                  </div>
                )
              )}
              <button
                type="button"
                onClick={() => push('')}
                className="flex items-center disabled:text-gray-400 text-blue-700"
                disabled={formik.values.phoneNumbers.length > 3}
              >
                Додати ще телефон
                <span className="w-[18px] h-[18px]">
                  <SpriteSVG name="expand_right" />
                </span>
              </button>
            </div>
          )}
        </FieldArray>
        <span>Соціальні мережі</span>
        <FormInput
          formik={formik}
          name="telegram"
          placeholder={'www.telegram.com/yoursite'}
          inputType="text"
          inputIcon={'telegram'}
        />
        <Field
          formik={formik}
          fieldName="viber"
          name="viber"
          id="viber"
          component={PhoneInput}
          inputIcon={'viber'}
        />
      </div>
    </>
  );
}
