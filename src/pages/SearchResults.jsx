import { useDispatch, useSelector } from "react-redux";
import AsideListCategory from "../components/AsideListCategory";
import { BiChevronUp, BiCheckCircle } from "react-icons/bi";
import { BiFilterAlt, BiFilter, BiX } from "react-icons/bi";
import { addCartAction } from "../redux/products/cart/actionAddCart";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import axios from "axios";
const SearchResults = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { categorySlug } = useParams();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);
  console.log(categorySlug);

  useEffect(() => {
    const fetchResults = async () => {
      let response;
      if (categorySlug) {
        response = await axios.get(
          `http://localhost:5000/api/product?category=${categorySlug}`
        );
      } else {
        response = await axios.get(
          `http://localhost:5000/api/product/search?q=${query}`
        );
      }
      console.log(response.data);
      setResults(response.data);
    };
    fetchResults();
  }, [categorySlug, query]);

  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState([
    { name: "مرتبط‌ترین", showCheck: false },
    { name: "پربازدید‌ترین", showCheck: false },
    { name: "جدید‌ترین", showCheck: false },
    { name: "پرفروش‌ترین", showCheck: false },
    { name: "ارزان‌ترین", showCheck: false },
    { name: "گران‌ترین", showCheck: false },
  ]);

  let locations = useLocation();
  const queryS = queryString.parse(locations.search);

  const toggleCheck = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, showCheck: true }
          : { ...item, showCheck: false }
      )
    );
  };
  // const products = useSelector((state) => state.products);
  // const { data } = products;
  // const selectedCategory = useSelector(
  //   (state) => state.categorys.selectedCategory
  // );
  // const SearchResultsProducts =
  //   data && data.filter((product) => product.category === "SearchResults");
  return (
    <div className="flex max-w-6xl mx-auto relative   flex-col sm:flex-col">
      {/* desktop sort  */}
      <div className="px-2 gap-x-4 hidden sm:flex">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleCheck(index)}
            className={`${
              item.showCheck && "text-[#2377ff]"
            } py-3 font-bold flex justify-between items-center cursor-pointer`}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {/* data   */}
      <div className="flex flex-col sm:flex-row">
        {/* desktop filter  */}
        <div className="hidden  sm:block sm:w-48 md:w-auto ">
          <AsideListCategory />
          {/* <hr /> */}
        </div>

        {showFilter && (
          <div className="h-screen bg-gray-100    w-full absolute">
            <AsideListCategory />
            
            <div
              onClick={() => setShowFilter((prev) => !prev)}
              className="-mt-10 cursor-pointer bg-white shadow flex justify-between p-4 items-center"
            >
              {" "}
              <span>مشاهده {results.length} کالا </span>{" "}
              <span>
                {" "}
                <BiChevronUp className={showFilter ? "" : "rotate-180"} />
              </span>
            </div>
          </div>
        )}
        {/* first mobile sort  */}
        {showSort && (
          <div className="h-screen rounded-xl top-7 customiz-shadow bg-gray-100 flex flex-col w-full absolute">
            <div className="flex font-bold text-xl gap-4 items-center  py-1 px-4">
              <span
                onClick={() => setShowSort((prev) => !prev)}
                className="py-2"
              >
                <BiX className="text-4xl " />
              </span>

              <h1>مرتب سازی بر اساس</h1>
            </div>
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleCheck(index)}
                className="border-b mx-4 py-5 cursor-pointer font-bold flex justify-between items-center"
              >
                <span>{item.name}</span>
                {item.showCheck && (
                  <BiCheckCircle className="text-[#2377ff] text-xl" />
                )}
              </div>
            ))}
          </div>
        )}
        {/* first mobile AsideListCategory  */}
        <div className="sm:hidden  ">
          <div className="bg-white px-4 py-2 flex gap-x-2">
            <div className="border cursor-pointer rounded-md  p-1 flex-1 flex items-center justify-between ">
              <div
                onClick={() => setShowSort((prev) => !prev)}
                className="flex text-sm"
              >
                <div>براساس :</div>
                <div>جدید ترین</div>
              </div>

              <div>
                <BiFilter />
              </div>
            </div>
            <div
              onClick={() => setShowFilter((prev) => !prev)}
              className="border cursor-pointer rounded-md  p-1 flex-1 flex items-center justify-between"
            >
              <div className="flex text-sm">
                <div className="ml-1.5">فیلتر ها</div>
                <div>(3)</div>
              </div>

              <div>
                <BiFilterAlt />
              </div>
            </div>
          </div>
        </div>
        {/* tag filters  */}
        <div className="flex sm:hidden  gap-x-2 pr-4 items-center mt-3">
          <div className="rounded border px-2 py-0.5 items-center border-[#2377ff] bg-white flex justify-between">
            <BiX className="text-xl mt-0.5 text-gray-400" />

            <div>Huawie</div>
          </div>
          <div className="rounded border px-2 py-0.5 items-center border-[#2377ff] bg-white flex justify-between">
            <BiX className="text-xl mt-0.5 text-gray-400" />

            <div>Huawie</div>
          </div>
          <div className="rounded border px-2 py-0.5 items-center border-[#2377ff] bg-white flex justify-between">
            <BiX className="text-xl mt-0.5 text-gray-400" />

            <div>64gb</div>
          </div>
        </div>

        {/* products  */}
        <div
          className={`w-full mt-3 ${
            showFilter && showFilter ? "hidden" : "block"
          }`}
        >
          {" "}
          <div className="md:grid sm:gap-3 sm:mt-7  md:grid-cols-2 lg:grid-cols-3">
            {results &&
              results.map((product) => (
                <div
                  key={product._id}
                  className="bg-white border rounded   mx-4 md:w-64 lg:mb-0 mb-8 cursor-pointer hover:shadow-lg"
                >
                  <Link
                    to={`/product/${product._id}`}
                    className="w-full p-4 flex md:flex-col sm:justify-center items-center"
                  >
                    <div className="w-32  ">
                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className="flex flex-col w-full sm:mt-4">
                      <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-semibold whitespace-nowrap">
                          {product.name}
                        </h2>
                        <div className="ml-3 hidden sm02:block text-xs mr-2">
                          {product.description[0].support}
                        </div>
                      </div>
                      <h3 className="text-indigo-700 text-xl font-semibold">
                        {product.price} $
                      </h3>
                      <div className="text-orange-300">rate-review</div>

                      <div
                        className="w-full"
                        onClick={() => dispatch(addCartAction(product))}
                      >
                        <h2 className="text-indigo-700 mt-1 text-base font-semibold  md:hidden">
                          کلیک به سبد خرید
                        </h2>
                        <h2 className="text-indigo-700 text-base font-semibold hidden md:block">
                          کلیک کن تا سبد خرید اضافه شود
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
