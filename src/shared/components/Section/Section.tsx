import { ReactNode } from 'react';

export default function Section(
  { children, className = "pt-20 md:pt-[104px] xl:pt-[164px]" }: { children: ReactNode, className?: string }) {
  return <section className={className}>{children}</section>;
}
