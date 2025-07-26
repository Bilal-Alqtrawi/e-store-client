import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/data-services";
import Products from "./Products";
import Loading from "./Loading";

function Category() {
  const [products, setProducts] = useState({ errorMessage: "", data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(
    function () {
      setIsLoading(true);
      const fetchData = async () => {
        const res = await getProducts(categoryId);
        setProducts(res);
        setIsLoading(false);
      };

      fetchData();
    },
    [categoryId],
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">Products</h1>
      {products?.errorMessage && <p>Error: {products.errorMessage}</p>}
      {products?.data && <Products products={products.data} />}
    </>
  );
}

export default Category;
