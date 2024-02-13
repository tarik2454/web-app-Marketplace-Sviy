"use client"

import { Breadcrumbs, ColorSpot } from "@/shared/components";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { CatalogueProducts } from "@/modules";

export default function Catalogue () {
  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <SectionTitle name="Каталог" />
          
          <CatalogueProducts />
        </Container>
      </Section>
    </>
  )
}