import Link from 'next/link';
import { SocialNetworks } from '../../../modules/footer';

export default function Contacts({
  stylesContactsWrapper,
  stylesContactsUl,
  stylesContactsLi,
}: {
  stylesContactsWrapper?: string;
  stylesContactsUl?: string;
  stylesContactsLi?: string;
}) {
  return (
    <div className={`${stylesContactsWrapper}`}>
      <div className={`flex gap-4 ${stylesContactsUl}`}>
        <div className={`md:col-start-1 md:col-end-2 ${stylesContactsLi}`}>
          <Link className="md:text-sm/[1.4] xl:text-xl" href="/about-us">
            Про нас
          </Link>
        </div>
        <div className={`md:col-start-1 md:col-end-2 ${stylesContactsLi}`}>
          <Link className="md:text-sm/[1.4] xl:text-xl" href="/delivery">
            Доставка та оплата
          </Link>
        </div>
        <div className={`md:col-start-2 md:col-end-3 ${stylesContactsLi}`}>
          <Link
            className="md:text-sm/[1.4] xl:text-xl"
            href="/questions-answers"
          >
            Питання та відповіді
          </Link>
        </div>
        <div className={`md:col-start-2 md:col-end-3 ${stylesContactsLi}`}>
          <Link className="md:text-sm/[1.4] xl:text-xl" href="/marketing">
            Реклама на сайті
          </Link>
        </div>
        <div className={`md:col-start-3 md:col-end-4 ${stylesContactsLi}`}>
          <Link className="md:text-sm/[1.4] xl:text-xl" href="/contacts">
            Контакти
          </Link>
        </div>
        <div className={`md:col-start-3 md:col-end-4 ${stylesContactsLi}`}>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
}
