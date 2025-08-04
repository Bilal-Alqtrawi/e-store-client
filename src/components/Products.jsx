import { Card } from "@mui/material";
import Product from "./Product";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/data-services";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

export default function Products({ products }) {
  const [allProducts, setAllProducts] = useState(products);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByValue = searchParams.get("sortBy") || "order";
  const [sortBy, setSortBy] = useState(sortByValue);

  const [field, direction] = sortBy.split("-");

  const pathName = window.location.pathname === "/products";

  useEffect(
    function () {
      async function fetchData() {
        const productsObj = await getAllProducts();
        setAllProducts(productsObj.data);
      }
      if (pathName) {
        fetchData();
      }
    },
    [pathName, allProducts],
  );

  function handleSortBy(e) {
    let value = e.target.value;
    setSortBy(value);
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  if (!allProducts) return <p>There is no products available</p>;

  let sortedProducts;

  if (field === "price") {
    sortedProducts = [...allProducts].sort((a, b) =>
      direction !== "asc" ? b.price - a.price : a.price - b.price,
    );
  } else if (field === "stock") {
    sortedProducts = [...allProducts].sort((a, b) =>
      direction !== "asc" ? b.stock - a.stock : a.stock - b.stock,
    );
  } else if (field === "name") {
    sortedProducts = [...allProducts].sort((a, b) =>
      direction !== "asc"
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title),
    );
  } else if (sortBy === "order") {
    sortedProducts = [...allProducts];
  }

  return (
    <>
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold tracking-wide text-gray-800">
          Products
        </h1>
        <SortBy sortBy={sortBy} handleSortBy={handleSortBy} />
      </div>
      <div className="products grid grid-cols-1 gap-5">
        {sortedProducts?.map((product) => (
          <article key={product.id}>
            <Card variant="outlined">
              <Product key={product.id} {...product} />
            </Card>
          </article>
        ))}
      </div>
    </>
  );
}
