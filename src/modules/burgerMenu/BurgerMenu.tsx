import { CatalogueButton, CloseButton }from "@/shared/components/index";
import { Cabinet } from "./components";
import { Categories } from "..";

export default function BurgerMenu () {
  return (
    <nav className="hidden absolute z-10 w-full h-screen inset-0 px-4 py-5 bg-white">
      <CloseButton />
      <Cabinet />
      <div className="block absolute w-screen left-0 py-5 px-4 mt-5 border-y-2">
        <CatalogueButton />
      </div>
      <Categories />
    </nav>
  )
}