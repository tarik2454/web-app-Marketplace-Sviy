type Props = {
  cssSettings?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any[]) => any;
};

const ColorButton = ({
  children,
  cssSettings,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <button
      className={
        'flex justify-center items-center px-[32px] py-[10px] bg-gradient-94deg text-white text-14x1 font-medium bg-gradient-to-r from-yellow-600 via-orange-300 to-orange-300 rounded-[20px] shadow md:py-3 md:tex-[16px] md:leading-[1.6] xl:py-[16px]' +
        ' ' +
        cssSettings
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ColorButton;
