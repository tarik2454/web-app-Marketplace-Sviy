import { CatalogueButton }from "@/shared/components/index";
import { Cabinet, CloseButton } from "./components";

export default function BurgerMenu () {
  return (
    <nav className="hidden absolute w-full h-screen inset-0 px-4 py-5 bg-white">
      <CloseButton />
      <Cabinet />
      <div className="block pt-5 pb-5 mt-5 border-y-2">
        <CatalogueButton />
      </div>
    </nav>
  )
}