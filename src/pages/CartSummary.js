import { useDispatch, useSelector } from "react-redux";
import {
  addCartAction,
  decrementAction,
} from "../redux/products/cart/actionAddCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.cart);
  const totals = useSelector((state) => state.cart.total);
  const { cart } = dataCart;
  return (
    <div className="flex gap-4 justify-between flex-col sm:flex-row px-4">
      <div className="flex flex-1 flex-col bg-white ">
        {cart &&
          cart.map((product) => (
            <div
              key={product._id}
              className="flex border-b py-2 gap-y-4 flex-col sm:flex-row "
            >
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-20 h-20"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="flex flex-col">
                  <h1>{product.name}</h1>
                  <div className="flex flex-col mt-0.5 text-gray-400 text-sm">
                    <span>{product.description[1].support}</span>
                    <span>
                      {" "}
                      {product.description[2]
                        ? product.description[2].support
                        : " "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-row-reverse ">
                <h1>تومان : {product.price}</h1>
                <div className="flex  border w-24 rounded justify-center">
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
  const orginalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  return (
    <div className="sm:w-48 w-full  px-2.5 py-2 border bg-white">
      <div className=" my-1 text-sm flex justify-between">
        قیمت کل : <p className="text-gray-500">{orginalPrice}</p>
      </div>
      <div className=" my-1 text-sm flex justify-between">
        مبلغ تخفیف : <p className="text-red-500">{total - orginalPrice}</p>
      </div>
      <div className=" my-1 text-sm flex justify-between">
        مالیات افزوده : <p className="text-gray-500">0</p>
      </div>
      <hr className="my-2" />
      <div>مبلع کل پرداخت : {total}</div>

      <button className=" sm:bg-green-500 bg-[#3b82f6] text-white w-full py-1.5 rounded-md my-4">
        ادامه پرداخت ({cart.length})
      </button>
    </div>
  );
};
