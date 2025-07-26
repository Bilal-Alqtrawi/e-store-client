import { fetcher } from "../utils";

export function getCategories() {
  return fetcher("categories");
}
export function getProducts(id) {
  return fetcher(`products?catId=${id}`);
}

export function getProductById(id) {
  return fetcher(`products/${id}`);
}

export function getProductsByQuery(query) {
  return fetcher(`products?q=${query}`);
}
