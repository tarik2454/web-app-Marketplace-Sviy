"use client"

import { Filter, SortingMenu } from "@/modules";
import { Breadcrumbs, ColorSpot } from "@/shared/components";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { useState } from "react";
import { CatalogueProducts } from "@/modules";

export default function Catalogue () {
  const [sortingMenuDisplay, setSortingMenuDisplay] = useState("hidden");
  const [filterDisplay, setFilterDisplay] = useState("hidden");

  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <SectionTitle name="Каталог" />
          
          <CatalogueProducts />

          <SortingMenu
            display={sortingMenuDisplay} 
            closeButtonClick={() => setSortingMenuDisplay("hidden")} 
          />
        </Container>
      </Section>
    </>
  )
}