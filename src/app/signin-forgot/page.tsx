'use client';
import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';

export default function Page() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <SigninForgotForm signinForgotType="page" />
      </PageWrapper>
    </>
  );
}
