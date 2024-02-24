"use client"

import { Breadcrumbs, ColorSpot } from "@/shared/components";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import { CatalogueProducts, SellerData } from "@/modules";

export default function Catalogue () {
  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <div className="flex flex-col md:flex-row">
            <div className="relative">
              <SectionTitle name="Продавець ім'я ФОП" />
              <p className="hidden absolute top-14 text-xs text-blue-900 md:block">3 роки на Свій</p>
            </div>
            <SellerData 
              phoneNumber="+380 96 900 90 90"
              email="fuhriug@gmail.com" 
              area="м. Львів, Залізничний р-н" 
              delivery="Самовивіз,  кур’єром"
            />
          </div>
          
          <CatalogueProducts />
        </Container>
      </Section>
    </>
  )
}
