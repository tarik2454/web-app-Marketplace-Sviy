'use client';

import ReactPaginate from 'react-paginate';

import { MouseEventHandler, useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Sprite } from '@/modules/tabMenu/img/Sprite';

type PropsContent = {
  id: number;
  userName: string;
  rating: number;
  description: string;
  data: string;
};

type PropsPagination = {
  itemsPerPage: number;
  moreProductsClick?: MouseEventHandler<HTMLButtonElement>;
  content: PropsContent[];
};

export default function Pagination({
  itemsPerPage,
  moreProductsClick,
  content,
}: PropsPagination) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = content.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(content.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <ul className="mb-11">
        {currentItems.map((item, index) => (
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
        ))}
      </ul>

      <button
        onClick={moreProductsClick}
        className="block mx-auto mb-11 p-1 text-xl text-blue-700"
      >
        Дивитися більше
      </button>

      <ReactPaginate
        className="flex justify-center items-center gap-5"
        breakLabel="..."
        nextLabel={<SpriteSVG name="pagination-rigth" />}
        nextClassName="flex p-[9px]"
        onPageChange={handlePageClick}
        activeClassName="text-blue-900"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<SpriteSVG name="pagination-left" />}
        previousClassName="flex p-[9px]"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
