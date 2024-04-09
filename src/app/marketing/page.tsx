import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

export default function marketing() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
    </PageWrapper>
  );
}
