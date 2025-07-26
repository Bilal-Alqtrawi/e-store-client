import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProductsByQuery } from "../services/data-services";
import Products from "./Products";

export default function SearchResults() {
  const [products, setProducts] = useState({ errorMessage: "", data: [] });

  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");

  useEffect(
    function () {
      if (!query) return;

      async function fetchData() {
        setProducts({ errorMessage: "", data: [] });
        const resObj = await getProductsByQuery(query);

        setProducts(resObj);
      }
      fetchData();
    },
    [query],
  );

  if (products.data.length === 0) return <p>No results found</p>;

  return <Products products={products.data} />;
}
