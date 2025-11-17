import { Container, Section, SectionTitle } from '@/shared/components';
import LookedAtBeforeList from './components/LookedAtBeforeList';

export default function LookedAtBefore() {
  return (
    <Section className={'pb-20 md:pb-[104px] xl:pb-[164px]'}>
      <Container>
        <SectionTitle name="Переглянуті раніше" />
        <LookedAtBeforeList />
      </Container>
    </Section>
  );
}
