import React, { useEffect, useState } from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormPersonalData from './FormPersonalData';
import FormLoginPassword from './FormLoginPassword';
import ButtonProfile from './ButtonProfile';
import ScreenSize from '@/shared/hooks/useMediaQuery';

export default function FormikProfile() {
    const { isOnMobile, isOnTablet } = ScreenSize();
    
  return (
    <Formik
        initialValues={{
            name: '',
            lastName: '',
            address: '',
            phoneNumbers: [''],
            telegram: '',
            viber: '',
            currentEmail: "",
            newEmail: '',
            password: '121321321R&p',
            newPassword: '',
        }}
        validationSchema= {Yup.object().shape({
            name: Yup.string()
            .min(2, "Ім'я повинно бути не менше 2 символів")
            .required("Потрібно ім'я"),
            lastName: Yup.string()
            .min(2, 'Прізвище повинно бути не менше 2 символів')
            .required('Потрібно прізвище'),
            address: Yup.string()
            .min(2, 'Адреса повинна бути не менше 2 символів')
            .required('Потрібна адреса'),
            phoneNumbers: Yup.array().of(
            Yup.string().required("Телефон обов'язковий")
            ),
            newEmail: Yup.string().email('Некоректний email').when(['currentEmail'], {
              is: (currentEmail: string) => currentEmail === undefined,
              then: schema => schema.required('Потрібен email').test(
                "Validate Email",
                "Error. The mail is incorrect.",
                (value) => {
                  const re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  return re.test(String(value).toLowerCase())
                },
              ),
              otherwise: schema => schema,
            }),
            repeatPassword: Yup.string().oneOf(
                [Yup.ref('newPassword')],
                'Паролі повинні співпадати'
            ),
            newPassword: Yup.string().when(['password'], {
              is: (password: string) => password === undefined,
              then: schema => schema.required("Пароль обов'язковий").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Пароль має містити 8 символів, один великий регістр, один малий регістр, одну цифру та один символ спеціального регістру"),
              otherwise: schema => schema,
            }),
        })}
        onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            console.log(JSON.stringify(values, null, 2));
          }}
    >
            {formik => {
              const { values, handleChange, touched, errors } = formik;
              return (
              <Form>
                {(isOnMobile && (
                    <div className='flex flex-col gap-8 mb-8 mt-8'>
                        <FormPersonalData formik={formik}/>
                        <FormLoginPassword formik={formik}/>
                        <ButtonProfile/>
                    </div>
                )) ||
                (isOnTablet && (
                    <div className='flex md:gap-4 mb-10 mt-10 items-start '>
                    <div className='basis-1/2'>
                        <FormPersonalData formik={formik}/>
                        <ButtonProfile/>
                    </div>
                    <div className='basis-1/2'>
                      <FormLoginPassword formik={formik}/>
                    </div>
                    </div>
                )) || 
                (<div className="flex w-full xl:gap-[132px] ">
                    <div className="basis-1/2">
                    <FormPersonalData formik={formik}/>
                    <ButtonProfile/>
                    </div>
                    <div className="basis-1/2">
                    <FormLoginPassword formik={formik}/>
                    </div>
                </div>
                )}
              </Form>);
            }}
    </Formik>
  )
}
