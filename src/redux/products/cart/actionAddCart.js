import { ADDCART, DECREMENT } from "./typeCarts";

export const addCartAction = (cartData) => {
  return { type: ADDCART, payload: cartData };
};
export const decrementAction = (cartData) => {
  return { type: DECREMENT, payload: cartData };
};
