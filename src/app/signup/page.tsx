import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { SignupForm } from '@/modules';

export default function Page() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <SignupForm signupType="page" />
      </PageWrapper>
    </>
  );
}
