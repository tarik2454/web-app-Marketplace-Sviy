'use client';
import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';

export default function SigninForgot() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} />
        <SigninForgotForm signinForgotType="page" />
      </PageWrapper>
    </>
  );
}
