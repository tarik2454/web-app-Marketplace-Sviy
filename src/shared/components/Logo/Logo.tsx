import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import logo_header_mobile from '../../img/logo/logo_header_mobile.png';
import logo_footer_mobile from '../../img/logo/logo_footer_mobile.png';
import logo_tablet from '../../img/logo/logo_tablet.png';
import logo_footer_desktop from '../../img/logo/logo_footer_desktop.png';
import logo_header_desktop from '../../img/logo/logo_header_desktop.png';

type LogoProps = {
  logo:
    | 'logoHeaderMobile'
    | 'logoFooterMobile'
    | 'logoTablet'
    | 'logoHeaderDesktop'
    | 'logoFooterDesktop';
};

export default function Logo({ logo }: LogoProps) {
  let src: StaticImageData | undefined;

  switch (logo) {
    case 'logoHeaderMobile':
      src = logo_header_mobile;
      break;
    case 'logoFooterMobile':
      src = logo_footer_mobile;
      break;
    case 'logoTablet':
      src = logo_tablet;
      break;
    case 'logoFooterDesktop':
      src = logo_footer_desktop;
      break;
    case 'logoHeaderDesktop':
      src = logo_header_desktop;
      break;
    default:
      src = undefined;
      break;
  }

  return (
    <Link href="/">
      {src && <Image src={src} width={0} height={0} alt="Logo" />}
    </Link>
  );
}
