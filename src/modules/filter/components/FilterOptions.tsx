import { OrangeButton } from "@/shared/components"
import { MouseEventHandler } from "react"
import { FilterOptionButton } from "."

type FilterOptions = {
  inStock: boolean,
  area: string,
  salesPromotion: boolean,
  price: {
    min: string,
    max: string,
  },
}

type Props = {
  filterOptionsDisplay: string,
  deleteAllOptionsClick: MouseEventHandler<HTMLButtonElement>,
  inStockClick: MouseEventHandler<HTMLButtonElement>,
  areaClick: MouseEventHandler<HTMLButtonElement>,
  priceClick: MouseEventHandler<HTMLButtonElement>,
  salesPromotionClick: MouseEventHandler<HTMLButtonElement>,
  filterOptions: FilterOptions,
}

export default function FilterOptions (
  { filterOptionsDisplay, 
    deleteAllOptionsClick, 
    filterOptions,
    inStockClick,
    areaClick,
    priceClick,
    salesPromotionClick,
  }: Props
  ) {
  return (
    <div className={`${filterOptionsDisplay} flex-col mt-10 gap-4`}>
      <OrangeButton onClick={deleteAllOptionsClick} cssSettings="w-fit">Скинути все</OrangeButton>
      {filterOptions.inStock && (
        <FilterOptionButton onClick={inStockClick} buttonText="В наявності" />
      )}
      {filterOptions.area && (
        <FilterOptionButton onClick={areaClick} buttonText={filterOptions.area} />
      )}
      {filterOptions.price.min && filterOptions.price.max && (
        <FilterOptionButton 
          onClick={priceClick} 
          buttonText={`Ціна: ${filterOptions.price.min} - ${filterOptions.price.max}`}
        />
      )}
      {filterOptions.salesPromotion && (
        <FilterOptionButton 
          onClick={salesPromotionClick} 
          buttonText="Акційні"
        />
      )}
    </div>
  )
}