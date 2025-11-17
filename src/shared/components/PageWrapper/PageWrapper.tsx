import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="pt-[81px] md:pt-[113px]">{children}</div>;
}
