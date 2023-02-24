import http from "./httpService";

export function getSinglePageProduct(dataId) {
  return http.get(`/product/${dataId}`);
}
