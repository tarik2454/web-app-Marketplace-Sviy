import React from 'react';
import Image from 'next/image';

import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';

import batch_cooking_default from '@/shared/img/Advertising/batch_cooking.png';
import delicious_food_default from '@/shared/img/Advertising/delicious_food.png';

interface AdvertisingProps {
  image1?: string;
  image2?: string;
}

const Advertising: React.FC<AdvertisingProps> = ({
  image1 = batch_cooking_default,
  image2 = delicious_food_default,
}) => {
  return (
    <Section>
      <Container>
        <div className="mb-[105px] xl:flex">
          <Image
            className="rounded-[20px] sm:mb-4 w-[357px] sm:h-[212px] md:w-[704px] md:h-[372px] xl:mr-[24px]"
            src={image1}
            alt="batch_cooking"
            width={704}
            height={372}
          />
          <Image
            className="rounded-[20px] sm:w-[357px] sm:h-[212px] md:w-[704px] md:h-[372px]"
            src={image2}
            alt="delicious_food"
            width={704}
            height={372}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Advertising;
