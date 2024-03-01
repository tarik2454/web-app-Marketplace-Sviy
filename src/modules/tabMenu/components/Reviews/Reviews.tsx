import { Pagination } from '@/shared/components';
import reviewsData from '../../data/reviews-data';
import { SpriteSVG } from '../../img/SpriteSVG';
import { Key } from 'react';
import ScreenSize from '@/shared/hooks/useMediaQuery';

export default function Reviews() {
  const { isOnMobile, isOnTablet, isOnDesktop } = ScreenSize();

  const renderItem = (
    item: {
      id?: number;
      userName: string;
      rating: number;
      description: string;
      data: string;
    },
    index: Key | null | undefined
  ) => (
    <li
      key={index}
      className="flex flex-wrap justify-between mt-[30px] [&:nth-child(1)]:mt-0 pb-4 md:pb-8 xl:pb-12 md:pr-[8px] border-b-[1px] border-[rgb(220, 220, 220)]"
    >
      <div className="flex md:gap-5 xl:gap-6 justify-between xl:justify-stretch items-end xl:items-start w-full mb-3 md:mb-5 xl:mb-0">
        <div className="flex flex-col">
          <h3 className="mb-3 md:mb-5 text-base md:text-xl xl:w-[302px]">
            {item.userName}
          </h3>

          <ul className="flex">
            {[...Array(item.rating)].map((_, index) => (
              <li key={index}>
                <SpriteSVG name="star" />
              </li>
            ))}
          </ul>
        </div>

        {isOnDesktop && <p className="max-w-[628px]">{item.description}</p>}

        <time className="w-[302px] text-right" dateTime={item.data}>
          {item.data}
        </time>
      </div>

      {isOnMobile || isOnTablet ? <p className="">{item.description}</p> : null}
    </li>
  );

  return (
    <Pagination
      itemsPerPage={3}
      array={reviewsData}
      renderItem={renderItem}
      styleUl={'mb-10 md:mb-11'}
    />
  );
}
