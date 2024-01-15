import Link from 'next/link';

export default function Contacts() {
  return (
    <div className="grid">
      <Link href="/" className="pb-4">
        Про нас
      </Link>
      <Link href="/" className="pb-4">
        Доставка
      </Link>
      <Link href="/" className="pb-4">
        Питання та відповіді
      </Link>
      <Link href="/" className="pb-4">
        Реклама на сайті
      </Link>
      <Link href="/" className="pb-4">
        Контакти
      </Link>
    </div>
  );
}
