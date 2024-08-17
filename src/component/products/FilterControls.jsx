/* eslint-disable react/prop-types */

import { useState } from "react";

const FilterControls = ({ onFilterChange, categories }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange("search", e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between p-4 bg-gray-100 gap-5">
      {/* Search Bar */}
      <div className="mb-4 md:mb-0 md:w-1/3">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Search Products:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4 md:mb-0 md:w-1/3">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category:
        </label>
        <select
          id="category"
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="md:w-1/3">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price Range:
        </label>
        <select
          id="price"
          onChange={(e) => onFilterChange("price", e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>

          {[...Array(10)].map((_, inx) => {
            const lower = inx === 0 ? 1 : inx * 10;
            const upper = (inx + 1) * 10;
            return (
              <option key={inx} value={`${lower}- ${upper}`}>
                ${`${lower}- ${upper}`}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
