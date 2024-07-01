'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';

import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function RegIsSuccesful() {
  const pathname = usePathname();
  const router = useRouter();

  const { email } = useAppSelector(selectAuth);

  const signinPage = '/signin';
  const personalOfficePage = '/personal-office/profile';

  const handleOrangeButtonClick = () => {
    router.push(pathname === signinPage ? '/catalogue' : '/signin');
  };

  return (
    <>
      <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose md:text-2xl">
        {pathname === signinPage
          ? `Авторизація ${email} пройшла успішно`
          : `Реєстрація ${email} пройшла успішно`}
      </h2>

      <div className="flex justify-center py-10">
        <SpriteSVG name="check-mark" className="fill-blue-700" />
      </div>

      <div className="flex justify-center items-start gap-3">
        <div className="text-white">
          <OrangeButton onClick={handleOrangeButtonClick}>
            {pathname === signinPage ? (
              <span className="text-nowrap">До каталогу</span>
            ) : (
              <span className="text-nowrap">До сторінки авторизації</span>
            )}
          </OrangeButton>
        </div>

        {pathname === signinPage ? (
          <Link href={personalOfficePage}>
            <ArrowButton>
              <span className="text-nowrap">До профілю</span>
            </ArrowButton>
          </Link>
        ) : null}
      </div>
    </>
  );
}
