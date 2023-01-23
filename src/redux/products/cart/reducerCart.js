import { ADDCART, DECREMENT } from "./typeCarts";
const initialData = {
  cart: [],
  total: 0,
};
const reducerCart = (state = initialData, action) => {
  switch (action.type) {
    case ADDCART: {
      // copy state
      const products = [...state.cart];
      //  find id for  add increment feature and  quantity
      const index = products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index < 0) {
        products.push({ ...action.payload, quantity: 1 });
      } else {
        const productIndex = { ...products[index] };
        productIndex.quantity++;
        products[index] = productIndex;
      }
      return { ...state, cart: products,total:state.total + action.payload.offPrice };
    }
    case DECREMENT: {
      // copy state
      const products = [...state.cart];
      //  find id for  add increment feature and  quantity
      const index = products.findIndex(
        (item) => item._id === action.payload._id
      );
      const productIndex = { ...products[index] };
      if (productIndex.quantity === 1) {
        const filtered = products.filter(
          (item) => item._id !== action.payload._id
        );
        return {
          ...state,
          cart: filtered,
        };
      } else {
        productIndex.quantity--;
        products[index] = productIndex;
        return { ...state, cart: products,total:state.total - action.payload.offPrice };
      }
    }

    default:
      return state;
  }
};

export default reducerCart;
