import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const BottomListItem = ({ icon, title, text }: Props) => {
  return (
    <li className="flex flex-col justify-center items-center gap-4 px-3 py-[10px] rounded-default bg-white shadow-[2px_2px_12px_0px_rgba(186, 186, 186, 0.12)] md:py-6 md:px-[76px] xl:flex-row xl:gap-6 xl:py-8">
      <div className="w-10 h-10 md:min-w-[72px] md:min-h-[72px] md:mb-4 xl:mb-0">
        {icon}
      </div>
      <div className="flex gap-4 flex-col xl:gap-5">
        <h3 className="text-center xl:text-start xl:text-[20px]">{title}</h3>
        <p className="text-center text-[14px] md:text-[12px] xl:text-start xl:text-[16px]">
          {text}
        </p>
      </div>
    </li>
  );
};

export default BottomListItem;
