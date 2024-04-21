'use client';

import { API } from '@/config/globalConfig';
import {
  Container,
  OrangeButton,
  PageWrapper,
  Section,
} from '@/shared/components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type RouteParams = {
  postId: number;
};

type PostProps = {
  id: number;
  title: string;
  body: string;
};

type TestPostDetailsProps = {
  params: RouteParams;
};

export default function TestPostDetails({
  params: { postId },
}: TestPostDetailsProps) {
  const [post, setPost] = useState<PostProps | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.warn('Error fetching data:', error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <PageWrapper>
      <Section className={'xl:pt-20 xl:pb-20'}>
        <Container>
          {post && (
            <>
              <div className="mb-5">
                <h3 className="text-[20px]">
                  {post.title.charAt(0).toUpperCase()}
                  {post.title.slice(1)}
                </h3>
                <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>{' '}
              </div>
              <OrangeButton
                cssSettings={'xl:py-2 text-white'}
                onClick={() => {
                  router.back();
                }}
              >
                Назад
              </OrangeButton>
            </>
          )}
        </Container>
      </Section>
    </PageWrapper>
  );
}
