import { PersonalMyAds } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function MyAds() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'mb-10 md:mb-[38px] xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle name={'Мої оголошення'} stylesPageTitle={'xl:mb-[88px]'} />
      </Container>
      <PersonalMyAds />
    </PageWrapper>
  );
}
