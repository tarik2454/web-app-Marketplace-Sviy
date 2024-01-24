import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Link from 'next/link';

export default function SocialNetworks() {
  return (
    <div className="justify-start items-start gap-6 inline-flex">
      <Link href="/">
        <SpriteSVG name="instagram" />
      </Link>
      <Link href="/">
        <SpriteSVG name="facebook" />
      </Link>
    </div>
  );
}
