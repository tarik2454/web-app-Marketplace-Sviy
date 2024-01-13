import { BurgerMenu } from "..";
import Logo from "../../shared/components/Logo/Logo";
import { HamburgerButton, FunctionalButtons } from "./components";
import { CatalogueButton } from "@/shared/components";

export default function Header () {
  return (
    <header className="flex font-lora items-center w-full h-20 px-4 gap-auto md:px-14 xl:px-20 xl:h-24">
      <BurgerMenu />
      <div className="hidden pl-5 pr-8 py-3 border-2 border-slate-300 rounded-2xl md:block">
        <CatalogueButton gap="4" />
      </div>
      <HamburgerButton />
      <div className="mx-auto">
        <Logo />
      </div>
      <FunctionalButtons />
    </header>
  );
}