import { Container, Section, SectionTitle } from '@/shared/components';
import SellerProductsList from './components/SellerProductsList';

export default function SellerProducts() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Інші товари продавця" />
        <SellerProductsList />
      </Container>
    </Section>
  );
}
