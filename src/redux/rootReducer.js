import reducerCart from "./products/cart/reducerCart";
import reducerCategory from "./products/categorys/reducerCategorys";
import useReducer from "./products/reducerProducts";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  products: useReducer,
  cart: reducerCart,
  categorys: reducerCategory,
});

export default rootReducer;
