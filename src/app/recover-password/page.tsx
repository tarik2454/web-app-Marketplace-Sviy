import { Breadcrumbs, ColorSpot } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';

export default function Page() {
  return (
    <>
      <ColorSpot />
      <Container>
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <RecoverPasswordForm recoverPassword="page" />
      </Container>
    </>
  );
}
