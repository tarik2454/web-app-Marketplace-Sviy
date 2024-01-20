import ButtonAllAds from '@/shared/components/CatalogButtons/ButtonAllAds';
import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import NoveltiesList from './components/NoveltiesList';

export default function Novelties() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Новинки" />
        <div className="relative">
          <ButtonAllAds />
        </div>

        <NoveltiesList />
      </Container>
    </Section>
  );
}
