import { Card } from "@mui/material";
import Product from "./Product";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/data-services";

export default function Products({ products }) {
  const [allProducts, setAllProducts] = useState(products);

  const pathName = window.location.pathname === "/products";

  async function fetchData() {
    const productsObj = await getAllProducts();
    setAllProducts(productsObj.data);
  }

  useEffect(
    function () {
      console.log(pathName);
      if (pathName) {
        fetchData();
      }
    },
    [pathName, allProducts],
  );

  if (!allProducts) {
    return <p>There is no products available</p>;
  }

  return (
    <div className="products grid grid-cols-1 gap-5">
      {allProducts.map((product) => (
        <article key={product.id}>
          <Card variant="outlined">
            <Product key={product.id} {...product} />
          </Card>
        </article>
      ))}
    </div>
  );
}
