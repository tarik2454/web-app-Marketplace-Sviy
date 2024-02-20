'use client';
import { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';

export default function EmailConfirmation({ email = 'g***@gmail.com' }) {
  return (
    <>
      <h2 className="text-center text-blue-700 text-xl font-normal font-['Lato'] leading-loose pb-6">
        Перевірте ваш email
      </h2>
      <div className="flex justify-center pb-10">
        <span className="text-center text-neutral-800 text-base font-normal font-['Lato'] leading-relaxed text-nowrap">
          перейдіть за посиланням, яке ми вам <br />
          вислали на адресу{' '}
          <span className="text-blue-700 text-base font-normal font-['Lato'] leading-relaxed">
            {email}
          </span>
        </span>
      </div>
      <div className="flex justify-center">
        <Link href="/recover-password">
          <ArrowButton onClick={() => {}}>
            <span className="text-nowrap">Встановити новий пароль</span>
          </ArrowButton>
        </Link>
      </div>
    </>
  );
}
