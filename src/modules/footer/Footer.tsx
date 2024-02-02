'use client';

import Logo from '@/shared/components/Logo/Logo';
import Container from '@/shared/components/Container/Container';

import { Contacts } from '.';
import Copyright from '@/shared/components/Contacts/Copyright';
import RegIsSuccesful from '@/shared/components/Modal/RegIsSuccessful';
import EmailConfirmation from '@/shared/components/Modal/EmailConfirmation';
import PasswordChanged from '@/shared/components/Modal/PasswordChanged';

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <Container>
        <div className="flex justify-between pt-5 pb-3 md:pt-12 md:item-center">
          <div>
            <Logo />
          </div>
          <div className="pb-7">
            <Contacts />
          </div>
        </div>
        <div className="text-center pb-4 sm:text-sm sm:font-normal sm:leading-snug md:text-base md:leading-relaxed">
          <Copyright />
        </div>
        <RegIsSuccesful />
        <EmailConfirmation />
        <PasswordChanged />
      </Container>
    </footer>
  );
}
