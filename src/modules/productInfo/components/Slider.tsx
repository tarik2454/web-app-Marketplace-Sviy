'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import '../../productInfo/style.css';

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-row-reverse">
      <Swiper
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="Img"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
