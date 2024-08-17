/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FilterControls from "../../component/products/FilterControls";
import Pagination from "../../component/products/Pagination";
import ProductCard from "../../component/products/ProductCard";
import axios from "axios";

function Home() {
const [categories,setCategories] = useState([])

 // get all category
 const getAllCategory =async()=>{
  const data =await axios.get(`https://dummyjson.com/products/category-list`)
  setCategories(data.data)
  console.log(data.data)
}

useEffect(()=>{
getAllCategory()
},[])
  // onFilterChange
  const onFilterChange =(item,value)=>{
    console.log(item,value)
  }
  // pagination
  const [totalItems, setTotalItems] = useState(200); // Example total items
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
    // pagination
const getAllProducts =async()=>{
  const data =await axios.get(`https://dummyjson.com/products/category-list`)
  console.log(data.data)
}

getAllProducts()

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
        <FilterControls onFilterChange={onFilterChange} categories={categories}/>
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
