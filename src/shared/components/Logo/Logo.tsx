import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../shared/img/logo/logo.png';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image src={logo} sizes="100vw" width={130} height={45} alt="Logo" />
    </Link>
  );
}
