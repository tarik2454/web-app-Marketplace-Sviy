import DeliveryInfo from '@/modules/infoComponents/DeliveryInfo';
import PayInfo from '@/modules/infoComponents/PayInfo';
import { Breadcrumbs, ColorSpot, Container, PageTitle, PageWrapper, SectionTitle } from '@/shared/components';

export default function Delivery() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs 
        containerClasses={'xl:mb-[98px] md:mb-[98px] mb-[44px]'}
        homeElement={<span>Головна</span>} />
      <Container>
      <PageTitle name={'Доставка та оплата '} stylesPageTitle='visually hidden text-[1px]'/>
      </Container>
      <DeliveryInfo/>
      <PayInfo/>
    </PageWrapper>
  );
}
