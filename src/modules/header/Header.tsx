import { BurgerMenu } from "..";
import Logo from "../../shared/components/Logo/Logo";
import { CatalogueButton, HamburgerButton, FunctionalButtons } from "./components";

export default function Header () {
  return (
    <header className="flex items-center w-full h-20 px-4 gap-auto md:px-14 xl:px-20">
      <BurgerMenu />
      <CatalogueButton />
      <HamburgerButton />
      <Logo />
      <FunctionalButtons />
    </header>
  );
}