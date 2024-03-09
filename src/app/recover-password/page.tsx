import { Breadcrumbs, ColorSpot } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';

export default function Page() {
  return (
    <>
      <ColorSpot />
      <Container>
        <Breadcrumbs
          containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
          homeElement={<span>Головна</span>}
          capitalizeLinks
        />
        <RecoverPasswordForm recoverPassword="page" />
      </Container>
    </>
  );
}
