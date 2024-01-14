import Link from 'next/link';

export default function About() {
  return (
    <div className="grid">
      <Link href="/">Про нас</Link>
      <Link href="/">Доставка</Link>
      <Link href="/">Питання та відповіді</Link>
      <Link href="/">Реклама на сайті</Link>
      <Link href="/">Контакти</Link>
    </div>
  );
}
