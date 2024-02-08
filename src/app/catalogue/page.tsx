import { Filter, SortingMenu } from "@/modules";
import { Breadcrumbs, ColorSpot } from "@/shared/components";
import Card from "@/shared/components/Card/Card";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import productsData from "@/shared/data/products-data";
import { SpriteSVG } from "@/shared/img/SpriteSVG";

export default function Catalogue () {
  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <SectionTitle name="Каталог" />
          <div className="flex mt-10">
            <button className="flex items-center gap-2 py-[10px] pl-[10px] pr-[80px] mr-auto bg-white border-2 rounded-default">
              <SpriteSVG name="filter" />
              <p>Фільтр</p>
            </button>
            <button className="flex items-center gap-[33px] py-[10px] px-[10px] bg-white border-2 rounded-default">
              <p>Сортування</p>
              <SpriteSVG name="arrow-to-bottom" />
            </button>
          </div>
          <h3 className="mt-5">Всього: 10</h3>

          <ul className="mt-5">
            {productsData.slice(0, 6).map((product, index) => {
              return (
                <li key={`${product.id}-${index}`}>
                  <Card 
                    product={product}
                  />
                </li>
              )
            })}
          </ul>

          <button className="block mx-auto mt-9 p-1 text-xl text-blue-700">Дивитися більше</button>

          <Filter />
          <SortingMenu />
        </Container>
      </Section>
    </>
  )
}