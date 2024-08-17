// https://jobs-task-progaminghero-server.vercel.app/
// https://programming-hero-task-d058d.web.app/

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FilterControls from "../../component/products/FilterControls";
import Pagination from "../../component/products/Pagination";
import ProductCard from "../../component/products/ProductCard";
import axios from "axios";

// http://localhost:5000/AllProducts?limit=10&skip=30&currentPage=2&priceSort=lowToHigh&priceRang=10-20&category=apple&search=searchValue

function Home() {
  // pagination
  const [totalItems, setTotalItems] = useState(1); // Example total items
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // pagination
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [priceRangeValue, setPriceRangeValue] = useState();
  const [priceSortValue, setPriceSortValue] = useState();

  // get All Products
  const getAllProducts = async () => {
    const data = await axios.get(
      `http://localhost:5000/AllProducts?&category=${categoryValue}&limit=${itemsPerPage}&currentPage=${
        currentPage - 1
      }&priceSort=${priceSortValue}&priceRang=${priceRangeValue}&search=searchValue`
    );
    setAllProducts(data.data.result);
    setTotalItems(data.data.totalProducts);
  };
  useEffect(() => {
    getAllProducts();
  }, [
    itemsPerPage,
    currentPage,
    searchValue,
    categoryValue,
    priceRangeValue,
    priceSortValue,
  ]);
  console.log(
    searchValue,
    categoryValue,
    priceRangeValue,
    currentPage - 1,
    itemsPerPage
  );
  // onFilterChange
  // onFilterChange
  const onFilterChange = (item, value) => {
    if (item === "search") {
      setSearchValue(value);
    } else if (item === "category") {
      setCategoryValue(value);
    } else {
      if (value === "Low to High" || value === "High to Low") {
        setPriceSortValue(value);
        setPriceRangeValue();
      } else {
        setPriceRangeValue(value);
        setPriceSortValue("Low to High");
      }
    }
  };

  // get all category
  const getAllCategory = async () => {
    const data = await axios.get(
      `https://dummyjson.com/products/category-list`
    );
    setCategories(data.data);
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  // get all category

  // pagination
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
        <FilterControls
          onFilterChange={onFilterChange}
          categories={categories}
        />
      </div>
      <div>
        <ProductCard allProducts={allProducts} />
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
