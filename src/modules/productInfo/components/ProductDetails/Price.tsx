import { twMerge } from 'tailwind-merge';

export default function Price({
  price,
  stylesWrapper,
}: {
  price: number;
  stylesWrapper: string;
}) {
  return (
    <div
      className={twMerge(
        `font-lora md:font-lato xl:font-lora text-[32px] md:text-2xl xl:text-[32px] leading-[41px] md:leading-[1.6] xl:leading-[41px] text-blue-900`,
        stylesWrapper
      )}
    >
      {price} грн
      <span className="mr-1 ml-2 font-lato text-[22px] md:text-xl xl:text-[22px] leading-[1.6] text-gray-600">
        /
      </span>
      <span className="font-lato text-xl text-gray-600">шт</span>
    </div>
  );
}
