'use client';
import OrderPayDetail from '@/modules/header/components/Cart/OrderPayDetail'
import { PageWrapper } from '@/shared/components'
import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const orderSchema = yup.object().shape({
  picked: yup.string().required('Треба обрати спосіб оплати'),
  customer: yup.string().required('Це поле має бути заповнено'),
});

function OrderDetails() {

  return (
    <PageWrapper>
      <Formik 
        initialValues={{
          picked: '',
          customer: 'Поліна Ващук',
          comment: '',
        }}
        validationSchema={orderSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
       {({values}) => (<Form>
          <OrderPayDetail customer={values.customer}/>
        </Form>)}
      </Formik>
      
    </PageWrapper>
  )
}

export default OrderDetails
