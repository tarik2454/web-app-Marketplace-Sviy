'use client';

import { Cabinet } from '.';
import {
  CatalogButton,
  CatalogueButton,
  CloseButton,
} from '@/shared/components/index';
import { Categories, SigninForm, SignupForm } from '@/modules';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';
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
  const [recoverPassDisplay, setRecoverPassDisplay] = useState('hidden');

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
    setRecoverPassDisplay('hidden');
  };

  const signinClick = () => {
    setSigninFormDisplay('block');
    setSignupFormDisplay('hidden');
    setSigninForgotDisplay('hidden');
    setRecoverPassDisplay('hidden');
  };

  const signupClick = () => {
    setSignupFormDisplay('block');
    setSigninFormDisplay('hidden');
    setSigninForgotDisplay('hidden');
  };

  const signinForgotClick = () => {
    setSigninForgotDisplay('block');
  };

  const recoverPassClick = () => {
    setRecoverPassDisplay('block');
    setSigninForgotDisplay('hidden');
  };

  return (
    <div
      className={`${display} md:hidden w-full py-5 bg-neutral-50 fixed inset-0 z-10`}
    >
      <Container>
        <div className="flex justify-end mb-5">
          <CloseButton
            closeButtonClick={closeButtonClick}
            closeCatalogClick={closeCatalogClick}
          />
        </div>
        <nav>
          <Cabinet signinClick={signinClick} signupClick={signupClick} />
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
        className={`${signinFormDisplay} absolute top-0  bg-white w-full h-screen pt-[109px] pr-[16px] pl-[16px] overflow-y-auto`}
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
          signupClick={signupClick}
          signinForgotClick={signinForgotClick}
        />
      </div>
      <div
        className={`${signupFormDisplay} absolute top-0  bg-white w-full h-screen pt-[84px] pr-[16px] pl-[16px] overflow-y-auto`}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>

        <FormHeading heading="Реєстрація нового користувача" />
        <SignupForm signupType="burger" signinClick={signinClick} />
      </div>
      <div
        className={`${signinForgotDisplay} absolute top-0  bg-white w-full h-screen pt-[84px] pr-[16px] pl-[16px] `}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>

        <FormHeading
          heading="Забули свій пароль"
          additionalText="Нічого страшного! Заповніть свою електронну адресу, і ми надішлемо вам"
        />
        <SigninForgotForm
          signinForgotType="burger"
          signinClick={signinClick}
          signupClick={signupClick}
          recoverPassClick={recoverPassClick}
        />
      </div>
      <div
        className={`${recoverPassDisplay} absolute top-0  bg-white w-full h-screen pt-[84px] pr-[16px] pl-[16px] `}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>
        <FormHeading
          heading="Встановити новий пароль"
          additionalText="Для підтвердження вашої особи, введіть код, який був висланий на вашу електронну пошту."
        />
        <RecoverPasswordForm
          recoverPassword="burger"
          signinClick={signinClick}
        />
      </div>
    </div>
  );
}
