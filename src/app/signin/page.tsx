import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { SigninForm } from '@/modules';

export default function Signin() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} />
        <SigninForm signinType="page" />
      </PageWrapper>
    </>
  );
}
