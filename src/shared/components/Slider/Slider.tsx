'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { ButtonAllAds, Card } from '..';

type ProductDataType = {
  id?: number;
  image: string;
  name: string;
  information: string;
  price: number;
  currency: string;
};

export default function Slider({ data }: { data: ProductDataType[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{ nextEl: '.mySwiper-next', prevEl: 'mySwiper-prev' }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
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
        <div className="swiper-wrapper">
          {data.slice(0, 6).map((product, index) => (
            <SwiperSlide
              key={`${product.id}-${index}`}
              className="swiper-slide1"
            >
              <Card product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <ButtonAllAds>
        <div className="hidden gap-3 md:flex">
          <button className="mySwiper-prev">
            <SpriteSVG name="slider-prev" />
          </button>
          <button className="mySwiper-next">
            <SpriteSVG name="slider-next" />
          </button>
        </div>
      </ButtonAllAds>
    </>
  );
}
