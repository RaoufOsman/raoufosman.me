import { render } from '@headlessui/react/dist/utils/render';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginateProps {
  renderer: any
  items: []
  itemsPerPage: number
}

export default function Paginate({ items, itemsPerPage, renderer }: IPaginateProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map(i => renderer(i))}
      <nav className="pt-10"
        aria-label="Pagination"
      >
        <ReactPaginate
          nextLabel="Next"
          nextClassName="-mt-px flex w-0 flex-1 justify-end"
          nextLinkClassName="dark:text-white inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          previousLabel="Previous"
          previousClassName="-mt-px flex w-0 flex-1"
          previousLinkClassName="dark:text-white inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageClassName="hidden md:-mt-px md:flex"
          pageLinkClassName="dark:text-white inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          breakLabel="..."
          breakClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
          containerClassName="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
          activeClassName="dark:text-white border-t-2"
          renderOnZeroPageCount={null}
        />
      </nav >
    </>
  );
}