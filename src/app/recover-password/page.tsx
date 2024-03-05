import { Breadcrumbs, ColorSpot, FormHeading } from '@/shared/components';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';

export default function Page() {
  return (
    <>
      <Section className="py-[80px] md:pt-[104px] xl:py-[164px]">
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <FormHeading
            heading="Встановити новий пароль"
            additionalText="Для підтвердження вашої особи, введіть код, який був висланий на вашу електронну пошту."
          />
          <RecoverPasswordForm recoverPassword="page" />
        </Container>
      </Section>
    </>
  );
}
