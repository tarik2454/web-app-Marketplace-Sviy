import { FormInput } from '@/shared/components';
import BlueBorderButton from '@/shared/components/BlueBorderButton/BlueBorderButton';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormLoginPassword () {
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
      phoneNumbers: Yup.array().of(Yup.string().required('Вайбер обов`язковий')),
      telegram: Yup.string()
        .min(2, "Посилання має бути не менше 10 символів")
        .required("Телеграм обов`язковий"),
      viber: Yup.string()
        .required('Вайбер обов`язковий'),
    }),
    onSubmit: (values) => {
      console.log('values', values);
    }
  });

  return (
    <div>
      <h3 className="text-2xl mb-7">Логін та пароль</h3>
      <form
        className="flex flex-col gap-7"
        onSubmit={formik.handleSubmit}>
        <FormInput
          formik={formik}
          id="currentEmail"
          label={'Поточний логін'}
          inputType="text"
        />
        <FormInput
          formik={formik}
          id="newEmail"
          label={'Новий логін'}
          inputType="text"
        />
        <BlueBorderButton onClick={() => {}} smallButton type='button'>
          Змінити електронну адресу
        </BlueBorderButton>

        <div className='flex mt-10 justify-between'>
          <BlueBorderButton onClick={() => {
          }} type='button'>
            Видалити профіль
          </BlueBorderButton>
        </div>
      </form>
    </div>
  )
}