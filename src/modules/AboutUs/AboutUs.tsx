import Image from 'next/image';

import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';

import map_phone from '@/shared/img/AboutUs/map/map_phone.png';
import map_tablet from '@/shared/img/AboutUs/map/map_tablet.png';
import map_desktop from '@/shared/img/AboutUs/map/map_desktop.png';
import magnifier_phone from '@/shared/img/AboutUs/magnifier/magnifier_phone.png';
import magnifier_tablet from '@/shared/img/AboutUs/magnifier/magnifier_tablet.png';
import magnifier_desktop from '@/shared/img/AboutUs/magnifier/magnifier_desktop.png';

export default function AboutUs() {
  return (
    <Section className="py-20 md:py-[104px] xl:py-[164px]">
      <div className="relative">
        <Container>
          <div>
            <SectionTitle name="Хто ми?"></SectionTitle>
            <p className="mb-5 text-neutral-800 leading-relaxed md:text-xl md:mb-10 md:leading-loose">
              <span className="text-blue-700 text-2xl font-normal">Свій</span> -
              інноваційний торговий майданчик
            </p>

            <p className="font-normal mb-6 leading-relaxed sm:w-[164px] md:w-[338.55px] md:mb-8 md:text-xl md:leading-loose xl:w-[737px] xl:mb-6">
              <span className="text-blue-700 leading-relaxed md:text-xl md:leading-loose">
                Ласкаво просимо
              </span>{' '}
              на наш унікальний маркетплейс локальних товарів!
            </p>

            <p className="font-normal mb-6 leading-relaxed sm:w-[164px] md:w-[457.38px] md:mb-8 md:text-xl md:leading-loose xl:w-[737px] xl:mb-6">
              <span className="text-blue-700 leading-relaxed md:text-xl md:leading-loose">
                Ми
              </span>{' '}
              - команда ентузіастів, які вірять у силу спільноти та підтримку
              місцевих виробників
            </p>

            <p className="font-normal leading-relaxed md:text-xl md:w-[704px] md:leading-loose xl:w-[737px]">
              <span className="text-blue-700 leading-relaxed md:text-xl md:leading-loose">
                {' '}
                Наш маркетплейс
              </span>{' '}
              - це інтернет-платформа для місцевих продуктів харчування, де ми
              об`єднуємо виробників і споживачів. Тут вас чекають найсвіжіші та
              найсмачніші страви, вироблені нашими місцевими партнерами.
              Підтримуючи місцевих виробників, ми сприяємо розвитку нашої
              громади. Приєднуйтеся до нас, якщо ви цінуєте якість, унікальний
              смак та підтримку свого регіону. Ласкаво просимо в наш світ смаку
              та традицій!
            </p>

            <Image
              className="absolute top-[160px] right-0 md:hidden"
              src={map_phone}
              alt="map Ukraine"
            />
            <Image
              className="hidden  md:inline absolute top-[100px] right-0 xl:hidden"
              src={map_tablet}
              alt="map Ukraine"
            />
            <Image
              className="hidden xl:inline absolute top-[140px] right-0"
              src={map_desktop}
              alt="map Ukraine"
            />

            <Image
              className=" z-10 absolute top-[170px] right-3 md:hidden"
              src={magnifier_phone}
              alt="magnifier"
            />
            <Image
              className="hidden md:inline z-10 absolute top-[85px] right-[95px] xl:hidden"
              src={magnifier_tablet}
              alt="magnifier"
            />
            <Image
              className="hidden xl:inline z-10 absolute top-[120px] right-[150px]"
              src={magnifier_desktop}
              alt="magnifier"
            />
          </div>
        </Container>
      </div>
    </Section>
  );
}
