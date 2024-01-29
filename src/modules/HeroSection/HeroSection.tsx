'use client';
import { ArrowButton, OrangeButton } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { BottomListItem, CommonRating, Ellipse, Response } from './components';
import Section from '@/shared/components/Section/Section';
import Image from 'next/image';
import bg_hero from '../../shared/img/heroSection/bg_photo.png';
import bg_hero_tablet from '../../shared/img/heroSection/bg_photo_tablet.png';
import av_alina from '../../shared/img/heroSection/response/alina.jpg';
import av_tamara from '../../shared/img/heroSection/response/tamara.jpg';
import av_matvij from '../../shared/img/heroSection/response/matvij.jpg';
import Container from '@/shared/components/Container/Container';

const HeroSection = () => {
  return (
    <Section className="pt-[113px]">
      <Container>
        <div className="relative h-auto pt-[132px] pb-[178px] xl:pt-[195px] xl:pb-[294px]">
          <Image
            className="absolute w-[314px] -z-[1] -right-4 top-[72px] md:hidden"
            src={bg_hero}
            alt="girl with products"
          />
          <Image
            className="hidden absolute -z-[1] -right-8 top-[76px] w-[492px] h-auto md:block xl:block xl:w-[767px] xl:right-0 xl:top-10"
            src={bg_hero_tablet}
            alt="girl with products"
          />
          <Response
            text="Надійні продавці поруч з домом"
            uName="Тамара"
            avatar={av_tamara}
            styleSetting="z-[3] top-[483px] right-0 md:top-[450px] md:flex xl:flex xl:top-[618px] xl:right-[167px]"
          />
          <Response
            text="Відмінна якість"
            uName="Аліна"
            avatar={av_alina}
            styleSetting="hidden z-[3] top-[417px] right-[223px] md:flex xl:flex xl:top-[443px] xl:right-0"
          />
          <Response
            text="Лояльні ціни"
            uName="Матвій"
            avatar={av_matvij}
            styleSetting="hidden top-[40px] right-0 -z-[3] md:flex xl:flex xl:top-[220px] xl:z-[0]"
            reverse={'xl:flex-row-reverse'}
          />
          <CommonRating />
          <div className="w-fit">
            <Ellipse settings="bg-[#89C0ED] w-2.5 h-2.5 top-[62px] left-[35px] md:max-xl:hidden xl:w-2 xl:h-2 xl:block xl:bg-[#FFCC80] xl:top-[123px] xl:left-[331px]" />
            <Ellipse settings="bg-[#D3DADF] w-3 h-3 top-[16px] left-[292px] md:max-xl:hidden xl:w-4 xl:h-4 xl:block xl:bg-[#FFCC80] xl:top-[96px] xl:left-[696px]" />
            <Ellipse settings="bg-[#D3DADF] w-3 h-3 top-[16px] left-[295px] md:bg-[#FFDE9D] md:w-3.5 md:h-3.5 md:top-[156px] md:left-[740px] xl:w-3 xl:h-3 xl:bg-[#FFCC80] xl:top-[24px] xl:left-[1095px]" />
            <Ellipse settings="bg-[#F9E9CA] w-4 h-4 top-[92px] left-[179px] opacity-60 md:max-xl:hidden xl:w-5 xl:h-5 xl:block xl:bg-[#BBDEFB] xl:top-[44px] xl:left-[1233px]" />
            <Ellipse settings="bg-[#F9E9CA] w-4 h-[16px] top-[557px] left-[165px] md:bg-[#FFDE9D] md:w-3.5 md:h-3.5 md:top-[44px] md:left-[50px] xl:w-5 xl:h-5 xl:bg-[#BBDEFB] xl:top-[316px] xl:left-[604px]" />
            <Ellipse settings="bg-[#98CFFC] w-2 h-2 top-[522px] left-[44px] md:w-2.5 md:h-2.5 md:top-[102px] md:left-[446px] xl:w-5 xl:h-5 xl:bg-[#BBDEFB] xl:top-[661px] xl:left-[37px]" />
            <Ellipse settings="bg-[#98CFFC] w-2 h-2 top-[522px] left-[47px] md:h-3.5 md:w-3.5 md:top-[24px] md:left-[676px] xl:w-2 xl:h-2 xl:bg-[#FFCC80] xl:top-[593px] xl:left-[217px]" />
            <Ellipse settings="hidden bg-[#FFCC80] w-5 h-5 top-[649px] right-[27px] xl:block" />
            <Ellipse settings="bg-[#BBDEFB] w-[368px] h-[368px] -top-[23px] -left-[143px] blur-[150px] -z-[2] md:w-[729px]  md:h-[729px]  md:-top-[434px]  md:-left-[304px] xl:w-[867px]  xl:h-[867px]  xl:-top-[389px]  xl:-left-[388px]" />
            <span className="block text-orange-200 w-[65px] h-[15px] absolute top-[72px] left-[169px] md:top-[83px] md:left-[318px] md:w-[105px] md:h-[25px] xl:w-[160px] xl:h-[40px] xl:top-[116px] xl:left-[453px]">
              <SpriteSVG name="h-arrow-top" />
            </span>
            <span className="block text-[#BBDEFB] w-[65px] h-[15px] absolute top-[497px] left-[107px] rotate-[15deg] md:w-[115px] md:h-[30px] md:top-[505px] md:left-[245px] md:rotate-[0deg] xl:w-[166px] xl:h-[55px] xl:top-[598px] xl:left-[358px]">
              <SpriteSVG name="h-arrow-bottom" />
            </span>
            <div className="px-3 py-4 rounded-[20px] w-[185px] bg-[#FFFFFF32] backdrop-blur-[3px] mb-8 md:w-[403px] md:bg-transparent md:backdrop-blur-[0px] md:p-0 md:mb-10 xl:w-[634px] xl:mb-14">
              <h1 className="text-[#103756] font-lora text-[40px] font-semibold md:text-[56px] md:mb-8 xl:text-[88px]">
                Купуй місцеве
              </h1>
              <p className="text-[#010031] text-[14px] font-lora font-normal md:w-[343px] md:text-[24px] xl:w-[100%]">
                Українська продукція від господинь у Львові
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 xl:flex-row xl:gap-6">
              <OrangeButton onClick={() => {}}>Обрати товар</OrangeButton>
              <ArrowButton onClick={() => {}}>Продати товар</ArrowButton>
            </div>
          </div>
        </div>
        <ul className="flex gap-4 font-normal leading-[160%]">
          <BottomListItem
            icon={<SpriteSVG name="ears_of_corn" />}
            title="Українськи вироби"
            text="Тут вас чекають найсвіжіші та найсмачніші страви, вироблені
                нашими місцевими майстрами."
          />
          <BottomListItem
            icon={<SpriteSVG name="notebook" />}
            title="Широкий вибір"
            text="Ми пишаємося широким вибором страв, які представлені місцевими
                виробниками."
          />
        </ul>
      </Container>
    </Section>
  );
};

export default HeroSection;
