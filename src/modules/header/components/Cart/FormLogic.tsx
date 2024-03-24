'use client';
import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Delivery from '@/modules/header/components/Cart/Delivery';
import OrderPayDetail from '@/modules/header/components/Cart/OrderPayDetail'

const FormLogic = () => {
    const orderSchema = yup.object().shape({
        deliveryPicked: yup.string().required('Треба обрати спосіб доставки'),
        deliveryByAddressPicked: yup.boolean(),
        city: yup
          .string()
          .when(["deliveryByAddressPicked", "deliveryPicked"], { 
            is: (deliveryByAddressPicked:boolean, deliveryPicked:string) => deliveryByAddressPicked || deliveryPicked==="Самовивіз",
            then: (schema) => schema,
            otherwise: (schema) => schema.required("Треба вказати місто")
          }),
          postOfficeApiSelect: yup
          .string()
          .when(["deliveryByAddressPicked", "deliveryPicked"], { 
            is: (deliveryByAddressPicked:boolean, deliveryPicked:string) => deliveryByAddressPicked || deliveryPicked==="Самовивіз",
            then: (schema) => schema,
            otherwise: (schema) => schema.required("Треба обрати відділення")
          }),
          address: yup
          .string()
          .when("deliveryByAddressPicked", { 
            is: true,
            then: (schema) => schema.required("Треба ввести адресу"),
            otherwise: (schema) => schema,
          }),
          homeAddress: yup
          .string()
          .when("deliveryByAddressPicked", { 
            is: true,
            then: (schema) => schema.required("Треба ввести номер будинку"),
            otherwise: (schema) => schema,
          }),
          picked: yup.string().required('Треба обрати спосіб оплати'),
          customer: yup.string().required('Це поле має бути заповнено'),
        
      });
    
    return (
        <Formik 
        initialValues={{
        deliveryPicked: '',
        city: '',
        postOfficeApiSelect: '',
        deliveryByAddressPicked: false,
        address: '',
        homeAddress: '',
        apartmentAddress: '',
        exitAddress: '',
        floorAddress: '',
        picked: '',
        customer: 'Поліна Ващук',
        comment: '',
    }}
    validationSchema={orderSchema}
    onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        console.log(values.deliveryByAddressPicked)
    }}
    >
    {({values}) => (
    <Form>
        <Delivery values={values}/>
        <OrderPayDetail values={values.picked} customer={values.customer}/>
        <button type="submit">button</button>
    </Form>)}
</Formik>
  )
}

export default FormLogic