'use client';

import { useEffect, useRef, useState } from 'react';

import { decrement, increment, selectUsers } from '@/redux/users/usersSlice';
import { fetchUsersThunk } from '@/redux/users/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth, setAuthState } from '@/redux/authSlice';

import { User } from '@/types/interfaces/User';

import {
  Container,
  PageTitle,
  PageWrapper,
  Section,
} from '@/shared/components';

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  const { entities, isLoading, value } = useAppSelector(selectUsers);
  const isAuthState = useAppSelector(selectAuth);

  const userRef = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsersThunk());
    }
    return () => {
      userRef.current = true;
    };
  }, [dispatch]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <PageWrapper>
      <Section className={''}>
        <Container>
          <PageTitle stylesPageTitle="mb-5" name="Test user redux" />
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {entities?.map((user: User) => (
                <p key={user.id}>{user.name}</p>
              ))}

              <div className="flex gap-3">
                <button onClick={() => dispatch(decrement())}>-</button>
                {isHydrated ? value : null}
                <button onClick={() => dispatch(increment())}>+</button>
              </div>
            </>
          )}
        </Container>
      </Section>

      <Section className={'pb-20'}>
        <Container>
          <PageTitle stylesPageTitle="mb-5" name="Test user redux" />
          <div className="grid md:grid-cols-2 place-items-center">
            <div className="flex gap-4 border border-1 border-black p-20">
              <button
                className="p-4 border border-1 border-black hover:bg-gray-300"
                onClick={() => dispatch(setAuthState(true))}
              >
                Log in
              </button>
              <button
                className="p-4 border border-1 border-black hover:bg-gray-300"
                onClick={() => dispatch(setAuthState(false))}
              >
                Log out
              </button>
            </div>

            <div className="flex gap border border-1 border-black p-20">
              {isHydrated && (
                <div>
                  You are now {isAuthState ? 'Logged In' : 'Logged Out'}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
