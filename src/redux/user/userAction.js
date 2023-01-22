import { getAllContact } from "../../services/getAllContact";
import {
  FETCH_USER_DATA,
  FETCH_SUCCESS_DATA,
  FETCH_FAILER_DATA,
} from "./userType";

function fetchDataUser() {
  return { type: FETCH_USER_DATA };
}

function fetchSuccessData(user) {
  return { type: FETCH_SUCCESS_DATA, payload: user };
}

function fetchFailerData(error) {
  return { type: FETCH_FAILER_DATA, payload: error };
}

export const fetchUser = () => {
  return async function (dispatch) {
    // dispatch(fetchDataUser());
    dispatch(fetchDataUser());
    try {
      const res = await getAllContact();
      const datas = res.data;
      dispatch(fetchSuccessData(datas));
    } catch (error) {
      dispatch(fetchFailerData(error.message));
    }
  };
};
