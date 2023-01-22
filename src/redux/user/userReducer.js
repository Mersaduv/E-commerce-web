const {
  FETCH_USER_DATA,
  FETCH_SUCCESS_DATA,
  FETCH_FAILER_DATA,
} = require("./userType");

const initailState = {
  data: [],
  error: "",
  loading: false,
};

const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { loading: true };
    case FETCH_SUCCESS_DATA:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_FAILER_DATA:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default userReducer;
