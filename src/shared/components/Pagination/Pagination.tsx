'use client';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import React, { ReactNode, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

type PaginationItem = {
  id: number;
};

type PropsPagination<T> = {
  itemsPerPage: number;
  array: T[];
  renderItemLi: (item: T, index: number) => ReactNode;
  styleUl: string;
};

export default function Pagination<T extends PaginationItem>({
  itemsPerPage,
  array,
  renderItemLi,
  styleUl,
}: PropsPagination<T>) {
  const [currentPage, setCurrentPage] = useState(0);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);
  const currentItems = array.slice(startIndex, endIndex);

  useEffect(() => {
    setStartIndex(currentPage * itemsPerPage);
    setEndIndex((currentPage + 1) * itemsPerPage);
  }, [currentPage, itemsPerPage, array]);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <ul className={styleUl}>
        {currentItems.map((item, index) => renderItemLi(item, index))}
      </ul>

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
