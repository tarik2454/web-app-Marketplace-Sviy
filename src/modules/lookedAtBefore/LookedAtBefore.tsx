import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
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
