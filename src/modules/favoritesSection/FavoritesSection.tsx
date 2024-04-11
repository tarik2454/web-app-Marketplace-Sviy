'use client';

import { useState } from 'react';

import productsData from '@/shared/data/products-data';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { Card, Container, Section } from '@/shared/components';

export default function Favorites() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  return (
    <Section className="pt-10 pb-[84px] md:pt-[64px] md:pb-[104px] xl:pt-[88px] xl:pb-[164px]">
      <Container>
        <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-6">
          {productsData.map((product, index) => {
            return (
              <li key={`${product.id}-${index}`}>
                <Card product={product} />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
