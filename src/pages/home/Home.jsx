/* eslint-disable no-unused-vars */
import { useState } from "react";
import FilterControls from "../../component/products/FilterControls";
import Pagination from "../../component/products/Pagination";
import ProductCard from "../../component/products/ProductCard";

function Home() {
  // pagination
  const [totalItems, setTotalItems] = useState(200); // Example total items
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Implement the logic to load the data for the selected page
  };

  const handleItemsPerPageChange = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
    // Implement the logic to load data according to the selected items per page
  };
  // pagination
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center mt-8">All Products</h2>
        <FilterControls />
      </div>
      <div>
        <ProductCard />
      </div>
      <div className="mb-20">
        {/* pagination */}
        <Pagination
          totalItems={totalItems}
          itemsPerPageOptions={[10, 15, 20]}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        ></Pagination>
      </div>
    </div>
  );
}

export default Home;
