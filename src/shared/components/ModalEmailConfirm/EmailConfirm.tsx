'use client';
import { MouseEventHandler } from 'react';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';

type Props = {
  email: string;
  emailConfirmType?: string;
  recoverPassClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function EmailConfirmation({
  email,
  emailConfirmType,
  recoverPassClick,
}: Props) {
  return (
    <>
      <h2 className="text-center text-blue-700 text-xl font-normal font-['Lato'] leading-loose pb-6 md:text-2xl">
        Перевірте ваш email
      </h2>
      <div className="flex justify-center pb-10">
        <span className="text-center text-neutral-800 text-base font-normal font-['Lato'] leading-relaxed text-nowrap xl:text-xl">
          перейдіть за посиланням, яке ми вам <br />
          вислали на адресу&nbsp;
          <span className="text-blue-700 text-base font-normal font-['Lato'] leading-relaxed">
            {email}
          </span>
        </span>
      </div>
      <div className="flex justify-center">
        {emailConfirmType === 'page' ? (
          <Link href="/recover-password">
            <ArrowButton onClick={() => {}}>
              <span className="text-nowrap">Встановити новий пароль</span>
            </ArrowButton>
          </Link>
        ) : (
          <ArrowButton onClick={recoverPassClick}>
            <span className="text-nowrap">Встановити новий пароль</span>
          </ArrowButton>
        )}
      </div>
    </>
  );
}
