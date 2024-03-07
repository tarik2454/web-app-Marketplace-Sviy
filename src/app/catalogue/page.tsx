"use client"

import { Breadcrumbs, ColorSpot, PageWrapper } from "@/shared/components";
import { CatalogueProducts } from "@/modules";

export default function Catalogue () {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'} 
        homeElement={<span>Головна</span>}
      />      
      <CatalogueProducts displayTitle="block" />
    </PageWrapper>
  )
}