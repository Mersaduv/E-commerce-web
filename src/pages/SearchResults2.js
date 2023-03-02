import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import moduleName from "/Users/Merhsad DEV/tarbar.tar_2";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const { categorySlug } = useParams();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);
  console.log(categorySlug);

  useEffect(() => {
    const fetchResults = async () => {
      let response;
      if (categorySlug) {
        response = await axios.get(
          `http://localhost:5000/api/product?category=${categorySlug}`
        );
      } else {
        response = await axios.get(
          `http://localhost:5000/api/product/search?q=${query}`
        );
      }
      console.log(response.data);
      setResults(response.data);
    };
    fetchResults();
  }, [categorySlug, query]);

  return (
    <div>
      <h2>
        {categorySlug
          ? `Products in ${categorySlug} category`
          : `Search Results for "${query}"`}
      </h2>
      {/* <Outlet /> */}
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            <h3>{result.name}</h3>
            <p>{result.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

// const SearchResults = () => {
//   const location = useLocation();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { categorySlug, query } = useParams();

//   useEffect(() => {
//     const query = new URLSearchParams(location.search).get("q");
//     setSearchQuery(query);
//     setLoading(true);

//     axios
//       .get(`/api/search?q=${query}`)
//       .then((response) => {
//         setSearchResults(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [location.search]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>An error occurred: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Search results for "{searchQuery}"</h2>
//       <ul>
//         {searchResults.map((result) => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
