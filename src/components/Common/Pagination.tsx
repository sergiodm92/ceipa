import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPageState(page);
      onPageChange(page);
    }
  };

  const generatePagination = () => {
    const pageNumbers = [];
    const visiblePages = 5; // Number of pages to show in the pagination
    const startPage = Math.max(1, currentPageState - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          <li className="mx-1">
            <button
              onClick={() => handlePageChange(currentPageState - 1)}
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
              disabled={currentPageState === 1}
            >
              Prev
            </button>
          </li>

          {generatePagination().map((page) => (
            <li key={page} className="mx-1">
              <button
                onClick={() => handlePageChange(page)}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${
                  page === currentPageState
                    ? 'bg-primary text-white'
                    : 'bg-body-color bg-opacity-[15%] text-body-color'
                } px-4 text-sm transition hover:bg-primary hover:bg-opacity-100 hover:text-white`}
              >
                {page}
              </button>
            </li>
          ))}

          {currentPageState < totalPages - 1 && (
            <li className="mx-1">
              <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                ...
              </span>
            </li>
          )}

          <li className="mx-1">
            <button
              onClick={() => handlePageChange(currentPageState + 1)}
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
              disabled={currentPageState === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
