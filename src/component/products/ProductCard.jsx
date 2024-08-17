/* eslint-disable react/jsx-key */
const ProductCard = ({allProducts}) => {
  // const product = {
  //   thumbnail:
  //     "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
  //   title: "Sample Product Title",
  //   price: 49.99,
  //   discountPercentage: 20,
  //   rating: 4.5,
  // };
  // // Calculate discounted price
  // const discountedPrice = (
  //   product.price -
  //   (product.price / 100) * product.discountPercentage
  // ).toFixed(2);

  // // Generate random review count between 10 and 210
  // const totalReviews = Math.ceil(Math.random() * 200 + 10);
 console.log(allProducts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      {allProducts && allProducts.map(product => <div key={product._id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow  hover:bg-slate-100 ease-linear cursor-pointer duration-300 ">
        <img
          src={product?.images[0]}
          alt={product.title}
          className="w-11/12 h-52 md:h-40 object-cover rounded-md mb-4 mx-auto"
        />
        <h2 className="text-lg font-semibold mb-2">
          { product?.title.length > 20
            ? product?.title.slice(0, 20) + "..."
            : product?.title 
          }
            
        </h2>
        <div className="product-price text-sm text-gray-700 mb-4 flex justify-between">
          <h4>
            Price:{" "}
            <span className="font-bold text-green-500">${product.price}</span>
          </h4>
          <h4>
            Discount:{" "}
            <span className="font-bold text-red-500">
              ${product.discountPercentage}%
            </span>
          </h4>
        </div>
        <div className="ratting-stock text-sm text-gray-700 mb-4 flex justify-between">
          <h4>
            Rating: <span className="font-bold">{product.rating}</span>
          </h4>
          <h4>
            Total Reviews: <span className="font-bold">{Math.ceil(Math.random() * 200)}</span>
          </h4>
        </div>
        <div className="text-center">
          <button className="add w-full active:scale-[98%] ease-linear duration-150 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            + ${ (
            product?.price -
            (product?.price / 100) * product?.discountPercentage
          ).toFixed(2)}
          </button>
        </div>
      </div>)}
    </div>
  );
};

export default ProductCard;
// const lik = `
// <div key={product._id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <img
//           src={product?.thumbnail}
//           alt={product.title}
//           className="w-11/12 h-52 md:h-40 object-cover rounded-md mb-4 mx-auto"
//         />
//         <h2 className="text-lg font-semibold mb-2">
//           {/* {product?.title.length > 20
//             ? product?.title.slice(0, 20) + "..."
//             : product?.title} */
//             product.title
//             }
            
//         </h2>
//         <div className="product-price text-sm text-gray-700 mb-4 flex justify-between">
//           <h4>
//             Price:{" "}
//             <span className="font-bold text-green-500">${product.price}</span>
//           </h4>
//           <h4>
//             Discount:{" "}
//             <span className="font-bold text-red-500">
//               ${product.discountPercentage}%
//             </span>
//           </h4>
//         </div>
//         <div className="ratting-stock text-sm text-gray-700 mb-4 flex justify-between">
//           <h4>
//             Rating: <span className="font-bold">{product.rating}</span>
//           </h4>
//           <h4>
//             Total Reviews: <span className="font-bold">{Math.ceil(Math.random() * 200)}</span>
//           </h4>
//         </div>
//         <div className="text-center">
//           <button className="add w-full active:scale-[98%] ease-linear duration-150 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//             + ${ (
//             product?.price -
//             (product?.price / 100) * product?.discountPercentage
//           ).toFixed(2)}
//           </button>
//         </div>
//       </div>`