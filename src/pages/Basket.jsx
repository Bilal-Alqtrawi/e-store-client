import { Button, Typography } from "@mui/material";
import { useCart } from "../contexts/useCart";
import styled, { css } from "styled-components";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Navigate, useNavigate } from "react-router-dom";

const BasketContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
`;

const BasketTable = styled.div`
  display: grid;
  grid-column: 1 / -1; // 1 / span 3; take full columns
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  align-items: center;
`;

const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
    `}
  grid-column: 1 / span 2;
  padding-bottom: 20px;
  font-size: 25px;
  font-weight: 500;
`;

const BasketButton = styled.button`
  ${(props) =>
    props.work === "inc" &&
    css`
      margin-right: 0.5rem;
      :hover {
        color: #ff8c00;
      }
    `}
  ${(props) =>
    props.work === "dec" &&
    css`
      margin-right: 0.5rem;
      :hover {
        color: #dc2626;
      }
    `}
  ${(props) =>
    props.work === "remove" &&
    css`
      :hover {
        color: #dc2626;
      }
    `}
`;

BasketHeader.defaultProps = {
  as: "h2",
};

function Basket() {
  const { items, clearBasket, totalPrice } = useCart();

  const navigate = useNavigate();

  return (
    <BasketContainer>
      <BasketTitle>Shopping Basket</BasketTitle>
      <Button
        variant="contained"
        size="medium"
        sx={{ textTransform: "capitalize" }}
        color="warning"
        className="h-[36px]"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
      <BasketTable>
        <BasketHeader>
          <span className="font-bold">Item</span>
          <span className="font-bold">Quantity</span>
          <span className="font-bold">Price</span>
        </BasketHeader>

        <BasketHeaderLine />

        {items.length > 0 ? (
          <CartItems />
        ) : (
          <Typography
            variant="subtitle1"
            component="p"
            paddingBottom={1}
            textAlign="center"
            fontWeight="600"
            fontSize={18}
            className="text-gray-600"
          >
            The Basket is currently empty
          </Typography>
        )}

        <BasketHeaderLine />
        {totalPrice > 0 && (
          <div className="flex items-center justify-between">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={clearBasket}
            >
              Clear
            </Button>

            <div>
              <span className="font-semibold">Total Price:</span>
              <span className="font-bold text-green-600"> ${totalPrice}</span>
            </div>
          </div>
        )}
      </BasketTable>
    </BasketContainer>
  );
}

function CartItems() {
  const { items } = useCart();
  return items.map((cart) => <CartItem key={cart.id} cart={cart} />);
}
function CartItem({ cart }) {
  const navigate = useNavigate();

  const { incQuantity, decQuantity, removeProduct } = useCart();

  return (
    <BasketHeader className="pb-2 text-gray-500" key={cart.id}>
      <p
        className="w-fit cursor-pointer transition hover:text-black"
        onClick={() => navigate(`/products/${cart.id}`)}
      >
        {cart?.title}
      </p>
      <div className="flex items-center">
        <span className="block w-8 text-lg font-semibold">
          {cart?.quantity}
        </span>

        <BasketButton work="inc" onClick={() => incQuantity(cart)}>
          <PlusCircleIcon width={28} height={28} />
        </BasketButton>

        {cart.quantity > 1 && (
          <BasketButton work="dec" onClick={() => decQuantity(cart)}>
            <MinusCircleIcon width={28} height={28} />
          </BasketButton>
        )}
        <BasketButton work="remove" onClick={() => removeProduct(cart.id)}>
          <TrashIcon width={28} height={28} />
        </BasketButton>
      </div>
      <div className="pb-2 font-semibold text-green-600">${cart?.price}</div>
    </BasketHeader>
  );
}

export default Basket;
