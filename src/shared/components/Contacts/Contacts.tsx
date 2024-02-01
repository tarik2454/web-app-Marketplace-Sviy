import Link from 'next/link';
import { SocialNetworks } from '../../../modules/footer';

export default function Contacts({
  stylesContacts,
}: {
  stylesContacts?: string;
}) {
  return (
    <div>
      <ul className={'flex' + ' ' + stylesContacts}>
        <li className="py-2.5">
          <Link href="#">Про нас</Link>
        </li>
        <li className="py-2.5">
          <Link href="#">Доставка</Link>
        </li>
        <li className="py-2.5">
          <Link href="#">Питання та відповіді</Link>
        </li>
        <li className="py-2.5">
          <Link href="#">Реклама на сайті</Link>
        </li>
        <li className="py-2.5">
          <Link href="#">Контакти</Link>
        </li>
      </ul>
      <SocialNetworks />
    </div>
  );
}
