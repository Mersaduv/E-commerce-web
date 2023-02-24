import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QuantitySelector from "../components/common/Selector";
import SliderDetail from "../components/sliderDetail/SliderDetail";
import {
  addCartAction,
  decrementAction,
  incrementQuantity,
} from "../redux/products/cart/actionAddCart";
import { getSinglePageProduct } from "../services/getSinglePageProduct";

const DetailPage = () => {
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  // find id product after clicked  and fe  tch single product or show detail
  const [product, setProduct] = useState();
  const id = useParams();
  const productId = id.id;
  useEffect(() => {
    if (productId) {
      const singleProduct = async () => {
        try {
          const { data } = await getSinglePageProduct(productId);
          setProduct(data);
        } catch (error) {
          console.log(error, "checked detailPage");
        }
      };

      singleProduct();
    }
  }, [productId]);

  const handleQuantityChange = (quantity, prod) => {
    // update the cart item with the new quantity
    setCount(parseFloat(quantity));
  };

  const addCartDetail = () => {
    console.log(product);
    dispatch(incrementQuantity(count, product));
  };

  return (
    <div>
      {product && (
        <div className="2xl:container  2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          {/* <!-- Description Div --> */}
          <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-sm w-full  -mt-4 leading-4 text-gray-600">
            Home / Furniture / Wooden Stool
          </p>
          <div className=" flex flex-col md:flex-row-reverse ">
            {/* <!-- Preview Images Div For larger Screen--> */}
            <div className="w-full flex flex-1">
              {/* desktop image detail  */}
              <div className="hidden md:block w-full mr-4">
                <div className=" w-full  bg-gray-100 flex justify-center items-center">
                  <img src={product.image} alt="Wooden Chair Previw" />
                </div>
                <div className=" w-full  grid  sm:grid-cols-4 grid-cols-2 gap-6">
                  <div className="bg-gray-100 flex justify-center items-center py-4">
                    <img src={product.image} alt="Wooden chair - preview 1" />
                  </div>
                  <div className="bg-gray-100 flex justify-center items-center py-4">
                    <img src={product.image} alt="Wooden chair - preview 2" />
                  </div>
                  <div className="bg-gray-100 flex justify-center items-center py-4">
                    <img src={product.image} alt="Wooden chair- preview 3" />
                  </div>
                </div>
              </div>
              {/* first mobile image detail  */}
              <div className="md:hidden w-full  bg-gray-100 flex justify-center items-center">
                <SliderDetail imageId={product} />
              </div>
            </div>
            {/* ------- detail product ------- */}
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                {product.name}
              </h2>
              <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                ${product.price}
              </p>

              <div className="lg:mt-11 mt-10">
                <div className="flex flex-row justify-between">
                  <p className=" font-medium text-base leading-4 text-gray-600">
                    Select quantity
                  </p>
                  <QuantitySelector
                    prod={product}
                    onChange={handleQuantityChange}
                  />
                  <div className="flex  border w-24 rounded justify-center sm:hidden">
                    <button
                      onClick={() => dispatch(decrementAction(product))}
                      className="flex justify-center items-center  w-6 h-6"
                    >
                      -
                    </button>
                    <span className="flex text-black justify-center items-center  border-x w-10 h-6">
                      {count}
                    </span>
                    <button
                      onClick={() => dispatch(addCartAction(product))}
                      className="flex justify-center items-center  w-6 h-6"
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr className=" bg-gray-200 w-full my-2" />
                <div className=" flex flex-row justify-between items-center mt-4">
                  <p className="font-medium text-base leading-4 text-gray-600">
                    Dimensions
                  </p>
                  <svg
                    onClick={() => setRotate(!rotate)}
                    id="rotateSVG"
                    className={
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " +
                      (rotate ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <hr className=" bg-gray-200 w-full mt-4" />
              </div>

              <button
                onClick={addCartDetail}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#2377ff]  py-2 px-4 text-sm font-medium text-white hover:bg-[#2377ffe4] focus:outline-none focus:ring-2 focus:ring-[#2377ff]  focus:ring-offset-2"
              >
                Add to shopping bag
              </button>
            </div>
          </div>

          {/* footer  */}
        </div>
      )}
    </div>
  );
};

export default DetailPage;
