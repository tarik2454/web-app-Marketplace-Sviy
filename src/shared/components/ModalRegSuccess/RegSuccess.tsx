'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';

import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useEffect, useState } from 'react';
import { currentUserThunk, refreshThunk } from '@/redux/auth/operations';
import { toast } from 'react-toastify';

export default function RegIsSuccesful() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { access, full_name, email } = useAppSelector(selectAuth);

  const signinPage = '/signin';
  const personalOfficePage = '/personal-office/profile';

  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (access) {
  //     dispatch(currentUserThunk())
  //       .unwrap()
  //       .then(() => {
  //         toast.success(`Current user ${full_name}`);
  //       })
  //       .catch(error => {
  //         toast.error(error);
  //       });
  //   }
  // }, [access, dispatch, full_name]);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(refreshThunk()).unwrap();
        setInitialized(true);
      } catch (error) {
        toast.error((error as Error).message || 'Error refreshing token');
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(currentUserThunk()).unwrap();
      } catch (error) {
        toast.error((error as Error).message || 'Error fetching user data');
      }
    };

    if (initialized && access) {
      fetchUser();
    }
  }, [initialized, access, dispatch, full_name]);

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
