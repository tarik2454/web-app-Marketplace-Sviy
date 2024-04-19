import { ArrowButton } from '@/shared/components';
import React from 'react';

type Question = {
  id: number;
  question: string;
  isOpen: boolean;
  text: string;
};

type Props = {
  question: Question;
  toggleQuestion: (id: number) => void;
};
export default function QuestionsAnswersItem({
  question,
  toggleQuestion,
}: Props): JSX.Element {
  const { id, question: questionText, isOpen, text } = question;

  return (
    <li className="max-w-[1062px] bg-white pl-4 rounded-[20px] group group-hover:rotate-[50deg]  hover:bg-blue-200 active:bg-blue-700 active:text-white">
      <div className="flex justify-between">
        <h3 className="text-neutral-800 flex items-center md:text-xl">
          {questionText}
        </h3>
        <ArrowButton
          svgCssSettings="w-[52px] h-[52px] xl:w-[52px] xl:h-[52px]"
          cssSettings="py-[6px] pr-4"
          onClick={() => toggleQuestion(id)}
        />
      </div>
      <p
        className={`${
          isOpen ? 'block' : 'hidden'
        } max-w-[260px] md:max-w-[620px] xl:max-w-[938px] mb-5`}
      >
        {text}
      </p>
    </li>
  );
}
