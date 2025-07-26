import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

function ProductDetails() {
  const [product, setProduct] = useState({ errorMessage: "", data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isExpended, setIsExpended] = useState(false);

  const { productId } = useParams();

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

  const { title, image, price, description } = product.data;

  function handleExpended() {
    setIsExpended((ex) => !ex);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
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
        className="!grid !grid-cols-[0.5fr_1fr_0.25fr] gap-2"

      >
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
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              mb: 1.5,
              width: "fit-content",
              lineHeight: 1.7,
              fontFamily: "'Cairo', sans-serif",
              maxWidth: "650px",
              fontWeight: "500",
            }}
            className="text-base text-gray-500"
          >
            {!isExpended
              ? String(description).split(" ").slice(0, 100).join(" ")
              : description}
            <Button
              onClick={handleExpended}
              sx={{ textTransform: "capitalize" }}
              variant="text"
              size="small"
              className="transtion"
            >
              {isExpended ? "Less" : "More..."}
            </Button>
          </Typography>
          <Typography variant="h6" color="success">
            Price: ${price}
          </Typography>
        </CardContent>
        <CardActions className="column flex flex-col gap-3">
          <Button
            size="small"
            variant="contained"
            color="primary"
            endIcon={<ShoppingCartIcon className="size-5" />}
          >
            Add to Cart
          </Button>
          <Button size="small" color="secondary">
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProductDetails;
