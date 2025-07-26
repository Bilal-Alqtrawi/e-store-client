import { useContext } from "react";
import { CartContext } from "./CartContext";

// 3) Consumer of CartContext
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("BasketContext was used outside of the BasketProvider");

  return context;
}
