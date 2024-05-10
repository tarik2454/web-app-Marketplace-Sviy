import Link from 'next/link';
import { ReactNode } from 'react';

export default function ButtonAllAds({
  children,
  pageLink = '/',
}: {
  children?: ReactNode;
  pageLink?: string;
}) {
  const smTopValue = children ? 'sm:top-[-70px]' : 'sm:top-[-68px]';
  const mdTopValue = children ? 'md:top-[-85px]' : 'md:top-[-79px]';
  const xlTopValue = children ? 'xl:top-[-139px]' : 'xl:top-[-129px]';

  return (
    <div
      className={`flex gap-3 xl:gap-5 items-center absolute z-0 ${smTopValue} ${mdTopValue} ${xlTopValue} right-0`}
    >
      {pageLink && (
        <Link
          href={pageLink}
          className="text-blue-700 text-sm md:text-xl leading-[22.4px] md:leading-8"
        >
          Всі оголошення
        </Link>
      )}
      {children}
    </div>
  );
}
