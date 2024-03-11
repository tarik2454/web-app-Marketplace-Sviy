'use client';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function RegIsSuccesful() {
  return (
    <>
      <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose md:text-2xl">
        Реєстрація пройшла успішно
      </h2>
      <div className=" flex justify-center py-10">
        <SpriteSVG name="check-mark" />
      </div>
      <div className="flex justify-center items-start gap-3 ">
        <div className="text-white">
          <Link href="/">
            <OrangeButton onClick={() => {}}>
              <span className="text-nowrap">До каталогу</span>
            </OrangeButton>
          </Link>
        </div>

        <Link href="/">
          <ArrowButton onClick={() => {}}>
            <span className="text-nowrap">До профілю</span>
          </ArrowButton>
        </Link>
      </div>
    </>
  );
}
