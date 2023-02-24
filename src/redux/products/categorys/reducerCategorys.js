import { CATEGORY_FILTER, SEARCH_RESULT } from "../typeProduct";

const initailState = {
  categories: [
    "All",
    "tablet-mobile",
    "pc-laptop",
    "clothes",
    "home-appliances",
  ],
  selectedCategory: "All",
  query: "",
};

const reducerCategory = (state = initailState, action) => {
  switch (action.type) {
    case CATEGORY_FILTER: {
      return { ...state, selectedCategory: action.payload };
    }
    case SEARCH_RESULT: {
      return { ...state, query: action.value };
    }
    default:
      return state;
  }
};

export default reducerCategory;
