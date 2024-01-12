import { CatalogueButton }from "@/shared/components/index";
import { Cabinet, CloseButton } from "./components";

export default function BurgerMenu () {
  return (
    <nav className="hidden absolute w-full h-screen inset-0 px-4 py-5 bg-white">
      <CloseButton />
      <Cabinet />
      <div className="block absolute w-screen left-0 py-5 px-4 mt-5 border-y-2">
        <CatalogueButton gap="4" />
      </div>
    </nav>
  )
}