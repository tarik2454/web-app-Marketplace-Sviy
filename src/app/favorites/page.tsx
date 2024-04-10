import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

export default function Favorites() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
    </PageWrapper>
  );
}
