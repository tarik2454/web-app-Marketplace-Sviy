'use client';

import {
  Container,
  OrderFinalPrice,
  Section,
  SectionTitle,
} from '@/shared/components';
import { OrderCheckout, OrderListHeader } from './components';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { Formik, Form } from 'formik';

import { Delivery, OrderPayDetail } from './components/Delivery';
import { orderSchema } from './components/Delivery/FormLogic';

export default function Order() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  return (
    <Section
      className={
        'pt-[43px] pb-10 md:pt-[38px] md:pb-[96px] xl:pt-[98px] xl:pb-[164px]'
      }
    >
      <Container>
        <SectionTitle
          className={'md:mb-[64px] xl:mb-[88px]'}
          name={'Оформлення замовлення'}
        />

        <Formik
        initialValues={{
          name: '',
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
          customer: 'Поліна Ващук',
          comment: '',
          product: "Вареники з картоплею, 3шт, 470грн",
        }}
        validationSchema={orderSchema}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
         {formik => {
            const {
              values,
              handleChange,
              touched,
              errors
            } = formik;
            return (
              <Form>
              {(isOnMobile && (
                <>
                  <OrderCheckout formik={formik}/>
                  <OrderListHeader />
                  <div className="mb-10">
                    <Delivery formik={formik} />
                    <OrderPayDetail
                      formik={formik}
                    />
                  </div>
                  <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
                </>
              )) ||
                (isOnTablet && (
                  <>
                    <div className="grid grid-cols-2 gap-4 md:mb-[52px]">
                      <OrderCheckout formik={formik}/>
                      <OrderFinalPrice itemsQuantity={4} totalPrice={470} />
                    </div>
                    <OrderListHeader />
                    <Delivery formik={formik}/>
                    <OrderPayDetail formik={formik}/>
                  </>
                )) || (
                  <div className="xl:flex xl:gap-6">
                    <div className="xl:max-w-[845px]">
                      <OrderCheckout formik={formik}/>
                      <OrderListHeader />
                      <Delivery formik={formik} />
                      <OrderPayDetail formik={formik}/>
                    </div>
                    <div className="h-full sticky top-[137px] right-0">
                      <OrderFinalPrice
                        itemsQuantity={4}
                        totalPrice={470}
                        children="Замовлення підтверджую"
                        />
                    </div>
                  </div>
                )}
              </Form>
              );
          }}
      </Formik>
      </Container>
    </Section>
  );
}
