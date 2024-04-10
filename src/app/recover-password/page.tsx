import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';

export default function RecoverPassword() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs homeElement={<span>Головна</span>} />
        <RecoverPasswordForm recoverPassword="page" />
      </PageWrapper>
    </>
  );
}
