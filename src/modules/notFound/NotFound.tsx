'use client';

import { Container, OrangeButton, Section } from '@/shared/components';
import { SpriteSVG } from './image/SpriteSVG';
import Image from 'next/image';
import cake from './image/cake.png';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { setInterval } from 'timers';

export default function NotFound() {
  const router = useRouter();

  const [rotate, setRotate] = useState('rotate-0');

  useEffect(() => {
    const rotationHandler = () => {
      setRotate('rotate-[-30deg]');
    };

    setInterval(rotationHandler, 1000);
  });

  return (
    <Section className="pt-11 pb-20 md:pt-16 md:pb-[103px] xl:pt-15 xl:pb-[98px]">
      <Container>
        <div className="text-center mx-auto">
          <div className="flex mx-auto items-center relative max-w-[343px] h-[216px] md:max-w-[542px] md:h-[234px]">
            <SpriteSVG name="four" />
            <div className="max-w-[126px] md:max-w-[200px]">
              <Image
                src={cake}
                alt="cake image"
                sizes="100vh"
                width={0}
                height={0}
              />
            </div>
            <div
              className={`${rotate} transition-transform ease-in-out origin-bottom`}
            >
              <SpriteSVG name="four" />
            </div>
          </div>
          <h1 className="text-blue-700 text-xl mb-4 xl:text-2xl">
            Y На жаль, сторінку, яку ви шукаєте, не знайдено.
          </h1>
          <p className="text-sm mb-8 md:text-base">
            Можливо, ви перейшли за застарілим посиланням або сторінка була
            переміщена. Щоб повернутися на головну сторінку, натисніть кнопку.
          </p>
          <OrangeButton onClick={() => router.push('/')} cssSettings="mx-auto">
            На головну
          </OrangeButton>
        </div>
      </Container>
    </Section>
  );
}
