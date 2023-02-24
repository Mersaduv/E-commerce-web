import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const httpForm = {
  post: axios.post
};
export default httpForm;
