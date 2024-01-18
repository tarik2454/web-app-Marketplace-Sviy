import { CatalogueButton, CloseButton }from "@/shared/components/index";
import { Cabinet } from "./components";
import { Categories } from "..";

export default function BurgerMenu () {
  return (
    <nav className="hidden fixed z-10 w-full h-screen inset-0 px-4 py-5 overflow-y-auto bg-white">
      <CloseButton />
      <Cabinet />
      <div className="block absolute w-screen left-0 py-5 px-4 mt-5 border-y-2">
        <CatalogueButton />
      </div>
      <Categories />
    </nav>
  )
}