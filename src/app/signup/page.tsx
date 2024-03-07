import { Breadcrumbs, ColorSpot } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import { SignupForm } from '@/modules';

export default function Page() {
  return (
    <>
      <ColorSpot />
      <Container>
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <SignupForm signupType="page" />
      </Container>
    </>
  );
}
