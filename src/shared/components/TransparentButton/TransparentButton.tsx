type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any) => any;
};

const TransparentButton = ({ type = 'button', children, onClick }: Props) => {
  return (
    <button
      className="border text-general px-[18px] py-3 flex gap-3 rounded-full action-tr-btn"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
