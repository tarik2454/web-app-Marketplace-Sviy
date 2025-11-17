import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';
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
        <PageTitle name={'Контакти'} stylesPageTitle="text-2xl xl:text-[40px] md:text-[32px]"/>
      </Container>
      <ContactsInfo />
    </PageWrapper>
  );
}
