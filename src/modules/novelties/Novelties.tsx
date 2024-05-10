import {
  ButtonAllAds,
  Container,
  Section,
  SectionTitle,
} from '@/shared/components';
import NoveltiesList from './components/NoveltiesList';

export default function Novelties() {
  const pageLink = '/catalogue';

  return (
    <Section>
      <Container>
        <SectionTitle name="Новинки" />

        <div className="relative ">
          <ButtonAllAds pageLink={pageLink} />
          <NoveltiesList />
        </div>
      </Container>
    </Section>
  );
}
