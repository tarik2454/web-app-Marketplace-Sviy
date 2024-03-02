'use client';

import { Cabinet } from '.';
import {
  CatalogButton,
  CatalogueButton,
  CloseButton,
} from '@/shared/components/index';
import { Categories, SigninForm, SignupForm } from '@/modules';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Contacts } from '@/modules/footer';
import Container from '@/shared/components/Container/Container';
import { FormHeading } from '@/shared/components/index';

type Props = {
  display: string;
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function BurgerMenu({ display, closeButtonClick }: Props) {
  const [displayCategories, setDisplayCategories] = useState('hidden');
  const [signinFormDisplay, setSigninFormDisplay] = useState('hidden');
  const [signupFormDisplay, setSignupFormDisplay] = useState('hidden');
  const [signinForgotDisplay, setSigninForgotDisplay] = useState('hidden');

  useEffect(() => {
    if (display === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [display]);

  const closeCatalogClick = () => {
    setDisplayCategories('hidden');
  };

  const closeForm = () => {
    setSigninFormDisplay('hidden');
    setSignupFormDisplay('hidden');
    setSigninForgotDisplay('hidden');
  };

  return (
    <div
      className={`${display} md:hidden w-full py-5 bg-neutral-50 fixed inset-0 z-10 overflow-y-auto`}
    >
      <Container>
        <div className="flex justify-end mb-5">
          <CloseButton
            closeButtonClick={closeButtonClick}
            closeCatalogClick={closeCatalogClick}
          />
        </div>

        <nav>
          <Cabinet
            signinClick={() => setSigninFormDisplay('block')}
            signupClick={() => setSignupFormDisplay('Block')}
          />
          <div className="w-full max-w-[375px] py-5 border-y-2 absolute top-[158px] left-[50%] -translate-x-2/4">
            <div className="px-4 py-2.5 bg-white">
              <CatalogueButton
                catalogueClick={() => setDisplayCategories('block')}
              />
            </div>
          </div>
          <Contacts stylesContactsUl={'flex-col'} />
        </nav>
      </Container>

      <Categories
        displayCategories={displayCategories}
        closeButtonClick={closeButtonClick}
        closeCatalogClick={closeCatalogClick}
      />
      <div
        className={`${signinFormDisplay} absolute top-0  bg-white w-full h-screen pt-[109px] pr-[16px] pl-[16px]`}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>

        <FormHeading
          heading="Увійти в акаунт"
          additionalText="Увійдіть, щоб мати можливість додавати товари до обраного та бачити свої замовлення."
        />
        <SigninForm
          signinType="burger"
          signupClick={() => setSignupFormDisplay('Block')}
          signinForgotClick={() => setSigninForgotDisplay('block')}
        />
      </div>
      <div
        className={`${signupFormDisplay} absolute top-0  bg-white w-full h-screen pt-[84px] pr-[16px] pl-[16px] `}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>

        <FormHeading
          heading="Реєстрація нового користувача"
          additionalText=""
        />
        <SignupForm
          signupType="burger"
          signinClick={() => setSigninFormDisplay('block')}
        />
      </div>
      <div
        className={`${signinForgotDisplay} absolute top-0  bg-white w-full h-screen pt-[84px] pr-[16px] pl-[16px] `}
      >
        <SigninForgotForm />
      </div>
    </div>
  );
}
