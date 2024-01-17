import Section from '@/shared/components/Section/Section';
import { BurgerMenu } from '..';
import Logo from '../../shared/components/Logo/Logo';
import { HamburgerButton, FunctionalButtons } from './components';
import { CatalogueButton } from '@/shared/components';
import Container from '@/shared/components/Container/Container';

export default function Header() {
  return (
    <Section>
      <Container>
        <header className="flex font-normal items-center w-full h-20 gap-auto xl:h-24">
          <BurgerMenu />
          <div className="hidden pl-5 pr-8 py-3 border-2 border-blue-700 text-blue-700 rounded-default md:block">
            <CatalogueButton />
          </div>
          <HamburgerButton />
          <div className="mx-auto">
            <Logo />
          </div>
          <FunctionalButtons />
        </header>
      </Container>
    </Section>
  );
}
