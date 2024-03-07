import { Breadcrumbs, ColorSpot } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import { SigninForm } from '@/modules';

export default function Page() {
  return (
    <>
      <ColorSpot />
      <Container>
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <SigninForm signinType="page" />
      </Container>
    </>
  );
}
