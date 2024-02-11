"use client"

import { Filter, SortingMenu } from "@/modules";
import { Breadcrumbs, ColorSpot } from "@/shared/components";
import Card from "@/shared/components/Card/Card";
import Container from "@/shared/components/Container/Container";
import Section from "@/shared/components/Section/Section";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import productsData from "@/shared/data/products-data";
import { SpriteSVG } from "@/shared/img/SpriteSVG";
import { useState } from "react";

export default function Catalogue () {
  const [sortingMenuDisplay, setSortingMenuDisplay] = useState("hidden");
  const [filterDisplay, setFilterDisplay] = useState("hidden");

  const [showPosts, setShowPosts] = useState(6);

  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <SectionTitle name="Каталог" />
          <div className="block md:flex flex-row-reverse items-center">
            <div className="flex mt-10 md:mt-0">
              <button
                onClick={() => setFilterDisplay("block")} 
                className="flex items-center gap-2 py-[10px] pl-[10px] pr-[80px] mr-auto bg-white border-2 rounded-default">
                <SpriteSVG name="filter" />
                <p>Фільтр</p>
              </button>
              <button 
                onClick={() => setSortingMenuDisplay("block")} 
                className="flex items-center gap-[33px] py-[10px] px-[10px] bg-white border-2 rounded-default">
                <p>Сортування</p>
                <SpriteSVG name="arrow-to-bottom" />
              </button>
            </div>
            <h3 className="mt-5 md:mt-0">Всього: 10</h3>
          </div>

          <ul className="grid gap-4 mt-5 grid-cols-1 md:grid-cols-2">
            {productsData.slice(0, showPosts).map((product, index) => {
              return (
                <li key={`${product.id}-${index}`}>
                  <Card 
                    product={product}
                  />
                </li>
              )
            })}
          </ul>

          <button
            onClick={() => setShowPosts(showPosts + 6)} 
            className="block mx-auto mt-9 p-1 text-xl text-blue-700">
            Дивитися більше
          </button>

          <Filter 
            display={filterDisplay}
            closeButtonClick={() => setFilterDisplay("hidden")}
          />
          <SortingMenu
            display={sortingMenuDisplay} 
            closeButtonClick={() => setSortingMenuDisplay("hidden")} 
          />
        </Container>
      </Section>
    </>
  )
}