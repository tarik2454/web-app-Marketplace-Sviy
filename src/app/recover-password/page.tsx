import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';

export default function Page() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
        <RecoverPasswordForm recoverPassword="page" />
      </PageWrapper>
    </>
  );
}
