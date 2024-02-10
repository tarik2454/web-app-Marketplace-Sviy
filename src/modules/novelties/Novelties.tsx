import {
  ButtonAllAds,
  Container,
  Section,
  SectionTitle,
} from '@/shared/components';
import NoveltiesList from './components/NoveltiesList';

export default function Novelties() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Новинки" />

        <div className="relative ">
          <ButtonAllAds />
          <NoveltiesList />
        </div>
      </Container>
    </Section>
  );
}
