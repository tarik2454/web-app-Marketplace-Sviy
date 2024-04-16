import Link from 'next/link';
import { SocialNetworks } from '../../../modules/footer';
import { Dispatch, SetStateAction } from 'react';

export default function Contacts({
  setDisplayMenu,
  stylesContactsWrapper,
  stylesContactsUl,
  stylesContactsLi,
}: {
  setDisplayMenu?: Dispatch<SetStateAction<string>>;
  stylesContactsWrapper?: string;
  stylesContactsUl?: string;
  stylesContactsLi?: string;
}) {
  const handleSetDisplayMenu = () => {
    if (setDisplayMenu) {
      setDisplayMenu('hidden');
    }
  };

  return (
    <div className={`${stylesContactsWrapper}`}>
      <div className={`flex gap-4 ${stylesContactsUl}`}>
        <div className={`md:col-start-1 md:col-end-2 ${stylesContactsLi}`}>
          <Link
            className="md:text-sm/[1.4] xl:text-xl"
            href="/about-us"
            onClick={handleSetDisplayMenu}
          >
            Про нас
          </Link>
        </div>
        <div className={`md:col-start-1 md:col-end-2 ${stylesContactsLi}`}>
          <Link
            className="md:text-sm/[1.4] xl:text-xl"
            href="/delivery"
            onClick={handleSetDisplayMenu}
          >
            Доставка та оплата
          </Link>
        </div>
        <div className={`md:col-start-2 md:col-end-3 ${stylesContactsLi}`}>
          <Link
            className="md:text-sm/[1.4] xl:text-xl"
            href="/questions-answers"
            onClick={handleSetDisplayMenu}
          >
            Питання та відповіді
          </Link>
        </div>
        <div className={`md:col-start-2 md:col-end-3 ${stylesContactsLi}`}>
          <Link
            className="md:text-sm/[1.4] xl:text-xl"
            href="/marketing"
            onClick={handleSetDisplayMenu}
          >
            Реклама на сайті
          </Link>
        </div>
        <div className={`md:col-start-3 md:col-end-4 ${stylesContactsLi}`}>
          <Link
            className="md:text-sm/[1.4] xl:text-xl"
            href="/contacts"
            onClick={handleSetDisplayMenu}
          >
            Контакти
          </Link>
        </div>
        <div
          className={`md:col-start-3 md:col-end-4 ${stylesContactsLi}`}
          onClick={handleSetDisplayMenu}
        >
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
}
