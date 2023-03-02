// import { useDispatch, useSelector } from "react-redux";
// // import { useHistory } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import {
//   searchValue,
//   selectCategory,
// } from "../../redux/products/categorys/actionSelect";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import queryString from "query-string";
// import { useEffect, useState } from "react";

// const InputSearch = () => {
//   const [querys, setQuery] = useState("");
//   const Navigates = useNavigate();

//   const dispatch = useDispatch();
//   const { query } = useSelector((state) => state.categorys);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(searchValue(querys));
//     Navigates(`/search/?q=${query}`);
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex border-2 relative border-[#2377ff]   bg-white  rounded-md  sm:w-1/2"
//     >
//       <button type="submit" className=" text-gray-400   ">
//         <BiSearch />
//       </button>
//       <div className="w-full   flex items-center px-1 ">
//         <div className=" border-none outline-none text-sm w-full">
//           <input
//             className="w-full h-8 border-none focus:outline-none"
//             type="text"
//             placeholder="کالای خود را بنویسید"
//             value={querys}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default InputSearch;
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import {
  searchValue,
  selectCategory,
} from "../../redux/products/categorys/actionSelect";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();
  const { categorySlug } = useParams();
  console.log(categorySlug, pathname);
  const handleSelectCategory = (event) => {
    console.log(event.target.value);
    navigate(`/search/category-${event.target.value}/`);
    dispatch(selectCategory(event.target.value));
  };

  const categories = useSelector((state) => state.categorys.categories);
  const selectedCategory = useSelector(
    (state) => state.categorys.selectedCategory
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = queryString.stringify({ q: query });
    const url = `/search/?${values}`;
    dispatch(searchValue(query));
    navigate(url);
  };

  return (
    <div className="flex justify-between border-2 relative border-[#2377ff] bg-white rounded-md sm:w-1/2">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <Link
          type="submit"
          to={`/search?q=${query}`}
          className="text-gray-400 text-2xl mr-1"
        >
          <BiSearch />
        </Link>

        <div className="w-full flex items-center px-1">
          <div className="border-none outline-none text-sm w-full">
            <input
              className="w-full h-8 border-none focus:outline-none"
              type="text"
              placeholder="کالای خود را بنویسید"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </form>
      <select
        dir="ltr"
        className="hidden cursor-pointer p-1 text-xs  sm:block w-1/3
      "
        value={selectedCategory}
        onChange={handleSelectCategory}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSearch;
