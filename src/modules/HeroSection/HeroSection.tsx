import { ColorButton, TransparentButton } from '@/shared/components';

const HeroSection = () => {
  return (
    <div>
      <h1>Купуй місцеве</h1>
      <p>Українська продукція від господинь у Львові</p>
      <div className="flex flex-col items-start gap-5">
        <ColorButton>Обрати товар</ColorButton>
        <TransparentButton>Стати продавцем</TransparentButton>
      </div>
    </div>
  );
};

export default HeroSection;
