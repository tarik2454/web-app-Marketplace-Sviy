'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { useState } from 'react';

import dataImg from '../data/data-img';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { SpriteSVG } from '../img/SpriteSVG';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function SliderInfo() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const { isOnDesktop } = ScreenSize();

  return (
    <div className="md:flex md:flex-row-reverse md:justify-start md:gap-6">
      <button className="p-[8px] bg-white rounded-circle absolute top-4 right-4 z-10">
        <SpriteSVG name="heart" />
      </button>

      <div className="flex flex-col">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{ nextEl: '.mySwiper2-next', prevEl: '.mySwiper2-prev' }}
          pagination={{ clickable: true }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          <div className="swiper-wrapper">
            {dataImg.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Img"
                  src={item}
                />
              </SwiperSlide>
            ))}
          </div>

          <div className="hidden xl:flex gap-[399px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-10">
            <button className="mySwiper2-prev">
              <SpriteSVG name="arrow-right" />
            </button>
            <button className="mySwiper2-next">
              <SpriteSVG name="arrow-left" />
            </button>
          </div>
        </Swiper>
      </div>

      {isOnDesktop && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper3"
        >
          <div className="swiper-wrapper">
            {dataImg.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Img"
                  src={item}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
}
