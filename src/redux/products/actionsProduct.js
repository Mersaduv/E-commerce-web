import {
  FETCH_FAILER_DATA,
  FETCH_PRODUCTS_DATA,
  FETCH_SUCCESS_DATA,
} from "./typeProduct";

import { getAllProducts } from "../../services/getAllProdcuts";
function fetchProduct() {
  return { type: FETCH_PRODUCTS_DATA };
}

function fetchSuccessData(data) {
  return { type: FETCH_SUCCESS_DATA, payload: data };
}

function fetchFailerData(error) {
  return { type: FETCH_FAILER_DATA, payload: error };
}

export const fetchDataProduct = () => {
  return async (dispatch) => {
    dispatch(fetchProduct());

    try {
      const { data } = await getAllProducts();
     
        dispatch(fetchSuccessData(data));
     
    } catch (error) {
      dispatch(fetchFailerData(error.message));
    }
  };
};
