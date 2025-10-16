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
import { useCart, useCartOperations } from "@/app/hooks";
import { computeTotal } from "@/app/utils/helpers";
import Link from "next/link";

export function Cart() {
  const { cartId, cart, setCartId, setCart } = useCart();
  const cartItems = cart?.lines?.edges;
  const total = computeTotal(cartItems);
  const { handleClickDelete, handleClickUpdateQuantity, handleClickEmptyCart } =
    useCartOperations();

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
          <Button
            className="w-full cursor-pointer"
            disabled={cartItems ? false : true}
          >
            <Link href="/checkout">Procedi al pagamento</Link>
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => cartItems && handleClickEmptyCart(cartItems)}
          >
            Svuota Carrello
          </Button>
        </SheetFooter>
      </div>
    </SheetContent>
  );
}
