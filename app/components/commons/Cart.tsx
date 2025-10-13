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
import { CartItem } from "@/app/utils/interfaces";
import { useCart } from "@/app/hooks";

export function Cart() {
  //placeholder
  const items: CartItem[] = [];
  const { cartId, cart, setCartId, setCart } = useCart();
  const cartItems = cart?.lines?.edges;
  cartItems && console.log(cartItems[0].node);
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
          {cartItems?.map((item) => (
            <div
              key={item.id}
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
                <p className="text-sm text-muted-foreground">
                  quantita : {item.node.quantity}
                </p>

                <div className="flex items-center space-x-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => console.log("update quantity")}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  {/* <span className="w-8 text-center">{item.quantity}</span> */}

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => console.log("decrease quantity")}
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
                  onClick={() => console.log("remove item")}
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

        <div className="flex justify-between text-lg font-semibold">
          <span>Totale:</span>
          <span>€{"compute total"}</span>
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
