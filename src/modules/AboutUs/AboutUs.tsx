import Image from 'next/image';

import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';

import map_phone from '@/shared/img/AboutUs/map/map_phone.png';
import map_tablet from '@/shared/img/AboutUs/map/map_tablet.png';
import magnifier_phone from '@/shared/img/AboutUs/magnifier/magnifier_phone.png';
import magnifier_tablet from '@/shared/img/AboutUs/magnifier/magnifier_tablet.png';

export default function AboutUs() {
  return (
    <Section>
      <div className=" relative">
        <Container>
          <div className="mb-20">
            <SectionTitle name="Хто ми?"></SectionTitle>
            <p className="mb-5 md:text-xl md:mb-10">
              <span className="text-blue-700 text-2xl">Свій</span> -
              інноваційний торговий майданчик
            </p>
            <p className="mb-6 md:hidden">
              <span className="text-blue-700">Ласкаво просимо</span> на <br />
              наш унікальний <br />
              маркетплейс <br />
              локальних товарів!
            </p>

            <p className="mb-8 sm:max-md:hidden md:text-xl">
              <span className="text-blue-700">Ласкаво просимо</span> на наш
              унікальний <br />
              маркетплейс локальних товарів!
            </p>

            <p className="mb-6 md:hidden">
              <span className="text-blue-700">Ми</span> - команда <br />
              ентузіастів, які вірять <br />у силу спільноти та
              <br /> підтримку місцевих <br />
              виробників
            </p>

            <p className="mb-8 sm:max-md:hidden md:text-xl">
              <span className="text-blue-700">Ми</span> - команда ентузіастів,
              які вірять <br />у силу спільноти та підтримку <br />
              місцевих виробників
            </p>

            <p className="md:text-xl">
              <span className="text-blue-700"> Наш маркетплейс</span> - це
              інтернет-платформа для місцевих продуктів харчування, де ми
              об`єднуємо виробників і споживачів. Тут вас чекають найсвіжіші та
              найсмачніші страви, вироблені нашими місцевими партнерами.
              Підтримуючи місцевих виробників, ми сприяємо розвитку нашої
              громади. Приєднуйтеся до нас, якщо ви цінуєте якість, унікальний
              смак та підтримку свого регіону. Ласкаво просимо в наш світ смаку
              та традицій!
            </p>
            <Image
              className="absolute top-[140px] right-0 md:hidden"
              src={map_phone}
              alt="map Ukraine"
            />
            <Image
              className="sm:max-md:hidden md:absolute top-[100px] right-0"
              src={map_tablet}
              alt="map Ukraine"
            />
            <Image
              className="absolute z-10 top-[150px] right-3 md:hidden"
              src={magnifier_phone}
              alt="magnifying lens"
            />
            <Image
              className="sm:max-md:hidden md:absolute z-10 top-[85px] right-[95px]"
              src={magnifier_tablet}
              alt="magnifying lens"
            />
          </div>
        </Container>
      </div>
    </Section>
  );
}
