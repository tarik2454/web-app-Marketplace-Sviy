'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';
import { refreshThunk } from '@/redux/auth/operations';

type ToastProviderProps = {
  children: React.ReactNode;
};

export default function ToastProvider({ children }: ToastProviderProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
      .unwrap()
      .then(() => {
        toast.success('Success');
      })
      .catch(error => {
        toast.error(error);
      });
  }, [dispatch]);

  return (
    <>
      {children}
      <ToastContainer autoClose={3000} />
    </>
  );
}
