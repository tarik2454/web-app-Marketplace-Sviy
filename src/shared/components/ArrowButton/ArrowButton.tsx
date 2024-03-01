import { SpriteSVG } from '@/shared/img/SpriteSVG';

type Props = {
  cssSettings?: string;
  svgCssSettings?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any) => any;
};

const ArrowButton = ({
  type = 'button',
  cssSettings,
  svgCssSettings,
  children,
  onClick,
}: Props) => {
  return (
    <button
      className={`'text-general px-[18px] py-3 flex gap-3 rounded-full group hover:bg-blue-200 active:bg-blue-700 active:text-white transition-all' ${cssSettings}`}
      type={type}
      onClick={onClick}
    >
      {children}
      <span
        className={`flex justify-center items-center text-white bg-blue-700 rounded-[100%] w-7 h-7 group-hover:rotate-[50deg] group-active:bg-white group-active:text-blue-700 transition-all xl:w-[34px] xl:h-[34px] 
        ${svgCssSettings ? svgCssSettings : ''}`}
      >
        <SpriteSVG name="arrow-right" />
      </span>
    </button>
  );
};

export default ArrowButton;
