'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { logoutThunk } from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';

type PropsSidebar = {
  [key: string]: ReactNode;
  activeProfile?: string;
  activeOrders?: string;
  activeAds?: string;
  activeSale?: string;
  activeFavorite?: string;
  activeFeedback?: string;
};

const liClass =
  'flex gap-5 py-4 px-4 text-xl cursor-pointer items-center group-[.active]:bg-blue-200 group-[.active]:text-blue-700 hover:bg-blue-200 hover:text-blue-700';

export default function PersonalDynamicSidebar({
  childProfile,
  childOrders,
  childAds,
  childSale,
  childFavorite,
  childFeedback,
  activeProfile,
  activeOrders,
  activeAds,
  activeSale,
  activeFavorite,
  activeFeedback,
}: PropsSidebar) {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const pathname = usePathname();
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        router.push('/signin');
        toast.warning('Ви вийшли зі свого облікового запису');
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <>
      {(isOnMobile && (
        <ul className="bg-transparent rounded-[20px]">
          <li className={`group ${activeProfile}`}>
            <Link
              className={`link ${
                pathname === '/personal-office/profile' ? 'active' : ''
              }`}
              href="/personal-office/profile"
            >
              <div className={'rounded-t-[20px] relative' + ` ${liClass}`}>
                <SpriteSVG name="user" />
                <p>Профіль</p>
                <span className="absolute right-4 top-[20px]">
                  <SpriteSVG
                    name={activeProfile ? 'expand_up' : 'expand_down'}
                  />
                </span>
              </div>
            </Link>
            <div>{childProfile}</div>
          </li>

          <li className={`group ${activeOrders}`}>
            <Link
              className={`link ${
                pathname === '/personal-office/my-purchases' ? 'active' : ''
              }`}
              href="/personal-office/my-purchases"
            >
              <div className={`${liClass} relative`}>
                <SpriteSVG name="basket" />
                <p>Мої замовлення</p>
                <span className="absolute right-4 top-[20px]">
                  <SpriteSVG
                    name={activeOrders ? 'expand_up' : 'expand_down'}
                  />
                </span>
              </div>
            </Link>
            <div>{childOrders}</div>
          </li>

          <li className={`group ${activeAds}`}>
            <Link
              className={`link ${
                pathname === '/personal-office/my-ads' ? 'active' : ''
              }`}
              href="/personal-office/my-ads"
            >
              <div className={`${liClass} relative`}>
                <SpriteSVG name="speaker" />
                <p>Мої оголошення</p>
                <span className="absolute right-4 top-[20px]">
                  <SpriteSVG name={activeAds ? 'expand_up' : 'expand_down'} />
                </span>
              </div>
            </Link>
            <div>{childAds}</div>
          </li>

          <li className={`group ${activeSale}`}>
            <Link
              className={`link ${
                pathname === '/personal-office/my-sales' ? 'active' : ''
              }`}
              href="/personal-office/my-sales"
            >
              <div className={`${liClass} relative`}>
                <SpriteSVG name="discount-label" />
                <p>Мої продажі</p>
                <span className="absolute right-4 top-[20px]">
                  <SpriteSVG name={activeSale ? 'expand_up' : 'expand_down'} />
                </span>
              </div>
            </Link>
            <div>{childSale}</div>
          </li>

          <li className={`group ${activeFavorite}`}>
            <Link
              className={`link ${
                pathname === '/personal-office/selected' ? 'active' : ''
              }`}
              href="/personal-office/selected"
            >
              <div className={`${liClass} relative`}>
                <SpriteSVG name="favorite-header" />
                <p>Обране</p>
                <span className="absolute right-4 top-[20px]">
                  <SpriteSVG
                    name={activeFavorite ? 'expand_up' : 'expand_down'}
                  />
                </span>
              </div>
            </Link>
            <div>{childFavorite}</div>
          </li>

          <li className={`group ${activeFeedback}`}>
            <Link
              className={`link ${
                pathname === '/personal-office/reviews' ? 'active' : ''
              }`}
              href="/personal-office/reviews"
            >
              <div className={`${liClass} relative`}>
                <SpriteSVG name="message" />
                <p>Відгуки</p>
                <span className="absolute right-4 top-[20px]">
                  <SpriteSVG
                    name={activeFeedback ? 'expand_up' : 'expand_down'}
                  />
                </span>
              </div>
            </Link>
            <div>{childFeedback}</div>
          </li>

          <li className="group">
            <button onClick={handleLogout}>
              <div className={'rounded-b-lg' + ` ${liClass}`}>
                <SpriteSVG name="exit" />
                <p>Вийти</p>
              </div>
            </button>
          </li>
        </ul>
      )) ||
        (isOnTablet && (
          <ul className="bg-transparent rounded-[20px]">
            <li className={`group ${activeProfile}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/profile' ? 'active' : ''
                }`}
                href="/personal-office/profile"
              >
                <div className={'rounded-t-[20px] relative' + ` ${liClass}`}>
                  <SpriteSVG name="user" />
                  <p>Профіль</p>
                  <span className="absolute right-4 top-[20px]">
                    <SpriteSVG
                      name={activeProfile ? 'expand_up' : 'expand_down'}
                    />
                  </span>
                </div>
              </Link>
              <>{childProfile}</>
            </li>

            <li className={`group ${activeOrders}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/my-purchases' ? 'active' : ''
                }`}
                href="/personal-office/my-purchases"
              >
                <div className={`${liClass} relative`}>
                  <SpriteSVG name="basket" />
                  <p>Мої замовлення</p>
                  <span className="absolute right-4 top-[20px]">
                    <SpriteSVG
                      name={activeOrders ? 'expand_up' : 'expand_down'}
                    />
                  </span>
                </div>
              </Link>
              <div>{childOrders}</div>
            </li>

            <li className={`group ${activeAds}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/my-ads' ? 'active' : ''
                }`}
                href="/personal-office/my-ads"
              >
                <div className={`${liClass} relative`}>
                  <SpriteSVG name="speaker" />
                  <p>Мої оголошення</p>
                  <span className="absolute right-4 top-[20px]">
                    <SpriteSVG name={activeAds ? 'expand_up' : 'expand_down'} />
                  </span>
                </div>
              </Link>
              <div>{childAds}</div>
            </li>

            <li className={`group ${activeSale}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/my-sales' ? 'active' : ''
                }`}
                href="/personal-office/my-sales"
              >
                <div className={`${liClass} relative`}>
                  <SpriteSVG name="discount-label" />
                  <p>Мої продажі</p>
                  <span className="absolute right-4 top-[20px]">
                    <SpriteSVG
                      name={activeSale ? 'expand_up' : 'expand_down'}
                    />
                  </span>
                </div>
              </Link>
              <div>{childSale}</div>
            </li>

            <li className={`group ${activeFavorite}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/selected' ? 'active' : ''
                }`}
                href="/personal-office/selected"
              >
                <div className={`${liClass} relative`}>
                  <SpriteSVG name="favorite-header" />
                  <p>Обране</p>
                  <span className="absolute right-4 top-[20px]">
                    <SpriteSVG
                      name={activeFavorite ? 'expand_up' : 'expand_down'}
                    />
                  </span>
                </div>
              </Link>
              <div>{childFavorite}</div>
            </li>

            <li className={`group ${activeFeedback}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/reviews' ? 'active' : ''
                }`}
                href="/personal-office/reviews"
              >
                <div className={`${liClass} relative`}>
                  <SpriteSVG name="message" />
                  <p>Відгуки</p>
                  <span className="absolute right-4 top-[20px]">
                    <SpriteSVG
                      name={activeFeedback ? 'expand_up' : 'expand_down'}
                    />
                  </span>
                </div>
              </Link>
              <div>{childFeedback}</div>
            </li>

            <li className="group">
              <button onClick={handleLogout}>
                <div className={'rounded-b-lg' + ` ${liClass}`}>
                  <SpriteSVG name="exit" />
                  <p>Вийти</p>
                </div>
              </button>
            </li>
          </ul>
        )) || (
          <ul className="bg-white rounded-[20px] shadow-md">
            <li className={`group ${activeProfile}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/profile' ? 'active' : ''
                }`}
                href="/personal-office/profile"
              >
                <div className={'rounded-t-[20px]' + ` ${liClass}`}>
                  <SpriteSVG name="user" />
                  Профіль
                </div>
              </Link>
            </li>

            <li className={`group ${activeOrders}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/my-purchases' ? 'active' : ''
                }`}
                href="/personal-office/my-purchases"
              >
                <div className={liClass}>
                  <SpriteSVG name="basket" />
                  Мої замовлення
                </div>
              </Link>
            </li>

            <li className={`group ${activeAds}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/my-ads' ? 'active' : ''
                }`}
                href="/personal-office/my-ads"
              >
                <div className={liClass}>
                  <SpriteSVG name="speaker" />
                  Мої оголошення
                </div>
              </Link>
            </li>

            <li className={`group ${activeSale}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/my-sales' ? 'active' : ''
                }`}
                href="/personal-office/my-sales"
              >
                <div className={liClass}>
                  <SpriteSVG name="discount-label" />
                  Мої продажі
                </div>
              </Link>
            </li>

            <li className={`group ${activeFavorite}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/selected' ? 'active' : ''
                }`}
                href="/personal-office/selected"
              >
                <div className={liClass}>
                  <SpriteSVG name="favorite-header" />
                  Обране
                </div>
              </Link>
            </li>

            <li className={`group ${activeFeedback}`}>
              <Link
                className={`link ${
                  pathname === '/personal-office/reviews' ? 'active' : ''
                }`}
                href="/personal-office/reviews"
              >
                <div className={liClass}>
                  <SpriteSVG name="message" />
                  Відгуки
                </div>
              </Link>
            </li>

            <li className="group">
              <button className="w-full" onClick={handleLogout}>
                <div className={'rounded-b-lg' + ` ${liClass}`}>
                  <SpriteSVG name="exit" />
                  Вийти
                </div>
              </button>
            </li>
          </ul>
        )}
    </>
  );
}
