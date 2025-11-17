import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import Marketing from '@/modules/marketing/Marketing';

export default function marketing() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <Marketing />
    </PageWrapper>
  );
}
