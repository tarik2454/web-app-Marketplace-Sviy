import { Filter } from "@/modules";
import { Breadcrumbs, ColorSpot } from "@/shared/components";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";

export default function Catalogue () {
  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <SectionTitle name="Каталог" />
          <div className="flex mt-10">
            <button className="w-[164px] p-[10px] bg-white border-2 rounded-default">Фільтр</button>
            <button className="w-[164px] ml-auto p-[10px] bg-white border-2 rounded-default">Сортування</button>
          </div>
          <Filter />
        </Container>
      </Section>
    </>
  )
}