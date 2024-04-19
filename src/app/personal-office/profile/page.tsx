import { PersonalMyData } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function Profile() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle stylesPageTitle={'hidden xl:block'} name={'Мої дані'} />
      </Container>
      <PersonalMyData />
    </PageWrapper>
  );
}
