import { useState } from 'react';

export default function useFormsState() {
  const [signinFormDisplay, setSigninFormDisplay] = useState('hidden');
  const [signupFormDisplay, setSignupFormDisplay] = useState('hidden');
  const [signinForgotDisplay, setSigninForgotDisplay] = useState('hidden');
  const [recoverPassDisplay, setRecoverPassDisplay] = useState('hidden');

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

  return {
    signinFormDisplay,
    signupFormDisplay,
    signinForgotDisplay,
    recoverPassDisplay,
    closeForm,
    signinClick,
    signupClick,
    signinForgotClick,
    recoverPassClick,
  };
}

// Использование
// const {
//   signinFormDisplay,
//   signupFormDisplay,
//   signinForgotDisplay,
//   recoverPassDisplay,
//   closeForm,
//   signinClick,
//   signupClick,
//   signinForgotClick,
//   recoverPassClick,
// } = useFormsState();
