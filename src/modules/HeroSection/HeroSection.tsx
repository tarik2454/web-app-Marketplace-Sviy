import { ColorButton, TransparentButton } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Ellipse, Response } from './components';
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
    <Section>
      <Container>
        <div className="relative pt-[132px] pb-[178px]">
          <Image
            className="absolute -z-[1] -right-4 top-[72px] md:hidden"
            src={bg_hero}
            alt="girl with products"
            width={314}
            height={422}
          />
          <Image
            className=" sm:max-md:hidden md:max-xl:absolute -z-[1] -right-8 top-[76px] "
            src={bg_hero_tablet}
            alt="girl with products"
            width={492}
            height={429}
          />
          <Response
            text="Надійні продавці поруч з домом"
            uName="Тамара"
            avatar={av_tamara}
            styleSetting="top-[483px] right-0 md:top-[450px]"
          />
          <Response
            text="Відмінна якість"
            uName="Аліна"
            avatar={av_alina}
            styleSetting="sm:max-md:hidden md:top-[417px]  md:right-[223px]"
          />
          <Response
            text="Лояльні ціни"
            uName="Матвій"
            avatar={av_matvij}
            styleSetting="sm:max-md:hidden md:top-[50px]  md:right-0 -z-[3]"
          />
          <div className="w-fit">
            <Ellipse settings="bg-[#89C0ED] w-2.5 h-2.5 top-[62px] left-[35px]" />
            <Ellipse settings="bg-[#D3DADF] w-3 h-3 top-[16px] left-[292px]" />
            <Ellipse settings="bg-[#D3DADF] w-3 h-3 top-[16px] left-[295px]" />
            <Ellipse settings="bg-[#F9E9CA] w-4 h-4 top-[92px] left-[179px] opacity-60" />
            <Ellipse settings="bg-[#F9E9CA] w-4 h-[16px] top-[557px] left-[165px]" />
            <Ellipse settings="bg-[#98CFFC] w-2 h-2 top-[522px] left-[44px]" />
            <Ellipse settings="bg-[#98CFFC] w-2 h-2 top-[522px] left-[47px]" />
            <Ellipse settings="bg-[#BBDEFB] w-[368px] h-[368px] -top-[23px] -left-[143px] blur-[150px] -z-[2] md:w-[729px] h-[729px] -top-[434px] -left-[304px]" />
            <span
              className="block text-orange-200 w-[65px] h-[15px] absolute top-[72px] left-[169px] 
            md:top-[83px] md:left-[318px] md:w-[105px] md:h-[25px]"
            >
              <SpriteSVG name="h-arrow-top" />
            </span>
            <span className="block text-[#BBDEFB] w-[65px] h-[15px] absolute top-[497px] left-[107px] rotate-[15deg] md:w-[115px] md:h-[30px] md:top-[505px] md:left-[245px] md:rotate-[0deg]">
              <SpriteSVG name="h-arrow-bottom" />
            </span>
            <div className="px-3 py-4 rounded-[20px] w-[185px] bg-[#FFFFFF32] backdrop-blur-[3px] mb-8 md:w-[403px] md:bg-transparent md:backdrop-blur-[0px] md:p-0 md:mb-10">
              <h1 className="text-[#103756] font-lora text-[40px] font-semibold md:text-[56px] md:mb-8">
                Купуй місцеве
              </h1>
              <p className="text-[#010031] text-[14px] font-lora font-normal md:w-[343px] md:text-[24px]">
                Українська продукція
                <br />
                від господинь у Львові
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
        <ul className="flex gap-4 font-normal leading-[160%]">
          <li className="flex flex-col justify-center items-center gap-4 px-3 py-[10px] rounded-default bg-neutral-50 shadow-[2px_2px_12px_0px_rgba(92, 92, 92, 0.12)] md:py-6 md:px-[76px]">
            <div className="w-10 h-10 md:w-[72px] md:h-[72px] md:mb-4">
              <SpriteSVG name="ears_of_corn" />
            </div>
            <h3 className="text-center">Українськи вироби</h3>
            <p className="text-center text-[14px] md:text-[12px">
              Тут вас чекають найсвіжіші та найсмачніші страви, вироблені нашими
              місцевими майстрами
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4 px-3 py-[10px] rounded-default bg-neutral-50 shadow-[2px_2px_12px_0px_rgba(92, 92, 92, 0.12)]  md:py-6 md:px-[76px]">
            <div className="w-10 h-10 md:w-[72px] md:h-[72px]  md:mb-4">
              <SpriteSVG name="notebook" />
            </div>
            <h3 className="text-center">Широкий вибір</h3>
            <p className="text-center text-[14px] md:text-[12px]">
              Ми пишаємося широким вибором страв, які представлені місцевими
              виробниками.
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default HeroSection;
