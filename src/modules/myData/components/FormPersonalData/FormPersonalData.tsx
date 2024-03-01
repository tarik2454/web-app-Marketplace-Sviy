import { FormInput, OrangeButton } from '@/shared/components';
import { Field, FieldArray, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React from 'react';
import PhoneInput from '@/modules/myData/components/PhoneInput/PhoneInput';
import BlueBorderButton from '@/shared/components/BlueBorderButton/BlueBorderButton';

export default function FormPersonalData () {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      address: '',
      phoneNumbers: [''],
      telegram: '',
      viber: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Ім'я повинно бути не менше 2 символів")
        .required("Потрібно ім'я"),
      lastName: Yup.string()
        .min(2, "Прізвище повинно бути не менше 2 символів")
        .required("Потрібно прізвище"),
      address: Yup.string()
        .min(2, "Адреса повинна бути не менше 2 символів")
        .required("Потрібна адреса"),
      phoneNumbers: Yup.array().of(Yup.string().required('Вайбер обов\'язковий')),
      telegram: Yup.string()
        .min(2, "Посилання має бути не менше 10 символів")
        .required("Телеграм обов`язковий"),
      viber: Yup.string()
        .required('Вайбер обов`язковий'),
    }),
    onSubmit: async (values) => {
      console.log('values', values);
    }
  });


  return (
    <FormikProvider value={formik}>
      <div>
        <h3 className="text-2xl mb-7">Персональні дані</h3>
        <form
          className="flex flex-col gap-7"
          onSubmit={formik.handleSubmit}>
          <FormInput
            formik={formik}
            id="name"
            label={'Ім’я'}
            placeholder={'Ім’я'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            id="lastName"
            label={'Прізвище'}
            placeholder={'Прізвище'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            id="address"
            label={'Адреса'}
            placeholder={'Адреса'}
            inputType="text"
          />
          {/*<FieldArray name="phoneNumbers">*/}
          {/*  {({ push, remove }) => (*/}
          {/*    <div className="flex flex-col gap-10">*/}
          {/*      {formik.values.phoneNumbers.map((number, index: number) => (*/}
          {/*        <div key={index} className="flex relative">*/}
          {/*          <Field formik={formik}*/}
          {/*                 fieldName="phoneNumbers"*/}
          {/*                 name={`phoneNumbers[${index}]`}*/}
          {/*                 id={`phoneNumbers${index}`}*/}
          {/*                 index={index}*/}
          {/*                 label={index === 0 ? 'Телефон' : ''}*/}
          {/*                 component={PhoneInput} />*/}

          {/*          {index === 0 ? null :*/}
          {/*            <button type='button'*/}
          {/*                    onClick={() => remove(index)}*/}
          {/*                    className="flex items-center w-[18px] h-[18px] absolute -right-6 inset-y-2/4 top-4">*/}
          {/*              <SpriteSVG name='cross' />*/}
          {/*            </button>*/}
          {/*          }*/}
          {/*        </div>*/}
          {/*      ))}*/}
          {/*      <button type='button'*/}
          {/*              onClick={() => push('')}*/}
          {/*              className="flex items-center disabled:text-gray-400 text-blue-700"*/}
          {/*              disabled={formik.values.phoneNumbers.length > 3}>*/}
          {/*        Додати ще телефон*/}
          {/*        <span className="w-[18px] h-[18px]">*/}
          {/*            <SpriteSVG name="expand_right" />*/}
          {/*          </span>*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</FieldArray>*/}

          <span>Соціальні мережі</span>

          <div className="flex flex-col gap-10">
            <FormInput
              formik={formik}
              id="telegram"
              placeholder={'Telegram'}
              inputType="text"
              inputIcon={'telegram'}
            />

            <Field formik={formik}
                   fieldName="viber"
                   name="viber"
                   id="viber"
                   component={PhoneInput}
                   inputIcon={'viber'} />
          </div>

          <div className='flex mt-10 justify-between'>
            <OrangeButton onClick={() => {
            }} type='submit'>
              Зберегти дані
            </OrangeButton>
            <BlueBorderButton onClick={() => {
            }} type='button'>
              Видалити профіль
            </BlueBorderButton>
          </div>
        </form>
      </div>
    </FormikProvider>
  )
}