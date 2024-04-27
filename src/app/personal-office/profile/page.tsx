import { PersonalMyData } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function Profile() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'xl:mb-[98px] md:mb-[38px] mb-[47px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle stylesPageTitle={'hidden xl:text-[40px] xl:block xl:mb-[88px]'} name={'Мої дані'} />
      </Container>
      <PersonalMyData />
    </PageWrapper>
  );
}
