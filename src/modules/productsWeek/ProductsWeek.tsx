import React from 'react';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import ProductsList from './components/ProductsList';

export default function ProductsWeek() {
  return (
    <Section className='pt-[106px] pb-[106px]'>
      <Container>
        <SectionTitle name="Товари тижня" />
        <ProductsList />
      </Container>
    </Section>
  );
}
