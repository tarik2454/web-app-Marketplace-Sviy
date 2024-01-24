import ButtonAllAds from '@/shared/components/CardButtons/ButtonAllAds';
import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import NoveltiesList from './components/NoveltiesList';

export default function Novelties() {
  return (
    <Section className='pb-[104px]'>
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
