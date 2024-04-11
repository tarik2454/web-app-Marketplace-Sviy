'use client';

import { useState } from 'react';
import productsData from '@/shared/data/products-data';
import {
  Card,
  Container,
  FilterControlButtons,
  Section,
} from '@/shared/components';
import { Filter, SortingMenu } from '..';
import ScreenSize from '@/shared/hooks/useMediaQuery';

export default function CatalogueProducts() {
  const [sortingMenuDisplay, setSortingMenuDisplay] = useState('hidden');
  const [filterDisplay, setFilterDisplay] = useState('hidden');

  const { isOnMobile, isOnTablet } = ScreenSize();

  const [showProducts, setShowProducts] = useState(
    isOnMobile ? 6 : isOnTablet ? 8 : 9
  );

  const moreProductsClickHandler = () => {
    isOnMobile
      ? setShowProducts(showProducts + 6)
      : isOnTablet
      ? setShowProducts(showProducts + 8)
      : setShowProducts(showProducts + 9);
  };

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
            <ul className="grid gap-4 mt-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:sticky">
              {productsData.slice(0, showProducts).map((product, index) => {
                return (
                  <li key={`${product.id}-${index}`}>
                    <Card product={product} />
                  </li>
                );
              })}
            </ul>
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
