"use client"

import { FormInput, OrangeButton } from "@/shared/components";
import * as Yup from 'yup';
import { useFormik } from "formik";

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
      console.log(values);
    },
  })

  return (
    <main className="pt-80 pb-80">
      <div className="w-[400px] mx-auto">
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
    </main>
  )
}