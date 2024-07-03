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
        containerClasses={'mb-10 xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle
          stylesPageTitle={
            'text-[24px] block md:hidden xl:block xl:text-[41px] mb-8 xl:mb-[88px]'
          }
          name={'Нове оголошення'}
        />
      </Container>
      <PersonalNewAd />
    </PageWrapper>
  );
}
