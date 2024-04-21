'use client';

import { API } from '@/config/globalConfig';
import {
  Container,
  PageTitle,
  PageWrapper,
  Section,
} from '@/shared/components';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type PostProps = {
  id: number;
  title: string;
};

export default function TestPost({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  // маршрут к страницам
  const router = useRouter();
  // название страницы в url
  const pathname = usePathname();
  // params: это объект, который содержит параметры маршрута. В Next.js, когда вы используете динамические маршруты (например, [postId].js), параметры из URL доступны через объект params. Например, если у вас есть маршрут /posts/[postId], и URL выглядит как /posts/123, то params будет содержать объект { postId: '123' }.
  console.log(params);
  // searchParams: это объект, который содержит параметры запроса URL. Параметры запроса - это часть URL после знака вопроса ?. Например, если у вас есть URL /search?q=nextjs, то searchParams будет содержать объект { q: 'nextjs' }
  console.log(searchParams);

  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
      <Section className={'xl:pt-20 xl:pb-20'}>
        <Container>
          <div>
            <PageTitle stylesPageTitle="mb-5" name="Test Posts" />
            <ul>
              {data.map(post => (
                <li key={post.id}>
                  <Link href={`/test-post/${post.id}`}>
                    <h3 className="text-[18px]">
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
