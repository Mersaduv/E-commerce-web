import { useState } from "react";
import Input from "./common/Input";
import { BiSearch, BiCart } from "react-icons/bi";
import SelectFilter from "./common/SelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryFilter from "./filter/CategoryFilter";
const Navigations = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { data } = products;
  const [dataValue, setData] = useState("");
  // const [filter, setOptions] = useState("");
  const options = [
    { value: "", label: "همه دسته بندی" },
    { value: "tablet-mobile", label: "تبلت و موبایل" },
    { value: "pc-laptop", label: "رایانه و لپتاپ" },
    { value: "clothes", label: "پوشاک" },
    { value: "home-appliances", label: "لوازم خانگی" },
  ];

  const handlerChange = (e) => {
    setData(e.target.value);
  };
  const handleCategoryChange = (category) => {
   
    // use filteredItems to render the items.
  };
  return (
    <div className="bg-white w-full mx-auto border-b px-4">
      <nav className="flex sm:items-center flex-col sm:flex-row justify-between relative mx-auto max-w-6xl">
        <div className="flex flex-row-reverse   justify-between">
          {/* cart / login user first mobile */}
          <div className="flex  sm:hidden">
            <div className="py-3 ">login/signup</div>
            <Link to="/cart">
              <div className="py-3 text-2xl ">
                {" "}
                <BiCart />
              </div>
            </Link>
          </div>

          <div>
            <h1 className="text-xl py-3">Pamir</h1>
          </div>
        </div>
        {/* search Input  */}
        <div className="flex border-2 border-[#3b82f6]  rounded-md overflow-hidden sm:w-1/2">
          <button className="sm:hidden text-gray-400 bg-white -ml-2 -mr-1">
            <BiSearch />
          </button>
          <Input handlerChange={handlerChange} dataValue={dataValue} />
          {/*  select category desktop */}
          <CategoryFilter
            onChange={handleCategoryChange}
            categories={options}
          />
          <button className="hidden sm:block text-xs px-3 bg-[#3b82f6] text-white">
            جستجو
          </button>
        </div>
        {/* cart / login user tablet desktop */}
        <div className="gap-x-2 hidden sm:flex items-center">
          <div className="py-4 ">login/signup</div>
          <Link to="/cart">
            <div className=" text-3xl ">
              {" "}
              <BiCart />
            </div>
          </Link>
        </div>
        {/* first mobile select category  */}
        <div className="flex justify-between gap-x-1 text-xs my-4  text-[#3b76f6] sm:hidden">
          <div className="bg-gray-100 p-2  text-center overflow-ellipsis whitespace-nowrap block min-w-[1px]  rounded-md">
            تبلت و موبایل
          </div>
          <div className="bg-gray-100 p-2  text-center overflow-ellipsis whitespace-nowrap block min-w-[1px]  rounded-md">
            رایانه و لپتاپ
          </div>
          <div className="bg-gray-100 p-2  text-center overflow-ellipsis whitespace-nowrap block min-w-[1px]  rounded-md">
            پوشاک
          </div>
          <div className="bg-gray-100 p-2  text-center overflow-ellipsis whitespace-nowrap block min-w-[1px]  rounded-md">
            لوازم خانگی
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigations;
