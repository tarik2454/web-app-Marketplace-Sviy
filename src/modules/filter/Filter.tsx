"use client"

import { CloseButton, Dropdown, OrangeButton } from "@/shared/components";
import { FilterOptions, OptionsButtons, PriceButtons } from "./components";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";

import categoriesData from "../header/components/Catalog/data/categories-data";

type Props = {
  display: string,
  closeButtonClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Filter ({ display, closeButtonClick }: Props) {
  const [firstSubcategories, setFirstSubcategories] = useState<Array<any>>();
  const [secondSubcategories, setSecondSubcategories] = useState<Array<any>>();

  const areaOptions = [
    { value: "галицький", label: "Галицький" },
    { value: "залізничний", label: "Залізничний" },
    { value: "франківський", label: "Франківський" },
    { value: "сихівський", label: "Сихівський" },
    { value: "личаківський", label: "Личаківський" },
  ];

  const [temporaryMin, setTemporaryMin] = useState("");
  const [temporaryMax, setTemporaryMax] = useState("");

  const [filterOptions, setFilterOptions] = useState({
    inStock: false,
    area: "",
    salesPromotion: false,
    price: {
      min: "",
      max: "",
    },
  });
  const [filterOptionsDisplay, setFilterOptionsDisplay] = useState("hidden");

  const filterOptionsHandler = (option: string) => {
    switch (option) {
      case "inStockAdd":
        setFilterOptions(prevState => ({ ...prevState, inStock: true }));
        break;
      case "priceAdd": 
        setFilterOptions(prevState => ({ ...prevState, price: { min: temporaryMin, max: temporaryMax } }));
        break;
      case "salesPromotionAdd":
        setFilterOptions(prevState => ({ ...prevState, salesPromotion: true }));
        break;
      case "inStockDelete":
        setFilterOptions(prevState => ({ ...prevState, inStock: false }))
        break;
      case "priceDelete":
        setFilterOptions(prevState => ({ ...prevState, price: { min: "", max: "" } }))
        break;
      case "areaDelete":
        setFilterOptions(prevState => ({ ...prevState, area: "" }))
        break;
      case "salesPromotionDelete":
        setFilterOptions(prevState => ({ ...prevState, salesPromotion: false }));
        break;
      case "deleteAll":
        setFilterOptions({
          inStock: false,
          area: "",
          salesPromotion: false,
          price: {
            min: "",
            max: "",
          },
        });
        break;
      default: 
        console.log("Add an option");
    }
  }

  useEffect(() => {
    if (
      filterOptions.area 
      || 
      filterOptions.inStock 
      || 
      filterOptions.price.max && filterOptions.price.min 
      || filterOptions.salesPromotion
      ) {
      setFilterOptionsDisplay("flex")
    } else {
      setFilterOptionsDisplay("hidden")
    }
  }, [filterOptions])

  return (
    <div className={`${display} fixed h-screen w-full left-0 top-0 px-4 py-6 bg-white z-[60] overflow-auto md:w-fit md:left-auto md:right-0 xl:relative xl:block xl:rounded-default xl:z-0 xl:inset-0 xl:overflow-visible xl:h-fit xl:min-w-fit`}>
      <div className="flex items-center text-2xl pb-[10px] border-b-2 xl:hidden">
        <h1 className="mr-auto">Фільтр</h1>
        <CloseButton closeButtonClick={closeButtonClick} />
      </div>

      <h1 className="text-2xl hidden xl:block">Фільтр</h1>

      <FilterOptions
        inStockClick={() => filterOptionsHandler("inStockDelete")}
        priceClick={() => filterOptionsHandler("priceDelete")}
        areaClick={() => filterOptionsHandler("areaDelete")}
        salesPromotionClick={() => filterOptionsHandler("salesPromotionDelete")}
        filterOptionsDisplay={filterOptionsDisplay}
        deleteAllOptionsClick={() => filterOptionsHandler("deleteAll")}
        filterOptions={filterOptions}
      />

      <OptionsButtons 
        inStockClick={() => filterOptionsHandler("inStockAdd")} 
        salesPromotionClick={() => filterOptionsHandler("salesPromotionAdd")}
      />

      <Dropdown 
        options={categoriesData.map((category) => ({ value: String(category.id), label: category.category }))}
        placeholder={"Категорії"}
        id={"categories"}
        dropdownName={"Категорії"}
        onChange={(category: any) => {
          const specificCategory = categoriesData.find((specific) => specific.category === category.label);
          setFirstSubcategories(specificCategory?.subCategories?.map((subcategory: any) => ({ value: subcategory.title, label: subcategory.title, items: subcategory.items })));
          setSecondSubcategories(undefined);
        }}
      />

      {firstSubcategories && (
        <Dropdown 
          options={firstSubcategories} 
          placeholder={"Підкатегорія 1"}
          id={"firstSubcategories"}
          dropdownName={"Підкатегорія 1"}
          onChange={(category: any) => {
            const specificCategory = firstSubcategories.find((specific) => specific.label === category.label);
            setSecondSubcategories(specificCategory.items.map((subcategory: string) => ({ value: subcategory, label: subcategory })));
          }}
        />
      )}

      {secondSubcategories && (
        <Dropdown
          options={secondSubcategories}
          placeholder={"Підкатегорія 2"}
          id={"secondSubcategories"}
          dropdownName={"Підкатегорія 2"}
          onChange={() => {}}
        />
      )}

      <Dropdown 
        options={areaOptions}
        placeholder={"Район"}
        id={"searchArea"}
        dropdownName={"Шукати в..."}
        onChange={(area: any) => {
          setFilterOptions((prevState) => ({ ...prevState, area: area.label }));
        }}
      />

      <PriceButtons
        minPriceChange={(event: ChangeEvent<HTMLInputElement>) => setTemporaryMin(event.target.value)}
        maxPriceChange={(event: ChangeEvent<HTMLInputElement>) => setTemporaryMax(event.target.value)}
        okButtonClick={() => filterOptionsHandler("priceAdd")} 
      />
    </div>
  )
}