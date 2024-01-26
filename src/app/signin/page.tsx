"use client"

import { FormInput, OrangeButton } from "@/shared/components";
import * as Yup from 'yup';
import { useFormik } from "formik";
import Section from "@/shared/components/Section/Section";
import Container from "@/shared/components/Container/Container";

export default function Page () {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Email is not correct')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
    }),
    onSubmit: async values => {
      alert(values);
    },
  })

  return (
    <>
      <Section className="pt-60 pb-60">
        <Container>
          <div className="max-w-[400px] flex flex-col gap-5 mx-auto mb-10">
            <h1 className="text-neutral-800 text-2xl text-center font-normal font-lato leading-10">Увійти в акаунт</h1>
            <p className="text-center text-neutral-800 text-sm font-normal font-lato leading-snug">Увійдіть, щоб мати можливість додавати товари до обраного та бачити свої замовлення.</p>
          </div>
          <div className="max-w-[400px] mx-auto">
            <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
              <FormInput
                formik={formik}
                onChange={formik.handleChange}
                value={formik.values.email} 
                id="email" 
                label={"Електронна пошта"} 
                inputType="email"
              />

              <FormInput
                formik={formik}
                onChange={formik.handleChange}
                value={formik.values.password} 
                id="password" 
                label={"Пароль"} 
                inputType="password"
              />
              <div className="w-28 mt-10 mx-auto">
                <OrangeButton onClick={() => {}} type="submit">Увійти</OrangeButton>
              </div>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}