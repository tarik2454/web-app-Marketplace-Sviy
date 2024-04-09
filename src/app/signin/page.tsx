import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { SigninForm } from '@/modules';

export default function Page() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <SigninForm signinType="page" />
      </PageWrapper>
    </>
  );
}
