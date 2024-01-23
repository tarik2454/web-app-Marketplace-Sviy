"use client"
import { CatalogueButton, CloseButton }from "@/shared/components/index";
import { Cabinet } from "./components";
import { Categories } from "..";
import { MouseEventHandler, useState } from "react";
import { Contacts } from "../footer";

type Props = {
  display: String,
  closeButtonClick: MouseEventHandler<HTMLButtonElement>,
}

export default function BurgerMenu ({ display, closeButtonClick }: Props) {
  const [categoriesDisplay, setCategoriesDisplay] = useState("hidden");

  return (
    <nav className={`${display} fixed z-20 w-full h-screen inset-0 py-5 overflow-y-auto bg-white`}>
      <div className="pr-4">
        <CloseButton closeButtonClick={closeButtonClick} />
      </div>
      <Cabinet />

      <div className="block w-screen py-5 px-4 mt-5 border-y-2">
        <CatalogueButton catalogueClick={() => setCategoriesDisplay("block")} />
      </div>

      <div className="mt-5 px-4">
        <Contacts />
      </div>

      <Categories
        categoriesDisplay={categoriesDisplay} 
        closeCategoriesClick={() => setCategoriesDisplay("hidden")} 
      />
    </nav>
  )
}