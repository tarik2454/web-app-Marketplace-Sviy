import { Pagination } from '@/shared/components';
import reviewsData from '../../data/reviews-data';
import { SpriteSVG } from '../../img/SpriteSVG';
import { Key } from 'react';

export default function Reviews() {
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
      className="flex justify-between pt-[30px] [&:nth-child(1)]:pt-0 pb-12 pr-[8px] border-b-[1px] border-[rgb(220, 220, 220)]"
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-xl">{item.userName}</h3>
        <ul className="flex">
          {[...Array(item.rating)].map((_, index) => (
            <li key={index}>
              <SpriteSVG name="star" />
            </li>
          ))}
        </ul>
      </div>

      <p className="w-[628px]">{item.description}</p>

      <time dateTime={item.data}>{item.data}</time>
    </li>
  );

  return (
    <div>
      <Pagination
        itemsPerPage={3}
        array={reviewsData}
        renderItem={renderItem}
        styleMarginBottom={'mb-11'}
      />
    </div>
  );
}
