'use client';

import { Breadcrumbs, ColorSpot } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';

export default function Page() {
  return (
    <>
      <ColorSpot />
      <Container>
        <Breadcrumbs
          containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
          homeElement={<span>Головна</span>}
          capitalizeLinks
        />
        <SigninForgotForm signinForgotType="page" />
      </Container>
    </>
  );
}
