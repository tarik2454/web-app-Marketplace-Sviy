import { Pagination } from '@/shared/components';
import reviewsData from '../../data/reviews-data';
import { Sprite } from '../../img/Sprite';
import { Key } from 'react';
import React, { useState } from 'react'; // Import useState hook

export default function Reviews() {
  // Define itemOffset state variable and setItemOffset function to update it
  const [itemOffset, setItemOffset] = useState(0);

  // Define itemsPerPage variable
  const itemsPerPage = 3;

  const renderItem = (
    item: {
      id?: number;
      userName: any;
      rating: any;
      description: any;
      data: any;
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
              <Sprite name="star" />
            </li>
          ))}
        </ul>
      </div>

      <p className="w-[628px]">{item.description}</p>

      <time dateTime={item.data}>{item.data}</time>
    </li>
  );

  const getCurrentItems = () => {
    const startOffset = itemOffset * itemsPerPage;
    const endOffset = startOffset + itemsPerPage;
    return reviewsData.slice(startOffset, endOffset);
  };

  return (
    <div>
      <ul className="mb-11">
        {/* Map only the current items */}
        {getCurrentItems().map((item, index) => renderItem(item, index))}
      </ul>

      <Pagination
        itemsPerPage={itemsPerPage} // Pass itemsPerPage as a prop
        content={reviewsData}
        renderItem={renderItem}
        setItemOffset={setItemOffset} // Pass the function to update itemOffset
      />
    </div>
  );
}
