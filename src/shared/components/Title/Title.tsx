import { ReactNode } from 'react';

export default function Title({ name }: { name: ReactNode }) {
  return <h2 className="mb-[88px]">{name}</h2>;
}
