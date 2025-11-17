'use client';
type Props = {
  cssSettings?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any[]) => any;
  smallButton?: boolean;
};

const BlueBorderButton = ({
  children,
  cssSettings,
  type = 'button',
  onClick,
  smallButton,
}: Props) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center text-blue-900 border-solid border-2 border-blue-900 px-[15px] md:px-[32px] text-sm md:text-base rounded-[20px] md:py-3 md:leading-[1.6] hover:bg-blue-900 hover:text-white active:bg-blue-900 transition-all ${cssSettings} ${
        smallButton
          ? 'py-[8px] xl:py-[7px] md:py-1'
          : 'md:py-2 py-[10px] xl:py-[16px]'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlueBorderButton;
