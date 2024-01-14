import { ReactNode } from 'react';

export default function SectionTitle({ name }: { name?: ReactNode }) {
  return (
    <h2 className=" mb-10 font-lato text-[24px] font-normal leading-[38.4px] md:font-lora md:text-[32px] md:leading-normal xl:text-[40px] xl:mb-[88px]">
      {name}
    </h2>
  );
}
