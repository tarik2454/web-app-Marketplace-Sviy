import { ColorButton, TransparentButton } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Ellipse, Response } from './components';
import Section from '@/shared/components/Section/Section';
import Image from 'next/image';
import bg_hero from '../../shared/img/heroSection/bg_photo.png';
import av_tamara from '../../shared/img/heroSection/response/tamara.jpg';

const HeroSection = () => {
  return (
    <Section>
      <div className="relative pt-[132px]">
        <Image
          className="absolute -z-[1] right-0 top-[72px]"
          src={bg_hero}
          alt="girl with products"
          width={314}
          height={422}
        />
        <Response
          text="Надійні продавці поруч з домом"
          uName="Тамара"
          avatar={av_tamara}
          styleSetting="top-[483px] right-[16px]"
        />
        <div className="w-fit">
          <Ellipse settings="bg-[#89C0ED] w-2.5 h-2.5 top-[62px] left-[35px]" />
          <Ellipse settings="bg-[#D3DADF] w-3 h-3 top-[16px] left-[292px]" />
          <Ellipse settings="bg-[#D3DADF] w-3 h-3 top-[16px] left-[295px]" />
          <Ellipse settings="bg-[#F9E9CA] w-4 h-4 top-[92px] left-[179px] opacity-60" />
          <Ellipse settings="bg-[#F9E9CA] w-4 h-[16px] top-[557px] left-[165px]" />
          <Ellipse settings="bg-[#98CFFC] w-2 h-2 top-[522px] left-[44px]" />
          <Ellipse settings="bg-[#98CFFC] w-2 h-2 top-[522px] left-[47px]" />
          <Ellipse settings="bg-[#96CBF6] w-[368px] h-[368px] -top-[23px] -left-[143px] blur-[150px] -z-[2]" />
          <span className="absolute top-[72px] left-[169px]">
            <SpriteSVG name="h-arrow-top" />
          </span>
          <span className="absolute top-[497px] left-[107px] rotate-[15deg]">
            <SpriteSVG name="h-arrow-bottom" />
          </span>
          <div className="px-3 py-4 rounded-[20px] w-[185px] bg-[#FFFFFF32] backdrop-blur-[3px] mb-8">
            <h1 className="text-[#103756] text-[40px] font-semibold">
              Купуй місцеве
            </h1>
            <p className="text-[#010031] text-[14px] font-normal">
              Українська продукція від господинь у Львові
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <ColorButton>Обрати товар</ColorButton>
            <TransparentButton>
              Стати продавцем
              <span className="flex justify-center items-center text-white bg-slate-500 rounded-[100%] w-7 h-7 group-hover/trBtn:rotate-[28deg]">
                <SpriteSVG name="arrow-right" />
              </span>
            </TransparentButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
