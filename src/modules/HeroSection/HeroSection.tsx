import { ColorButton, TransparentButton } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Ellipse } from './components';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="w-fit">
        <Ellipse settings="bg-[#89C0ED] w-[10px] h-[10px] top-[62px] left-[35px]" />
        <Ellipse settings="bg-[#D3DADF] w-[12px] h-[12px] top-[16px] left-[292px]" />
        <Ellipse settings="bg-[#D3DADF] w-[12px] h-[12px] top-[16px] left-[295px]" />
        <Ellipse settings="bg-[#F9E9CA] w-[16px] h-[16px] top-[92px] left-[179px] opacity-60" />
        <Ellipse settings="bg-[#F9E9CA] w-[16px] h-[16px] top-[557px] left-[165px]" />
        <Ellipse settings="bg-[#98CFFC] w-[8px] h-[8px] top-[522px] left-[44px]" />
        <Ellipse settings="bg-[#98CFFC] w-[8px] h-[8px] top-[522px] left-[47px]" />
        <Ellipse settings="bg-[#96CBF6] w-[368px] h-[368px] -top-[23px] -left-[143px] blur-[150px] -z-[1]" />
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
            <span className="flex justify-center items-center text-white bg-slate-500 rounded-[100%] w-7 h-7">
              <SpriteSVG name="arrow-right" />
            </span>
          </TransparentButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
