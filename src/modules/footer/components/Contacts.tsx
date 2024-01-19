import Link from 'next/link';
import { SocialNetworks } from '.';

export default function Contacts() {
  return (
    <div className="flex flex-col  md:flex-row">
      <div className="flex flex-col md:mr-16 xl:w-72">
        <Link href="/" className="pb-4">
          Про нас
        </Link>
        <Link href="/" className="pb-4">
          Доставка
        </Link>
      </div>
      <div className="flex flex-col md:mr-16 xl:w-72">
        <Link href="/" className="pb-4">
          Питання та відповіді
        </Link>
        <Link href="/" className="pb-4">
          Реклама на сайті
        </Link>
      </div>
      <div className="flex flex-col xl:w-72">
        <Link href="/" className="pb-4 text-neutral-800">
          Контакти
        </Link>
        <SocialNetworks />
      </div>
    </div>
  );
}
