'use client';
type Props = {
  cssSettings?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any[]) => any;
};

const BlueBorderButton = ({
                        children,
                        cssSettings,
                        type = 'button',
                        onClick,
                      }: Props) => {
  return (
    <button
      type={type}
      className={
        `flex justify-center items-center text-blue-900 border-solid border-2 border-blue-900 px-[32px] py-[10px] rounded-[20px] md:py-3 md:tex-[16px] md:leading-[1.6] xl:py-[16px] hover:bg-blue-900 hover:text-white active:bg-blue-900 transition-all ${cssSettings}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlueBorderButton;
