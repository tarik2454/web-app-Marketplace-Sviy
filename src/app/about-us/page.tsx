import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import AboutInfo from './AboutInfo';

export default function AboutUs() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <AboutInfo />
    </PageWrapper>
  );
}
