'use client';

import React, {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationItem {
  id: number;
  // Define other necessary properties
}

type PropsPagination<T> = {
  itemsPerPage: number;
  moreProductsClick?: MouseEventHandler<HTMLButtonElement>;
  content: T[]; // Accept an array of elements of any type
  renderItem: (item: T, index: number) => ReactNode; // Function to render items
  setItemOffset: Dispatch<SetStateAction<number>>; // Function to set item offset
};

export default function Pagination<T extends PaginationItem>({
  itemsPerPage,
  moreProductsClick,
  content,
  renderItem,
}: PropsPagination<T>) {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(content.length / itemsPerPage);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = content.slice(startIndex, endIndex);

  return (
    <div>
      {currentItems.map((item, index) => renderItem(item, index))}

      <button
        onClick={moreProductsClick}
        className="block mx-auto mb-11 p-1 text-xl text-blue-700"
      >
        Load More
      </button>

      <ReactPaginate
        className="flex justify-center items-center gap-5"
        breakLabel="..."
        nextLabel="Next"
        nextClassName="flex p-[9px]"
        onPageChange={handlePageClick}
        activeClassName="text-blue-900"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="Previous"
        previousClassName="flex p-[9px]"
        forcePage={currentPage} // Force the selected page to match the current state
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
