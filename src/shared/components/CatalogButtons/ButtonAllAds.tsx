import { ReactNode } from 'react';

export default function ButtonAllAds({ children }: { children?: ReactNode }) {
  return (
    <div className="flex gap-3 xl:gap-5 items-center absolute top-[-70px] md:top-[-85px] xl:top-[-139px]  right-0">
      <button className="text-blue-700 text-sm md:text-xl leading-[22.4px] md:leading-8">
        Всі оголошення
      </button>
      {children}
    </div>
  );
}
