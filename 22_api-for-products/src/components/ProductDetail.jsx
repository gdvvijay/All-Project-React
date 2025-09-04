import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const paramValue = useParams();
  const productUrl = paramValue.product;
  const { state: allProducts } = useLocation();
  // const allProducts=state
  const [allProductsState, setAllProductsState] = useState(allProducts || []);
  if (allProducts.length === 0) {
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setAllProductsState(data));
    }, []);
  }

  if (allProductsState.length === 0) {
    return <div className="text-center text-2xl text-red-500">loading...</div>;
  }
  return (
    <div className="product-details-container w-full max-w-6xl mx-auto ">
      {allProductsState
        .filter((productData) => productData.id + "" === productUrl)
        .map((product, i) => {
          return (
            <div
              className="flex justify-between w-full mt-16 ml-2.5 bg-gray-300 dark:bg-gray-600 py-7 max-[600px]:flex-wrap"
              key={i}
            >
              <div className="image-container h-96 w-full justify-self-center">
                <img src={product.image} className="h-full max-[600px]:justify-self-center" />
              </div>
              <div className="text-items-container w-full pl-2.5 self-center space-y-4 pr-4">
                <h1>
                  <span className="font-bold">Title:- </span>
                  <span className="text-black dark:text-gray-200">
                    {product.title}
                  </span>
                </h1>
                <p>
                  <span className="font-bold">Price:- </span>
                  <span className="text-black dark:text-gray-200">
                    ${product.price}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Category:- </span>
                  <span className="text-black dark:text-gray-200">
                    {product.category}
                  </span>
                </p>
                <p className="flex">
                  <span className="font-bold">Description:-</span>
                  <span className="italic text-black dark:text-gray-200 pl-1">
                    {product.description}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Rating:- </span>
                  <span className="text-black dark:text-gray-200">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
