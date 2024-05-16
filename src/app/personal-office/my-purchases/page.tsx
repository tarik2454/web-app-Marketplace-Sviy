import { PersonalMyOrders } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function MyPurchases() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle
          stylesPageTitle={'hidden xl:block xl:mb-[88px]'}
          name={'Мої замовлення'}
        />
      </Container>
      <PersonalMyOrders />
    </PageWrapper>
  );
}
