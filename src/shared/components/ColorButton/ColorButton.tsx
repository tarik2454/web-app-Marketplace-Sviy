type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any[]) => any;
};

const ColorButton = ({ children, type = 'button', onClick }: Props) => {
  return (
    <button
      className="flex justify-center items-center px-[45px] py-[10px] rounded-full bg-gradient-94deg text-white text-14x1 font-medium bg-gradient-to-r from-yellow-600 via-orange-300 to-orange-300 rounded-[20px] shadow md:py-3 md:tex-[16px] md:leading-[1.6]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ColorButton;
