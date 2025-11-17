import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionTitle({
  name,
  className,
}: {
  name?: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={twMerge(
        `mb-10 font-lato text-[24px] font-normal leading-[38.4px] md:font-lora md:text-[32px] md:leading-normal xl:text-[40px] xl:mb-[88px]`,
        className
      )}
    >
      {name}
    </h2>
  );
}
