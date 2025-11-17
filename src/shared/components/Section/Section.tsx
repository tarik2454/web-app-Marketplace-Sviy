import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={twMerge(`pt-20 md:pt-[104px] xl:pt-[164px]`, className)}
    >
      {children}
    </section>
  );
}
