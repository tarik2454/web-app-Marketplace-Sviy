'use client';

import { twMerge } from 'tailwind-merge';

type Props = {
  cssSettings?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (...args: any[]) => any;
  disabled?: boolean;
};

const OrangeButton = ({
  children,
  cssSettings,
  type = 'button',
  onClick,
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      className={twMerge(
        `flex justify-center items-center px-[32px] py-[10px] text-white text-14x1 font-medium rounded-[20px] shadow md:py-3 md:tex-[16px] md:leading-[1.6] xl:py-[16px] transition-all`,
        disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-gradient-to-r from-amber-500 to-orange-300 hover:from-amber-500 hover:to-amber-500 active:from-orange-300 active:to-orange-300',
        cssSettings
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OrangeButton;
