import DeliveryInfo from '@/modules/infoComponents/DeliveryInfo';
import PayInfo from '@/modules/infoComponents/PayInfo';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
  SectionTitle,
} from '@/shared/components';

export default function Delivery() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'mb-[44px] md:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle
          name={'Доставка та оплата'}
          stylesPageTitle="visually-hidden"
        />
      </Container>
      <DeliveryInfo />
      <PayInfo />
    </PageWrapper>
  );
}
