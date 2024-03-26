'use client';
import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';

export default function Page() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs
          containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
          homeElement={<span>Головна</span>}
          capitalizeLinks
        />
        <SigninForgotForm signinForgotType="page" />
      </PageWrapper>
    </>
  );
}
