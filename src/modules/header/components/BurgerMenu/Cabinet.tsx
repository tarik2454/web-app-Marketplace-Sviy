import { selectAuth } from '@/redux/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useRouter } from 'next/navigation';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

type Props = {
  signinClick: MouseEventHandler<HTMLButtonElement>;
  signupClick: MouseEventHandler<HTMLButtonElement>;
  setDisplayMenu?: Dispatch<SetStateAction<string>>;
};

export default function Cabinet({
  signinClick,
  signupClick,
  setDisplayMenu,
}: Props) {
  const { full_name, isLoggedIn } = useAppSelector(selectAuth);

  const route = useRouter();

  const personalOfficePage = '/personal-office/profile';

  const handleCloseBurgerMenu = () => {
    if (setDisplayMenu) {
      setDisplayMenu('hidden');
    }
    route.push(personalOfficePage);
  };

  return (
    <div className="flex gap-4 mb-[124px]">
      <div className="p-4 bg-blue-200 border-2 rounded-circle border-transparent">
        <SpriteSVG name="profile-picture" />
      </div>
      <div>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <button className="text-orange-500" onClick={handleCloseBurgerMenu}>
              {full_name}
            </button>
          ) : (
            <>
              <button onClick={signinClick}>Вхід</button>
              <p>|</p>
              <button onClick={signupClick}>Реєстрація</button>
            </>
          )}
        </div>
        <p className="mt-2 text-xs leading-[1.6]">
          Зареєструйся для розширених можливостей
        </p>
      </div>
    </div>
  );
}
