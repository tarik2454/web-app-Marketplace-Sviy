"use client"

import { useState } from "react";
import productsData from "@/shared/data/products-data";
import { Card, FilterControlButtons, Pagination } from "@/shared/components";
import { Filter, SortingMenu } from "..";

export default function CatalogueProducts () {
  const [sortingMenuDisplay, setSortingMenuDisplay] = useState("hidden");
  const [filterDisplay, setFilterDisplay] = useState("hidden");

  const [showProducts, setShowProducts] = useState(6);

  return (
    <div className="flex gap-6">
      <Filter
        display={filterDisplay}
        closeButtonClick={() => setFilterDisplay("hidden")}
      />

      <div className="block">
        <FilterControlButtons
          filterButtonClick={() => setFilterDisplay("block")}
          sortingMenuButtonClick={() => setSortingMenuDisplay("block")}
        />
        <ul className="grid gap-4 mt-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {productsData.slice(0, showProducts).map((product, index) => {
            return (
              <li key={`${product.id}-${index}`}>
                <Card
                  product={product}
                />
              </li>
            )
          })}
        </ul>
        <Pagination 
          moreProductsClick={() => setShowProducts(showProducts + 6)} 
        />
      </div>
      <SortingMenu
        display={sortingMenuDisplay} 
        closeButtonClick={() => setSortingMenuDisplay("hidden")} 
      />
    </div>
  )
}