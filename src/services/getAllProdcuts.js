import http from "./httpService";

export function getAllProducts() {
  return http.get("/product");
}
