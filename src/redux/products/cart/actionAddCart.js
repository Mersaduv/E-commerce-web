
import { ADDCART, DECREMENT, INCREMENT, QUANTITY_DETAIL } from "./typeCarts";

export const addCartAction = (cartData) => {
  return { type: ADDCART, payload: cartData };
};
export const decrementAction = (cartData) => {
  return { type: DECREMENT, payload: cartData };
};
export const incrementQuantity = (quantity, prod) => {
  return { type: INCREMENT, payload: quantity, product: prod };
};
export const quantityDetail = (quantity, product) => {
  return { type: QUANTITY_DETAIL, payload: quantity, product: product };
};
