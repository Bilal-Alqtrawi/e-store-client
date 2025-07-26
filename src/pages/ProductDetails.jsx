import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/data-services";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Loading from "../components/Loading";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { useCart } from "../contexts/useCart";

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 15px;
`;

/* const ProductImageContainer = styled.img`
  width: "100%"
  height: "100%"
`; 
*/

const ProductDescription = styled.div`
  grid-column: 1 / -1;
`;

function ProductDetails() {
  const [product, setProduct] = useState({ errorMessage: "", data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isExpended, setIsExpended] = useState(false);

  const { productId } = useParams();

  const context = useCart();
  console.log(context);

  const { state, addProduct } = context;

  console.log(state);

  useEffect(
    function () {
      setIsLoading(true);
      const fetchData = async () => {
        const res = await getProductById(productId);
        setProduct(res);
        setIsLoading(false);
      };

      fetchData();
    },
    [productId],
  );

  if (isLoading) {
    return <Loading />;
  }

  const { id, title, image, specs, features, price, description } =
    product.data;

  function handleExpended() {
    setIsExpended((ex) => !ex);
  }

  // For read <b> in description in db.json
  const createMarkUp = () => {
    return {
      __html: isExpended ? description : String(description).slice(0, 100),
    };
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Card
          sx={{
            // display: "flex",
            alignItems: "center",
            flexGrow: 1,
            boxShadow: 3,
            p: "10px",
            borderRadius: 4,
          }}
          className="!grid !grid-cols-[0.7fr_1fr_0.3fr] gap-2"
        >
          <ProductTitle>
            <h2 className="mb-5">
              <Link
                to={`.`}
                className="transtion duration-200 hover:text-[#1976d2]"
              >
                {title}
              </Link>
            </h2>
          </ProductTitle>
          {/* Product Image */}
          <CardMedia
            component="img"
            sx={{ objectFit: "cover" }}
            image={`/assets/${image}`}
            alt={title}
            className="p-5"
          />

          {/* Product Content */}
          <CardContent sx={{ padding: "8px" }}>
            <Typography component="div" className="space-y-5 pr-5">
              <div className="categort-product-info-dimensions">
                <h2 className="mb-2 font-bold">Dimensions</h2>
                <p className="text-gray-600">{specs?.dimensions}</p>
              </div>

              {specs?.capacity && (
                <div>
                  <h2 className="mb-2 font-bold">Capacity</h2>
                  <label className="text-gray-600">{specs.capacity}</label>
                </div>
              )}

              <Typography component="div">
                <h2 className="mb-2 font-bold">Features</h2>
                <ul className="space-y-2 text-gray-600">
                  {features?.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </Typography>
            </Typography>
          </CardContent>
          <CardActions className="flex h-full flex-col justify-evenly gap-3 self-start">
            <Typography
              variant="h6"
              color="success"
              fontWeight="bold"
              fontSize="30px"
            >
              ${price}
            </Typography>
            <Typography component="div" textAlign="center">
              <Button
                size="small"
                variant="contained"
                color="primary"
                endIcon={<ShoppingCartIcon className="size-5" />}
                onClick={() =>
                  addProduct({
                    id,
                    title,
                    image,
                    specs,
                    features,
                    price,
                    description,
                  })
                }
              >
                Add to Basket
              </Button>
            </Typography>
          </CardActions>

          <Typography component="div" className="col-span-full">
            <ProductDescription
              dangerouslySetInnerHTML={createMarkUp()}
            ></ProductDescription>
            <Button onClick={handleExpended}>
              {isExpended ? "Less" : "More..."}
            </Button>
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default ProductDetails;
