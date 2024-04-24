import { PersonalOrderCustomers } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function OrderCustomers() {
  <PageWrapper>
    <ColorSpot />
    <Breadcrumbs
      containerClasses={'xl:mb-[98px]'}
      homeElement={<span>Головна</span>}
    />
    <Container>
      <PageTitle
        stylesPageTitle={'hidden xl:block'}
        name={'Замовлення моїх клієнтів'}
      />
      <PersonalOrderCustomers />
    </Container>
  </PageWrapper>;
}
