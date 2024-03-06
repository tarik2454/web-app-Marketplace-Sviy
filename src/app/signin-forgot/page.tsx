'use client';

import { Breadcrumbs, ColorSpot, FormHeading } from '@/shared/components';

import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';

export default function Page() {
  return (
    <>
      <Section className="py-[80px] md:pt-[104px] xl:py-[164px]">
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <FormHeading
            heading="Забули свій пароль"
            additionalText="Нічого страшного! Заповніть свою електронну адресу, і ми надішлемо вам"
          />
          <SigninForgotForm signinForgotType="page" />
        </Container>
      </Section>
    </>
  );
}
