import { useSelector } from "react-redux";

const useSelectData = () => {
  const data = useSelector((state) => state.products);
  return data
};

export default useSelectData;
