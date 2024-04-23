'use client';

import { useEffect, useRef } from 'react';

import { decrement, increment } from '@/redux/user/userSlice';
import { RootState } from '@/redux/store';
import { fetchUsers } from '@/redux/user/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import {
  Container,
  PageTitle,
  PageWrapper,
  Section,
} from '@/shared/components';

export default function Home() {
  const userRef = useRef(false);

  const { entities, loading, value } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsers());
    }

    return () => {
      userRef.current = true;
    };
  }, [dispatch]);

  return (
    <PageWrapper>
      <Section className={'xl:pt-20 xl:pb-20'}>
        <Container>
          <PageTitle stylesPageTitle="mb-5" name="Test user redux" />
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            entities?.map((user: any) => <h3 key={user.id}>{user.name}</h3>)
          )}

          <div className="flex gap-3">
            <button onClick={() => dispatch(decrement())}>-</button>
            {value}
            <button onClick={() => dispatch(increment())}>+</button>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
