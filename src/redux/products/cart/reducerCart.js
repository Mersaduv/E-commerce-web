import { ADDCART, DECREMENT, INCREMENT, QUANTITY_DETAIL } from "./typeCarts";
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
      return {
        ...state,
        cart: products,
        total: state.total + action.payload.offPrice,
      };
    }
    case DECREMENT: {
      const products = [...state.cart];
      const index = products.findIndex(
        (item) => item._id === action.payload._id
      );
      const product = products[index];
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      if (updatedProduct.quantity === 0) {
        const filtered = products.filter(
          (item) => item._id !== action.payload._id
        );
        return {
          ...state,
          cart: filtered,
          total: state.total - action.payload.offPrice,
        };
      } else {
        products[index] = updatedProduct;
        const updatedTotal = state.total - action.payload.offPrice;
        return {
          ...state,
          cart: products,
          total: updatedTotal,
        };
      }
    }

    case INCREMENT: {
      const products = [...state.cart];
      const index = products.findIndex(
        (item) => item._id === action.product._id
      );
      if (index < 0) {
        const product = action.product;
        const productIndex = state.cart.findIndex(
          (item) => item._id === product._id
        );
        if (productIndex >= 0) {
          // product is already in cart, update quantity
          const updatedCart = [...state.cart];
          if (updatedCart[productIndex].quantity) {
            updatedCart[productIndex].quantity += action.payload;
          } else {
            updatedCart[productIndex].quantity = action.payload;
          }
          return {
            ...state,
            cart: updatedCart,
            total: state.total + updatedCart[productIndex].offPrice,
          };
        } else {
          // product is not yet in cart, add it
          const updatedProduct = { ...product, quantity: action.payload };

          return {
            ...state,
            cart: [...state.cart, updatedProduct],
            total: state.total + updatedProduct.offPrice,
          };
        }
      }
      const product = products[index];
      const updatedProduct = { ...product, quantity: action.payload };
      products[index] = updatedProduct;
      const previousPrice = product.offPrice * product.quantity;
      const updatedPrice = updatedProduct.offPrice * updatedProduct.quantity;
      const updatedTotal = state.total - previousPrice + updatedPrice;
      return {
        ...state,
        cart: products,
        total: updatedTotal,
      };
    }

    case QUANTITY_DETAIL: {
      // copy state
      const products = [...state.cart];
      //  find id for  add increment feature and  quantity
      const index = products.findIndex(
        (item) => item._id === action.product._id
      );
      const productIndex = { ...products[index] };
      productIndex.quantity = action.payload;
      products[index] = productIndex;

      return {
        ...state,
        cart: products,
        total: (state.total += action.product.offPrice),
      };
    }
    default:
      return state;
  }
};

export default reducerCart;
