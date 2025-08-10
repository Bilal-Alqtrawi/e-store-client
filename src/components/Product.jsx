import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../contexts/useCart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    <article className="bg-white p-3 transition-colors duration-300 dark:bg-zinc-900">
      <h2 className="mb-5 text-3xl font-bold text-gray-700 dark:text-[#e1e1e1]">
        <Link
          to={`/products/${id}`}
          className="transition duration-200 hover:text-[#1976d2] dark:hover:text-indigo-400"
        >
          {title}
        </Link>
      </h2>

      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        {/* Image */}
        <figure className="h-[250px] w-[250px] overflow-hidden rounded-xl bg-gray-50 text-center dark:bg-zinc-800">
          <LazyLoadImage
            src={`/assets/${image}`}
            alt={title}
            effect="blur"
            className="h-full w-full object-cover p-2"
            loading="lazy"
          />
        </figure>

        {/* Product Info */}
        <div className="flex-1 space-y-5 pr-5">
          <div>
            <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">
              Dimensions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {specs?.dimensions}
            </p>
          </div>

          {specs?.capacity && (
            <div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">
                Capacity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {specs.capacity}
              </p>
            </div>
          )}

          {features !== undefined && (
            <div>
              <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">
                Features
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Price & Buttons */}
        <div className="space-y-3 text-center">
          <div className="text-lg font-semibold text-green-700 dark:text-green-400">
            &pound;{price}
          </div>

          <div className="flex flex-col rounded-md bg-vibrant-background p-2 text-sm font-semibold text-gray-800 dark:bg-zinc-800 dark:text-gray-100">
            <label>Stock Level: {stock}</label>
            <label>FREE Delivery</label>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              className="!rounded-xl !bg-vibrant-primary !px-2 text-sm transition dark:!bg-vibrant-primaryDark dark:hover:!bg-orange-700"
              onClick={() => navigate(`/products/${id}`)}
              color="white"
            >
              View Product
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              className="!rounded-xl !border-vibrant-infoLight !px-4 !text-vibrant-infoLight transition hover:!border-vibrant-accent hover:bg-vibrant-accent hover:!text-white"
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
