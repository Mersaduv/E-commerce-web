import { useDispatch, useSelector } from "react-redux";
import { searchValue } from "../../redux/products/categorys/actionSelect";

const InputSearch = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.categorys);

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(searchValue(value));
  };
  return (
    <div className="w-full   flex items-center px-1 ">
      <div className=" border-none outline-none text-sm w-full">
        <input
          className="w-full h-8 border-none focus:outline-none"
          type="text"
          placeholder="کالای خود را بنویسید"
          onChange={handleInputChange}
          value={query}
        />
      </div>
    </div>
  );
};

export default InputSearch;
