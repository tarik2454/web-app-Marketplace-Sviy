'use client';

import { Cabinet } from '.';
import { CatalogueButton, CloseButton } from '@/shared/components/index';
import { Categories, SigninForm, SignupForm } from '@/modules';
import SigninForgotForm from '@/modules/signinForgotForm/SigninForgotForm';
import RecoverPasswordForm from '@/modules/recoverPasswordForm/RecoverPasswordForm';
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import { Contacts } from '@/modules/footer';
import Container from '@/shared/components/Container/Container';
import { twMerge } from 'tailwind-merge';

type Props = {
  display: string;
  closeButtonClick: MouseEventHandler<HTMLButtonElement>;
  setDisplayMenu: Dispatch<SetStateAction<string>>;
};

export default function BurgerMenu({
  display,
  closeButtonClick,
  setDisplayMenu,
}: Props) {
  const [displayCategories, setDisplayCategories] = useState('hidden');
  const [signinFormDisplay, setSigninFormDisplay] = useState('hidden');
  const [signupFormDisplay, setSignupFormDisplay] = useState('hidden');
  const [signinForgotDisplay, setSigninForgotDisplay] = useState('hidden');
  const [recoverPassDisplay, setRecoverPassDisplay] = useState('hidden');

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
      className={twMerge(
        display,
        `md:hidden w-full py-5 bg-neutral-50 fixed inset-0 z-10`
      )}
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
          <Contacts
            stylesContactsUl={'flex-col'}
            setDisplayMenu={setDisplayMenu}
          />
        </nav>
      </Container>

      <Categories
        displayCategories={displayCategories}
        closeButtonClick={closeButtonClick}
        closeCatalogClick={closeCatalogClick}
      />

      <div
        className={`${signinFormDisplay} absolute top-0  bg-white w-full h-screen pr-[16px] pl-[16px] overflow-y-auto`}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>
        <SigninForm
          signinType="burger"
          signupClick={signupClick}
          signinForgotClick={signinForgotClick}
        />
      </div>

      <div
        className={`${signupFormDisplay} absolute top-0  bg-white w-full h-screen  pr-[16px] pl-[16px] overflow-y-auto`}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>
        <SignupForm signupType="burger" signinClick={signinClick} />
      </div>

      <div
        className={`${signinForgotDisplay} absolute top-0  bg-white w-full h-screen  pr-[16px] pl-[16px] `}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>
        <SigninForgotForm
          signinForgotType="burger"
          signinClick={signinClick}
          signupClick={signupClick}
          recoverPassClick={recoverPassClick}
        />
      </div>

      <div
        className={`${recoverPassDisplay} absolute top-0  bg-white w-full h-screen  pr-[16px] pl-[16px] `}
      >
        <div className="absolute top-5 right-4">
          <CloseButton closeForm={closeForm} />
        </div>
        <RecoverPasswordForm
          recoverPassword="burger"
          signinClick={signinClick}
        />
      </div>
    </div>
  );
}
