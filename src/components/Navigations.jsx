import { BiSearch, BiCart, BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import InputSearch from "./common/InputSearch";
import { BiUser } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
import { useAuthState } from "../context/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { checkCart } from "../Util/checkCart";
import { selectCategory } from "../redux/products/categorys/actionSelect";
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import LanguageDropdown from "./LanguageDropdown";
const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authUser = useAuthState();
  const carts = useSelector((state) => state.cart);
// const categories = useSelector((state) => state.categorys.categories);
// const selectedCategory = useSelector(
//   (state) => state.categorys.selectedCategory
// );
// const handleSelectCategory = (event) => {
//   const selectedCategory = event.target.value;
//   dispatch(selectCategory(selectedCategory));
//   console.log(selectedCategory);
// };
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  return (
    <div className=" flex flex-col px-2  border-b max-w-6xl mx-auto">
      <div className="flex sm:items-center flex-col sm:flex-row justify-between">
        <div className="flex flex-row-reverse   justify-between">
          {/* cart / login user first mobile */}
          <div className="flex gap-x-2  sm:hidden">
            <Link to="/cart">
              <div className="py-3  relative text-2xl ">
                {checkCart(products, carts.cart) && (
                  <div className="text-xs bottom-4 left-5 absolute font-bold text-white bg-[#2377ff] rounded-full flex justify-center items-center w-5 h-5">
                    {carts.cart.length}
                  </div>
                )}{" "}
                <BiCart />
              </div>
            </Link>
            <div className="py-3 ">
              {authUser ? (
                <Link to="/account">
                  <BiUser className="text-2xl" />
                </Link>
              ) : (
                <Link to="/login">
                  {" "}
                  <MdLogin className="text-2xl" />
                </Link>
              )}
            </div>
          </div>

          <div>
            <Link to="/">
              <h1 className="text-xl py-3">Pamir</h1>
            </Link>
          </div>
        </div>
        {/* search Input  */}
        <InputSearch />
      {/* <select
        dir="ltr"
        className="hidden p-1  sm:block text-sm w-24
      "
        value={selectedCategory}
        onChange={handleSelectCategory}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select> */}
        {/* cart / login user tablet desktop */}
        <div className="gap-x-2 hidden sm:flex items-center">
          <Link to="/cart">
            <div className=" text-3xl relative ">
              {checkCart(products, carts.cart) && (
                <div className="text-xs bottom-4 left-5 absolute font-bold text-white bg-[#2377ff] rounded-full flex justify-center items-center w-5 h-5">
                  {carts.cart.length}
                </div>
              )}{" "}
              <BiCart />
            </div>
          </Link>

          <div className="py-3 ">
            {authUser ? (
              <Link to="/account">
                <BiUser className="text-2xl" />
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <MdLogin className="text-2xl" />
              </Link>
            )}
          </div>
        </div>

        {/* first mobile select category  */}
        {/* ----------------------- */}
        <div className="sm:hidden flex  w-full overflow-auto justify-between  gap-x-1 text-xs my-4  text-[#3b76f6]  ">
          <div
            onClick={() => dispatch(selectCategory("tablet-mobile"))}
            className="cursor-pointer w-20 px-1 h-8   bg-gray-200 flex justify-center items-center  overflow-ellipsis whitespace-nowrap 
              rounded-md"
          >
            کل دسته بندی
          </div>
          <div
            onClick={() => dispatch(selectCategory("clothes"))}
            className="cursor-pointer w-20 px-1 h-8  bg-gray-200  flex justify-center items-center overflow-ellipsis whitespace-nowrap 
              rounded-md"
          >
            پوشاک
          </div>
          <div
            onClick={() => dispatch(selectCategory("tablet-mobile"))}
            className="cursor-pointer w-20 px-1 h-8  bg-gray-200  flex justify-center items-center overflow-ellipsis whitespace-nowrap 
              rounded-md"
          >
            تبلت/موبایل
          </div>
          <div
            onClick={() => dispatch(selectCategory("tablet-mobile"))}
            className="cursor-pointer w-20 px-1 h-8  bg-gray-200  flex justify-center items-center overflow-ellipsis whitespace-nowrap 
              rounded-md"
          >
            لوازم مکانیکی
          </div>
          {/* ----------------------------------------- */}
          <div
            onClick={() => dispatch(selectCategory("tablet-mobile"))}
            className="cursor-pointer w-20 px-1 h-8  bg-gray-200  flex justify-center items-center overflow-ellipsis whitespace-nowrap 
              rounded-md"
          >
            ماشین ها
          </div>
          <div
            onClick={() => dispatch(selectCategory("home-appliances"))}
            className="cursor-pointer w-20 px-1 h-8  bg-gray-200  flex justify-center items-center overflow-ellipsis whitespace-nowrap 
              rounded-md"
          >
            لوازم خانگی
          </div>
        </div>
      </div>

      {/* desktop list caregory  */}
      <div className="flex justify-between border-t">
        <div className="hidden  whitespace-nowrap   w-full  sm:text-sm md:text-base font-semibold text-base sm:flex items-center">
          <div className="p-2 border-b-2 border-[#2377ff]  border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer active">
            <a href="http://">همه رویدادها</a>
          </div>
          <div className="p-2 border-b-2 border-[#2377ff]  border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer">
            <a href="http://">محبوب ترینا</a>
          </div>
          <div className="p-2 border-b-2 border-[#2377ff]  border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer">
            <a href="http://">تخفیفی ترینا </a>
          </div>

          <div className="relative group">
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className=" items-center p-2 border-b-2 border-[#2377ff] flex   border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer  focus:outline-none f"
            >
              <button className="">کمک نیاز دارید؟</button>
              <span className="text-2xl text-gray-500">
                <BiChevronDown />
              </span>
            </div>

            {isOpen && (
              <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute z-10 bg-white py-2 rounded-md shadow-md gap-y-4 "
              >
                <a
                  href="http://"
                  className="block text-center mt-1 px-10 border-b-2 border-[#2377ff]    border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]"
                >
                  Item 1
                </a>
                <a
                  href="http://"
                  className="block text-center mt-1 px-10 border-b-2 border-[#2377ff]    border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]"
                >
                  Item 2
                </a>
                <a
                  href="http://"
                  className="block text-center mt-1 px-10 border-b-2 border-[#2377ff]   border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]"
                >
                  Item 3
                </a>
              </div>
            )}
          </div>
        </div>
        {/* language / currency / country */}
        <div className="ml-6 hidden sm:flex  items-center   ">
          <LanguageDropdown  />
          <CountryDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navigations;
