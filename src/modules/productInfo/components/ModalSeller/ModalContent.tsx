import ScreenSize from '@/shared/hooks/useMediaQuery';
import Image from 'next/image';
import { SpriteSVG } from '../../img/SpriteSVG';
import Link from 'next/link';

export default function ModalContent({
  name,
  photo,
  activated,
  location,
  email,
  phone,
}: any) {
  const { isOnMobile } = ScreenSize();

  return (
    <div className="">
      <p className="mb-6 md:mb-10 pb-2 border-b-[1px] border-gray-600">
        Контакти продавця
      </p>

      <div className="flex gap-6 mb-6 md:mb-10">
        {isOnMobile ? (
          <div className="w-[59px] h-[59px]">
            <Image
              className="rounded-circle overflow-hidden h-[100%]"
              src={photo}
              width={0}
              height={0}
              alt={name}
            />
          </div>
        ) : null}

        <div>
          <p className="mb-2 md:mb-[10px] text-xl text-[#1f1f1f]">{name}</p>
          <div className="text-xs leading-[1.4] text-blue-90">
            {activated} роки на Свiй
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-2 mb-4 md:mb-5">
        <li className="flex items-center gap-2 text-[#1f1f1f]">
          <SpriteSVG name={'location'} />
          {location}
        </li>
        <li className="flex items-center gap-2 text-[#1f1f1f]">
          <SpriteSVG name={'email'} />
          {email}
        </li>
        <li className="flex items-center gap-2 text-[#1f1f1f]">
          <SpriteSVG name="phone" />
          {phone}
        </li>
      </ul>

      <div className="flex gap-6">
        <Link href={'#'}>
          <SpriteSVG name={'telegram'} />
        </Link>
        <Link href={'#'}>
          <SpriteSVG name={'viber'} />
        </Link>
      </div>
    </div>
  );
}
