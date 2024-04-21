'use client';

import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '@/redux/user/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchUsers } from '@/redux/user/operations';

import {
  Container,
  PageTitle,
  PageWrapper,
  Section,
} from '@/shared/components';

export default function Home() {
  const userRef = useRef(false);

  const { entities, loading, value } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();

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

          <button onClick={() => dispatch(increment())}>Click on me</button>
          {value}
        </Container>
      </Section>
    </PageWrapper>
  );
}
