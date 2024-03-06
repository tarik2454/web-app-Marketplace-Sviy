"use client"

import { Breadcrumbs, ColorSpot, PageWrapper } from "@/shared/components";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { CatalogueProducts, SellerData } from "@/modules";

export default function Catalogue () {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs 
        homeElement={<span>Головна</span>} 
        containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
      />
      <SellerData 
        phoneNumber="+380 96 900 90 90"
        email="fuhriug@gmail.com" 
        area="м. Львів, Залізничний р-н" 
        delivery="Самовивіз,  кур’єром"
      />
          
      <CatalogueProducts displayTitle="hidden" />
    </PageWrapper>
  )
}
