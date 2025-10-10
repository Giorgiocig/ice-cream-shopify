"use client";
import { createContext, ReactNode, useState } from "react";
import { CartType } from "../utils/types";

type CartContextType = {
  cartId: string;
  setCartId: (id: string) => void;
  cart: CartType | null;
  setCart: (cart: CartType) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartType | null>(null);
  const [cartId, setCartId] = useState<string>("");

  return (
    <CartContext.Provider value={{ cartId, cart, setCartId, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
