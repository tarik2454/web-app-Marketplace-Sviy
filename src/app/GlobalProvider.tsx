'use client';

import { useEffect } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { refreshThunk } from '@/redux/auth/operations';
import { selectAuth } from '@/redux/auth/authSlice';

type GlobalProviderProps = {
  children: React.ReactNode;
};

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const { isLoggedIn } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(refreshThunk())
  //       .unwrap()
  //       .then(() => {
  //         console.log('message logged in');
  //       })
  //       .catch(error => console.log(error));
  //   }

  //   return;
  // }, [dispatch, isLoggedIn]);

  return (
    <>
      {children}
      <ToastContainer autoClose={2000} transition={Slide} />
    </>
  );
}
