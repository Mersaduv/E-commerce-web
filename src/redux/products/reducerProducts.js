import {
  FETCH_FAILER_DATA,
  FETCH_PRODUCTS_DATA,
  FETCH_SUCCESS_DATA,
} from "./typeProduct";

const initailState = {
  data: [],
  error: "",
  loading: false,
};

const useReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_DATA: {
      return { loading: true };
    }
    case FETCH_SUCCESS_DATA: {
      return { loading: false, data: action.payload, error: "" };
    }
    case FETCH_FAILER_DATA: {
      return { loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

export default useReducer;
