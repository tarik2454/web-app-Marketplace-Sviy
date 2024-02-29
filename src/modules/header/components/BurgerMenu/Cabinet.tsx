import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler, useState } from 'react';

type Props = {
  signinClick: MouseEventHandler<HTMLButtonElement>;
  signupClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Cabinet({ signinClick, signupClick }: Props) {
  const [showSigninForm, setShowSigninForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  return (
    <div className="flex gap-4 mb-[124px]">
      <div className="p-4 bg-blue-200 border-2 rounded-circle border-transparent">
        <SpriteSVG name="profile-picture" />
      </div>
      <div>
        <div className="flex gap-4">
          <button onClick={signinClick}>Вхід</button>
          <p>|</p>
          <button onClick={signupClick}>Реєстрація</button>
        </div>
        <p className="mt-2 text-xs leading-[1.6]">
          Зареєструйся для розширених можливостей
        </p>
      </div>
    </div>
  );
}
