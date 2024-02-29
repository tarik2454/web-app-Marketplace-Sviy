'use client';

import Logo from '@/shared/components/Logo/Logo';
import Container from '@/shared/components/Container/Container';

import { Contacts } from '.';
import ScreenSize from '@/shared/hooks/useMediaQuery';
// import RegIsSuccesful from '@/shared/components/Modal/RegIsSuccessful';
// import EmailConfirmation from '@/shared/components/Modal/EmailConfirmation';

export default function Footer() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  return (
    <footer className="bg-blue-200">
      <Container>
        <div className="pt-5 pb-[25px] md:pt-[32px] md:pb-5 xl:pb-6">
          <div className="flex justify-between ">
            {isOnMobile ? (
              <Logo logo="logoFooterMobile" />
            ) : isOnTablet ? (
              <Logo logo="logoTablet" />
            ) : (
              <Logo logo="logoFooterDesktop" />
            )}

            <Contacts
              stylesContactsWrapper={'mb-7'}
              stylesContactsUl={
                'flex-col md:grid md:grid-cols-3 md:grid-flow-col md:gap-x-4 md:gap-y-5 xl:gap-x-6'
              }
              stylesContactsLi={'md:min-w-[164px] xl:min-w-[237px]'}
            />
          </div>

          <p className="text-xs md:text-sm leading-[1.4] md:leading-[1.4] xl:text-base">
            @2024 Developed by Dream Team Software Solutions
          </p>
        </div>
        {/* <RegIsSuccesful />
        <EmailConfirmation /> */}
      </Container>
    </footer>
  );
}
