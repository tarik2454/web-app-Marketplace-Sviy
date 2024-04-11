import React from 'react';
import Image from 'next/image';

import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';

import batch_cooking_default from './image/batch_cooking.png';
import delicious_food_default from './image/delicious_food.png';

interface AdvertisingProps {
  image1?: string;
  image2?: string;
}

export default function Advertising({
  image1 = batch_cooking_default,
  image2 = delicious_food_default,
}) {
  return (
    <Section>
      <Container>
        <div className="xl:flex">
          <div className="xl:mr-[24px]">
            <Image
              className="rounded-[20px] sm:mb-4 w-[357px] sm:h-[212px] md:w-[704px] md:h-[372px] "
              src={image2}
              alt="batch_cooking"
              max-width={704}
              max-height={372}
            />
            <div className=""></div>
          </div>
          <div className="relative">
            <Image
              className="rounded-[20px] sm:w-[357px] sm:h-[212px] md:w-[704px] md:h-[372px]"
              src={image1}
              alt="delicious_food"
              max-width={704}
              max-height={372}
            />
            <div className="absolute left-[21px] top-[50px] flex flex-col items-center md:left-[32px] md:top-[92px]">
              <span className="mb-4 text-neutral-800 font-['Lora'] uppercase sm:text-[28px] font-bold md:text-[52px] md:font-semibold">
                Тільки тут
              </span>
              <span className="text-center text-blue-700 text-base font-medium font-['Lato'] leading-relaxed md:text-[32px] ">
                Висока якість!
                <br />
                Найкраща ціна!
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
