// useFormsState.ts
import { useState } from 'react';

export default function useFormsState() {
  const [signinFormDisplay, setSigninFormDisplay] = useState('hidden');
  const [signupFormDisplay, setSignupFormDisplay] = useState('hidden');
  const [signinForgotDisplay, setSigninForgotDisplay] = useState('hidden');
  const [recoverPassDisplay, setRecoverPassDisplay] = useState('hidden');

  const openSigninForm = () => {
    setSigninFormDisplay('block');
    setSignupFormDisplay('hidden');
    setSigninForgotDisplay('hidden');
    setRecoverPassDisplay('hidden');
  };

  const openSignupForm = () => {
    setSignupFormDisplay('block');
    setSigninFormDisplay('hidden');
    setSigninForgotDisplay('hidden');
  };

  const openSigninForgotForm = () => {
    setSigninForgotDisplay('block');
  };

  const openRecoverPassForm = () => {
    setRecoverPassDisplay('block');
    setSigninForgotDisplay('hidden');
  };

  const closeAllForms = () => {
    setSigninFormDisplay('hidden');
    setSignupFormDisplay('hidden');
    setSigninForgotDisplay('hidden');
    setRecoverPassDisplay('hidden');
  };

  return {
    signinFormDisplay,
    signupFormDisplay,
    signinForgotDisplay,
    recoverPassDisplay,
    openSigninForm,
    openSignupForm,
    openSigninForgotForm,
    openRecoverPassForm,
    closeAllForms,
  };
}
