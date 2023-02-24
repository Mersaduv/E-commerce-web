import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../components/AsideList2";
import AsideListCategory from "../components/AsideListCategory";
import PriceRangeSlider from "../components/PriceRangeSlider";
import { addCartAction } from "../redux/products/cart/actionAddCart";

const HomeAppliances = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data } = products;
  // const selectedCategory = useSelector(
  //   (state) => state.categorys.selectedCategory
  // );
  const homeAppliancesProducts =
    data && data.filter((product) => product.category === "homeappliances");
  return (
    <div className="flex">
      <div>
        <AsideListCategory />
        {/* <hr /> */}
      </div>
      <div className=" w-full">
        {" "}
        <div className="sm:flex mx-2 grid grid-cols-2 gap-4 flex-wrap overflow-auto items-center lg:justify-between justify-center">
          {homeAppliancesProducts &&
            homeAppliancesProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white  sm:mx-2 mx-auto sm:w-72 lg:mb-0 mb-8 cursor-pointer hover:shadow-lg"
              >
                <Link to={`/product/${product._id}`} className="w-full ">
                  <div className="max-w-[250px] mx-auto sm:max-w-xs">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="bg-white p-2">
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
                    </div>
                  </div>
                </Link>

                <div
                  onClick={() => dispatch(addCartAction(product))}
                  className="flex px-2 bg-white flex-col-reverse sm:flex-row items-center justify-between py-4"
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAppliances;
