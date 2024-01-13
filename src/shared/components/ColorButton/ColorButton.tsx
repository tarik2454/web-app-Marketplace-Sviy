type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any) => any;
};

const ColorButton = ({ children, type = 'button', onClick }: Props) => {
  return (
    <button
      className="flex justify-center items-center px-[45px] py-[18px] rounded-full bg-gradient-94deg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ColorButton;
//   bg-gradient-to-[94deg] from-yellow-500 from-5% via-orange-500 via-55% to-orange-600 to-95%
