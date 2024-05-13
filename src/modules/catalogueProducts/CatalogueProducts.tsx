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
import options from './data/options-data';
import ScreenSize from '@/shared/hooks/useMediaQuery';

export default function CatalogueProducts() {
  const [sortingMenuDisplay, setSortingMenuDisplay] = useState('hidden');
  const [filterDisplay, setFilterDisplay] = useState('hidden');

  const { isOnMobile, isOnTablet } = ScreenSize();

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

  const itemsPerPage = isOnMobile ? 6 : isOnTablet ? 8 : 9;

  const renderItemLi = (item: {
    id: number;
    image: string;
    name: string;
    information: string;
    price: number;
    currency: string;
  }) => <Card key={item.id} product={item} />;

  return (
    <Section className="pt-10 pb-[80px] md:pt-[64px] md:pb-[104px] xl:pt-[88px] xl:pb-[164px] relative">
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
              options={options}
            />

            <Pagination
              itemsPerPage={itemsPerPage}
              array={productsData}
              styleUl={
                'grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 md:gap-4 md:mb-10 xl:grid-cols-3 xl:gap-6 xl:sticky'
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
