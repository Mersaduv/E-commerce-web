import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../components/sliders/Slider";

import { fetchDataProduct } from "../redux/products/actionsProduct";
import { addCartAction } from "../redux/products/cart/actionAddCart";

const HomePage = () => {
  useEffect(() => {
    dispatch(fetchDataProduct());
  }, []);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data } = products;

  return (
    <div className="mx-auto container sm:py-8">
      <Slider />

      <h1 className=" p-5">همه محصولات :</h1>
      <div className="flex flex-wrap overflow-auto items-center lg:justify-between justify-center">
        {data &&
          data.map((product) => (
            <div
              key={product._id}
              className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer hover:shadow-lg"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 sm:h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">ویژه</p>
                  </div>
                </div>
                <div className=" p-2 py-4">
                  <div className="flex items-center ">
                    <h2 className=" text-sm  sm:text-lg font-semibold">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-xs text-gray-600 mt-2  ">
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className=" mt-4 hidden sm:flex">
                    <div>
                      <p className="text-xs  text-gray-600 px-2 bg-gray-200 py-1">
                        {product.description[0].support}
                      </p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                        جعبه کامل
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => dispatch(addCartAction(product))}
                    className="flex flex-col-reverse sm:flex-row items-center justify-between py-4"
                  >
                    <h2 className="text-indigo-700 text-xs font-semibold hidden sm:block">
                      کلیک کن تا سبد خرید اضافه شود
                    </h2>
                    <h2 className="text-indigo-700 mt-1 text-xs font-semibold  sm:hidden">
                      کلیک به سبد خرید
                    </h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">
                      {product.price} $
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* rows overflow  */}
      <h1 className=" p-5">تخفیفات :</h1>
      <div className="flex  overflow-auto items-center lg:justify-between justify-center">
        {data &&
          data.map((product) => (
            <div
              key={product._id}
              className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer hover:shadow-lg"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 sm:h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">ویژه</p>
                  </div>
                </div>
                <div className=" p-2 py-4">
                  <div className="flex items-center ">
                    <h2 className=" text-sm  font-semibold">{product.name}</h2>
                  </div>
                  <p className="text-xs text-gray-600 mt-2  hidden ">
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className=" mt-4 hidden ">
                    <div>
                      <p className="text-xs  text-gray-600 px-2 bg-gray-200 py-1">
                        {product.description[0].support}
                      </p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                        جعبه کامل
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col-reverse items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold hidden">
                      کلیک کن تا سبد خرید اضافه شود
                    </h2>
                    <h2 className="text-indigo-700 mt-1 text-xs font-semibold ">
                      کلیک به سبد خرید
                    </h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">
                      {product.price} $
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
