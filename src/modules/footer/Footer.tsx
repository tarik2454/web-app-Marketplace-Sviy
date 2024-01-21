import Logo from '@/shared/components/Logo/Logo';
import Container from '@/shared/components/Container/Container';

import { Contacts } from '.';

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <Container>
        <div className="flex justify-between pt-5 pb-3 md:items-center">
          <div>
            <Logo />
          </div>
          <div>
            <Contacts />
          </div>
        </div>
      </Container>
    </footer>
  );
}
