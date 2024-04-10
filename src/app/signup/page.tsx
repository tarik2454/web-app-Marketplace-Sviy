import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { SignupForm } from '@/modules';

export default function Signup() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} />
        <SignupForm signupType="page" />
      </PageWrapper>
    </>
  );
}
