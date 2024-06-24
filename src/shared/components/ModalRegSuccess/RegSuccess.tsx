'use client';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/auth/authSlice';

// import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function RegIsSuccesful() {
  const { full_name } = useSelector(selectAuth);

  return (
    <>
      <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose md:text-2xl">
        Реєстрація {full_name} пройшла успішно
      </h2>
      <div className=" flex justify-center py-10">
        <SpriteSVG name="check-mark" className="fill-blue-700" />
      </div>
      <div className="flex justify-center items-start gap-3 ">
        <div className="text-white">
          <Link href="/signin">
            <OrangeButton onClick={() => {}}>
              <span className="text-nowrap">До сторінки авторизації</span>
            </OrangeButton>
          </Link>
        </div>

        {/* <Link href="/">
          <ArrowButton onClick={() => {}}>
            <span className="text-nowrap">До профілю</span>
          </ArrowButton>
        </Link> */}
      </div>
    </>
  );
}
