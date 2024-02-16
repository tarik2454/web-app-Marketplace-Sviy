'use client';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';

export default function PasswordChanged() {
  return (
    <div>
      <h2 className="text-center text-blue-700 text-2xl font-normal font-['Lato'] leading-[38.40px] pb-6">
        Ваш пароль змінено
      </h2>
      <div className="text-center pb-10">
        <span className="text-nowrap">
          Використовуйте новий пароль для входу
        </span>
      </div>
      <div className="flex justify-center">
        <Link href="/signin">
          <ArrowButton onClick={() => {}}>
            <span>Увійти</span>
          </ArrowButton>
        </Link>
      </div>
    </div>
  );
}
