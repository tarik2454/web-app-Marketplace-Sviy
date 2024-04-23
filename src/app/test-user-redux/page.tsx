'use client';

import { useEffect, useRef, useState } from 'react';

import { decrement, increment } from '@/redux/users/userSlice';
import { fetchUsers } from '@/redux/users/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import {
  Container,
  PageTitle,
  PageWrapper,
  Section,
} from '@/shared/components';

export default function Home() {
  const userRef = useRef(false);

  const { entities, isLoading, value } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsers());
    }

    return () => {
      userRef.current = true;
    };
  }, [dispatch]);

  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <PageWrapper>
      <Section className={'xl:pt-20 xl:pb-20'}>
        <Container>
          <PageTitle stylesPageTitle="mb-5" name="Test user redux" />
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {entities?.map((user: any) => (
                <h3 key={user.id}>{user.name}</h3>
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
    </PageWrapper>
  );
}
