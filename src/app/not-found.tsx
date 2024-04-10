import { NotFound } from '@/modules';
import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';

export default function Page() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'pt-5 mb-0 xl:pt-[26px]'}
        homeElement={<span>Головна</span>}
      />
      <NotFound />
    </PageWrapper>
  );
}
