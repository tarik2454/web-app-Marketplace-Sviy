import {
  Breadcrumbs,
  ColorSpot,
  Container,
  FavoritesSection,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function Favorites() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'mb-10 md:mb-[38px] xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle name={'Обране'} />
      </Container>
      <FavoritesSection />
    </PageWrapper>
  );
}
