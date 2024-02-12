'use client';

import {
  Breadcrumbs,
  ColorSpot,
  FormHeading,
  FormInput,
  OrangeButton,
} from '@/shared/components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import Link from 'next/link';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Дані введені некоректно')
        .required("Обов'язкова наявність електронної пошти"),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });
}
