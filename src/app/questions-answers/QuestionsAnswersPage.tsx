import { Container, Section } from '@/shared/components';
import React from 'react';
import QuestionsAnswersItem from './QuestionsAnswersItem';

export default function QuestionsAnswersPage() {
  return (
    <Section className="pt-11 pb-16 md:pt-[38px] md:pb-[104px] xl:pt-[98px] xl:pb-[164px]">
      <Container>
        <div>
          <h2 className="text-xl mb-8 md:text-[32px] md:mb-16 xl:text-[40px]">
            Питання і відповіді
          </h2>
        </div>
        <ul className="flex flex-col gap-4 md:gap-5 xl:pl-[109px]">
          <QuestionsAnswersItem />
          <QuestionsAnswersItem />
          <QuestionsAnswersItem />
          <QuestionsAnswersItem />
        </ul>
      </Container>
    </Section>
  );
}
