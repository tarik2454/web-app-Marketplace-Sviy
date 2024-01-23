type Props = {
  cssSettings?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any) => any;
};

const TransparentButton = ({
  type = 'button',
  cssSettings,
  children,
  onClick,
}: Props) => {
  return (
    <button
      className={
        'text-general px-[18px] py-3 flex gap-3 rounded-full group/trBtn  hover:bg-blue-200 active:bg-blue-700 active:text-white transition-all' +
        ' ' +
        cssSettings
      }
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
