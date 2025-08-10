import { createContext, useEffect, useReducer, useState } from "react";

// 1) Define Context
const CartContext = createContext();

const stored = localStorage.getItem("cartItems");
const initalState = {
  items: stored ? JSON.parse(stored) : [], // cart items
};

// For update State take current state and return next updated state || cartReducer
function reducer(state = initalState, action) {
  switch (action.type) {
    case "cart/addProduct":
      return {
        ...state,
        items: action.payload,
      };

    case "cart/removeProduct":
      return {
        ...state,
        items: action.payload,
      };

    case "cart/increaseQuantityItem":
      return {
        ...state,
        items: action.payload,
      };
    case "cart/decreaseQuantityItem":
      return {
        ...state,
        items: action.payload,
      };
    case "cart/clearItems":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

// 2) Provider
export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);

  // Add Product function
  const addProduct = (payload) => {
    // if exists we need increas the quantity from this item.

    const cartItem = state.items.find((item) => item.id === payload.id);

    if (cartItem === undefined) {
      dispatch({
        type: "cart/addProduct",
        payload: [...state.items, { ...payload, quantity: 1 }],
      });
    } else {
      dispatch({
        type: "cart/addProduct",
        payload: state.items.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    }
  };

  // Remove Product function
  const removeProduct = (payload) => {
    const cartItems = state.items.filter((item) => item.id !== payload);

    dispatch({
      type: "cart/removeProduct",
      payload: cartItems,
    });

    // if (cartItem.quantity === 1) {
    //   dispatch({
    //     type: "cart/removeProduct",
    //     payload: state.items.filter((item) => item.id !== payload),
    //   });
    // } else {
    //   dispatch({
    //     type: "cart/removeProduct",
    //     payload: state.items.map((item) =>
    //       item.id === cartItem.id
    //         ? { ...item, quantity: cartItem.quantity - 1 }
    //         : item,
    //     ),
    //   });
    // }
  };

  // Increase Quantity function
  const incQuantity = (payload) => {
    dispatch({
      type: "cart/increaseQuantityItem",
      payload: state.items.map((item) =>
        item.id === payload.id
          ? { ...payload, quantity: payload.quantity + 1 }
          : item,
      ),
    });
  };

  // Decrase Quantity function
  const decQuantity = (payload) => {
    dispatch({
      type: "cart/decreaseQuantityItem",
      payload: state.items.map((item) =>
        item.id === payload.id
          ? {
              ...payload,
              quantity: payload.quantity > 1 ? payload.quantity - 1 : 1,
            }
          : item,
      ),
    });
  };

  // Clear function
  const clearBasket = () => {
    dispatch({
      type: "cart/clearItems",
    });
  };

  const totalPrice = state?.items?.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  // function getItems() {
  //   const stored = localStorage.getItem("cartItems");
  //   return stored ? JSON.parse(stored) : state.items;
  // }

  const contextValues = {
    items: state.items,
    addProduct,
    removeProduct,
    incQuantity,
    decQuantity,
    clearBasket,
    totalPrice,
    query,
    setQuery,
  };

  // value: Centerl place for state abouut entire wrapped children in Application
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
