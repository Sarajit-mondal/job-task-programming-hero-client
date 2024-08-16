import FilterControls from "../../component/products/FilterControls";
import ProductCard from "../../component/products/ProductCard";

function Home() {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center mt-8">All Products</h2>
        <FilterControls />
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
