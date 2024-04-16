'use client';

import productsData from '@/shared/data/products-data';
import { Card, Container, Pagination, Section } from '@/shared/components';

export default function Favorites() {
  const renderItemLi = (item: {
    id: number;
    image: string;
    name: string;
    information: string;
    price: number;
    currency: string;
  }) => <Card key={item.id} product={item} />;

  return (
    <Section className="pt-10 pb-[84px] md:pt-[64px] md:pb-[104px] xl:pt-[88px] xl:pb-[164px]">
      <Container>
        <Pagination
          itemsPerPage={8}
          array={productsData}
          styleUl={
            'grid gap-6 grid-cols-1 mb-8 md:grid-cols-2 md:gap-4 md:mb-10 xl:grid-cols-4 xl:gap-6'
          }
          renderItemLi={renderItemLi}
        />
      </Container>
    </Section>
  );
}
