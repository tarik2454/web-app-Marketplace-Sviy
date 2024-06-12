'use client';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import ScreenSize from '@/shared/hooks/useMediaQuery';

import {
  Container,
  OrderFinalPrice,
  Section,
  SectionTitle,
} from '@/shared/components';
import { OrderCheckout, OrderListHeader } from './components';
import { Delivery, OrderPayDetail } from './components/Delivery';
import AfterOrder from './components/AfterOrder/AfterOrder';

const orderSchema = Yup.object().shape({
  firstName: Yup.string().required('Введіть ім\'я'),
  lastName: Yup.string().required('Введіть прізвище'),
  middleName: Yup.string(),
  phone: Yup.string().required('Введіть телефон'),
  customer: Yup.string().required('Введіть ПІБ отримувача'),
  comment: Yup.string(),
  product: Yup.string().required('Виберіть продукт'),
  location: Yup.string().required('Введіть адресу'),
  deliveryPicked: Yup.string().required('Виберіть метод доставки'),
  city: Yup.string().required('Введіть місто'),
  postOfficeApiSelect: Yup.string(),
  deliveryByAddressPicked: Yup.boolean(),
  address: Yup.string(),
  homeAddress: Yup.string(),
  apartmentAddress: Yup.string(),
  exitAddress: Yup.string(),
  floorAddress: Yup.string(),
  picked: Yup.string().required('Виберіть метод оплати'),
});

export default function Order() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  const [afterOrderState, setAfterOrderState] = useState<boolean>(false);

  return (
    <Section
      className={
        'pt-[43px] pb-10 md:pt-[38px] md:pb-[96px] xl:pt-[98px] xl:pb-[164px]'
      }
    >
      <Container>
        {!afterOrderState && (
          <SectionTitle
            className={'md:mb-[64px] xl:mb-[88px]'}
            name={'Оформлення замовлення'}
          />
        )}

        {!afterOrderState && (
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              middleName: '',
              phone: '',
              customer: '',
              comment: '',
              product: 'Вареники з картоплею, 3шт, 470грн',
              location: '',
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
            }}
            validationSchema={orderSchema}
            onSubmit={async values => {
              await new Promise(r => setTimeout(r, 500));
              console.log(JSON.stringify(values, null, 2));
              setAfterOrderState(true);
            }}
          >
            {formik => {
              const { values, handleChange, touched, errors } = formik;
              return (
                <Form id="orderFormSubmit">
                  {(isOnMobile && (
                    <>
                      <OrderCheckout formik={formik} />
                      <OrderListHeader />
                      <div className="mb-10">
                        <Delivery formik={formik} />
                        <OrderPayDetail formik={formik} />
                      </div>
                      <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
                    </>
                  )) ||
                    (isOnTablet && (
                      <>
                        <div className="grid grid-cols-2 gap-4 md:mb-[52px]">
                          <OrderCheckout formik={formik} />
                          <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
                        </div>
                        <OrderListHeader />
                        <Delivery formik={formik} />
                        <OrderPayDetail formik={formik} />
                      </>
                    )) || (
                      <div className="xl:flex xl:gap-6">
                        <div className="xl:max-w-[845px]">
                          <OrderCheckout formik={formik} />
                          <OrderListHeader />
                          <Delivery formik={formik} />
                          <OrderPayDetail formik={formik} />
                        </div>
                        <div className="h-full w-full sticky top-[137px] right-0">
                          <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
                        </div>
                      </div>
                    )}
                </Form>
              );
            }}
          </Formik>
        )}
        {afterOrderState && <AfterOrder />}
      </Container>
    </Section>
  );
}
