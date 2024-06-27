'use client';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';
import { refreshThunk } from '@/redux/auth/operations';

type GlobalProviderProps = {
  children: React.ReactNode;
};

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
      .unwrap()
      .then(() => {
        console.log('Success token');
      })
      .catch(error => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      {children}
      <ToastContainer autoClose={2000} transition={Slide} />
    </>
  );
}
