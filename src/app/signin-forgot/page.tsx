'use client';

import { Breadcrumbs, ColorSpot } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';

export default function Page() {
  return (
    <>
      <ColorSpot />
      <Container>
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <SigninForgotForm signinForgotType="page" />
      </Container>
    </>
  );
}
