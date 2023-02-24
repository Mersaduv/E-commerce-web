import {
  CATEGORY_FILTER,
  SEARCH_PRODUCTS,
  SEARCH_RESULT,
} from "../typeProduct";

export function selectCategory(category) {
  return {
    type: CATEGORY_FILTER,
    payload: category,
  };
}
export function searchValue(query) {
  return {
    type: SEARCH_RESULT,
    value: query,
  };
}
// export function searchResult(results) {
//   return {
//     type: SEARCH_RESULT,
//     payload: results,
//   };
// }
