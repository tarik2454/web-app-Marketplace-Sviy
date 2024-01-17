import Link from 'next/link';
import { SocialNetworks } from '.';

export default function Contacts() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col">
        <Link href="/" className="pb-4">
          Про нас
        </Link>
        <Link href="/" className="pb-4">
          Доставка
        </Link>
      </div>

      <div className="flex flex-col">
        <Link href="/" className="pb-4">
          Питання та відповіді
        </Link>
        <Link href="/" className="pb-4">
          Реклама на сайті
        </Link>
      </div>
      <div className="flex flex-col">
        <Link href="/" className="pb-4">
          Контакти
        </Link>
        <SocialNetworks />
      </div>
    </div>
  );
}
