import { PersonalNewAd } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function Selected() {
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
          name={'Нове оголошення'}
        />
      </Container>
      <PersonalNewAd />
    </PageWrapper>
  );
}
