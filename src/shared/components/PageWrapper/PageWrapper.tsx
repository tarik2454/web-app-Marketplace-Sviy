import { ReactNode } from "react";

export default function PageWrapper ({ children }: { children: ReactNode }) {
  return (
    <div className="pt-[97px] pb-20 md:pt-[113px] md:pb-[104px] xl:pb-[164px]">
      {children}
    </div>
  )
}