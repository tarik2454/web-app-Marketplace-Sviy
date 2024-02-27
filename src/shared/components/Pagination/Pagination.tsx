'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React, { ReactNode, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationItem {
  id: number;
}

type PropsPagination<T> = {
  itemsPerPage: number;
  array: T[];
  renderItem: (item: T, index: number) => ReactNode;
  styleUl: string;
};

export default function Pagination<T extends PaginationItem>({
  itemsPerPage,
  array,
  renderItem,
  styleUl,
}: PropsPagination<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);
  const currentItems = array.slice(startIndex, endIndex);

  const handleLoadMore = () => {
    // Увеличиваем количество отображаемых элементов
    setDisplayedItems(prevDisplayedItems => prevDisplayedItems + itemsPerPage);
    setEndIndex(prevState => prevState + itemsPerPage);
    console.log({
      "start": startIndex,
      "end": endIndex,
      "current items": currentItems,
      "displayed items": displayedItems,
    })
    
    setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    setDisplayedItems(itemsPerPage);
    setStartIndex(selectedPage.selected * itemsPerPage);
    setEndIndex(selectedPage.selected * itemsPerPage + itemsPerPage);

    console.log({
      "start": startIndex,
      "end": endIndex,
      "current items": currentItems,
    })
  };

  return (
    <div>
      <ul className={styleUl}>
        {currentItems.map((item, index) => renderItem(item, index))}
      </ul>

      <button
        className="block mx-auto mb-11 p-1 text-xl text-blue-700"
        onClick={handleLoadMore}
      >
        Дивитись більше
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
        pageCount={Math.ceil(array.length / itemsPerPage)}
        previousLabel={<SpriteSVG name="pagination-left" />}
        previousClassName="flex p-[9px]"
        forcePage={currentPage}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
