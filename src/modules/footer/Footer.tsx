import Logo from '../../shared/components/Logo/Logo';
import { About, Contacts } from './components';

export default function Footer() {
  return (
    <footer className="flex items-center w-full h-20 px-4 gap-auto md:px-14 xl:px-20">
      <Logo />
      <About />
      <Contacts />
    </footer>
  );
}
