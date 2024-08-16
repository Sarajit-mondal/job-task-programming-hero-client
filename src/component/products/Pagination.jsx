/* eslint-disable react/prop-types */
import { useState } from "react";

const Pagination = ({
  totalItems,
  itemsPerPageOptions,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleItemsPerPageChange = (e) => {
    const selectedItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1); // Reset to first page
    onItemsPerPageChange(selectedItemsPerPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="allbutton my-10">
      <div className="flex w-full justify-between px-5 items-center gap-5 ">
        {/* Previous Button */}
        <button
          id="prevBtn"
          className={`pagination-btn ${
            currentPage === 1
              ? "cursor-not-allowed opacity-80 bg-blue-300"
              : "bg-blue-500"
          } size-7 rounded-full flex justify-center items-center font-extrabold text-white `}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        <div
          className="flex gap-2 max-w-3/4 overflow-x-scroll md:overflow-x-hidden 
          overflow-y-hidden
          md:overflow-y-hidden md:h-5"
          id="pageButtons"
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-btn ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-slate-300"
              } size-5 rounded-full flex justify-center items-center `}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Items Per Page and Next Button */}
        <div className="flex items-center ">
          <select
            id="itemsPerPage"
            className="mr-5 border border-gray-300 rounded px-2 py-1"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            id="nextBtn"
            className={`pagination-btn ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-80 bg-blue-300"
                : "bg-blue-500"
            } size-7 rounded-full flex justify-center items-center font-extrabold text-white`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
