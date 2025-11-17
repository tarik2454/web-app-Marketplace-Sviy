import { twMerge } from 'tailwind-merge';

type PageTitleProps = { name: string; stylesPageTitle?: string };

export default function PageTitle({ name, stylesPageTitle }: PageTitleProps) {
  return (
    <h1
      className={twMerge(
        `font-lora text-[32px] font-normal leading-[1.28] text-[#1f1f1f] xl:text-[41px] xl:leading-[1.26]`,
        stylesPageTitle
      )}
    >
      {name}
    </h1>
  );
}
