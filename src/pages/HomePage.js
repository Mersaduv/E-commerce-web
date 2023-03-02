import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "../components/sliders/Slider";
import image from "../image/images.png";
import homeOutdoor from "../image/canape.jpg";
import electronicGadgetImage from "../image/electronicsG.jpg";
// import { Client, storefrontAccessToken } from "@shopify/buy-sdk";
import { fetchDataProduct } from "../redux/products/actionsProduct";
import { addCartAction } from "../redux/products/cart/actionAddCart";
import { GiAutoRepair, GiClothes } from "react-icons/gi";
import { MdHomeRepairService, MdMoreVert } from "react-icons/md";
import { BiCar, BiHomeSmile, BiArrowBack } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
import { HiComputerDesktop } from "react-icons/hi2";
import { useAuthState } from "../context/AuthProvider";
const HomePage = () => {
  const authUser = useAuthState();
  console.log(authUser);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data } = products;
  const selectedCategory = useSelector(
    (state) => state.categorys.selectedCategory
  );
  const query = useSelector((state) => state.categorys.query);
  useEffect(() => {
    dispatch(fetchDataProduct());
    // const client = Client.buildClient({
    //   domain: "ffd59c.myshopify.com",
    //   storefrontAccessToken: "6bae6efd7a09c20959446bd5e8522eb2",
    // });
  }, [dispatch]);

  const filteredProducts =
    data &&
    data.filter((product) => {
      const categoryMatches =
        selectedCategory === "All" || product.category === selectedCategory;
      const searchTermMatches = product.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return categoryMatches && searchTermMatches;
    });

  const homeAppliancesProducts =
    data && data.filter((product) => product.category === "homeappliances");

  const electronicGadget =
    data && data.filter((product) => product.category === "tablet-mobile");

  //  tablet-mobile
  // #2377ff
  return (
    <div className="max-w-6xl mx-auto   flex flex-col sm:py-5 w-full ">
      {/* SIDBAR  */}
      <div className="flex w-full   gap-x-2 bg-white h-96 p-3">
        {/* side right  */}
        <div className="hidden sm:flex   h-80 w-48">
          <div className="w-full">
            {/* user welcome */}
            <div className="bg-blue-100 rounded-md flex flex-col py-3 ">
              {/* data user by set  */}
              <div className="flex flex-row  items-center gap-x-2 mr-2">
                {/* profile user */}
                <div className="rounded-full h-10 w-10 ">
                  <img
                    className="rounded-full"
                    src={image}
                    alt="Profile-User"
                  />
                </div>
                {/*hi and get start by user  */}
                <div className="flex flex-col">
                  <div className="flex ">
                    <h1>سلام</h1> ,
                    <span className="mr-1">
                      {authUser ? authUser.name : "کاربر محترم"}
                    </span>
                  </div>
                  <h1>برو بریم...</h1>
                </div>
              </div>
              {/* login / reg */}
              <div className="mt-2 flex flex-col gap-y-2">
                <Link
                  className="flex items-center justify-center pt-0.5 pb-1 mx-1 bg-[#2377ff] rounded-md text-white"
                  to="/signup"
                >
                  <button>عضویت</button>
                </Link>
                <Link
                  className="flex items-center justify-center pt-0.5 pb-1 mx-1 bg-white border rounded-md text-[#2377ff]"
                  to="/login"
                >
                  <button>ورود</button>
                </Link>
              </div>
            </div>
            {/* GET $ OFF  */}
            <div className="bg-[#F38332] mt-2.5  text-white rounded-md flex flex-col p-3 ">
              <h1>دریافت 10 تومن تخفیف</h1>
              <h1>برای یک تامین کننده</h1>
              <h1>جدید </h1>
            </div>
            {/* send quotes  */}
            <div className="bg-[#55BDC3] mt-2.5  text-white rounded-md flex flex-col p-3 ">
              <h1>ارسال نقل قول با</h1>
              <h1> تامین کننده</h1>
              <h1>ترجیحی </h1>
            </div>
          </div>
        </div>
        {/* side center */}
        <div className="w-full sm:pt-4 md:pt-0 sm:h-80 sm:w-2/3 ">
          <Slider />
        </div>

        {/* side left  */}
        <div className="hidden md2:flex flex-1 h-80 w-72 bg-white">
          <div className="flex flex-col text-sm w-full gap-y-3">
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              ماشین ها
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              پوشاک و لباس
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              لوازم خانگی
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              رایانه رومیزی
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              لوازم تعمیری
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              ورزشی
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              لوازم مکانیکی
            </div>
            <div className="w-full py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              ادامه دسته بندی....
            </div>
          </div>
        </div>
        {/* first mobile and tablet  */}
        <div className="hidden sm:flex  md:hidden justify-center items-center h-80  bg-white">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <BiCar />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <GiClothes />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <BiHomeSmile />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <HiComputerDesktop />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <MdHomeRepairService />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <FcSportsMode />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <GiAutoRepair />
            </div>
            <div className="w-full text-xl py-1 pr-1 rounded hover:font-bold hover:bg-[#E5F1FF]">
              <MdMoreVert />
            </div>
          </div>
        </div>
      </div>
      {/* rows overflow  */} {/* Deals Offer  */}
      <div className="flex sm:text-base  text-sm sm:flex-row flex-col   bg-white mt-5 border sm:items-center lg:justify-between justify-between">
        {/* Deals Offer  */}
        <div className="flex justify-between items-center sm:block  py-4 sm:-mt-14  px-4">
          <div className="whitespace-nowrap -mr-1 ">
            <h1 className="font-bold">فرصت محدود است</h1>
            <h2 className="text-gray-500 ">پایان تخفیفات تا ...</h2>
          </div>
          <div className="flex gap-x-1 mr-1  sm:mt-3">
            <div className="bg-neutral-600 p-1 w-10 rounded text-white flex flex-col items-center justify-center">
              <span className="font-bold text-xs">56</span>
              <span className="text-xs">ثانیه</span>
            </div>
            <div className="bg-neutral-600 p-1 w-10 rounded text-white flex flex-col items-center justify-center">
              <span className="font-bold text-xs">56</span>
              <span className="text-xs">ثانیه</span>
            </div>
            <div className="bg-neutral-600 p-1 w-10 rounded text-white flex flex-col items-center justify-center">
              <span className="font-bold text-xs">56</span>
              <span className="text-xs">ثانیه</span>
            </div>
            <div className="bg-neutral-600 p-1 w-10 rounded text-white flex flex-col items-center justify-center">
              <span className="font-bold text-xs">56</span>
              <span className="text-xs">ثانیه</span>
            </div>
          </div>
        </div>
        <div className="flex overflow-auto -mr-8 sm:mr-0">
          {data &&
            data.map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="border-r w-44 mx-auto cursor-pointer hover:shadow-lg"
              >
                {product.discount > 0 && (
                  <div
                  // key={product._id}
                  >
                    {/* mx-2 border w-72 flex flex-col bg-white justify-center lg:mb-0 mb-8 cursor-pointer hover:shadow-lg max-h-96 */}
                    <div className="bg-red-100 ">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-24 sm:h-24"
                      />
                    </div>
                    <div className=" flex items-center flex-col px-4 justify-center my-4 gap-y-1">
                      <div className="flex items-center ">
                        <h2 className=" text-sm whitespace-nowrap font-semibold">
                          {product.name}
                        </h2>
                      </div>

                      <div className="bg-red-200 py-1.5 px-6 rounded-full">
                        <p className="text-xs text-red-700">
                          {product.discount}%
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))}
        </div>
      </div>
      {/* Categories in order */}
      <div className="mt-6  md:overflow-hidden">
        {/* row 1 */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between  bg-white">
          {/* img  */}
          <Link to="/home-appliances">
            <div
              className="bg-cover hidden sm:block  p-3 bg-center  md:w-52 lg:w-[300px] h-[247px]"
              style={{ backgroundImage: `url(${homeOutdoor})` }}
            >
              <div className="bg-[#090dfb31]  p-2 w-full h-full">
                <div className="w-24   whitespace-pre-wrap    text-white font-bold">
                  لوازم خانگی و فضای باز
                </div>
                <button className="bg-white py-1 mt-4  top-20 px-2 text-sm rounded-md hover:bg-slate-100">
                  منبع در حال حاضر
                </button>
              </div>
            </div>

            <div className="text-blue-600 text-2xl gap-x-2 border-b py-4 px-4 flex items-center sm:hidden">
              <button className="bg-white text-lg mb-1   rounded-md">
                منبع در حال حاضر
              </button>
              <BiArrowBack className="font-bold mt-1" />
            </div>
          </Link>

          {/* descriptions */}
          <div className=" sm:h-[247px] w-full sm:overflow-hidden flex  sm:grid  overflow-x-auto grid-cols-6 sm:grid-cols-3 md2:grid-cols-4 md2:grid-rows-2">
            {homeAppliancesProducts &&
              homeAppliancesProducts
                .slice(0, 8) // extract the first 8 elements
                .map((product) => (
                  <Link
                    className="border-[0.5px] hover:shadow-md p-2   w-full"
                    to={`/product/${product._id}`}
                    key={product._id}
                  >
                    <div className="sm:w-full flex flex-col-reverse justify-center sm:flex-row sm:justify-between sm:py-4   w-[140px]  cursor-pointer ">
                      <div className=" flex flex-col justify-center">
                        <h1 className="whitespace-nowrap text-center text-sm lg:text-base ">
                          {" "}
                          {product.name}
                        </h1>
                        <div className="flex gap-x-2 w-full justify-center sm:flex-col mt-2 text-sm text-gray-500">
                          <span>فقط</span> <span>{product.price} تومان</span>
                        </div>
                      </div>
                      <div className="mt-3 sm:w-20  flex justify-center">
                        <img
                          className=" h-24 sm:h-16"
                          src={product.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
        {/* row 2  */}
        <div className="flex mt-6 flex-col-reverse sm:flex-row sm:justify-between  bg-white">
          {/* img  */}
          <Link to="/electronics-Gadgets">
            <div
              className="bg-cover hidden sm:block  p-3 bg-center  md:w-52 lg:w-[300px] h-[247px]"
              style={{ backgroundImage: `url(${electronicGadgetImage})` }}
            >
              <div className="bg-[#090dfb31]  p-2 w-full h-full">
                <div className="w-24   whitespace-pre-wrap    text-white font-bold">
                  گجت ها و بروز ترین های دنیا
                </div>
                <button className="bg-white py-1 mt-4  top-20 px-2 text-sm rounded-md hover:bg-slate-100">
                  منبع در حال حاضر
                </button>
              </div>
            </div>

            <div className="text-blue-600 text-2xl gap-x-2 border-b py-4 px-4 flex items-center sm:hidden">
              <button className="bg-white text-lg mb-1   rounded-md">
                منبع در حال حاضر
              </button>
              <BiArrowBack className="font-bold mt-1" />
            </div>
          </Link>

          {/* descriptions */}
          <div className="h- sm:h-[247px] w-full sm:overflow-hidden flex  sm:grid  overflow-x-auto grid-cols-4 sm:grid-cols-3 md2:grid-cols-4 md2:grid-rows-2">
            {electronicGadget &&
              electronicGadget
                .slice(0, 8) // extract the first 8 elements
                .map((product) => (
                  <Link
                    className="border-[0.5px] hover:shadow-md p-2 "
                    to={`/product/${product._id}`}
                    key={product._id}
                  >
                    <div className=" sm:w-full flex flex-col-reverse justify-center sm:flex-row sm:justify-between sm:py-4   w-[140px]  cursor-pointer ">
                      <div className="flex flex-col justify-center">
                        <h1 className="whitespace-nowrap text-center text-xs lg:text-sm ">
                          {" "}
                          {product.name}
                        </h1>
                        <div className="flex gap-x-2 w-full justify-center sm:flex-col mt-2 text-sm text-gray-500">
                          <span>فقط</span> <span>{product.price} تومان</span>
                        </div>
                      </div>
                      <div className="mt-3 sm:w-20  flex justify-center">
                        <img
                          className=" h-24 sm:h-16"
                          src={product.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
      {/* <AsideListCategory /> */}
      {/* fetch All products  */}
      {/* <div>
        <h1 className=" p-5">همه محصولات :</h1>
        <div className="sm:flex mx-2 grid grid-cols-2 gap-4 flex-wrap overflow-auto items-center lg:justify-between justify-center">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="  sm:mx-2 mx-auto sm:w-72 lg:mb-0 mb-8 cursor-pointer hover:shadow-lg"
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
      </div> */}
    </div>
  );
};

export default HomePage;
