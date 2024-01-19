'use client';

import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '@/shared/components/Card/Card';
import productsData from '@/shared/data/products-data';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import ButtonAllAds from '@/shared/components/CatalogButtons/ButtonAllAds';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function ProductsList() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{ nextEl: '.myslider-next', prevEl: '.myslider-prev' }}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        <ul className="swiper-wrapper">
          {productsData.map((product, index) => (
            <li key={product.id + 1}>
              <SwiperSlide className="swiper-slide">
                <Card product={product} />
              </SwiperSlide>
            </li>
          ))}
        </ul>
      </Swiper>

      <ButtonAllAds>
        <div className="hidden gap-3 md:flex">
          <button className="myslider-prev swiper-button-prev">
            <SpriteSVG name="slider-prev" />
          </button>
          <button className="myslider-next swiper-button-next">
            <SpriteSVG name="slider-next" />
          </button>
        </div>
      </ButtonAllAds>
    </div>
  );
}
