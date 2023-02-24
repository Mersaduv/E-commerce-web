// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuantitySelector from "../components/common/Selector";
import { useAuthState } from "../context/AuthProvider";
// import Selector from "../components/common/Selector";
import {
  addCartAction,
  decrementAction,
  incrementQuantity,
} from "../redux/products/cart/actionAddCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.cart);
  const totals = useSelector((state) => state.cart.total);
  const { cart } = dataCart;
  const handleQuantityChange = (quantity, prod) => {
    // update the cart item with the new quantity
    dispatch(incrementQuantity(quantity, prod));
  };

  return (
    <div className="flex gap-4 justify-between  mt-5 flex-col sm:flex-row px-4">
      <div className="flex flex-1 flex-col bg-white ">
        {!cart.length && (
          <div>
            <Link to="/" className="text-[#2377ff]">
              یک سر بزن به فروشگاه
            </Link>
          </div>
        )}
        {cart &&
          cart.map((product) => (
            <div
              key={product._id}
              className="flex border-b p-2 gap-y-4 flex-col sm:flex-row "
            >
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-20 h-20 border shadow"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="flex flex-col flex-1 w-40">
                  <h1 className="text-sm text-ellipsis whitespace-no-wrap overflow-hidden text-overflow-ellipsis">
                    {product.name}
                  </h1>
                  <div className="flex flex-col mt-0.5 text-gray-400 text-sm">
                    <span className="text-xs">
                      {product.description[1].support &&
                        product.description[1].support}
                    </span>
                    <span className="text-xs">
                      {product.description[2]
                        ? product.description[2].support
                        : " "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between sm:justify-end sm:w-full flex-row-reverse sm:flex-row ">
                <div className="flex flex-col gap-y-3 ml-1">
                  <h1 className="text-center">
                    {product.price * product.quantity} تومان
                  </h1>

                  <QuantitySelector
                    prod={product}
                    onChange={handleQuantityChange}
                  />
    
                </div>
                {/* quantity first mobile  */}
                <div className="flex  border w-24 rounded justify-center sm:hidden">
                  <button
                    onClick={() => dispatch(decrementAction(product))}
                    className="flex justify-center items-center  w-6 h-6"
                  >
                    -
                  </button>
                  <span className="flex justify-center items-center  border-x w-10 h-6">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addCartAction(product))}
                    className="flex justify-center items-center  w-6 h-6"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <SummaryCart cart={cart} total={totals} />
    </div>
  );
};

export default CartPage;

export const SummaryCart = ({ cart, total }) => {
  const orginalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  const authState = useAuthState();
  // console.log(authState);
  return (
    <div className="sm:w-60 w-full  px-2.5 py-2 border shadow bg-white">
      <div className=" my-1 text-sm flex justify-between">
        قیمت کل : <p className="text-gray-500">{orginalPrice}</p>
      </div>
      <div className=" my-1 text-sm flex justify-between">
        مبلغ تخفیف : <p className="text-red-500">{orginalPrice - total}</p>
      </div>
      <div className=" my-1 text-sm flex justify-between">
        مالیات افزوده : <p className="text-gray-500">0</p>
      </div>
      <hr className="my-2" />
      <div>مبلع کل پرداخت : {total}</div>
      <Link to={authState ? "/checkout" : "/login?redirect=/checkout"}>
        <button className=" sm:bg-green-500 bg-[#3b82f6] text-white w-full py-1.5 rounded-md my-4">
          ادامه پرداخت ({cart.length})
        </button>
      </Link>
    </div>
  );
};
