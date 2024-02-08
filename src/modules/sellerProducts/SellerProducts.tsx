import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
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
