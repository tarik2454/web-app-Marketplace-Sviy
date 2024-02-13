import { Container, Section, SectionTitle } from '@/shared/components';
import ProductsList from './components/ProductsList';

export default function ProductsWeek() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Товари тижня" />
        <ProductsList />
      </Container>
    </Section>
  );
}
