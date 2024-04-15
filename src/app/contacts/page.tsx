import { Breadcrumbs, ColorSpot, Container, PageWrapper, SectionTitle } from '@/shared/components';
import ContactsInfo from '@/modules/infoComponents/ContactsInfo';

export default function Contacts() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs 
        containerClasses={'mb-[44px] md:mb-[98px] xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
        />
      <Container>
        <SectionTitle name={'Контакти'} className="mb-0 xl:mb-0 md:mb-0"/>
      </Container>
      <ContactsInfo/>
    </PageWrapper>
  );
}
