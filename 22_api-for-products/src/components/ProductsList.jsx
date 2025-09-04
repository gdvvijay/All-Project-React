import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchSvg from '../assets/search.svg'

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <div className="text-center text-2xl text-red-500">loading...</div>;
  }
  return (
    <main className="container flex flex-col items-center w-full max-w-6xl mx-auto px-2.5">
      <div className="bg-amber-200 dark:bg-gray-700 max-w-[50%] w-full mt-3.5 h-9 flex relative">
        <img src={searchSvg} className="w-full h-full max-w-8 max-h-7 self-center absolute"/>
        <input
          type="text"
          placeholder="Search Products Here..."
          className="h-full pl-9 w-full caret-blue-300"
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-9 mt-9">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchProduct.toLowerCase())
          )
          .map((product) => {
            return (
              <Link
                to={product.id.toString()}
                className="flex-item-1 border rounded-2xl overflow-hidden pb-6"
                key={product.id}
                state={products}
              >
                <div className="image h-64">
                  <img
                    src={product.image}
                    className="w-full h-full object-contain bg-gray-300 dark:bg-gray-400"
                  />
                </div>
                <div className="text-items">
                  <h1 className="font-serif font-bold pl-2.5">
                    {product.title}
                  </h1>
                  <p className="mt-2 ml-2.5">
                    Price :- <span>${product.price}</span>
                  </p>
                  <p className="ml-2.5 ">
                    Category:- <span>{product.category}</span>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
