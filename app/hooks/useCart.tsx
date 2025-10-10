import { useContext } from "react";
import { CartContext } from "../context";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("CartContext must be used within a Cart Provider");
  }
  return context;
}
