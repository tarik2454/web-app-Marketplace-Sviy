"use client"

import { FormInput } from "@/shared/components";
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
        .min(6, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  })

  return (
    <main className="pt-80 pb-80">
      <div className="w-[400px] mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.email} 
            id="signInEmail" 
            label={"Email"} 
            inputType="text" 
          />

          <FormInput
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.password} 
            id="signInPassword" 
            label={"Password"} 
            inputType="password" 
          />

          <button type="submit">opa</button>
        </form>
      </div>
    </main>
  )
}