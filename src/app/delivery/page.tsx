import DeliveryInfo from '@/modules/infoComponents/DeliveryInfo';
import PayInfo from '@/modules/infoComponents/PayInfo';
import { Breadcrumbs, ColorSpot, Container, PageWrapper, SectionTitle } from '@/shared/components';

export default function Delivery() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs 
        containerClasses={'mb-[44px] md:mb-[98px] xl:mb-[98px]'}
        homeElement={<span>Головна</span>} />
      <Container>
        <SectionTitle name={'Доставка'} className="mb-0 xl:mb-0 md:mb-0"/>
      </Container>
      <DeliveryInfo/>

      <Container>
        <SectionTitle name={'Оплата'} className="mb-0 xl:mb-0 md:mb-0"/>
      </Container>
      <PayInfo/>
    </PageWrapper>
  );
}
