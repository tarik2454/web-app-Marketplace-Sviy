import { FormInput, OrangeButton } from '@/shared/components';
import { Field, FieldArray, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React from 'react';
import PhoneInput from '@/modules/myData/components/PhoneInput/PhoneInput';
import { array } from 'yup';
import BlueBorderButton from '@/shared/components/BlueBorderButton/BlueBorderButton';

export default function FormPersonalData () {
  let handleChange;
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
        .required('Email is required'),
      // password: Yup.string()
      //   .min(8, 'Password should be of minimum 8 characters length')
      //   .required('Password is required'),
      phoneNumbers: Yup.array().required('Password is required')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={formik.submitForm}
      handleChange={formik.handleChange}
    >
      {({ errors, values, touched, setValues }) => (
        <div>
          <h3 className="text-2xl mb-7">Персональні дані</h3>
          <Form
            className="flex flex-col gap-5"
            onSubmit={formik.handleSubmit}
          >
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
            <FieldArray name="phoneNumbers">
              {({ push, remove }) => (
                <div className="flex flex-col gap-5">
                  {values.phoneNumbers.map((number, index: number) => (
                    <div key={index} className="flex relative">
                      <Field maskPlaceholder="+3\80 99 999 99 99"
                             placeholder="+380 99 999 99 99"
                             name={`phoneNumbers[${index}]`}
                             formik={formik}
                             id={'phoneNumber' + index}
                             value={number}
                             label={index === 0 ? 'Телефон' : ''}
                             component={PhoneInput} />

                      {index === 0 ? null :
                        <button type='button'
                                onClick={() => remove(index)}
                                className="flex items-center w-[18px] h-[18px] absolute -right-6 inset-y-2/4 top-4">
                          <SpriteSVG name='cross' />
                        </button>
                      }
                    </div>
                  ))}
                  <button type='button'
                          onClick={() => push('')}
                          className="flex items-center disabled:text-gray-400 text-blue-700"
                          disabled={values.phoneNumbers.length > 3}>
                  Додати ще телефон
                    <span className="w-[18px] h-[18px]">
                      <SpriteSVG name="expand_right" />
                    </span>
                  </button>
                </div>
              )}
            </FieldArray>

            <span>Соціальні мережі</span>

            <div className="flex flex-col gap-5">
              <FormInput
                formik={formik}
                id="telegram"
                placeholder={'Telegram'}
                inputType="text"
                inputIcon={'telegram'}
              />
              <FormInput
                formik={formik}
                id="viber"
                placeholder={'Viber'}
                inputType="text"
                inputIcon={'viber'}
              />
            </div>

            <div className='flex mt-10 justify-between'>
              <OrangeButton onClick={() => {}} type='submit'>
                Зберегти дані
              </OrangeButton>
              <BlueBorderButton onClick={() => {}} type='button'>
                Видалити профіль
              </BlueBorderButton>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}