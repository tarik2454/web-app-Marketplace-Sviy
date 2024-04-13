'use client';

import { useState } from 'react';
import productsData from '@/shared/data/products-data';
import {
  Card,
  Container,
  FilterControlButtons,
  Pagination,
  Section,
} from '@/shared/components';
import { Filter, SortingMenu } from '..';

export default function CatalogueProducts() {
  const [sortingMenuDisplay, setSortingMenuDisplay] = useState('hidden');
  const [filterDisplay, setFilterDisplay] = useState('hidden');

  const openHandler = (type: string) => {
    if (type === 'filter') {
      setFilterDisplay('block');
      document.body.style.overflow = 'hidden';
    } else if (type === 'sortingMenu') {
      setSortingMenuDisplay('block');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeHandler = (type: string) => {
    if (type === 'filter') {
      setFilterDisplay('hidden');
      document.body.style.overflow = 'auto';
    } else if (type === 'sortingMenu') {
      setSortingMenuDisplay('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  const renderItemLi = (item: {
    id: number;
    image: string;
    name: string;
    information: string;
    price: number;
    currency: string;
  }) => <Card key={item.id} product={item} />;

  return (
    <Section className="pt-10 pb-[84px] md:pt-[64px] md:pb-[104px] xl:pt-[88px] xl:pb-[164px] relative">
      <Container>
        <div className="flex gap-6">
          <Filter
            display={filterDisplay}
            closeButtonClick={() => closeHandler('filter')}
          />

          <div>
            <FilterControlButtons
              filterButtonClick={() => openHandler('filter')}
              sortingMenuButtonClick={() => openHandler('sortingMenu')}
            />

            <Pagination
              itemsPerPage={6}
              array={productsData}
              styleUl={
                'grid gap-6 mt-5 mb-8 grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-10 md:mt-10 xl:grid-cols-3 xl:mt-6 xl:gap-6 xl:sticky'
              }
              renderItemLi={renderItemLi}
            />
          </div>

          <SortingMenu
            display={sortingMenuDisplay}
            closeButtonClick={() => closeHandler('sortingMenu')}
          />
        </div>
      </Container>
    </Section>
  );
}
