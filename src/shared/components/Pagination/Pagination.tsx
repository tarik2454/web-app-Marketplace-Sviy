'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React, { MouseEventHandler, ReactNode, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationItem {
  id: number;
}

type PropsPagination<T> = {
  itemsPerPage: number;
  moreProductsClick?: MouseEventHandler<HTMLButtonElement>;
  array: T[];
  renderItem: (item: T, index: number) => ReactNode;
  styleMarginBottom?: string;
};

export default function Pagination<T extends PaginationItem>({
  itemsPerPage,
  moreProductsClick,
  array,
  renderItem,
  styleMarginBottom,
}: PropsPagination<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);

  const handleLoadMore = () => {
    // Увеличиваем количество отображаемых элементов
    setDisplayedItems(prevDisplayedItems => prevDisplayedItems + itemsPerPage);
    // Если достигли конца текущей страницы, переходим на следующую страницу.
    if ((currentPage + 1) * itemsPerPage === displayedItems) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    setDisplayedItems(itemsPerPage);
  };

  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = array.slice(startIndex, endIndex);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + displayedItems;
  const currentItems = array.slice(startIndex, endIndex);

  return (
    <div>
      <ul className={styleMarginBottom}>
        {currentItems.map((item, index) => renderItem(item, index))}
      </ul>

      <button
        className="block mx-auto mb-11 p-1 text-xl text-blue-700"
        onClick={handleLoadMore}
      >
        Дивитись більше
      </button>

      {/* Пагинация */}
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
