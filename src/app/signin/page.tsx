import { Breadcrumbs, ColorSpot, FormHeading } from '@/shared/components';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import { SigninForm } from '@/modules';

export default function Page() {
  return (
    <>
      <Section className="py-[80px] md:pt-[104px] xl:py-[164px]">
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <FormHeading
            heading="Увійти в акаунт"
            additionalText="Увійдіть, щоб мати можливість додавати товари до обраного та бачити свої замовлення."
          />
          <SigninForm />
        </Container>
      </Section>
    </>
  );
}
