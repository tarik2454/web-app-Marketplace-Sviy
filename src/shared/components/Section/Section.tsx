import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return <section className="mb-[164px]">{children}</section>;
}
