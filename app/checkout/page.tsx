"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, useCartOperations } from "../hooks";
import { computeTotal } from "../utils/helpers";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  const { cartId, cart, setCartId, setCart } = useCart();
  const cartItems = cart?.lines?.edges;
  const total = computeTotal(cartItems);
  const { handleClickDelete, handleClickUpdateQuantity, handleClickEmptyCart } =
    useCartOperations();

  if (cartItems?.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Add products to cart to proceed with the order
              </p>
              <Button variant="outline" className="w-full  cursor-pointer">
                <Link href="/catalog"> Go to catalog</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                Cart ({cartItems?.length} product
                {`${cartItems?.length === 1 ? "" : "s"}`})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  {/*  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-md object-cover"
                  /> */}

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.node.merchandise.product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.node.quantity * item.node.merchandise.price.amount}{" "}
                      €
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleClickUpdateQuantity(item.node, false)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="w-8 text-center">
                        {item.node.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleClickUpdateQuantity(item.node, true)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <p className="font-semibold">€{total}</p>
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
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Order summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>€{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery fee</span>
                  <span>Gratis</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>€{total}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full cursor-pointer" size="lg">
                <Link href="/payment">Proceed with the order and payment</Link>
              </Button>
              <Button variant="outline" className="w-full cursor-pointer">
                <Link href="/catalog">Continue to shop</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
