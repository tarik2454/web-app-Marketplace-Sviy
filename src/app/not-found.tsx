import { NotFound } from '@/modules';
import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

export default function Page() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <NotFound />
    </PageWrapper>
  );
}
