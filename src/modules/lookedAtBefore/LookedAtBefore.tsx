import { Container, Section, SectionTitle } from '@/shared/components';
import LookedAtBeforeList from './components/LookedAtBeforeList';

export default function LookedAtBefore() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Переглянуті раніше" />
        <LookedAtBeforeList />
      </Container>
    </Section>
  );
}
