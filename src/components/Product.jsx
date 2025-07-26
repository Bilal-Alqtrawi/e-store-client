import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../contexts/useCart";

export default function Product({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) {
  const navigate = useNavigate();

  const { addProduct } = useCart();

  return (
    <article className="p-3">
      <h2 className="mb-5 text-3xl font-bold">
        <Link
          to={`/products/${id}`}
          className="transtion duration-200 hover:text-[#1976d2]"
        >
          {title}
        </Link>
      </h2>
      <div className="flex items-center gap-5">
        <figure className="max-w-[22rem]">
          <img src={`/assets/${image}`} alt={title} className="p-2 shadow" />
        </figure>

        <div className="flex-1 space-y-5 pr-5">
          <div className="categort-product-info-dimensions">
            <h2 className="mb-2 font-bold">Dimensions</h2>
            <p className="text-gray-600">{specs.dimensions}</p>
          </div>

          {specs.capacity && (
            <div>
              <h2 className="mb-2 font-bold">Capacity</h2>
              <label className="text-gray-600">{specs.capacity}</label>
            </div>
          )}

          <div>
            <h2 className="mb-2 font-bold">Features</h2>
            <ul className="space-y-2 text-gray-600">
              {features?.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 text-center">
          <div className="categort-product-finance-price font-semibold text-green-700">
            &pound;{price}
          </div>

          <div className="flex flex-col bg-vibrant-background p-2 text-sm font-semibold">
            <label>Stock Level: {stock}</label>
            <label>FREE Delivery</label>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              className="!rounded-xl !px-2 text-sm text-white transition hover:bg-vibrant-primary"
              onClick={() => {
                navigate(`/products/${id}`);
              }}
            >
              View Product
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              className="!rounded-xl !px-4 transition hover:border-vibrant-primary hover:bg-vibrant-primary hover:text-white"
              endIcon={<ShoppingCartIcon className="mr-1 size-5" />}
              onClick={() =>
                addProduct({
                  id,
                  title,
                  image,
                  specs,
                  features,
                  price,
                  stock,
                })
              }
            >
              Add to Basket
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
