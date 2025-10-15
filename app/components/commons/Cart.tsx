"use client";
import { Minus, Plus, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/app/hooks";
import { computeTotal } from "@/app/utils/helpers";

export function Cart() {
  const { cartId, cart, setCartId, setCart } = useCart();
  const cartItems = cart?.lines?.edges;
  const total = computeTotal(cartItems);

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

  if (cartItems?.length === 0) {
    return (
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrello</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-muted-foreground">Il carrello è vuoto</p>
        </div>
      </SheetContent>
    );
  }
  return (
    <SheetContent className="flex flex-col">
      <SheetHeader>
        <SheetTitle>
          Carrello ({cartItems?.length} prodott
          {`${cartItems?.length === 1 ? "o" : "i"}`})
        </SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-auto">
        <div className="space-y-4">
          {cartItems?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 p-4 border rounded-lg"
            >
              {/* <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-md object-cover"
              /> */}

              <div className="flex-1">
                <h3 className="font-medium">
                  {item.node.merchandise.product.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.node.quantity * item.node.merchandise.price.amount} €
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleClickUpdateQuantity(item.node, false)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <span className="w-8 text-center">{item.node.quantity}</span>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleClickUpdateQuantity(item.node)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleClickDelete(item.node.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Separator />

        <div className="flex justify-between text-lg font-semibold px-4">
          <span>Totale:</span>
          <span>€ {total}</span>
        </div>

        <SheetFooter className="flex-col space-y-2">
          <Button className="w-full">Procedi al Checkout</Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => console.log("clear cart")}
          >
            Svuota Carrello
          </Button>
        </SheetFooter>
      </div>
    </SheetContent>
  );
}
