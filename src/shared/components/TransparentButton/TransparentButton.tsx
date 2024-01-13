type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any) => any;
};

const TransparentButton = ({ type = 'button', children, onClick }: Props) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default TransparentButton;
