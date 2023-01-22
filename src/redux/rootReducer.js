// import userReducer from "./user/userReducer";

import useReducer from "./products/reducerProducts";

const { combineReducers } = require("redux");
// const { default: cakeReducer } = require("./cake/cakeReducer");
// const { default: iceCreamReducer } = require("./iceCream/iceCreamReducer");

const rootReducer = combineReducers({
  products: useReducer,
});

export default rootReducer;
