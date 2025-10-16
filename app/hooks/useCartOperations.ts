import { useCart } from "./useCart";

export function useCartOperations() {
  const { cartId, cart, setCart } = useCart();

  const handleClickDelete = async (lineId: string) => {
    try {
      const res = await fetch("/api/cart/delete", {
        method: "POST",
        body: JSON.stringify({ cartId, lineIds: [lineId] }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw Error("Failed to Delete");
      const data = await res.json();
      setCart(data.body.data.cartLinesRemove.cart);
    } catch (error) {
      console.log("Error while deleting");
    }
  };

  const handleClickUpdateQuantity = async (
    line: Record<string, any>,
    increase: boolean = true
  ) => {
    const { id, quantity } = line;
    try {
      const res = await fetch("/api/cart/update", {
        method: "POST",
        body: JSON.stringify({
          cartId,
          lines: [{ id, quantity: increase ? quantity + 1 : quantity - 1 }],
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw Error("Failed to Update");
      const data = await res.json();
      setCart(data.body.data.cartLinesUpdate.cart);
    } catch (error) {
      console.log("Error while updating", error);
    }
  };

  const handleClickEmptyCart = async (cartItems: any[]) => {
    const cartItemIdArray = cartItems?.map(
      (item: Record<string, any>) => item.node.id
    );
    try {
      const res = await fetch("/api/cart/delete", {
        method: "POST",
        body: JSON.stringify({ cartId, lineIds: cartItemIdArray }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw Error("Failed to empty cart");
      const data = await res.json();
      setCart(data.body.data.cartLinesRemove.cart);
    } catch (error) {
      console.log("Error while emptying cart");
    }
  };

  return {
    handleClickDelete,
    handleClickUpdateQuantity,
    handleClickEmptyCart,
  };
}
