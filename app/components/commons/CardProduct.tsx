import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardProductProps } from "@/app/utils/interfaces";
import { useCart } from "@/app/hooks";

export const CardProduct = ({ product }: CardProductProps) => {
  const { cartId, cart, setCartId, setCart } = useCart();

  const merchandiseId = product.variants.nodes[0].id;
  const lines = [{ merchandiseId, quantity: 1 }];
  const handleClick = () => {
    async function addItemToCart() {
      try {
        const res = await fetch("/api/cart/add", {
          method: "POST",
          body: JSON.stringify({ cartId, lines }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        const { cart, userErrors } = data.body.data.cartLinesAdd;
        if (userErrors.length === 0) setCart(cart);
        else {
          console.log("Errore aggiungendo al carrello:", userErrors);
          alert(userErrors[0].message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    addItemToCart();
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      {/* Image Section */}
      <div className="relative bg-gradient-to-br from-pink-100 via-orange-50 to-blue-100 p-8 flex items-center justify-center ">
        {/* <Image
          className="text-6xl group-hover:scale-110 transition-transform duration-300 h-[200px]"
          src={product.images.nodes[0].src}
          alt="image of the flavor"
          width={300}
          height={300}
        /> */}
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {product.title}
          </h3>
          <div className="text-right">
            <div className="text-xl font-bold text-gray-800">
              {product.priceRange.minVariantPrice.amount}EUR
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button onClick={handleClick}>CLICK TO ORDER</Button>
      </CardFooter>
    </Card>
  );
};
