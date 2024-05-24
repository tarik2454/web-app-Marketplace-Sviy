import { Container, PageTitle, Section } from '@/shared/components';
import React from 'react';

export default function AboutInfo() {
  return (
    <Section className="pb-20 pt-8 md:pb-[104px] md:pt-16 xl:pb-[164px] xl:pt-[88px]">
      <PageTitle stylesPageTitle={'visually hidden'} name={'Про нас'} />
      <Container>
        <p className="mb-6 md:mb-0 md:text-xl xl:mb-6">
          <span className="text-blue-700">Свій</span> — інноваційний торговий
          майданчик, де можна продавати і купувати продукти місцевих виробників.
        </p>
        <p className="md:text-xl md:mb-6">
          <span className="text-blue-700">Ми</span> — команда ентузіастів, які
          вірять у силу спільноти та підтримку місцевих виробників.
        </p>
        <p className="md:text-xl md:mb-5">
          <span className="text-blue-700">Наш маркетплейс</span> — це
          інтернет-платформа для місцевих продуктів харчування, де ми
          об&apos;єднуємо виробників і споживачів. Тут вас чекають найсвіжіші та
          найсмачніші страви, вироблені нашими місцевими партнерами і вони
          роблять свою продукцію доступною для вас. Підтримуючи місцевих
          виробників, ми сприяємо розвитку нашої громади. Приєднуйтеся до нас,
          якщо ви цінуєте якість, унікальний смак та підтримку свого регіону.
        </p>
        <p className="md:text-xl md:mb-6">
          Ласкаво просимо в наш світ смаку та традицій!
        </p>
        <p className="md:text-xl">
          {' '}
          <span className="text-blue-700">Ми віримо</span>, що розширення
          можливостей місцевих виробників, кооперативів і некомерційних
          організацій, за допомогою відповідних технологій, допоможе створити
          сильні та різноманітні місцеві продовольчі системи, від яких отримають
          вигоду продовольчі центри, виробники, покупці та споживачі.
        </p>
      </Container>
    </Section>
  );
}
