import { ADDCART,  DECREMENT, INCREMENT } from "./typeCarts";

export const addCartAction = (cartData) => {
  return { type: ADDCART, payload: cartData };
};
export const decrementAction = (cartData) => {
  return { type: DECREMENT, payload: cartData };
};
export const incrementQuantity = (quantity, prod) => {
  return { type: INCREMENT, payload: quantity, product: prod };
};
